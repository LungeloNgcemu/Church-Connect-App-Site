import React, { useState, useContext } from 'react';
import PhoneNumber from './phone_number';
import PhoneInput from 'react-phone-number-input';
import CustomInputRegistration from './custom_input_registration';
import { useNavigate } from "react-router-dom";
import pray from "../assets/pray.jpg"
import { ConectionContext } from '../connectionContext';
import AppwriteConnect from '../appwriteDatabase';
import { ID } from 'appwrite';
import supabaseConnnection from '../supabaseDatabase';
import { useEffect } from 'react';
import "../styles/global.css"


//Completed registeation..test it next

//Code page needs user id



function RegistrationForm() {
    let isValid = false;
    let go = false;
    let token = "";
    let authenticated = false

    const appwriteConnection = AppwriteConnect();


    const { setData, data, setUserId, userId } = useContext(ConectionContext)
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const [isPass, setIsPass] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });

        console.log(name)
        console.log(value)
    };


    const handlePhoneNumberChange = (value) => {
        setValue(value);
        setData({
            ...data,
            phoneNumber: value
        });

        console.log(data)
    };

    const registerApperite = async () => {

        try {

            const tokenx = await appwriteConnection.createPhoneToken(
                ID.unique(),
                data.phoneNumber
            );

            console.log(`this is token : ${tokenx.userId}`)

            token = tokenx.userId


            authenticated = true;
        } catch (error) {

            console.log(error)
        }

    }


    const updatId = () => {
        setUserId(token)
    }

    const numberCheck = async (number) => {

        try {
            const { data: numberData, error } = await supabaseConnnection
                .from('Church')
                .select()
                .eq("ContactNumber", number);

            // Handle potential query errors
            if (error) {
                console.error('Query error:', error);
                return;
            }

            // Check if any data was returned
            if (numberData.length > 0) {
                console.log('Number exists:', numberData);
                alert("Please use another number, The current number is already used in another church.")
                // Process the data as needed
                isValid = false;
            } else {
                console.log('Number does not exist');
                isValid = true;
            }
        } catch (err) {
            console.log(err)
        }
    }




    const insertSupabase = async () => {

        console.log(data)

        const { message, error } = await supabaseConnnection.from('Church').insert([
            {
                ChurchUser: data.userName,
                Email: data.email,
                ContactNumber: data.phoneNumber,
                ChurchName: data.churchName,
                Address: data.address,
                About: data.vision,
                Read: data.mission,
                ChurchId: data.password,
                ChurchUserId: userId
            },
        ])
            .select()

        if (error) {
            console.log(error)
        } else {
            console.log(message)
        }

    }

    const resetForm = () => {
        setData({
            userName: '',
            churchName: '',
            vision: '',
            mission: '',
            email: '',
            address: '',
            password: ''
        });
        setValue('');
    };

    const checkChurchName = async () => {



        alert(`name : ${data.churchName}`);

        try {
            const { data: data2, error } = await supabaseConnnection
                .from('Church')
                .select('ChurchName')
                .eq('ChurchName', data.churchName)
                .single();

            console.log(data2)

            if (error) {
                go = true;
                // setIsPass(true);
            } else if (data2) {
                alert("A church with this name already exist :1");
            } else {
                // setIsPass(true);
                go = true;
            }
        } catch (error) {
            console.log(error);
            alert("A church with this name already exist : 2");
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data)
        console.log("here")


        //Check if the object is not empty
        if (Object.values(data).every(value => value !== "")) {

            //TODO  church name already exist!!
            numberCheck(data.phoneNumber)

            if (isValid) {

                await checkChurchName();
                console.log(isPass)
                if (go) {

                    console.log("here2")
                    //inPut data and register number
                    await insertSupabase();
                    await registerApperite();
                    // Handle form submission
                    console.log('Form data submitted:', data);


                    if (authenticated) {
                        updatId();
                        console.log("next page - updated")
                        navigate('code');
                    };

                }
            }



            // Reset form fields after submission

        } else {

            alert("Please complete the form first, Thank you.")
        };

    };

    const logOut = () => {

        try {


            const preSession = appwriteConnection.getSession("current");

            if (preSession) {

                appwriteConnection.deleteSession('current');
            }

        } catch (error) {

            console.log(`error loging out ${error}`);
            alert("session error")

        }

    }

    useEffect(() => {
        resetForm();
        logOut();
    }, []);


    const formStyle = {
        color: "white",
        textShadow: "2px 4px 3px rgba(0, 0, 0, 0.3)",
        // backgroundColor: "red",
        backgroundImage: `url(${pray})`,
        backgroundSize: "cover",
        padding: "100px",
        paddingBottom: "90px",
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-end",
        borderRadius: "20px" // Align items to the right
    };

    const labelStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "45px",
        flexWrap: "wrap"

    };

    const inputStyle = {
        marginLeft: "10px",
        width: "60%",
        height: "40px",
        fontSize: "20px",
        borderRadius: "10px",
        border: "none",
        boxShadow: "0 1px 8px grey",
        paddingLeft: "20px",

    };

    const button = {
        margin: "0px",
        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "10px", // Example border radius
        cursor: "pointer", // Change cursor on hover
        boxShadow: "0 1px 8px grey",
    };


    const label = {
        fontSize: "2rem"
    }


    const nunberStyle = {
        borderRaduis: "20px",
        width: "60%"

    }




    return (

        <form style={formStyle} onSubmit={handleSubmit}>


            <div className='labelStyle'>
                <label style={label}>Full Name:</label>
                <input
                    className='inputStyle'
                    type="text"
                    name="userName"
                    value={data.userName}
                    onChange={handleChange}
                />
            </div>
            <div style={labelStyle}>
                <label style={label}>Church Name:</label>
                <input
                  className='inputStyle'
                    type="text"
                    name="churchName"
                    value={data.churchName}
                    onChange={handleChange}
                />
            </div>
            <div style={labelStyle}>
                <label style={label} >Vision Statement:</label>
                <textarea
                      className='inputStyle'
                    name="vision"
                    value={data.vision}
                    onChange={handleChange}
                />
            </div>
            <div style={labelStyle}>
                <label style={label} >Mission Statement:</label>
                <textarea
                   className='inputStyle'
                    name="mission"
                    value={data.mission}
                    onChange={handleChange}
                />
            </div>
            <div style={labelStyle}>
                <label style={label} >Email Address:</label>
                <input
                    className='inputStyle'
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div style={labelStyle}>
                <label style={label} >Phone Number:</label>
                <PhoneInput
                className='numberStyle'
                    placeholder="Enter phone number"
                    value={value}
                    onChange={handlePhoneNumberChange}
                    inputComponent={CustomInputRegistration}

                />
            </div>
            <div style={labelStyle}>
                <label style={label} >Mailing Address:</label>
                <textarea
                     className='inputStyle'
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                />
            </div>

            <div style={labelStyle}>
                <label style={label}>Password:</label>
                <input
                    type="password"
                     className='inputStyle'
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
            </div>

            <input style={button} type="submit" />
        </form>

    );
}

export default RegistrationForm;
