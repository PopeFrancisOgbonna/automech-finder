import React from "react";
import {Link} from "react-router-dom";
import logo from "./logo.jpeg";
import {useForm} from 'react-hook-form';
import Axios from 'axios';
import './PartnerLogin.css'

let message = "";
let sucessMsg = "";
const PartnerLogin = () =>{
    const {register, handleSubmit } = useForm();

    const submit = (data) =>{
        return Axios.post("https://automech-server.herokuapp.com/partners/login", data)
            .then(async (res) =>{
                if(res.status === 200){
                    let partner = res.data[0];
                    message = "";
                    sucessMsg ="Login successful. Redirecting...";
                    localStorage.setItem("partnerName",partner.name);
                    localStorage.setItem("partnerCompany",partner.company);
                    localStorage.setItem("partnerPhone", partner.phone);
                    localStorage.setItem("partnerEmail", partner.email);
                    localStorage.setItem("isMechanic",true);
                    setTimeout(() => {
                        window.location.href="/partner/dashboard"
                    }, 3000);
                }else{
                    message = res.data;
                }
            })
            .catch((err) =>{
                message = `${err}`;
            })
    }
    return(
        <div>
            <form id="loginForm" onSubmit={handleSubmit(submit)}>
                <div className="formHeader">
                    <h2>Mechanics Login</h2>
                    <img id="logLogo" src={logo} alt="autologo"/>
                    <p><Link className="span" to="/partner">Create account</Link> instead?</p>
                </div>
               
                <div className="userData">
                    <label htmlFor="userName">Username/Email</label> <br/>
                    <input ref={register} name="userName" type="text" required/>
                </div>
                <div className="userData">
                    <label htmlFor="userPassword">password</label> <br/>
                    <input ref={register} name="userPassword" type="password" required/>
                </div>
                <div className="toggle">
                    <Link className="partnerLogin" to="/login" >Not a Mechanic? Click Here</Link>
                    <p className="forgot"> Forgot password?</p>
                </div>
                <div>
                    <button id="loginBtn" type="submit">Login</button>
                    {message !== ""? <p style={{"color":"red"}}>{message}</p>: <p style={{"color":"green"}}>{sucessMsg}</p>}
                </div>
            </form>
        </div>
    )
}


export default PartnerLogin;