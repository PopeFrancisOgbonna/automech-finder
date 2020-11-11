import React, { useState } from "react";
import Axios from "axios";
import "./PartnerDashboard.css";


const PartnerDashboard = ({customers, loadCustomerTable}) =>{
    const [msg, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [id, setId] = useState('');
    
    //updates the remark 
    const confirmDelivery = () =>{
        Axios.put("https://automech-server.herokuapp.com/service/requests/done/"+id)
            .then(async (res) =>{
                const updated = await res.data;
                if(updated > 0){
                    setMsg("Service Delivery Confirmed.");
                    setErrorMsg("");
                    return
                }
            })
            .catch((err) =>{
                console.log(err);
                setMsg("")
            });
    }
    const acceptRequest = (e) =>{
        const row = e.currentTarget.getAttribute("customer-details")
        // console.log(row);
        // console.log(customers[row - 1])
        // console.log(customers);
        const id = customers[row -1].id;
            setId(id);
        Axios.put("https://automech-server.herokuapp.com/service/requests/accept/"+id)
            .then(async (res) =>{
                const updated = await res.data;
                if(updated > 0){
                    alert("Request Accepted Successfully.")
                    setMsg(customers[row-1].clients+" Request Accepted.");
                    setErrorMsg("");
                    setTimeout(() => {
                        loadCustomerTable();
                    }, 3000);
                    setTimeout(() => {
                        confirmDelivery();
                        loadCustomerTable();
                    }, 5000);
                    return
                }
                setErrorMsg("An Error Occured. Try again later!");
            })
            .catch((err) =>{
                setErrorMsg(err);
                setMsg("")
            });
    }
    const rejectRequest = (e) =>{
        const row = e.currentTarget.getAttribute("customer-details")
        console.log(row);
        console.log(customers[row - 1])
        console.log(customers);
        const id = customers[row-1].id;
        Axios.put("https://automech-server.herokuapp.com/service/requests/reject/"+id)
            .then(async (res) =>{
                const updated = await res.data;
                if(updated > 0){
                    alert("Request rejected.");
                    setMsg(customers[row-1].clients+" Request has been Rejected.");
                    setErrorMsg("");
                    setTimeout(() => {
                        loadCustomerTable();
                    }, 1000);
                    return
                }
                setErrorMsg("An Error Occured. Try again later!");
            })
            .catch((err) =>{
                setErrorMsg(err);
                setMsg("")
            });
    }

    let renderTable = () =>{
        return customers.map((customer, index)=>{
            const {id, clients,email, phone,date, status,remark} = customer;
            return(
                <tr  key={id}>
                    <td>{++index}</td>
                    <td>{clients}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{status}</td>
                    <td>{remark===""? <div className="partnerDecision">
                    <p id="acc" customer-details={index} onClick={acceptRequest}>accept</p> <p customer-details={index} onClick={rejectRequest} id="rej">reject</p>
                    </div>: remark}</td>
                </tr>
            )
        })
    }
    let tableHeader = () =>{
        let header = Object.keys(customers[0]);
        return header.map((key, index) =>{
            return <th key={index}>{key.toUpperCase()}</th>
        });
    }

    return(
        <div>
            {msg !==""? <p style={{"color":"green","textAlign":"center"}}>{msg}</p>:<p style={{"color":"red","textAlign":"center"}}>{errorMsg}</p>}
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