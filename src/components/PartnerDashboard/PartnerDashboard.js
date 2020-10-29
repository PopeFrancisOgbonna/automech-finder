import React from "react";
import "./PartnerDashboard.css";


const PartnerDashboard = ({customers}) =>{

    let renderTable = () =>{
        
        return customers.map((customer, index)=>{
            const {id, name, phone,date, status,remark} = customer;
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{date}</td>
                    <td>{status}</td>
                    <td>{remark===""? <div className="partnerDecision">
                    <p id="acc">accept</p> <p id="rej">reject</p>
                    </div>: remark}</td>
                </tr>
            )
        })
    }
    let tableHeader = () =>{
        let header = Object.keys(customers[1]);
        return header.map((key, index) =>{
            return <th key={index}>{key.toUpperCase()}</th>
        });
    }

    return(
        <div>
            <table id='customersTable'>
                <tbody>
                    <tr>{tableHeader()}</tr>
                    {renderTable()}
                </tbody>
            </table>
        </div>
    )
}

export default PartnerDashboard;