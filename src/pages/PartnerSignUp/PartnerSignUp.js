import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";
import mobile from "./mobile.png";
import increase from "./increase.png";
import hand from "./hand.png";
import "./PartnerSignUp.css";



const PartnerSignUp = () =>{


    return (
        <div>
            <Header/>
            <div className="outerwrap">
                <div className="caption">
                    <h1>Want a bigger audience for your Bussiness?</h1>
                    <p>Be part of a community of service experts that have seen their Bussiness amplified with AutoMechanic Finder Platform.</p>
                </div>
                <div className="slider-container">
                    <div className="imgH">
                        <img className="userImage" src={user1} alt="partner" />
                        <p className="user">Mr. Kingsely Okafor</p>
                    </div>
                    <div className="testimony">
                        <p>"Since I joined AutoMechanic Finder My Bussiness has grown financially!</p>
                    </div>
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
                    <form>
                        <h1>Signup as a Partner with us!</h1>
                        <div>
                            <label htmlFor="fullName">Full Name</label><br/>
                            <input type="text" name="fullName" required/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label><br/>
                            <input type="email" name="email" required/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone No.</label><br/>
                            <input type="text" name="phone" required/>
                        </div>
                        <div>
                            <label htmlFor="businessName">Company Name</label><br/>
                            <input type="text" name="businessName" required/>
                        </div>
                        <div>
                            <label htmlFor="service">Select Service Type</label><br/>
                            <select>
                                <option value="auto-electrical">Auto Electrical</option>
                                <option value="heavy-engine">Heavy Engine AutoMechanic</option>
                                <option value="small-engine">Small Engine AutoMechanic</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="service">Select Specialty</label><br/>
                            <select>
                                <option value="allbrand">General AutoMechanic</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Golf">Golf</option>
                                <option value="Ivm">IVM</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="address">Office Address</label><br/>
                            <input name="address" type="text" required/>
                        </div>
                        <div>
                            <label htmlFor="place">City/State</label><br/>
                            <input name="place" type="text" required/>
                        </div>
                        <div>
                            <label htmlFor="password">password</label><br/>
                            <input type="password" name="password" required/>
                        </div>
                        <div>
                            <label htmlFor="confirm">Confirm Password</label><br/>
                            <input type="password" name="confirm" required/>
                        </div>
                        <di>
                            <input id="sendBtn"  type="submit" value="Create Account"/>
                        </di>
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