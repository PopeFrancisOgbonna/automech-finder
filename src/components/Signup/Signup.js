import React from "react";
import Pics from "./Capture.PNG";
import "./Signup.css";


const Signup = () =>{

    return(
        <div>
            <div className="sign-container">
                <div className="sideImage">
                    <img src={Pics} alt="Mechanics"/>
                    <p>We build a better experience for car owners.</p>
                </div>
                <div className="regDiv">
                    <form>
                        <div className="topItems">
                            <h3>Create Account </h3>
                            <p><span className="loginLink">Login </span>instead?</p>
                        </div>
                        <div>
                            <label htmlFor="fullName">Full Name</label><br/>
                            <input className="regInput" name="fullName" type="text" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone No.</label><br/>
                            <input className="regInput" name="phone" type="text" />
                        </div>
                        <div>
                            <label htmlFor="mail">Email</label><br/>
                            <input className="regInput" name="mail" type="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br/>
                            <input className="regInput" name="password" type="password" />
                        </div>
                        <div>
                            <label htmlFor="confirm-password">Confirm Password</label><br/>
                            <input className="regInput" name="confirm-password" type="password" />
                        </div>

                        <button id="regBtn" type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;