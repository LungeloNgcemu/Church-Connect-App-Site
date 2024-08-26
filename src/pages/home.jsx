import React from "react";
import Head from "../components/head";
import Welcome from "../components/welcome";
import Strip from "../components/price_strip";
import Footer from "../components/footer";
import phone from "../assets/phoneClear.png"
import logo from "../assets/logoClass.png"
import "../styles/global.css"
import Video from "../components/video_strip";

export default function Home() {
    return (

        <div >

            <Head />

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", }}>



                <div className="hope" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", borderRadius: "20px", width: "100vw", marginLeft: "10px", marginRight: "10px", paddingTop: "20px", paddingBottom: "20px" }}>
                    <img style={{ width: "50%" }} src={logo} alt="Phone" />
                    <img style={{ width: "50%" }} src={phone} alt="Phone" />
                </div>
            </div>
            <Welcome />
            <Video/>
            <Strip />
            <Footer />

        </div>

    );
}