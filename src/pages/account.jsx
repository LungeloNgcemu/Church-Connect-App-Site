
import React from 'react';
import AccountTops from '../components/account_tops';
import StripUpgrade from '../components/price_strip_upgrade';
import Information from '../components/information';
import backImage from "../assets/pray.jpg"
import { ConectionContext } from '../connectionContext';
import { useContext } from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';



export default function Account() {


    const { data } = useContext(ConectionContext)

    const upgrade = {
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        margin: "0px",
        width: "100%",
        height: "120px",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        fontSize: "3rem",
        color: "LightSlateGrey",
        borderRadius: "20px",
        border: "1px solid white",
        // color: "white",
        textShadow: "2px 4px 3px grey",
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",



        marginTop: "50px",



    }
    const navBack = {
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        margin: "0px",
        width: "100vw"
    }



    return (
        <>

            {/* <div style={navBack} >
                <NavBar />
            </div> */}

            <AccountTops />

            <div style={upgrade}>

                <h4 style={{ textShadow: "2px 4px 3px grey", color: "white", fontSize: "1.8rem" }}>Welcome {data.userName}</h4>

            </div>

            <Information />
            <StripUpgrade />
            <Footer />
        </>
    );
}