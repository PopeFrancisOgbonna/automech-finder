import React, { useState } from "react"
import "./PopUp.css";
import Ok from "./ok.png";
import Info from './info.png';
import Cancel from "./cancel.png";
import Linda from "./linda.png";




const AcceptPopUp = ({company, check}) =>{

    const [PopShows, setShow] = useState('')

    return (
        <div className={PopShows ===""? "popOuter": "hide"}>
            <div className="popContents">
                <img src={Ok} alt="ok"/>
                <p><img src={Linda} alt="linda"/> <span className="agentCompany">{company}</span>  will be with you in a moment. Please wait!</p>
            </div>
            <button className="PopUps" onClick={() =>{setShow('on'); check('')}}>Close</button>
        </div>
    )
};

const RejectPopUp = ({company, check}) =>{
    const [PopShows, setShow] = useState('')

    return (
        <div className={PopShows ===""? "popOuter": "hide"}>
            <div className="popContents">
                <img src={Cancel} alt="ok"/>
                <p><img src={Linda} alt="linda"/> <span className="agentCompany">{company}</span> is Busy at the moment, Please contact another Service Agent.</p>
            </div>
            <button className="PopUps" onClick={() =>{setShow('on');check('')}}>Close</button>
        </div>
    )
};

const InfoPopUp = ({company, check}) =>{

    const [PopShows, setShow] = useState('')
    return (
        <div className={PopShows ===""? "popOuter": "hide"}>
            <div className="popContents">
                <img src={Info} alt="ok"/>
                <p><img src={Linda} alt="linda"/> <span className="agentCompany">{company}</span> is unavailable at the moment. Kindly choose another Agent!</p>
            </div>
            <button className="PopUps" onClick={() =>{setShow('on'); check('')}}>Close</button>
        </div>
    )
}

export  {AcceptPopUp, InfoPopUp, RejectPopUp};
