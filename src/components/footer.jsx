import React from "react";
import image from "../assets/pray.jpg"
import { FaWhatsapp } from "react-icons/fa";



export default function Footer() {

    const back = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        height: "40vh",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        textShadow: " 3px 3px 6px white"
    }


    return (
        <>
            <div id="contact" style={back}>
                <p>
                    &copy; 2025 Church Connect App
                    <br />
                    <br />
                    <FaWhatsapp
                        style={{ color: "green", marginRight: "8px", verticalAlign: "middle" }}
                    />
                     +27(0) 67 899 3879
                </p>
            </div>
        </>
    );

}