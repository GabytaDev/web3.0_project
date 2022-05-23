import logo from "../images/logo.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="container">
            <div className="container-logo">
                <img src={logo} alt="logo" className="logo-footer"></img>
            </div>
            <div className="container-text">
                <p className="title-footer">Market</p>
                <p className="title-footer">Exchange</p>
                <p className="title-footer">Tutorials</p>
                <p className="title-footer">Wallets</p>
            </div>
            <div className="container-info-footer">
                <p className="text-info-footer">Come join us and hear for the unexpected miracle</p>
                <p className="text-info-footer">info@yourbussiness.com</p>
            </div>
            <div className="line" />
            <div className="content-credits">
                <p className="text">@kryptomastery2022</p>
                <p className="text">All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer;