import React from "react";
import Card from "./price_card";
import backImage from "../assets/pray.jpg"
import SpecialCard from "./special_card";

export default function StripUpgrade() {


    const container = {
        display: "flex",
        flexWrap: "wrap",
        padding: "30px",
        justifyContent: "space-around",
        backgroundColor: "white",
        borderRadius: "20px",
        margin: "20px",

    }

    const basic = {
        kind: "Basic",
        price: "Free",
        priceAmount:0,
        benefits: ["10 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
    }
    const advanced = {
        kind: "Advanced",
        price: "$25 per month",
        priceAmount:25,
        benefits: ["60 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
        isVisible : "true",
    }
    const premium = {
        kind: "Premium",
        price: "$50 per month",
        priceAmount:50,
        benefits: ["200 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
        isVisible : "true",
    }

    const gold = {
        kind: "Gold",
        price: "$75 per month",
        priceAmount:75,
        benefits: ["500 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
        isVisible : "true",
    }

    const custom = {
        kind: "Custom",
        price: "Custom Price",
        priceAmount:150,
        benefits: ["200 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
        isVisible : "true",
    }


    const special = {
        kind: "Special",
        price: "$35 per month",
        priceAmount:35,
        benefits: ["150 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
        isVisible : "true",
    }
 

  

    const upgrade = {
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        margin: "0px",
        width: "100%",
        height: "120px",
        backgroundColor: "blue",
        display : "flex",
        justifyContent: "center",
        fontSize: "2rem",
        color: "white",
        textShadow: "2px 4px 3px grey",
        borderRadius: "20px",

    }


    return (

        <div >


            <div style={ upgrade }>
                <h3>Upgrade Plan</h3>
            </div>


            <div style={ container }>
                <Card props={ advanced } />
                <Card props={ premium } />
                <Card props={ gold } />
                <SpecialCard  props={ special } />
                //Todo chane app apeacial switch
                {/* <Card props={ custom } /> */}
            </div>

        </div>
    );
}