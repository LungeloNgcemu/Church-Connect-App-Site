import { Margin } from '@syncfusion/ej2-react-charts';
import React from 'react';
import min from 'react-phone-number-input';
import YouTube from 'react-youtube';


export default function Video() {

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        // Access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const onPlay = (event) => {
        // Access to player in all event handlers via event.target
        event.target.playVideo();
    };

    const onPause = (event) => {
        // Handle what happens when the video is paused
        console.log("Video paused");
        event.target.pauseVideo(); // This line is redundant but shows access to pause programmatically
    };
    const container = {
        minheight: "500px",

        marginTop: "30px",
        display: "flex",

        backgroundColor: "rgba(128, 128, 128, 0.089)",
        padding: "20px",
        borderRadius: "20px",
        flexWrap: "wrap"

    }

    const wrapperStyle = {
        //  backgroundColor: "red",
        minWidth: "50%",
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flex: "1",
        borderRadius: "20px",
        // overflow: "hidden", // Ensures the border-radius is applied properly
    };

    const videoText = {
        display: "flex",
        flexDirection: "column",
        padding: "50px",
        alignItems: "center",

        flex: "1",
        textAlign: "center"
    }

    const items = {
        // backgroundColor: "red",
        fontSize: "1.1rem",
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        flexWrap: "wrap",

    }

    const vidSize = {

        flex: "1"
    }

    return (

        <div style={container}>

            <div style={wrapperStyle}>
                <YouTube videoId="j65RKOoOaPM" style={vidSize} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
            </div>

            <div style={videoText}>
                {/* <h4>Features</h4> */}
                {/* 
                https://youtu.be/j65RKOoOaPM */}

                <div style={items}>

                    <h4 style={{ fontSize: "2.2rem", }}>The Power of Fellowship</h4>

                    <p>Church Event Calendar</p>
                    <p>Social Media Posts</p>
                    <p>Church Chat</p>
                    <p>YouTube Streaming</p>
                    <p>Scheduled Notifications<br></br> (Comming soon)</p>
                    <p>So Much More...</p>

                </div>



            </div>

        </div>


    );
}