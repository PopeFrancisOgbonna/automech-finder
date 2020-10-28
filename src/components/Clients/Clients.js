import React from "react"
import "./Clients.css";


const Clients = () =>{
    const mechanics =[
        {id: 1,name:"xpress Mechanics", specialty:"honda",phone:"07031620729",email:"xpressmechanic@gmail.com",address:"ugwueke street",city:"abakpa"},
        {id: 2,name:"Emma Ventures", specialty:"toyota",phone:"07031620729",email:"emmaventures@gmail.com",address:"ogui juction",city:"Obiagu"},
        {id: 3,name:"Enugu automobile", specialty:"general",phone:"07031620729",email:"xpressmechanic@gmail.com",address:"ugwueke street",city:"abakpa"},
        {id: 4,name:"xpress Mechanics", specialty:"honda",phone:"07031620729",email:"xpressmechanic@gmail.com",address:"ugwueke street",city:"abakpa"}
    ]
    return (
        <div>
            <div className="search-container">
                <input className="searchInput" type="text" placeholder="Enter City"/>
                <button id="filterBtn">Search</button>
            </div>
            {
                mechanics.map((mechanic,id) =><div className="client-wrap">
                    <p>Name: {mechanic.name}</p>
                    <p>specialty: {mechanic.specialty}</p>
                    <p>Phone No. {mechanic.phone}</p>
                    <p>Email: {mechanic.email}</p>
                    <p>Address: {mechanic.address}</p>
                    <button id="client-serviceBtn">Request Services</button>
                </div>)
            }
        </div>
    )
}
export default Clients;