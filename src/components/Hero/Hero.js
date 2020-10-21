import React from "react";
import "./Hero.css";
import HeroImage from "./heroimage2.PNG"



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
                    <button id="book">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;