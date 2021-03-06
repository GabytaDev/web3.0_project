import "./TransactionCard.scss";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
   const giftUrl = useFetch({keyword});

    return (
        <div className="container">
            <div className="container-cards">
                <div className="card">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer" className="text-card">
                        <p>From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer" className="text-card">
                        <p>To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className="text-card">Amount: {amount} ETH</p>
                    {message &&
                    <>
                    <br />
                    <p className="text-card">Message: {message}</p>
                    </>
                    }
                    <img 
                    src={giftUrl || url}
                    alt="gift"
                    className="img-gift"
                    />
                    <div className="content-time">
                        <p className="text-time">{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard;
