import React from "react";
import coil from "./coil.webp";
import "./ServiceTerms.css";



const ServiceTerms = ({bookHandle}) =>{

    return (
        <div className="mainWrap">
            <h1 className="serve">Service Terms to Know</h1>
            <h4 className="titleText">Iginition Coil</h4>
            <div className="coilWrap">
                <img src={coil} alt="coil"/>
                <p>The ignition coil converts the vehicle’s 12 volts to the more than 10,000 volts 
                    required to produce an effective spark in the spark plugs, which in turn ignite 
                    the air-fuel mixture in an engine’s cylinders. Some cars use one coil, but increasingly, 
                    each cylinder bank, pair or even individual cylinder get its own coil.
                    A failing coil can result in anything from rough operation or diminished acceleration to a 
                    complete engine stall (or a failure to start). 
                </p>
            </div>
            <div className="callAction">
                <p>We provide you access to professional and relaiable auto Mechanics, schedule flexibility, and high-quality spare parts.</p> <br/> <span onClick={()=>bookHandle("book")}>Get a Mechanic</span>
            </div>
        </div>
    )
}

export default ServiceTerms;