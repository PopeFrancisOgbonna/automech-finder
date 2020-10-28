import React from "react";
import {Link} from "react-router-dom";
import logo from "./logo.jpeg"
import './PartnerLogin.css'


const PartnerLogin = () =>{
    
    return(
        <div>
            <form id="loginForm">
                <div className="formHeader">
                    <h2>Login</h2>
                    <img id="logLogo" src={logo} alt="autologo"/>
                    <p><Link className="span" to="/partner">Create account</Link> instead?</p>
                </div>
               
                <div className="userData">
                    <label htmlFor="userName">Username/Email</label> <br/>
                    <input name="userName" type="text"/>
                </div>
                <div className="userData">
                    <label htmlFor="userPassword">password</label> <br/>
                    <input name="userPassword" type="password"/>
                </div>
                <div className="toggle">
                    <Link className="partnerLogin" to="/login" >Not a Partner? Click Here</Link>
                    <p className="forgot"> Forgot password?</p>
                </div>
                <Link to="/partner/dashboard"> <button id="loginBtn" type="submit">Login</button></Link>
                
            </form>
        </div>
    )
}


export default PartnerLogin;