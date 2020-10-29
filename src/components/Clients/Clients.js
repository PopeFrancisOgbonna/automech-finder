import React from "react";
import ClientList from "../ClientList/ClientList";
import "./Clients.css";


const Clients = ({bookHandle, place, placeHandle, handleFilter, filtered}) =>{
    const mechanics =[
        {id: 1,name:"xpress Mechanics", specialty:"honda",phone:"07031620729",email:"xpressmechanic@gmail.com",address:"ugwueke street",city:"abakpa"},
        {id: 2,name:"Emma Ventures", specialty:"toyota",phone:"07031620729",email:"emmaventures@gmail.com",address:"ogui juction",city:"Obiagu"},
        {id: 3,name:"Enugu automobile", specialty:"general",phone:"07031620729",email:"xpressmechanic@gmail.com",address:"ugwueke street",city:"abakpa"},
        {id: 4,name:"xpress Mechanics", specialty:"honda",phone:"07031620729",email:"xpressmechanic@gmail.com",address:"ugwueke street",city:"abakpa"}
    ];

     var serviceAgents = mechanics.filter(function (mech){
        return mech.city.toLowerCase() === place.toLowerCase()
    });
    
    
   
    return (
        <div>
            <h3>Our Service agents located at {place.toLowerCase()}</h3>
            <div className="search-container">
                <input className="searchInput" onChange={placeHandle()} type="text" placeholder="Enter City"/>
                <button id="filterBtn" onClick={handleFilter()} >Search</button>
            </div>
            <ClientList mechanics={mechanics} place={place} filtered={filtered} serviceAgents={serviceAgents}/>
            <button onClick={()=>{bookHandle("book"); handleFilter()} }>Back</button>
        </div>
    )
}
export default Clients;