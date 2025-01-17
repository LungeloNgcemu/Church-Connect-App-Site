import React from "react";
import image from "../assets/pray.jpg"


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
        textShadow:" 3px 3px 6px white"
    }


    return (
        <>
            <div id="contact" style={back}  >
                <p>
                    &copy; 2024 Church Connect<br></br><br></br>

                  churchconnect@gmail.com

                </p>
            </div>
        </>
    );
}