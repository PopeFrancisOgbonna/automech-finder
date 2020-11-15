import React from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import logo from "./logo.jpeg";
import './Login.css'

class Login extends React.Component{
    constructor(props){
        super()
        this.state = {
            fields: {},
            errors: {},
            msg: ''
        }
    }
    
    handleMsg =(message)=>{
        this.setState({msg:message})
    }
    handleChange =(e)=>{
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields})
    }

    submitForm = (e) =>{
        e.preventDefault();
        if(this.validateForm()){
            const data = this.state.fields;
            let fields = {};
            console.log(this.state.fields)
            fields["userName"] = "";
            fields["userPassword"] = "";
            this.handleMsg("Loading...")
            this.setState({fields: fields});
            return Axios.post("https://automech-server.herokuapp.com/clients/login", data)
                .then(async (res) =>{
                    if(res.status === 200){
                        const user = await res.data[0];
                        localStorage.setItem("userName", user.name);
                        localStorage.setItem("email", user.email);
                        localStorage.setItem("phone",user.phone);
                        localStorage.setItem("isClient",true);
                        console.log(user);
                        this.handleMsg("Login Successful. Redirecting...")
                        setTimeout(() => {
                         window.location.href="/dashboard"
                        }, 4000);
                    }else{
                        window.alert("Invalid Email and Password.");
                        this.handleMsg('')
                    }
                    // 
                })
                .catch((err) =>{
                    this.handleMsg("");
                    window.alert(err);
                });
           
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
        // const {handleClient} = this.props;
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
                        <Link className="partnerLogin" to="/partner/login" >Click to Login as a Mechanic</Link>
                        <p className="forgot"> Forgot password?</p>
                    </div>
                   <button id="loginBtn" type="submit">Login</button>
                    <p style={{"color":"green"}}>{this.state.msg}</p>
                </form>
            </div>
        )
    }
}


export default Login;