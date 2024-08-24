import React from "react";
import Card from "./price_card";
import SpecialCard from "./special_card";

export default function Strip() {


    const container = {
        display: "flex",
        flexWrap: "wrap",
        padding: "30px",
        justifyContent: "space-around",
        backgroundColor: "white",
        borderRadius: "20px",
        margin: "20px",

    }

    const zero = {
        kind: "Basic",
        price: "Free",
        benefits: ["10 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
    }
    const one = {
        kind: "Advanced",
        price: "$25 per month",
        benefits: ["60 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
    }
    const two = {
        kind: "Premium",
        price: "$50 per month",
        benefits: ["200 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"]
    }

    const three = {
        kind: "Gold",
        price: "$75 per month",
        benefits: ["500 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"]
    }
    const four = {
        kind: "Custom",
        price: "Contact us",
        benefits: ["Custom number of  Users", "Chat", "Unlimited Post", "Push Notification"]
    }
    const special = {
        kind: "Special",
        price: "$35 per month",
        benefits: ["150 Users", "Chat", "Unlimited Post", "Push Notification"]
    }
 


    return (

        <div style={container}>

            <Card props={zero} />
            <SpecialCard props={special}/>
            <Card props={one} />
            <Card props={two} />
            <Card props={three} />
            <Card props={four} />
           
         

        </div>

    );
}