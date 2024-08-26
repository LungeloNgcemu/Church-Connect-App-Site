import React from "react";
import backImage from "../assets/pray.jpg"

export default function Welcome() {

    const center = {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
    }


    const welcome = {
        padding: "30px",
        fontSize: "3rem",
        textShadow: "2px 4px 3px grey",

    };

    const welcome_message = {
        width: "96%",

        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        fontSize: "1.2rem",
        borderBottomLeftRadius: "20px", // Apply bottom-left radius
        borderBottomRightRadius: "20px", // Apply bottom-left radius


    };



    return (
        <div style={center}>

            <div style={welcome}>
                <h4> Connect your ministry to those that follow you...</h4>
            </div>
            <div style={welcome_message}>
                <p> Mobile App is currently available as an APK but will soon be available on the Play Store and Apple Store this year</p>
            </div>

        </div>
    );
}