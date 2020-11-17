import React, { useState } from "react";
import {Link } from "react-router-dom";
import {useForm } from "react-hook-form";
import Axios from "axios";
import Pics from "./Capture.PNG";
import "./Signup.css";
import LoaderButton from "../LoaderButton/LoaderButton";



let message = "";
let sucessMsg = "";
const Signup = () =>{
    const {register, handleSubmit} = useForm();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('')
    const [loading, setLoading] = useState('false');


    const submit = (data) => {
        setLoading('true');
        if(data.fullName==="" || data.mail=== "" || data.password === "" || data.phone === ""){
            setLoading('false');
            message="Fill all Fields.";
            return
        }
        if(password === confirm){
            message="";
                return Axios.post("https://automech-server.herokuapp.com/clients", data)
                .then(async (res) =>{
                    const data = await res.data;
                    sucessMsg = `${data} Redirecting...`;
                    setTimeout(() => {
                        window.location.href="/login"
                    }, 3000);
                   
                })
                .catch((err)=>{
                    setLoading('false');
                    message = err + " Please try again.";
                    return 
                    
                })
        }else{
            message="Password do not Match.";
            setLoading('false')
        }
        
    };


    return(
        <div>
            <div className="sign-container">
                <div className="sideImage">
                    <img src={Pics} alt="Mechanics"/>
                    <p>We build a better experience for car owners.</p>
                </div>
                <div className="regDiv">
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="topItems">
                            <h3>Create Account </h3>
                            <p><Link to="/login" className="loginLink"><span >Login </span></Link>instead?</p>
                        </div>
                        <div>
                            <label htmlFor="fullName">Full Name</label><br/>
                            <input ref={register} className="regInput" name="fullName" type="text" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone No.</label><br/>
                            <input ref={register}  className="regInput" name="phone" type="text" />
                        </div>
                        <div>
                            <label htmlFor="mail">Email</label><br/>
                            <input ref={register}  className="regInput" name="mail" type="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br/>
                            <input ref={register}  className="regInput" name="password" type="password" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password">Confirm Password</label><br/>
                            <input ref={register}  className="regInput" name="confirm-password" type="password" 
                                onChange={ (e) =>setConfirm(e.target.value)}
                            />
                        </div>
                        {loading ==='true'?<LoaderButton/>:<button id="regBtn" type="submit">Create Account</button>}
                        { message !== ""?<p style={{"color":"red"}}>{message}</p>: <p style={{"color":"green"}}>{sucessMsg}</p> }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;