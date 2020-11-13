import React, { useState } from "react";
import "./ClientList.css";
import avatar from "./linda.png";
import Axios from "axios";
// import {InfoPopUp, RejectPopUp, AcceptPopUp} from "../../components/PopUp/PopUp";


const ClientList = ({mechanics, place, serviceAgents,check,setName, filtered, user}) =>{
    const [message, setMessage] = useState('');
    const [popComp, setPopComp] = useState('accepted');

    //function to send request from unfiltered List
    const request = (e) =>{
        setMessage("")
        // const id =e.currentTarget.getAttribute("id-mine");
        const index = e.currentTarget.getAttribute("myindex")
        let data ={
            agent_name: mechanics[index].company,
            agent_email:mechanics[index].email,
            agent_phone:mechanics[index].phone,
            client_name:user.name,
            client_email: user.email,
            client_phone: user.phone
        }
        setName(mechanics[index].company);

        Axios.post("https://automech-server.herokuapp.com/service/request",data)
            .then(async (res) =>{
                let id = await res.data[0].id;
                console.log(id);
                if(id > 0 ){
                    setMessage("Request Delivered to Agent Successfully!");
                    setTimeout(() => {
                        console.log(id);
                        console.log('before ' +popComp)
                        Axios.get("https://automech-server.herokuapp.com/service/requests/"+ id)
                            .then(async (res) =>{
                                let data1 = await res.data[0].remark;
                                // if(data1){
                                    if(data1.toLowerCase() ===""){
                                    
                                        // alert(data.agent_name +" unavailable at the");
                                        // console.log( "afeter "+ popComp);
                                        check('unavailable')
                                    }else if (data1.toLowerCase() ==="accepted"){
                                        setPopComp(data1.toLowerCase())
                                        // alert(`${data.agent_name} will be with you in a moment. Please wait!`)
                                        check("accepted");
                                    }else if(data1.toLowerCase() ==="rejected"){
                                        setPopComp(data1.toLowerCase())
                                        // alert(`Request Declined. Please choose another Agent`)
                                        check("rejected");
                                    }
                                // }
                            })
                            .catch((err) =>{
                                console.log(err)
                            })
                            
                    }, 20000);
                }
            })
            .catch((err) =>{
                console.log(err);
                if(err){
                    return setMessage("Request failed. Try again later!")
                }
                setMessage('');
            });
        console.log(data);
        alert(`Request Sent Successfully to ${data.agent_name}. You'll recieve a response soon!`);
        setTimeout(() => {
            setMessage('')
        },5000);
    }

    //Funtion to send request form filtered List
    const requestAgent = (e) =>{
        const index = e.currentTarget.getAttribute("myindex");
        
        let data ={
            agent_name: serviceAgents[index].company,
            agent_email: serviceAgents[index].email,
            agent_phone: serviceAgents[index].phone,
            client_name:user.name,
            client_email: user.email,
            client_phone: user.phone
        }
        
        Axios.post("https://automech-server.herokuapp.com/service/request",data)
            .then(async (res) =>{
                let id = await res.data[0].id;
                console.log(id);
                if(id > 0 ){
                    setMessage("Request Delivered to Agent Successfully!");
                    setTimeout(() => {
                        console.log(id);
                        Axios.get("https://automech-server.herokuapp.com/service/requests/"+ id)
                            .then(async (res) =>{
                                let data1 = res.data[0].remark;
                                if(data1.toLowerCase() ===""){
                                    
                                    // alert(data.agent_name +" unavailable at the");
                                    console.log( "afeter "+ popComp);
                                    check('unavailable')
                                }else if (data1.toLowerCase() ==="accepted"){
                                    setPopComp(data1.toLowerCase())
                                    // alert(`${data.agent_name} will be with you in a moment. Please wait!`)
                                    check("accepted");
                                }else if(data1.toLowerCase() ==="rejected"){
                                    setPopComp(data1.toLowerCase())
                                    // alert(`Request Declined. Please choose another Agent`)
                                    check("rejected");
                                }
                            })
                            .catch((err) =>{
                                console.log(err)
                            })
                            
                    }, 20000);
                }
            })
            .catch((err) =>{
                console.log(err);
                if(err){
                    return setMessage("Request failed. Try again later!")
                }
                setMessage('');
            });
        console.log(data);
        alert(`Request Sent Successfully to ${data.agent_name}. You'll recieve a response soon!`);
        setTimeout(() => {
            setMessage('')
        },5000);
        
    }

    

    return (
        <div>
            {mechanics.lenght < 1?<p style={{"color":"red"}}>Sorry our Service agents are currently unavailable.</p>:
                <div>
                    <p style={{"color":"green","fontSize":"1.4em"}}>{message}</p>
                    { place.toLowerCase() === "all" || place.toLowerCase() ===""?
                        mechanics.map((mechanic,index) =><div  key={mechanic.id} className="client-wrap">
                            <p><span className="mechLabel">Name:</span> {mechanic.company}</p>
                            <p><span className="mechLabel">specialty:</span> {mechanic.specialty}</p>
                            <p id-mine={mechanic.phone}><span className="mechLabel">Phone No.</span> {mechanic.phone}</p>
                            <p><span className="mechLabel">Email:</span> {mechanic.email}</p>
                            <p><span className="mechLabel">Address:</span> {mechanic.office_address}</p>
                            <p><span className="mechLabel">City:</span> {mechanic.city}</p>
                            <button id-mine={mechanic.id} myindex={index} id="client-serviceBtn" onClick={request}>Request Services</button>
                        </div>)
                        //  
                        :
                        serviceAgents.length ?
                        serviceAgents.map((mechanic, index) =><div key={mechanic.id} className="client-wrap">
                            <p><span className="mechLabel">Name:</span> {mechanic.company}</p>
                            <p><span className="mechLabel">specialty:</span> {mechanic.specialty}</p>
                            <p><span className="mechLabel">Phone No.</span> {mechanic.phone}</p>
                            <p><span className="mechLabel">Email:</span> {mechanic.email}</p>
                            <p><span className="mechLabel">Address:</span> {mechanic.office_address}</p>
                            <p><span className="mechLabel">City:</span> {mechanic.city}</p>
                            <button id-mine={mechanic.id} myindex={index} id="client-serviceBtn" onClick={requestAgent}>Request Services</button>
                        </div>):
                        <p><img src={avatar} alt="avatar"/>Oops! Sorry we've No Service Agent at this location at the moment.</p>
                        
                    }
                </div>
            }
           
        </div>
    )
}

export default ClientList;

