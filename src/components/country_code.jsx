import React from "react";


export default function CountryCode({ props }) {

    const { codes } = props




    return (
        <div className="dropdown">
            <button class="dropbtn">Code</button>
            <div class="dropdown-content">

                {codes.map( (code, index) => (

                    <a key={index}  href="#">{code}</a> 

                ))}
               

            </div>

        </div>
    )
};