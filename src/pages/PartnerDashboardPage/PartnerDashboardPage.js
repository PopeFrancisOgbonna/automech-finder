import React from "react";
import "./PartnerDashboardPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import biz from "./biz.png";
import job from "./job.png";
import order from "./order.png";
import schedule from "./schedule.png";
import PartnerDashboard from "../../components/PartnerDashboard/PartnerDashboard";
import Axios from 'axios';


class PartnerDashboardPage extends React.Component{

    constructor(){
        super()
        this.state ={
            partner: {},
            clients: [],
            errors: '',
            show: 'false'
        }
    }

    //Loads mechanic partners to partner state object
    loadPartner = () =>{
        try {
            const name = localStorage.getItem("partnerName");
            const email = localStorage.getItem("partnerEmail");
            const company = localStorage.getItem("partnerCompany");
            const phone = localStorage.getItem("partnerPhone");
            let data ={
                name, email, company, phone
            }
            this.setState({partner: data});
            console.log(data);
        } catch (error) {
            alert('Your browser is in incognito mode. Turn it off and try again!')
        }
    }

    //function to toggle the request log table
    handleShow = () =>{
        this.setState({show: !this.state.show});
    }

    //request/transaction  table loader
    loadCustomerTable = () =>{
        let param
        try {
            param ={"email":localStorage.getItem("partnerEmail"),"phone":localStorage.getItem("partnerPhone")}
        } catch (error) {
            alert('Turn off incognito mode and Try again!')
        }
        Axios.post("https://automech-server.herokuapp.com/service/requests/agent",param)
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
    componentWillUnmount(){
        //Clears the local storage data
        try {
            localStorage.clear();
        } catch (error) {
            alert('Your browser is in incognito mode. Turn it off and try again!')
        }
    }
    render(){
        return (
            <div>
                <Header/>
                <h1 id="patTitle" onClick={this.show} >Welcome to {this.state.partner.company} Dashboard</h1>
                
                <div>
                    <img src={biz} alt="biz" style={{"width":"100%","height":"350px"}}/>
                    <p style={{"textAlign":"center"}}>A Satisfied customer is the best business strategy of all, Chase the vision not money, the money will end
                        up following you.   
                    </p>
                </div>
                <div className="mainAction-wrap">
                    <button id="mainActnBtn" onClick={this.handleShow}>See Transaction Log</button>
                </div>
                {!this.state.show?
                    <PartnerDashboard customers={this.state.clients}
                        loadCustomerTable={this.loadCustomerTable}
                    />:null}
                <div className="logAddsWrap">
                    <div className="logAdds">
                        <img src={job} alt="portfolio"/>
                        <p className="txtMsg">Make up to $25/hour. Our top professionals make up to $1000 a week.</p>
                    </div>

                    <div className="logAdds">
                        <img src={order} alt="order"/>
                        <p className="txtMsg">No more tracking down your customers for payments. Your payments are direct deposited into your bank account soon after the job is complete.</p>
                    </div>

                    <div className="logAdds">
                        <img src={schedule} alt="appointment"/>
                        <p className="txtMsg">Build a full schedule of your customers or simply add a few jobs on the side.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PartnerDashboardPage;