import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

//obtener contrato ethereum
const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    
    return transactionContract;
    // console.log({
    //     provider,
    //     signer,
    //     transactionContract
    // })
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({addresTo:"", amount:"", keyword:"", message:""})
    const [isLoading, setIsLoading]= useState(false);
    //guardo el estado de transactionCount en el local storage
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState ([])

    const handleChange = (e, name)=> {
        setFormData((prevState)=>({...prevState, [name]: e.target.value}));
    }

    const getAllTransactions = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask")
            const transactionContract = getEthereumContract();
         //transaciones disponibles   
            const availableTransactions = await transactionContract.getAllTransactions();
            console.log(availableTransactions)
            
            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
              }));
            console.log(structuredTransactions);
            setTransactions(structuredTransactions);

        } catch (error) {
           console.log(error) 
        }
    }
    
    const checkIfWalletIsconected = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask")
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                getAllTransactions();
            }
            else {
                console.log("No accounts found")
            }
            console.log(accounts);

        } catch (error) {
            console.log(error)
            throw new Error("no ethereum objet");
        }
    }
    //chequea si la transaccion existe
    const checkIfTransactionsExists = async ()=> {
        try {
            const transactionContract = getEthereumContract();
            const currentTransactionCount = await transactionContract.getTransactionCount();
                                                               
            window.localStorage.setItem('transactionCount',currentTransactionCount )
        } catch (error) {
            console.log(error)
            throw new Error("no ethereum objet"); 
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask");
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
            throw new Error("no ethereum objet");
        }
    }

    const sendTransaction = async ()=> {
        try {
            if (!ethereum) return alert("Please install Metamask"); 
            const {addressTo, amount, keyword, message} = formData;
            const transactionContract = getEthereumContract();
            //analiza la cantidad decimal en cantidad hexadecimal del monto que le pase
            //se pasa al value
            const parsedAmount = ethers.utils.parseEther(amount)

            //enviar de una cuenta a otra
            await ethereum.request({
                method: "eth_sendTransaction",
                params:[{
                    from:currentAccount,
                    to: addressTo,
                    //gas valor exadecimal: convertido gwei 21000
                    gas:'0x5208',
                    //amount: 0.00001
                    value: parsedAmount._hex,

                }]
            });

            //guardar en la blockchain
            
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.await();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);
            const transactionCount = await transactionContract.getTransactionCount()
            //paso el estado de la transaccion a numero
            setTransactionCount(transactionCount.toNumber());

            window.location.reload();
             
        } catch (error) {
            console.log(error)
            throw new Error("no ethereum objet");
        }
    }

    useEffect(() => {
        checkIfWalletIsconected();
        checkIfTransactionsExists();
    }, [transactionCount]);

    return (
        <TransactionContext.Provider value={{ 
            transactionCount,
            connectWallet , 
            currentAccount, 
            formData, 
            handleChange, 
            sendTransaction, 
            transactions, 
            isLoading}}>

            {children}
        </TransactionContext.Provider>
    )
}