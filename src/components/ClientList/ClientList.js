import React from "react";

const ClientList = ({mechanics, place, serviceAgents, filtered}) =>{

    const request = () =>{
        alert("Request Sent Successfully. You'll recieve a response soon!");
    }

    return (
        <div>
             { place === ""?
                mechanics.map((mechanic) =><div key={mechanic.id} className="client-wrap">
                <p>Name: {mechanic.name}</p>
                <p>specialty: {mechanic.specialty}</p>
                <p>Phone No. {mechanic.phone}</p>
                <p>Email: {mechanic.email}</p>
                <p>Address: {mechanic.address}</p>
                <button id="client-serviceBtn" onClick={request}>Request Services</button>
                </div>)
                //  
                :
                   serviceAgents.map((mechanic) =><div key={mechanic.id} className="client-wrap">
                   <p>Name: {mechanic.name}</p>
                   <p>specialty: {mechanic.specialty}</p>
                   <p>Phone No. {mechanic.phone}</p>
                   <p>Email: {mechanic.email}</p>
                   <p>Address: {mechanic.address}</p>
                   <button id="client-serviceBtn" onClick={request}>Request Services</button>
                   </div>)
                
            }
        </div>
    )
}

export default ClientList;

