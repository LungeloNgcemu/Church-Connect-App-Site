import { Border } from '@syncfusion/ej2-react-charts';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/navbar.css'

export default function DropMenu() {
    const [isVisible, setVisibility] = useState(false);

    function visibilityToggle() {
        setVisibility(prev => !prev);
    }


    const navigate = useNavigate();

    const handleClick = (path) => (event) => {
        event.preventDefault(); // Prevent the default anchor tag behavior
        navigate(path);
    };


    const drop = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        borderRadius: "10px",
        padding: " 8px",
        position: "absolute",
        top: "63px",
        zIndex: 0,
        maginRight: "50px"


    }

    const btn = {
        position: "relative",
        marginBottom: "10px",
        maxWidth: "50px",
        minWidth: "50px",
        padding: "5px",
        fontWeight: "bold",
        backgroundColor: "rgba(255, 255, 255, 0.606)",
        borderRadius: "5px",
        border: "none",
        fontSize: "20px"
    


    }

    const link = {
        textDecoration: "none",
        color: "black"
    }

    return (
        <>
            <div className='small-nav'>
                <button style={btn} onClick={visibilityToggle}>&#9776;</button>
                {isVisible ? (
                    <div style={drop}>
                        <a style={link} href="/" onClick={handleClick("/")} >Home</a>
                        <a style={link} href="/about" onClick={handleClick("/about")}>About</a>
                        <a style={link} href="/login" onClick={handleClick("/login")}>Login</a>
                        <a style={link} href="/register" onClick={handleClick("/register")}>Register</a>
                        <a style={link} href="#contact">Contact</a>
                        <a style={link} href="/feed" onClick={handleClick("/feed")}>Feed-Back</a>
                    </div>
                ) : null}

            </div>

        </>
    );

    // return (
    //     <>
    //         <button onClick={visibilityToggle}>Menu</button>
    //         {isVisible ? (
    //             <select>
    //                 <option value="/home">Home</option>
    //                 <option value="/about">About</option>
    //                 <option value="/login">Login</option>
    //                 <option value="/register">Register</option>
    //                 <option value="/contact">Contact</option>
    //                 <option value="/about">About</option>
    //                 <option value="/feed">Feed-Back</option>
    //             </select>
    //         ) : null}
    //     </>
    // );
}
