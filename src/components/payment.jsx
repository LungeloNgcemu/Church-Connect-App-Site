import React, { useEffect } from "react";

import { useState } from "react";
import { ConectionContext } from "../connectionContext";
import supabaseConnnection from "../supabaseDatabase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Tops from "./top";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Footer from "../components/footer"


export default function Payment() {

    const base = "https://awesome-lilac-drug.glitch.me"



    // const [token, setToken] = useState("");
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const [isWait, setWait] = useState(false)

    const { data: infoData, pay } = useContext(ConectionContext)

    // alert( pay.amount)


    async function getPlan(churchName) {
        try {
            const { data: planData, error } = await supabaseConnnection
                .from('Church')
                .select('Plan')
                .eq('ChurchName', churchName)
                .single();

            if (error) {
                console.error('Error fetching data:', error);
                throw new Error('Error fetching plan data');
            }

            return { currentPlan: planData["Plan"] };
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }

    const goAccount = () => {
        navigate("account");
    }

    useEffect(() => {

        console.log(pay.amount)
        if (pay.amount == 0) {

            alert("please return to the previouse pay and select the option again.")
        }

        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => {
            clearTimeout(loadingTimer);

        };



    }, [pay.amount])




    async function createOrder() {
        setWait(true);

        return fetch(`${base}/my-server/create-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },


            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        amount: pay.amount,
                    },
                ],
            }),
        })
            .then((response) => response.json(),)
            .then((order) => order.id)
            .finally(() => {
                setWait(false); // Ensure this runs after the promise resolves or rejects
            });
    };

    async function onApprove(data) {
        // setIsLoading(false);
        return fetch(`${base}/my-server/capture-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID,
                churchName: infoData.churchName,
                plan: pay.plan
            })
        })
            .then((response) => response.json())
            .then((orderData) => {
                const name = orderData.payer.name.given_name;
                // alert(`Transaction completed by ${name}`);
                //navigate away
                alert("Congratultions Paymment Complete");
                goAccount();
            });

    }

    const handleClick = (path) => (event) => {
        event.preventDefault(); // Prevent the default anchor tag behavior
        navigate(path);
    };



    const initialOptions = {
        clientId: "AcyxdMQ3U1bcmEKvAKWHKtXcAZ3Jw-zOHK6COb6H8-sUyjsBrfKI-V6tDVdMPE0AQf9rGoJWxN2KF3t_",
        currency: "USD",
        intent: "capture",
    };
    const container = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // 'contentAlign' is not a valid CSS property, use 'alignItems'

        // Set to full viewport width
        overflow: "hidden" // Hide any overflow if necessary
        // Assuming you want full width, not height
    };





    return (
        //add other stuff also
        <div>

            <div style={container} >

                <div style={{
                    position: "absolute", top: "0",
                    right: "0",
                    zIndex: "100",
                    /* Optional: to ensure the background is visible */
                    padding: "10px",
                    margin: "50px",
                    fontSize: "1.5rem"
                }}>

                <a style={{textDecoration: "none,", color: "black"}} href="/account"  onClick={handleClick("/account")}>Return to Account</a>
                    
                </div>




                {/* <h1 style={{ marginBottom: "30vh" }}>Make Payment</h1> */}
                <Tops
                    heading="Choose Payment Option" />

                {isLoading ? <h1>Loading...</h1> :
                    <div style={{ backgroundColor: "white", width: "50%", marginBottom: "40px" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            {isWait ? <h1>Please wait Loading..</h1> : <di></di>}
                        </div>

                        <PayPalScriptProvider options={initialOptions}>

                            <PayPalButtons createOrder={createOrder}
                                onApprove={onApprove} />

                        </PayPalScriptProvider>
                    </div>


                }


            </div>

            <Footer />
        </div>



    );
}
