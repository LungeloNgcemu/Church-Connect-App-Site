import React from "react";
import back from '../assets/pray.jpg'
import Form from "../components/login_form";


export default function Login() {

    const page = {
        margin:"100px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

    }


    const container = {

        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        margin: "10px",
   
        boxShadow: "0 1px 8px grey",


    }

    const formLay = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        padding: "30px"

    }




    return (

        <div style={page}>



            <div style={container}>

                <div>
                    <div style={{ marginTop: "80px", textAlign: "center", textShadow: "2px 4px 3px rgba(0, 0, 0, 0.3)", fontSize: "1.8rem" }}>
                        <h1>Login</h1>
                    </div>

                    <div style={formLay}>
                        <Form />

                    </div>

                </div>


            </div>

        </div>

    );
}