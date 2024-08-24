import React from "react";
import RegistrationForm from "../components/registration_form";
import back from '../assets/forback.png'
import Tops from "../components/top";
import Footer from "../components/footer";


export default function Register() {


    const page = {

        display: "flex",
        height: "90vh ",
        justifyContent: "center",
        alignItems: "center"

    }


    const container = {

        backgroundImage: `url(${back})`,
        backgroundPosition: "bottom",
        borderRadius: "20px",
        margin: "10px",
        height: "650px",
        width: "500px",
        boxShadow: "0 1px 8px grey",


    }

    const formLay = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh"

    }

    const contain = {
        // height: "80%",
        //         backgroundColor: "white",
        //         padding: "100px",
        //         paddingTop: "50px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "100px"
        // height: "80vh"

    };


    const doc = {
        message: "hello"
    }


    return (


        <div>

            <Tops
                heading="Register Free Account"
                show = {true}
            />

            <div style={contain}>

                <RegistrationForm />

            </div>

            <Footer />

        </div>




    );
}