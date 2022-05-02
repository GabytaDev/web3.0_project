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
    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({addresTo:"", amount:"", keyword:"", message:""})

    const handleChange = (e, name)=> {
        setFormData((prevState)=>({...prevState, [name]: e.target.value}));
    }

    const checkIfWalletIscponected = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask")
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                setCurrentAccount(accounts[0])
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
        } catch (error) {
            console.log(error)
            throw new Error("no ethereum objet");
        }
    }

    useEffect(() => {
        checkIfWalletIscponected();
    }, [])

    return (
        <TransactionContext.Provider value={{ connectWallet , currentAccount, formData, setFormData, handleChange, sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}