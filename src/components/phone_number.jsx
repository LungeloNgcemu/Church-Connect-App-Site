import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import React, { useState } from 'react';
import CustomInput from './customInput';
import '../styles/input.css'

export default function PhoneNumber({ value, setValue }) {


    const nunberStyle = {
        borderRaduis: "20px",

 

    }


    return (
        <PhoneInput
            style={ nunberStyle }
            placeholder="Enter phone number"
            value={ value }
            onChange={ setValue }
            inputComponent={CustomInput}
        
            
        />
    );
}
