import React from 'react';
import {Link } from "react-router-dom";
import Icon from "./userIcon.png";
import home from "./home.png";
import './Header.css'



const Header = () =>{

    return(
        <div>
            <span className="container">
                <h1 className="title">AutoMechanic Finder </h1>
                <div>
                    <Link className="back" to="/"><img src={home} alt="home"/></Link>
                    <Link to="/partner" className="nav">Become a Partner</Link>
                    <Link to="/login" className="nav"> Login</Link>
                    <img className="navIcon" src={Icon} alt="userIcon"/>
                </div>
            </span>
        </div>
    )
}

export default Header;