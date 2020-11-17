import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel } from "react-bootstrap"
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";
import mobile from "./mobile.png";
import increase from "./increase.png";
import hand from "./hand.png";
import {useForm} from "react-hook-form";
import Axios from 'axios';
import "./PartnerSignUp.css";
import LoaderButton from '../../components/LoaderButton/LoaderButton';


let message = "" ;
let sucessMsg = "";
const PartnerSignUp = () =>{
   const [loading, setLoading] = useState('false');
    
    const submitForm = (data) =>{
        setLoading('true');
        if(message ===""){
            sucessMsg="Loading...";
        }
        console.log(data);
        if(password === confirm){
            message = "";
            return Axios.post("https://automech-server.herokuapp.com/partners", data)
            .then(async (res) =>{
                const data = await res.data;
                sucessMsg = `${data} Redirecting...`;
                setTimeout(() => {
                    window.location.href="/partner/login"
                }, 3000);
               
            })
            .catch((err)=>{
                setLoading('false');
                message = err + " Please try again.";
                return
            })
        }else{
            message = "Password do not match."
            setLoading('false');
        }
        
    }
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
   

   
        const {register, handleSubmit} = useForm();
    return (
        <div>
            <Header/>
            <div className="outerwrap">
                <div className="caption">
                    <h1>Want a bigger audience for your Bussiness?</h1>
                    <p>Be part of a community of service experts that have seen their Bussiness amplified with AutoMechanic Finder Platform.</p>
                </div>
                <div className="slider-container">
                   
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{"height":"250px"}}
                            src={user1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Chijioke Nwafor</h3>
                            <p>Since I joined AutoMechanic Finder My Bussiness has grown financially!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{"height":"250px"}}
                            src={user2}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Allen Thomas</h3>
                            <p>AutoMechanic Mechanic finder is a nice place to grow your audience. I make $400 on a daily basis.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{"height":"250px"}}
                            src={user3}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Taiwo Abiodun</h3>
                            <p>I now make more income from my business, Thanks to AutoMechanic platform!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="formandIcon">
                <div className="iconAds">
                    <div>
                        <img src={mobile} alt="phone"/>
                        <p>Become a tech friendly Professional.</p>
                    </div>
                    <div>
                        <img src={increase} alt="Chart"/>
                        <p>Confirm Bookings and Bussiness growth.</p>
                    </div>
                    <div>
                        <img src={hand} alt="handshake"/>
                        <p>Partner support to solve querries.</p>
                    </div>
                </div>
                <div className="sform">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <h2 style={{"textAlign":"center"}}>Signup as an AutoMechanic!</h2>
                        <hr/>
                        <div className="inputFormWrap">
                            <div>
                                <label htmlFor="fullName">Full Name</label><br/>
                                <input type="text" ref={register} name="fullName" required/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label><br/>
                                <input type="email" ref={register} name="email" required/>
                            </div>
                        </div>
                        
                        <div className="inputFormWrap">
                            <div>
                                <label htmlFor="phone">Phone No.</label><br/>
                                <input type="text" ref={register} name="phone" required/>
                            </div>
                            <div>
                                <label htmlFor="businessName">Company Name</label><br/>
                                <input type="text" ref={register} name="businessName" required/>
                            </div>
                        </div>
                        
                        <div className="inputFormWrap">
                            <div>
                                <label htmlFor="serviceType">Select Service Type</label><br/>
                                <select ref={register} name="serviceType">
                                    <option value="auto-electrical">Auto Electrical</option>
                                    <option value="heavy-engine">Heavy Engine AutoMechanic</option>
                                    <option value="small-engine">Small Engine AutoMechanic</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="serviceSpec">Select Specialty</label><br/>
                                <select ref={register} name="serviceSpec">
                                    <option value="allbrand">General AutoMechanic</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Golf">Golf</option>
                                    <option value="Ivm">IVM</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="inputFormWrap">
                            <div>
                                <label htmlFor="address">Office Address</label><br/>
                                <input ref={register} name="address" type="text" required/>
                            </div>
                            <div>
                                <label htmlFor="place">City/State</label><br/>
                                <input ref={register} name="place" type="text" required/>
                            </div>
                        </div>
                        
                        <div className="inputFormWrap">
                            <div>
                                <label htmlFor="password">password</label><br/>
                                <input ref={register} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required/>
                            </div>
                            <div>
                                <label htmlFor="confirm">Confirm Password</label><br/>
                                <input ref={register} onChange={(e) => setConfirm(e.target.value)} type="password" name="confirm" required/>
                            </div>
                        </div>
                        
                        <div>
                        { message !== ""?<p style={{"color":"red"}}>{message}</p>: <p style={{"color":"green"}}>{sucessMsg}</p> }
                            {loading ==='true'?<LoaderButton/>:<input id="sendBtn"  type="submit" value="Create Account"/>}
                        </div>
                    </form>
                </div>
            </div>
            <div className="faq">
                <h2>FAQs</h2>
                <div className="questions">
                    <p>How do i know when my onbaording request is approved?</p>
                    <p>Will I be contacted when they find your profile suitable for partenship?</p>
                    <p>How do i know when my onbaording request is approved?</p>
                    <p>Will AutoMechanic Finder contact me when they find your profile suitable for partenship</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
 
}

export default PartnerSignUp;