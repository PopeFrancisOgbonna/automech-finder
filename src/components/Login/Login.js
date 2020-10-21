import React from "react"
import logo from "./logo.jpeg"
import './Login.css'


const Login = () =>{
    
    return(
        <div>
            <form id="loginForm">
                <div className="formHeader">
                    <h2>Login</h2>
                    <img id="logLogo" src={logo} alt="autologo"/>
                    <p><span>Create account </span>instead?</p>
                </div>

                <div className="userData">
                    <label htmlFor="userName">Username/Email</label> <br/>
                    <input name="userName" type="text"/>
                </div>
                <div className="userData">
                    <label htmlFor="userPassword">password</label> <br/>
                    <input name="userPassword" type="password"/>
                </div>
                <p className="forgot">
                    Forgot password?
                </p>
                <button id="loginBtn" type="submit">Login</button>
            </form>
        </div>
    )
}


export default Login;