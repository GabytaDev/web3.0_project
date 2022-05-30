import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionsContext";
import dummyData from "../utils/dummyData";
import "./Transactions.scss";
import TransactionCard from "./TransactionCard";

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext)

    return (
        <div className="content-text-transactions">
                {currentAccount ? (<h3 className="text-title">Lasted transactions</h3>
                ) :
                    (<h3 className="text-title">Connect your account to see the latest transactions</h3>)
                }
                <div className="container-transaction-card"> 
                
                    {[...dummyData, ...transactions].reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div> 
        </div>
    )
}

export default Transactions;