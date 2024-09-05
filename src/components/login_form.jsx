import React, { useState, useEffect, useContext } from 'react';
import PhoneNumber from './phone_number';
import { useNavigate } from "react-router-dom";
import AppwriteConnect from '../appwriteDatabase';
import supabaseConnnection from '../supabaseDatabase';
import { ConectionContext } from '../connectionContext';
import Loading from './spinner';
import LoadingSpinner from './spinner';
import CircularIndeterminate from './progress';

export default function MyForm() {

    //Check if the number is in the data base

    const [isLoading, setIsLoading] = useState(false);




    const navigate = useNavigate();
    const appwriteConnection = AppwriteConnect();
    const [inputs, setInputs] = useState({});
    const [valueNumber, setValue] = useState('');
    const { setData, setUserId } = useContext(ConectionContext)


    const check = () => {

        try {
            // const preSession = appwriteConnection.getSession('current');
            const preSession = appwriteConnection.get();

            if (preSession) {

                navigate('account');

            }

        } catch (error) {

            console.log(error);

        }

    }

    const logOut = () => {

        try {


            const preSession = appwriteConnection.getSession('current');

            if (preSession) {

                appwriteConnection.deleteSession('current');
            }

        } catch (error) {

            console.log(`error loging out ${error}`);

        }

    }

    useEffect(() => {
        logOut();
    }, []);


    //Map input


    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setInputs(prev => ({ ...prev, [name]: value }))


    }


    const handleSubmit = async (event) => {


        setIsLoading(true);

        event.preventDefault();

        console.log(valueNumber);

        setIsLoading(true);

        const { data, error } = await supabaseConnnection
            .from('Church')
            .select()
            .eq('ContactNumber', valueNumber)

        if (error) {

            setIsLoading(false);
            alert("You have no church registered, please go register.");

        } else {

            console.log(data);

            console.log(data[0].id);

            const newObject = data[0]



            setData({
                userName: newObject.ChurchUser,
                email: newObject.Email,
                phoneNumber: newObject.ContactNumber,
                churchName: newObject.ChurchName,
                address: newObject.Address,
                vision: newObject.About,
                mission: newObject.Read,
                password: newObject.ChurchId,
                profileImage: newObject.ProfileImage

            });


            try {
                //it has to be a user already in side
                const token = await appwriteConnection.createPhoneToken(
                    newObject.ChurchUserId,
                    valueNumber
                );

                // alert(token.userId)
                setUserId(token.userId)

                if (token) {
                    setIsLoading(false);
                    /// send to code
                    navigate('/code');
                };

            } catch (error) {
                setIsLoading(false);
                console.log(error)
            };
        };
    };





    const button = {
        margin: "10px",
        width: "100%", // Make button full width of parent container
        padding: "12px", // Adjust padding as needed
        backgroundColor: "#6495ED",// Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
        boxShadow: "0 1px 8px grey",
        height: "45px"

    };




    function handleClick(name) {
        navigate(name);
    };




    return (

        <div style={{position: "relative"}}>
            {isLoading ? <div style={{ width: "100%", position: "absolute", display :"flex", justifyContent: "center", alignItems: "center" }}>

            <div style={{ }}>
               <CircularIndeterminate/>    
            </div>
            </div> : null}

            <form onSubmit={handleSubmit}>


                <div>
                    <div style={{ display: "flex" }}><label style={{ paddingRight: "20px", fontSize: "1.5rem" }}></label>

                        <PhoneNumber value={valueNumber} setValue={setValue} />

                    </div>
                    <br /><br />


                    <button disabled={isLoading}   type='submit' style={button} > submit</button>


                </div>



            </form></div>


    )
}
