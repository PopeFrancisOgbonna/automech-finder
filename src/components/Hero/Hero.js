import React from "react";
import "./Hero.css";
import HeroImage from "./heroimage2.PNG";
import {Link} from "react-router-dom";



const Hero = () =>{

    return(
        <div>
            <div className="layer">
                <img className="layerImg" src={HeroImage} alt="layer"/>
                <div className="ads">
                    <h1>Maintenance Packages</h1>
                    <ul>
                        <li>Oil, Lube and Filter</li>
                        <li>Inspect Fluid level & Conditions</li>
                        <li>Perform Safety Inspections (lights, battery, etc.)</li>
                        <li>Under hood Multipoint Inspection</li>
                        <li>Breake Inspection</li>
                        <li>Undercarriage Multipoint Inspection</li>
                    </ul>
                    <Link to="/login"><button id="book">Book Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;