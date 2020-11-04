import React, { useState } from "react";
import "./ClientList.css";
import avatar from "./linda.png";
import Axios from "axios";


const ClientList = ({mechanics, place, serviceAgents, filtered, user}) =>{
    const [message, setMessage] = useState('')
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
        Axios.post("http://localhost:8080/service/request",data)
            .then(async (res) =>{
                let msg = await res.data;
                if(msg.toLowerCase() === "ok")
                setMessage("Request Delivered to Agent Successfully!");
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
        }, 5000);
    }
    const requestAgent = (e) =>{
        // const id =e.currentTarget.getAttribute("id-mine");
        const index = e.currentTarget.getAttribute("myindex");
        // let date = new Date();
        let data ={
            agent_name: serviceAgents[index].company,
            agent_email: serviceAgents[index].email,
            agent_phone: serviceAgents[index].phone,
            client_name:user.name,
            client_email: user.email,
            client_phone: user.phone
        }
        Axios.post("http://localhost:8080/service/request",data)
            .then(async (res) =>{
                let msg = await res.data;
                if(msg.toLowerCase() === "ok")
                setMessage("Request Delivered to Agent Successfully!");
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
        }, 5000);
    }


    return (
        <div>
            <p style={{"color":"green","fontSize":"1.4em"}}>{message}</p>
             { place === ""?
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
    )
}

export default ClientList;

