import React from "react";
// import image from "./image.jpeg";
import quality from "./quality.PNG";
import parts from "./parts.png";
import trans from "./trans.PNG";
import ServiceTerms from "../../components/ServiceTerms/ServiceTerms";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Booking from "../../components/Booking/Booking";
import Clients from "../../components/Clients/Clients";
import "./ServicePage.css";



class  ServicePage extends React.Component{
    constructor(){
        super()
        this.state = {
            loggedIn:false,
            bookService:''
        }

    }

    bookHandle = (handle) =>{
        this.setState({bookService: handle});
    }

    render(){
        return (
            <div>
                <Header loggedIn={this.state.loggedIn}/>
                <div className="imgDiv">
                    {/* <img id="bannerImage" src={image} alt="hero"/> */}
                    <button id="actionBtn" onClick={()=>this.bookHandle("book")}>Get Your Car Fixed</button>
                </div>
                {this.state.bookService === ""?<ServiceTerms/> : null}
                { this.state.bookService ==="book"?<Booking/>: 
                    this.state.bookService ==="client"? <Clients/> : null
                }
                
                <div className="Ratings">
                    <div id="rateDiv1">
                        <img src={trans} alt="Transparency"/>   
                        <h2>100% Transparecy</h2>
                        <p>We ensure that you get well detailed break-up of each repair work.</p>
                    </div>
                    <div id="rateDiv2">
                        <img src={parts} alt="spare parts"/>
                        <h2>Genuine Spare Parts</h2>
                        <p>We useuthorzed genine spare parts & accessories to ensure.</p>
                    </div>
                    <div id="rateDiv3">
                        <img src={quality} alt="quality service"/>
                        <h2>Quality Services</h2>
                        <p>You can avail our free pickup & drop so that you can just sit & relax.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    
}
export default ServicePage;