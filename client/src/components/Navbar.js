import React from "react";
import { useState } from "react";
import {HiMenuAlt4} from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png";

const NavBarItem = ({title, classprops})=> (
    <li className={`navbarItem ${classprops}`}>{title}</li>
);


const Navbar = ()=>{
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className="content-navbar">
            <div className="content-logo">
            <img src={logo} alt="logo" className="logo"></img>
            </div>
            <ul className="items">
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                <NavBarItem key={item + index} title={item} />
            ))}
            <li className="login-style">Login</li>
            </ul>
            <div className="content-mobile-menu">
              {toggleMenu  
              ? <HiMenuAlt4 className="icons-menu-mobile" onClick={()=> setToggleMenu(false)}/>
              : <AiOutlineClose className="icons-menu-mobile"onClick={()=> setToggleMenu(true)}/>}
              {toggleMenu && (
                  <ul>
                    <li className="navbar-item-menu">
                    <AiOutlineClose onClick={()=> setToggleMenu(false)}/>
                    </li>
                    {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} classprops="item-menu-mobile"/>
                    ))}
                  </ul>
              )}  
            </div>
        </nav>
    )
}

export default Navbar;