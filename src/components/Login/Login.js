import React from "react";
import {Link, Redirect} from "react-router-dom";
import logo from "./logo.jpeg"
import './Login.css'


class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            fields: {},
            errors: {}
        }
    }
    
    handleChange =(e)=>{
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields})
    }

    submitForm = (e) =>{
        e.preventDefault();
        if(this.validateForm()){
            let fields = {};
            console.log(this.state.fields)
            fields["userName"] = "";
            fields["userPassword"] = "";
            this.setState({fields: fields});
            alert("Login was Successful!");
            window.location.href="/dashboard"
        }
    }

    validateForm = () =>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["userName"]){
            formIsValid = false;
            errors["userName"] = "Please Enter a valid Email address.";
        }
        if(typeof fields["userName"] !=="undefined"){
            if(!fields["userName"].includes("@")){
                formIsValid = false;
                errors["userName"] = "Invalid Email Address."
            }
        }
        //password validation
        if(!fields["userPassword"]){
            formIsValid = false;
            errors["userPassword"] = "Please Enter Password";
        }
        if(typeof fields["userPassword"] !=="undefined"){
            if(fields["userPassword"].length < 4){
                formIsValid = false;
                errors["userPassword"] = "Password too short."
            }
        }

        this.setState({
            errors: errors
        })
        return formIsValid;
    }
    render(){
        return(
            <div>
                <form id="loginForm" method="post" onSubmit={this.submitForm}>
                    <div className="formHeader">
                        <h2>Login</h2>
                        <img id="logLogo" src={logo} alt="autologo"/>
                        <p><Link className="span" to="/register">Create account</Link> instead?</p>
                    </div>
                   
                    <div className="userData">
                        <label htmlFor="userName">Username/Email</label> <br/>
                        <input className="userDataInput" value={this.state.fields.userName || ""} onChange={this.handleChange} name="userName" type="text"/>
                        <p className="errorMsg">{this.state.errors.userName}</p>
                    </div>
                    <div className="userData">
                        <label htmlFor="userPassword">password</label> <br/>
                        <input className="userDataInput" value={this.state.fields.userPassword || ""} onChange={this.handleChange} name="userPassword" type="password"/>
                        <p className="errorMsg">{this.state.errors.userPassword}</p>
                    </div>
                    <div className="toggle">
                        <Link className="partnerLogin" to="/partner/login" >Click to Login as a Partner</Link>
                        <p className="forgot"> Forgot password?</p>
                    </div>
                   <button id="loginBtn" type="submit">Login</button>
                    
                </form>
            </div>
        )
    }
}


export default Login;