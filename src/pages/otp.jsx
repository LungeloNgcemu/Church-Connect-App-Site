import React from "react";
import back from '../assets/pray.jpg'
import Code from "../components/code"


export default function Otp() {

    const page = {

        display: "flex",
        height: "90vh ",
        justifyContent: "center",
        alignItems: "center"

    }


    const container = {

        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        margin: "10px",
        height: "550px",
        width: "400px",
        boxShadow: "0 1px 8px grey",


    }

    const formLay = {

         display: "flex", 
         justifyContent: "center", 
         alignItems: "center", 
         height: "80vh" 
         
        }




    return (

        <div style={ page }>

            <div style={ container }>

                <div style={ formLay }>

                <Code/>
                

                </div>

            </div>

        </div>

    );
}