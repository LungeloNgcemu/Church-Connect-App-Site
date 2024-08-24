import React, { useEffect } from "react";
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import { useState } from "react";
import { ConectionContext } from "../connectionContext";
import supabaseConnnection from "../supabaseDatabase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { io } from "socket.io-client";


export default function Payment() {



    // const [token, setToken] = useState("");
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)

    const { data, pay } = useContext(ConectionContext)

    const container = {
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
    }

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
        const newSocket = io('http://localhost:3000');
        setSocket(newSocket);

        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);


        newSocket.on('paymentResponse', (response) => {
            if (response.success) {
                alert('Payment successful!');
                goAccount();

            } else {
                alert('Payment failed. Please try again.');
                goAccount();
            }
        });


        return () => {
            clearTimeout(loadingTimer);
            newSocket.disconnect();
        };

    }, [])





    return (
        //add other stuff also
        <div style={container}>


            {isLoading ? <h1>Loading...</h1> :


                <PaymentForm
                    applicationId="sq0idp-DrOw6_MexNGDsb5x7fSN_Q"
                    cardTokenizeResponseReceived={async (token, verifiedBuyer) => {

                        console.log('token:', token.token);
                        console.log('verifiedBuyer:', verifiedBuyer);

                        const send = {

                            token: token.token,

                            phoneNumber: " data.phoneNumber",
                            churchName: "data.churchName",

                            amount: pay.amount,
                            plan: pay.plan

                        };
                        //TODO gap here on choosing a lower plan
                        // excecute token to the backend 
                        if (socket) {
                            // Emit an event to the server to process the payment
                            socket.emit('processPayment', { send });
                        } else {
                            alert('Socket connection not established. Please try again.');
                        }

                    }}
                    locationId='LVVMACRKAH4N4'
                >
                    <CreditCard />
                </PaymentForm>
            }
        </div>

    );
}
