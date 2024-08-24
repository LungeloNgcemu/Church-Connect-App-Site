import React from 'react';
import NavBar from '../components/navbar';
import Tops from '../components/top';
import Footer from '../components/footer';
import logo from '../assets/logoClass.png'
import { Margin } from '@syncfusion/ej2-react-charts';


export default function About() {
    const container = {
        display: "flex",
        justifyConrent: "space-around",
        // backgroundColor: "red",
        width: "100%",
        height: "100%",
        marginBottom: "100px"
    }

    const top = {
        display: "flex",
        flexDirection: "column",
        width: "100%",


    }

    const containerText = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontSize: "1.5rem"
    }

    return (

        <div style={top}>
            <Tops heading="All About Church Connect" show={true} />

            <div style={container}>

                <div>
                    <img src={logo}></img>
                </div>
                <div style={containerText}>

                    <p> Church Connect was created to improve communication within ministries and churches, addressing the gaps in communication between the congregation and leadership. Church Connect bridges these gaps, enabling a smooth flow of communication for events, notifications, and other important updates, ensuring that leadership stays connected with the congregation.<br></br><br></br>

                        Many people have walked into a church without fully understanding the heart of the ministry or experiencing the warm fellowship of leadership due to the lack of a platform for clear communication. Church Connect serves as your online church, your tool to connect, and your way to share the warm love of our Lord and Savior Jesus Christ. </p>
                </div>



            </div>
            <Footer />

        </div>

    );
}