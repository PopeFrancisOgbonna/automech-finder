import React from "react";
import "./PartnerDashboardPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PartnerDashboard from "../../components/PartnerDashboard/PartnerDashboard";



class PartnerDashboardPage extends React.Component{

    constructor(){
        super()
        this.state ={
            customers: [
                {id:'1',name: 'Francis Sunday', phone: '07031620728', date:'12-oct-2020',status:'Pending',
                    remark:''
                },
                {id:'2',name: 'John Amos', phone: '07031620234', date:'01-oct-2020',status:'delivered',
                    remark:'accepted'
                },
                {id:'3',name: 'Chioma Okafor', phone: '08131620228', date:'08-mar-2020',status:'canceled',
                    remark:'rejected'
                },
                {id:'4',name: 'Francis Sunday', phone: '07031620728', date:'12-oct-2020',status:'delivered',
                    remark:'accepted'
                }
            ]
        }
    }
   

    render(){
        return (
            <div>
                <Header/>
                <h1 id="patTitle">Welcome to your Dashboard</h1>
                <PartnerDashboard customers={this.state.customers}/>
                <Footer/>
            </div>
        )
    }
}

export default PartnerDashboardPage;