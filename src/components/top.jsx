import React from "react";
import backImage from "../assets/pray.jpg"
import NavBar from "./navbar";

export default function Tops(props) {

    const center = {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        width: "95vw"
     
    }


    const welcome = {
        padding: "10px",
        fontSize: "4rem",
        color: "black",
        textShadow: "2px 4px 3px grey",
        height: "20%",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"

    };

  

    const welcome_message = {
      
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        height: "20vh",
        width: "103%",
        color: "LightSlateGrey",
        padding: "20px",
        textAlign: "center",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "1.2rem",
        borderBottomLeftRadius: "20px", // Apply bottom-left radius
        borderBottomRightRadius: "20px", // Apply bottom-left radius
      


    };



    return (
        <div style={ center }>
        

            <div style={ welcome_message }>
            

           <NavBar show ={ props.show }/>

                <p>{props.message}</p>
            </div>

            <div style={ welcome }>
            <h4> {props.heading}</h4>
            </div>

        </div>
    );
}