import React from "react";
import wallpaper from "../assets/pray.jpg";
import NavBar from "./navbar";
import phone from "../assets/phoneClear.png"
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import { Link } from "react-router-dom";




export default function Head() {


    const navigate = useNavigate();

    function handleClick(name) {
        navigate(name);
    };


    const handleDownload = () => {
        alert('Once the download is complete, open the "CCA" app, go to the "Downloads" folder, and tap on the APK file to install the app.');

        // Trigger the download
        const link = document.createElement('a');
        link.href = ' https://drive.google.com/uc?export=download&id=1llXzBpAAcmLelYgxPYFZP92747x8yHn5';  //
        // link.href = ' https://drive.google.com/uc?export=download&id=1XI-oQ23FvyYnWF8bZQlQYVRMPyJkGZTV';  // Path to the APK file in the public folder
        link.download = 'CCA.apk';
        document.body.appendChild(link);  // Append link to the DOM
        link.click();  // Trigger download
        document.body.removeChild(link);  // Clean up after click
    };

    // const handleDownload = () => {
    //     alert('Once the download is complete, open the "CCA" app, go to the "Downloads" folder, and tap on the APK file to install the app.');


    //     https://drive.google.com/uc?export=download&id=1XI-oQ23FvyYnWF8bZQlQYVRMPyJkGZTV

    // };



    const layout = {
        backgroundColor: "blue",
        height: "300px",
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        borderBottomRightRadius: "120px",
        display: "flex",
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
        marginTop: "10px",
        margin: "5px",

        width: "97%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };

    const buttonStyleD = {
        marginTop: "15px",
       
        width: "97%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "black", // Example background color
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


    const overlayContentStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.33)",
        padding: "20px",
        borderRadius: "20px"
    };


    return (
        <div style={layout}>
            <NavBar show={true} />


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

                        <div>
                            {/* <button style={buttonStyleR} onClick={() => { handleClick("register") }}>Register Ministry</button> */}
                            {/* <button style={buttonStyleL} onClick={() => { handleClick("login") }} > Login to Update</button> */}

                        </div>
                        <button style={buttonStyleD} onClick={handleDownload}>
                            Download Mobile App on Play Store
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );

}