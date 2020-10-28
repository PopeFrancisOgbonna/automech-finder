import React from 'react';
import linda from "./linda.png"
import  "./Booking.css";



class Booking extends React.Component{
    constructor(){
        super();
        this.state={
            answer:''
        }
        this.updateAnswer = this.updateAnswer.bind(this);
    }
    
    updateAnswer(event) {
        this.setState({answer: event})
    }

    render(){
        return (
            <div className="wrapper">
                <div>
                    <div className="welcomeNote">
                        <h2>Hi Welcome to AutoMechanic Finder!</h2>
                        <p>We'll help you get an AutoMechanic within minutes.</p>
                    </div>
                    <div className="response">
                        <div>
                            
                            <p> <img src={linda} alt="service agent"/>Hello My name is Linda, am here to guide you...</p>
                        </div>
                        <h4>Do you know the vehicle fault?</h4>
                        <div className="decision">
                            <span className="ans-container"><label htmlFor="ans">Yes <input  onClick={ ()=>this.updateAnswer("yes")} name="ans" type="radio"/></label></span>
                            <span className="ans-container"><label htmlFor="ans">No <input onClick={()=>this.updateAnswer("no")} name="ans" type="radio"/></label></span>
                        </div>
                        
                        <div className={this.state.answer ===""?"hide": 'null'}>
                            <div>
                                <select className="options">
                                    <option>Select Your Car Type</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Honda CRV">Honda CRV</option>
                                    <option value="Venza">Venza</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div>
                                <select className={this.state.answer === "yes"? 'null options': 'hide'}>
                                    <option>Choose Mechanic Category</option>
                                    <option value="Electrician">Auto Electrician</option>
                                    <option value="battery">Battery Charger</option>
                                    <option value="mechanic">Engine Mechanic</option>
                                    <option value="Others">Others</option>
                            </select>
                            </div>
        
                            <input id="place-box" type="text" name="place" placeholder="Enter Location" required/>
                            <div>
                                <button onClick={()=>this.updateAnswer("")} id="bookBtn">Send</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking;