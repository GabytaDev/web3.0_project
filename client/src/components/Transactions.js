import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionsContext";
import dummyData from "../utils/dummyData";
import "./Transactions.scss";
import { shortenAddress } from "../utils/shortenAddress";
import TransactionCard from "./TransactionCard";

const Transactions = () => {
    const { currentAccount } = useContext(TransactionContext)

    return (
        <div className="content-text-transactions">
                {currentAccount ? (<h3 className="text-title">Lasted transactions</h3>
                ) :
                    (<h3 className="text-title">Connect your account to see the latest transactions</h3>)
                }
                <div className="container-transaction-card"> 
                    {dummyData.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div> 
        </div>
    )
}

export default Transactions;