import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
import "../styles/input.css";
import { useContext } from 'react';
import { ConectionContext } from '../connectionContext';
import AppwriteConnect from '../appwriteDatabase';
import CircularIndeterminate from './progress';


export default function Code() {

    let sessionId = ""
    const [isLoading, setIsLoading] = useState(false);
    const appwriteConnection = AppwriteConnect();
    const { userId } = useContext(ConectionContext);
    const navigate = useNavigate();

    console.log(userId);


    const [otp, setOtp] = useState('');

    // const check = () => {

    //     try {
    //         const preSession = appwriteConnection.getSession('current');

    //         if (preSession) {

    //             navigate('account');

    //         }

    //     } catch (error) {

    //         console.log(error);

    //     }

    // }

    // useEffect(() => {
    //     check();
    // }, []); 

    const login = async (code) => {

        setIsLoading(true);

        console.log(userId);

        console.log(code)

        try {
            console.log(userId)
            console.log(code)



            const session = await appwriteConnection.createSession(
                userId,
                code
            );


            // Session creation successful
            sessionId = session.$id

            if (session.current === true) {
                setIsLoading(false);
                navigate('account');
            } else {
                if (sessionId !== "") {
                    setIsLoading(false);
                    navigate('account');
                } else {
                    setIsLoading(false);
                    alert("Oops...you enterd a wrong code");
                }
            }

        } catch (error) {
            setIsLoading(false);
            console.log(error)
            alert("Sorry, The code you entered might be Wrong")
        }


    }



    const setOncahnge = (value) => {

        console.log(value)
        setOtp(value)
    }




    const button = {
        margin: "10px",
        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED",// Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
        boxShadow: "0 1px 8px grey",
        height: "45px"


    };

    const digits = {

        margin: "5px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #6495ED",
        boxShadow: "0 1px 8px grey",




    }




    return (

        <div style={{ position: "relative" }}>
            {isLoading ? <div style={{ width: "100%", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <div style={{}}>
                    <CircularIndeterminate />
                </div>
            </div> : null}


            <form onSubmit={(e) => { e.preventDefault(); login(otp); }}>

                <div style={{ display: "flex" }}>

                    <OtpInput
                        value={otp}
                        onChange={setOncahnge}
                        numInputs={6}
                        separator={<span>-</span>}
                        renderInput={(props) => <input  {...props} />}
                        inputStyle={digits}
                        shouldAutoFocus={true}

                    />

                </div>
                <br /><br />
                <button disabled={isLoading} type='submit' style={button} > submit</button>

            </form>

        </div>


    )
}
