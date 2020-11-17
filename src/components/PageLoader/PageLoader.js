import React from 'react';
import logo from './logo.jpeg';
import './PageLoader.css';


const PageLoader = () =>{

    return(
        <div className="pageloader-container">
            <img className="page-loader-logo" src={logo} alt="logo"/>
            <h4>AutoMechanic Finder</h4>
        </div>
    )
}
export default PageLoader;