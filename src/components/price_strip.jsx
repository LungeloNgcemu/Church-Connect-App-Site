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
        benefits: ["10 Users", "Unlimited Chat", "Unlimited Post"],
    }
    // const one = {
    //     kind: "Advanced",
    //     price: "R250 per month",
    //     benefits: ["60 Users", "Unlimited Chat", "Unlimited Post"],
    // }
    const two = {
        kind: "Premium",
        price: "R500 per month",
        benefits: ["200 Users", "Unlimited Chat", "Unlimited Post"]
    }

    const three = {
        kind: "Gold",
        price: "R750 per month",
        benefits: ["500 Users", "Unlimited Chat", "Unlimited Post"]
    }
    const four = {
        kind: "Custom",
        price: "Contact us",
        benefits: ["Custom number of  Users", "Chat", "Unlimited Post"]
    }
    const special = {
        kind: "Special",
        price: "R350 one month",
        benefits: ["150 Users", "Chat", "Unlimited Post"]
    }
 


    return (

        <div style={container}>

            <Card props={zero} />
            <SpecialCard props={special}/>
            {/* <Card props={one} /> */}
            <Card props={two} />
            <Card props={three} />
            <Card props={four} />
           
         

        </div>

    );
}