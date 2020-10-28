import React from "react";
import {Link} from "react-router-dom";
import logo from "./logo.jpeg"
import './Login.css'


const Login = () =>{
    
    return(
        <div>
            <form id="loginForm">
                <div className="formHeader">
                    <h2>Login</h2>
                    <img id="logLogo" src={logo} alt="autologo"/>
                    <p><Link className="span" to="/register">Create account</Link> instead?</p>
                </div>
               
                <div className="userData">
                    <label htmlFor="userName">Username/Email</label> <br/>
                    <input className="userDataInput" name="userName" type="text"/>
                </div>
                <div className="userData">
                    <label htmlFor="userPassword">password</label> <br/>
                    <input className="userDataInput" name="userPassword" type="password"/>
                </div>
                <div className="toggle">
                    <Link className="partnerLogin" to="/partner/login" >Click to Login as a Partner</Link>
                    <p className="forgot"> Forgot password?</p>
                </div>
                <Link to="/dashboard"> <button id="loginBtn" type="submit">Login</button></Link>
                
            </form>
        </div>
    )
}


export default Login;