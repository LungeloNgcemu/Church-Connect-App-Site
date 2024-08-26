import React, { useState } from "react";
import { ConectionContext } from "../connectionContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabaseConnnection from "../supabaseDatabase";


export default function SpecialCard({ props }) {

    const { pay, setPay, data } = useContext(ConectionContext)
    const navigate = useNavigate();
    

    const updatePay = (number, type) => {

        setPay({
            ...pay,
            amount: number,
            plan: type

        })

    }


    const paymentCheck = async (churchName) => {

        let expire = null;

        // 1. Get expiry date
        try {
            const { data: churchData, error } = await supabaseConnnection
                .from('Church')
                .select('Expire')
                .eq('ChurchName', churchName)
                .single();

            if (error) {
                console.error('Error fetching data:', error);
                throw new Error('Error fetching church data');
            }

            expire = new Date(churchData["Expire"]);

        } catch (error) {
            console.log("Error getting date: " + error);
            return;
        }

        // 2. Get current date
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set time to midnight for accurate day calculation

        // 3. Find the difference
        const timeDifference = expire - currentDate;
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        // 4. Check if difference is less than or equal to 3
        const isWithinThreeDays = daysDifference <= 3;

        // 5. Alert based on the difference
        if (isWithinThreeDays) {
            //Navigate to make payment.
            console.log('Within three days of the expiration date.');
            navigate("/payment");
        } else {
            alert("You can't make payment until your within three days of expiry date.")
            console.log('More than three days from the expiration date.');
        }
    };






    const outer = {

        width: "300px",
     
        boxShadow: "0 1px 8px grey",
        borderRadius: "20px",
        padding: "35px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "white",


    };



    const buttonStyle = {
        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "5px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };

    const listStyle = {
        alignSelf: "flex-start", // Align the ul container's items to the start
        listStyleType: "none",
        paddingLeft: "20px",
        color: "#888",// Remove default padding
    };

    const h4 = {
        fontSize: "30px"
    }

    const markerStyle = {
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        width: "10px", // Adjust size of the marker
        height: "10px", // Adjust size of the marker
        backgroundColor: "#4169E1", // Example marker color
        borderRadius: "50%", // Rounded marker
    };

    const listItemStyle = {
        position: "relative",
        paddingLeft: "20px", // Adjust the space between the marker and text
        marginBottom: "8px", // Adjust spacing between list items
    };

    const buttonContainer = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "startS",
        alignItems: "start"
    };

    const special = {
        backgroundColor: "green",
        padding: "10px",
        borderRadius: "10px"
    }


    const { benefits, kind, price, priceAmount } = props;

    return (

        <div style={outer}>

            <div style={{width: "100%", }}>
                <h4  style={special}>{kind}</h4>
                <h4 style={h4}>{price}</h4>
                
            </div>


            <div style={buttonContainer}>

                

                {props.isVisible ? <button
                    style={buttonStyle}
                    onClick={async () => {
                        console.log(data.churchName)
                        console.log(priceAmount)
                        console.log(kind)
                        await updatePay(priceAmount, kind);
                        await paymentCheck(data.churchName);
                    }}
                >
                    Pay Now
                </button> : <h3 className="title" style={{fontSize: "30px"}}> Waiting for you...</h3>}

                <p className="title">Best dollar price for all memmbers, in all places </p>
            </div>


            <ul style={listStyle}>

                {benefits.map((benefit, index) => (

                    <li key={index} style={listItemStyle}>

                        <span style={markerStyle}></span> {benefit}

                    </li>
                ))}

            </ul>

        </div>

    );
}