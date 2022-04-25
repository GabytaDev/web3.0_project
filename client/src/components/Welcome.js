import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {Loader} from "./Loader";
import "./Welcome.scss";

const Welcome = ()=>{
    return (
        <div className="content-welcome">
            <div className="content-inner"> 
                <div className="content-title">
                    <h1 className="title-welcome">Send Crypto <br/> across the world</h1>
                    <p className="subtitle-welcome">Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;