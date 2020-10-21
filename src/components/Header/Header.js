import React from 'react'
import Icon from "./userIcon.png"
import './Header.css'



const Header = () =>{

    return(
        <div>
            <span className="container">
                <h1 className="title">AutoMechanic Finder</h1>
                <div>
                    <button className="nav">Become a Partner</button>
                    <button className="nav">Login</button>
                    <img className="navIcon" src={Icon} alt="userIcon"/>
                </div>
            </span>
        </div>
    )
}

export default Header;