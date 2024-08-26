import React from "react";
import wallpaper from "../assets/pray.jpg";
import NavBar from "./navbar";
import phone from "../assets/phoneClear.png"
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

export default function Head() {


    const navigate = useNavigate();

    function handleClick(name) {
        navigate(name);
    };



    const layout = {
        backgroundColor: "blue",
        height: "300px",
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        borderBottomRightRadius: "120px",
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-between",
      
    };



    const imgStyle = {
        width: "550px", // Adjust width as needed
        height: "450px", // Maintain aspect ratio
        position: "relative",
        left: "100px",
        marginRight: "70px" // Position relative to parent
        // Adjust distance from bottom

        // Ensure image is above the overlay
    };

    const info = {

        fontSize: "1.4rem",
        fontWeight: "bold"
    }



    const buttonStyleL = {
        margin: "10px",

        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };

    const buttonStyleR = {
        margin: "10px",

        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#556B2F", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };
    const buttonStyleD = {
        margin: "10px",

        width: "97%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "black", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };

    const overlayContentStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.33)",
        padding: "20px",
        borderRadius: "20px"
    };


    return (
        <div style={layout}>
            <NavBar show = {  true} />


            <div className="cover" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "100px" }} >
                {/* <img className="phonex" src={phone} alt="Phone" /> */}


                <div className="info infoText overlayContentStyle" id="sort" >

                    <div>
                        <h4 className="title" style={{ margin: "0px", fontSize: "1.5rem" }}>Experience the power of fellowship</h4>

                        {/* <p >Church Event Calender</p>
                        <p >Social Media post</p>
                        <p >Church Chat</p>
                        <p >YouTube Streaming</p>
                        <p >Soo much more...</p> */}

                    </div>


                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>

                            <button style={buttonStyleR} onClick={() => { handleClick("register") }}>Register Ministry</button>
                            <button style={buttonStyleL} onClick={() => { handleClick("login") }} > Login to Ministry</button>

                        </div>
                        <button style={buttonStyleD}> Download Mobile App (APK)</button>
                    </div>
                </div>
            </div>
        </div>
    );

}