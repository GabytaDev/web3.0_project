import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader"
import "./Welcome.scss";

const Input = ({placeholder, name, type, value, handleChange })=> (
    <input
        placeholder={placeholder}
        name = {name}
        type = {type}
        step = "0.0001"
        value = {value}
        onChange = {(e)=>{handleChange(e,name)}}
        className = "class-input-form"
    />
);

const Welcome = () => {
    const connectWallet = () => {

    }

    const handleSubmit = ()=>{
        
    }
    return (
        <div className="content-welcome">
            <div className="content-inner">
                <div className="content-title">
                    <h1 className="title-welcome">Send Crypto <br /> across the world</h1>
                    <p className="subtitle-welcome">Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
                    <button type="button" onClick={connectWallet}
                        className="button-conect-wallet">
                        <p className="text-button-conect">Connect Wallet</p>
                    </button>
                    <div className="content-grid">
                        <div >Reliability</div>
                        <div >Security</div>
                        <div>Ethereum</div>
                        <div>Web 3.0</div>
                        <div>Low Fees</div>
                        <div>Blockchain</div>
                    </div>
                </div>
            </div>

            <div className="content-inner-right">
                <div className="content-card">
                    <div className="content-inner-card">
                        <div className="content-item">
                            <div className="content-icon">
                                <SiEthereum className="icon-ethereum" />
                            </div>
                            <BsInfoCircle className="icon-info"/>
                        </div>
                        <div>
                            <p className="address-card">Address</p>
                            <p className="text-card">Etehereum</p>
                        </div>
                    </div>
                </div>

                <div className="content-form">
                    <Input placeholder="Address To" name="addressTo" type="text" handleChange={()=>{}}/>
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={()=>{}}/>
                    <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={()=>{}}/>
                    <Input placeholder="Enter Message" name="message" type="text" handleChange={()=>{}}/>
                    <div className="divider-line"></div>
                    {false 
                    ?
                    <Loader/>
                    : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="button-send"
                        >
                          Send now
                        </button>
                      )}
                </div>
            </div>

        </div>
    )
}

export default Welcome;