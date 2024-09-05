import React from 'react';
import NavBar from '../components/navbar';
import Tops from '../components/top';
import Footer from '../components/footer';
import logo from '../assets/logoClass.png'
import pray from '../assets/pray.jpg'
import { useState } from 'react';
import supabaseConnnection from '../supabaseDatabase';

import CircularIndeterminate from '../components/progress';



export default function FeedBack() {

    const [isLoading, setIsLoading] = useState(false);

    const [FeedBack, setFeedBack] = useState({
        Name: "",
        Surname: "",
        Email: "",
        Comment: ""
    });

    function onchange(e) {
        setFeedBack({ ...FeedBack, [e.target.name]: e.target.value });
    }

    async function onSubmit(e) {
        setIsLoading(true)
        e.preventDefault();
        console.log(FeedBack);
        await uploadComment()
        setIsLoading(false)
    }

    async function uploadComment() {
        try {
            const { error } = await supabaseConnnection
                .from('FeedBack')
                .insert({
                    Name: FeedBack.Name,
                    Surname: FeedBack.Surname,
                    Email: FeedBack.Email,
                    Comment: FeedBack.Comment
                });

            if (error) {
                setIsLoading(false)
                console.error(`Error inserting data: ${error.message}`);
            } else {
                console.log('Comment submitted successfully:', FeedBack);
                // Clear form state
                setFeedBack({
                    Name: "",
                    Surname: "",
                    Email: "",
                    Comment: ""
                });
                setIsLoading(false)
                alert("Thank you for your feed back")
            }
        } catch (err) {
            setIsLoading(false)
            console.error(`Unexpected error: ${err}`);
        }
    }

    const container = {
        display: "flex",
        justifyContent: "space-around",
        // backgroundColor: "red",
        width: "100%",
        height: "100%",
        marginBottom: "100px",
        position: "relative" 
    }

    const top = {
        display: "flex",
        flexDirection: "column",
        width: "100%",


    }

    const containerText = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
    }


    const formStyle = {
        color: "white",
        textShadow: "2px 4px 3px rgba(0, 0, 0, 0.3)",
        backgroundColor: "red",
        backgroundImage: `url(${pray})`,
        backgroundSize: "cover",
        padding: "30px",
        paddingBottom: "90px",
        margin: "30px",
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
        marginTop: "5px",
        marginBottom: "5px",
        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "10px", // Example border radius
        cursor: "pointer", // Change cursor on hover
        boxShadow: "0 1px 8px grey",
        height: "45px"
    };


    const label = {
        fontSize: "2rem"
    }


    const nunberStyle = {
        borderRaduis: "20px",
        width: "60%"

    }



    return (

        <div style={top}>
            <Tops heading="Feed Back" show={true} />

            <div style={container}>

            <div>

            </div>

            {isLoading ? <div style={{ width: "100%", height: "100%" ,position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>

<div style={{}}>
    <CircularIndeterminate />
</div>
</div> : null}

                <form style={formStyle}
                    onSubmit={onSubmit}
                >
                    <div style={labelStyle}>
                        <label style={label}>Name:</label>
                        <input
                            className='inputStyle'
                            type="text"
                            name="Name"
                            value={FeedBack.Name}
                            onChange={onchange}
                        />
                    </div>
                    <div style={labelStyle}>
                        <label style={label}> Surname:</label>
                        <input
                            className='inputStyle'
                            type="text"
                            name="Surname"
                            value={FeedBack.Surname}
                            onChange={onchange}
                        />
                    </div>

                    <div style={labelStyle}>
                        <label style={label} >Email Address:</label>
                        <input
                            className='inputStyle'
                            type="email"
                            name="Email"
                            value={FeedBack.Email}
                            onChange={onchange}
                        />
                    </div>

                    <div style={labelStyle}>
                        <label style={label} >Comment:</label>
                        <textarea
                            className='inputStyle'
                            name="Comment"
                            value={FeedBack.Comment}
                            onChange={onchange}
                        />
                    </div>


                    <button disabled={isLoading} type='submit' style={button} > submit</button>
                </form>

            </div>
            
            <Footer />

        </div>

    );
}