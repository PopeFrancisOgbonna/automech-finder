import React from "react";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import engine from "./engine.png";
import engineRepair from "./enginT.jpg";
import steering from "./steering.jpg";
import brake from "./brake.jpg";
import cooling from "./coolant.jpg";
// import battery from "./battery.jpg";
// import exhust from "./exhust.jpg";
import "./HomePage.css"



const HomePage = () =>{

    return(
        <div>
            <Header/>
            <Hero/>
            <div className="Section">
                {/* <h2>Know the Inner workings of your Car.</h2> */}
                <img src={engine} alt="car engine"/>
            </div>
            <div className="section2">
                <h1>Auto Repair Services</h1>
                <div className="servicesDiv">
                    
                    <div className="services">
                        <h3>Engine and Transmission Repairs</h3>
                        <img src={engineRepair} alt="engine transmission"/>
                        <p>Our Auto Centres have the equipment and technicians to accurately diagnose and repair all engine and transmission related problems.</p>
                    </div>

                    <div className="services">
                        <h3>Steering  and Wheel Alignment</h3>
                        <img src={steering} alt="steering"/>
                        <p>We've got technicians trained to diagnose and repair steering, suspension and wheel alignment related issues.</p>
                    </div>

                    <div className="services">
                        <h3>Brake Services and Repairs</h3>
                        <img src={brake} alt="shoe brake"/>
                        <p>The technicians at Our Auto Centres are trained to inspect, diagnose and repair braking systems of any kind.</p>
                    </div>

                    <div className="services">
                        <h3>Cooling System Repairs</h3>
                        <img src={cooling} alt="coolant"/>
                        <p>Our technicians are trained to inspect engine antifreeze/coolant quality and to diagnose any leaks and associated potential problems.</p>
                    </div>
                </div>
            </div>
            <div className="banner">
                <p className="bannerP">2 Million+ <br/>Customers Served</p> 
                <p className="bannerP">35,000+ <br/> Verified Experts</p>
                <p className="bannerP">60 <br/> Live Services</p>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;