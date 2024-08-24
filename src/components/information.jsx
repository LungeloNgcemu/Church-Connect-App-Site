import React from 'react';

import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ConectionContext } from '../connectionContext';
import supabaseConnnection from '../supabaseDatabase';
import { useEffect } from 'react';
import { useState } from 'react';
import AppwriteConnect from '../appwriteDatabase';





export default function Information() {




    const appwriteConnection = AppwriteConnect()

    const { data, setData } = useContext(ConectionContext)
    const [phoneNumber, setPhoneNumber] = useState(null);



    console.log(data);


    useEffect(() => {



        const fetchUserPhoneNumber = async () => {
            try {
                // Assuming `getCurrentUser` is the correct method to fetch user details
                const user = await appwriteConnection.get();
                setPhoneNumber(user.phone); // Adjust according to the actual user object structure
                console.log(`Phone Number: ${user.phone}`);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };


        const getChurch = async () => {
            if (phoneNumber) {

                console.log(`here ${phoneNumber}`)// Ensure phoneNumber is available
                try {
                    const { data: churchData, error } = await supabaseConnnection
                        .from('Church')
                        .select()
                        .eq("ContactNumber", phoneNumber);

                    if (error) {
                        throw error;
                    }

                    console.log(churchData)

                    // Assuming `churchData` contains the fields needed
                    const church = churchData[0]; // Get the first result if needed
                    setData({
                        userName: church.ChurchUser,
                        churchName: church.ChurchName,
                        vision: church.About,
                        mission: church.Read,
                        email: church.Email,
                        address: church.Address,
                        password: church.ChurchId,
                        profileImage:church.profileImage
                    });

                    console.log("updated")
                } catch (error) {
                    // alert("Issue while getting church data");
                    console.error("Error fetching church data:", error);
                }
            }
        };


        fetchUserPhoneNumber();
        getChurch();




        console.log(`number real : ${phoneNumber}`);
    }, [data.churchName, appwriteConnection]);

    const [displayInfo, setDisplayInfo] = useState({
        expire: "",
        payed: "",
        code: "",
        plan: ""
    })

    const { expire, payed, code, plan } = displayInfo ?? {}




    const navigate = useNavigate();

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

            const plan = planData["Plan"]

            return { plan };
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }



    async function dataInfo(churchName) {

        try {

            const { data: churchData, error } = await supabaseConnnection
                .from('Church')
                .select()
                .eq('ChurchName', churchName)
                .single();

            if (error) {
                console.error('Error fetching data:', error);
                throw new Error('Error fetching church data');
            }

            console.log(churchData)

            const expire = churchData["Expire"];
            /********************************** */
            const payed = churchData["Payed"];
            const code = churchData["ChurchId"];
            /************************************* */


            return { expire, payed, code }

        } catch (error) {

            alert("Dates are not available right now")

        }

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
            alert("You canot make payment until your within three days before date of expiry.")
            console.log('More than three days from the expiration date.');
        }
    };

    useEffect(() => {
        // Assuming getPlan and dataInfo are functions that return promises or synchronous values
        const fetchPlanAndInfo = async () => {
            try {
                const { plan } = await getPlan(data.churchName); // Await if getPlan is asynchronous
                const { expire, payed, code } = await dataInfo(data.churchName);

                setDisplayInfo({
                    expire: expire,
                    payed: payed,
                    code: code,
                    plan: plan
                })// Await if dataInfo is asynchronous

                // Do something with plan, expire, payed, and code
                console.log(plan, expire, payed, code);
            } catch (error) {
                console.error('Error fetching plan or info:', error);
            }
        };

        fetchPlanAndInfo();
    }, [data.churchName]);


    const logOut = () => {


    }



    const container = {

        // backgroundImage: `url(${back})`,
        borderRadius: "20px",
        margin: "10px",
        height: "550px",
        width: "100%",
        // boxShadow: "0 1px 8px grey",
        marginBottom: "50px",


    }

    const formLay = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh"

    }


    const controlContainer = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingTop: "60px",
        paddingBottom: "60px",

    }


    const overlayContentStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 1px 8px grey",
        margin: "10px"
    };

    const buttonStyleL = {
        margin: "10px",

        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#556B2F", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer",

    };

    const buttonStyleR = {
        margin: "10px",

        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer",
        // Change cursor on hover
    };


    const info = {

        fontSize: "1.4rem",
        fontWeight: "bold"
    }


    return (
        <>

            <div style={controlContainer}>



                <div style={overlayContentStyle}>
                    <h1 style={{ margin: "0px" }}>Church Connect Information</h1>

                    <p style={info}>Current Plan limit : comming soon</p>
                    <p style={info}>Current Church Members : Coming soon</p>
                    <p style={info}>Church passcode : {code}</p>


                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>

                            {/* <button style={buttonStyleL}  > Update Plan</button> */}

                        </div>
                    </div>
                </div>

                <div style={overlayContentStyle}>
                    <h1 style={{ margin: "0px" }}>Payment Connect Information</h1>

                    <p style={info}>Currrent Plan : {plan}</p>
                    <p style={info}>Last Payment Date : {payed}</p>
                    <p style={info}>Payment Due Date: {expire}</p>


                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>

                            {/* <button onClick={() => { paymentCheck (data.churchName) }} style={buttonStyleR}  > Make Paymnet</button> */}

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}