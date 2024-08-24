import React from "react";
import "../styles/navbar.css"
import DropDown from "./dropdown";
import { useNavigate } from "react-router-dom";
import image from "../assets/logoClass.png"



export default function NavBar(props) {

    const navigate = useNavigate();

    const handleClick = (path) => (event) => {
        event.preventDefault(); // Prevent the default anchor tag behavior
        navigate(path);
    };

    const logo = {
        backgroundColor: "white"
    }


    return (

        <div style={{ position: "fixed", width: "100%" }}>
            <div className="navbar-container">
                <div className="logoContainer">

                    <img src={image} height={"50px"} />

                </div>

                { props.show ? <div className="direct"  >
                    <ul>
                        <li><a href="/" onClick={handleClick("/")}>Home</a></li>
                        <li><a href="/about" onClick={handleClick("/about")}>About</a></li>
                        <li><a href="/login" onClick={handleClick("/login")}>Login</a></li>
                        <li><a href="/register" onClick={handleClick("/register")}>Register</a></li>
                        <li><a href="#contact" >Contact</a></li>
                        <li><a href="/feed" onClick={handleClick("/feed")}>Feed-Back</a></li>
                    </ul>
                </div> : <div></div> }
            </div>
        </div>


    );
}