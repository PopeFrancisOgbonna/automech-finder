import React from "react";
import "./PartnerDashboardPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import biz from "./biz.png";
import PartnerDashboard from "../../components/PartnerDashboard/PartnerDashboard";
import Axios from 'axios';


class PartnerDashboardPage extends React.Component{

    constructor(){
        super()
        this.state ={
            // customers: [
            //     {id:'1',name: 'Francis Sunday', phone: '07031620728', date:'12-oct-2020',status:'Pending',
            //         remark:''
            //     },
            //     {id:'2',name: 'John Amos', phone: '07031620234', date:'01-oct-2020',status:'delivered',
            //         remark:'accepted'
            //     },
            //     {id:'3',name: 'Chioma Okafor', phone: '08131620228', date:'08-mar-2020',status:'canceled',
            //         remark:'rejected'
            //     },
            //     {id:'4',name: 'Francis Sunday', phone: '07031620728', date:'12-oct-2020',status:'delivered',
            //         remark:'accepted'
            //     }
            // ],
            partner: {},
            clients: [],
            errors: '',
            show: 'false'
        }
    }

    //Loads mechanic partners to partner state object
    loadPartner = () =>{
        const name = localStorage.getItem("partnerName");
        const email = localStorage.getItem("partnerEmail");
        const company = localStorage.getItem("partnerCompany");
        const phone = localStorage.getItem("partnerPhone");
        let data ={
            name, email, company, phone
        }
        this.setState({partner: data});
        console.log(data);
    }

    //function to toggle the request log table
    handleShow = () =>{
        this.setState({show: !this.state.show});
    }

    //request/transaction  table loader
    loadCustomerTable = () =>{
        let param ={"email":localStorage.getItem("partnerEmail"),"phone":localStorage.getItem("partnerPhone")}
        Axios.post("http://localhost:8080/service/requests/agent",param)
            .then(async (res) =>{
                const c = await res.data;
                this.setState({clients: c});
                console.log(c);
            })
            .catch((err) =>{
                if(err) return this.setState({errors: err})
            })
    }

    //calls to database resources
    componentDidMount(){
        this.loadPartner();
        this.loadCustomerTable();
    }

    render(){
        return (
            <div>
                <Header/>
                <h1 id="patTitle" onClick={this.show} >Welcome to your {this.state.partner.company} Dashboard</h1>
                <label onClick={this.handleShow}>See Transaction logs</label>
                <div>
                    <img src={biz} alt="biz" style={{"width":"100%","height":"350px"}}/>
                    <p>A Satisfied customer is the best business strategy of all, Chase the vision not money, the money will end
                        up following you.   
                    </p>
                    <button onClick={this.handleShow}>See Transaction Log</button>
                </div>
                {!this.state.show?
                    <PartnerDashboard customers={this.state.clients}
                        loadCustomerTable={this.loadCustomerTable}
                    />:null}
                <Footer/>
            </div>
        )
    }
}

export default PartnerDashboardPage;