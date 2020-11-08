import React from 'react';
import {Link } from "react-router-dom";
import Icon from "./userIcon.png";
import home from "./home.png";
import './Header.css'



const Header = () =>{

    return(
        <div>
            <span className="header-container">
                <h1 className="titles">AutoMechanic Finder </h1>
                <div>
                    <Link className="back" to="/"><img src={home} alt="home"/></Link>
                    <Link to="/partner" className="navs">Mechanic Registration</Link>
                    <Link to="/login" className="navs"> Login</Link>
                    {localStorage.loggedin === true?<img className="navIcons" src={Icon} alt="userIcon"/>: null}
                </div>
            </span>
        </div>
    )
}

export default Header;