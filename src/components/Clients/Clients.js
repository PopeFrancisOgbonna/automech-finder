import React from "react";
import ClientList from "../ClientList/ClientList";
import "./Clients.css";


const Clients = ({bookHandle, place, placeHandle, mech,user, handleFilter, filtered,clearPlace}) =>{
    const mechanics =mech;
    

     var serviceAgents = mechanics.filter(function (mech){
        return mech.city.toLowerCase() === place.toLowerCase()
    });
    
   
    return (
        <div className="client-main-wrap">
            {place ===""? <h3>Our Service agents and their various locations</h3>: <h3>Our Service agents located at {place.toLowerCase()}</h3>}
            <div className="search-container">
                <input className="searchInput" onChange={placeHandle()} type="text" placeholder="Enter City"/>
                <button id="filterBtn" onClick={handleFilter()} >Search</button>
            </div>
            <p>Enter City to filter your search</p>
            <ClientList mechanics={mechanics} user={user}  place={place} filtered={filtered} serviceAgents={serviceAgents}/>
            <button className="backtobook" onClick={()=>{bookHandle("book"); handleFilter(); clearPlace()} }>Back</button>
        </div>
    )
}
export default Clients;