import React from "react";
import error404 from "./oops.png";
import {Link} from "react-router-dom";
import "./NotFound.css";



const NotFound = () =>{

    return (
        <div className="errorWrap">
             <h1 className="header">AutoMechanic Finder</h1>
            <img className="errorImg" src={error404} alt="error"/>
            <p className="msg">Sorry Page Not Found!</p>
            <Link to="/"><button className="home">Return to Home Page</button></Link>
        </div>
    )
}

export default NotFound;