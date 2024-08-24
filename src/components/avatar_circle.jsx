import React from 'react';
import { ConectionContext } from '../connectionContext';
import { useContext } from 'react';
import icon from '../assets/picIcon.png'
import { useEffect } from 'react';
import { useState } from 'react';
import supabaseConnnection from '../supabaseDatabase';
import AppwriteConnect from '../appwriteDatabase';


export default function Avatar() {

    const { data } = useContext(ConectionContext);
    const [profileImage, setProfileImage] = useState(icon);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const appwriteConnection = AppwriteConnect()

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


        const fetchProfileImage = async () => {





            if (phoneNumber) {

                console.log(`here now ${phoneNumber}`)// Ensure phoneNumber is available
                try {
                    const { data: churchData, error } = await supabaseConnnection
                        .from('Church')
                        .select()
                        .eq("ContactNumber", phoneNumber);

                    console.log(`church data : ${churchData}`)

                    if (error) {
                        throw error;
                    }

                    // Assuming `churchData` contains the fields needed
                    const church = churchData[0];
                    // Get the first result if needed
                    // alert(churchData)
                    // alert(church["ProfileImage"])
                    setProfileImage(
                        church["ProfileImage"]
                    );

                    console.log("updated")
                } catch (error) {
                    // alert("Issue while getting church data");
                    console.error("Error fetching church data:", error);
                }
            }
        };

        fetchUserPhoneNumber()
        fetchProfileImage();
    }, [data,supabaseConnnection]); // Only re-run if profileImage changes


    const outer = {
        backgroundColor: "#6495ED",
        height: "130px",
        width: "130px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const inner = {

        backgroundColor: "white",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
        overflow: " hidden"
    }

    const image = {

        height: "100%",
        width: "100%",
        objectFit: "cover",

    }

    const column = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    }


    return (

        <>
            <div style={column}>

                <div>

                    <div style={outer}>

                        <div style={inner}>  <img style={image} src={profileImage} alt="Profile" /> </div>


                    </div>



                </div>



                <h4 style={{ margin: "0px" }}>{data.userName}</h4>
            </div>

        </>
    );
}