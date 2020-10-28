import React from "react";
import "./SignUpPage.css";
import Signup from "../../components/Signup/Signup";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



const SignUpPage = () =>{

    return (
        <div>
            <Header/>
            <Signup/>
            <Footer/>
        </div>
    )
}

export default SignUpPage;