import React from "react";
import backImage from "../assets/pray.jpg"
import Avatar from "./avatar_circle";
import { ConectionContext } from "../connectionContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./navbar";
import "../styles/global.css";
import { Margin } from "@syncfusion/ej2-react-charts";

export default function AccountTops() {


    const { data } = useContext(ConectionContext)

    const center = {

        display: "flex",
        flexDirection: "column",
        alignItems: 'center',

    }


    const welcome = {
        padding: "10px",
        fontSize: "2.9rem",
        textShadow: "2px 4px 3px grey",


    };

    const welcome_message = {

        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        textAlign: "center",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "1.2rem",
        borderBottomLeftRadius: "20px", // Apply bottom-left radius
        borderBottomRightRadius: "20px", // Apply bottom-left radius
        height: " 280px",
        width: "97%",
        display: "flex",
        flexDirection: "column",
       


    };

    const churchName = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
       
        fontSize: "1.8rem",
        textShadow: "2px 4px 3px grey",
    }

    const info = {
        display: "flex",
        width: "20%",
        textShadow: "2px 4px 3px grey",

    }



    return (
        <div style={center}>
             <NavBar show = {true} />

            <div style={welcome_message}>
            <div style={{ width: "100%,", height: "20vh", marginTop: "0px" }}>
           
            </div> 




                <div className="belowNav" style={{ display: "flex", width: "100%" }}>

                    {/* <div style={info}>
                        <Avatar />
                    </div> */}


                    <div style={churchName}>
                        <h1 className="naming" >{data.churchName}</h1>

                    </div>
                </div>
            </div>

            {/* <div style={ welcome }>
                <h4> Welcome Back</h4>
            </div> */}

        </div>
    );
}