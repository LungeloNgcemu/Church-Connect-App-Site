import { useState, createContext, useEffect } from "react";
import React from "react";

export const ConectionContext = createContext();

export default function ConectionProvider({ children }) {
    const [data, setData] = useState(() => {
        // Get the initial state from localStorage
        const savedData = localStorage.getItem('connectionData');
        return savedData ? JSON.parse(savedData) : {
            userName: "",
            email: "",
            phoneNumber: "",
            churchName: "",
            address: "",
            vision: "",
            mission: "",
            password: "",
        };
    });

    const [pay, setPay] = useState(() => {
        const savedPay = localStorage.getItem('connectionData2');
        return savedPay ? JSON.parse(savedPay) : {
            amount: 0,
            plan: ""
        };
    });

    useEffect(() => {
        // Save data to localStorage whenever it changes
        localStorage.setItem('connectionData', JSON.stringify(data));
        localStorage.setItem('connectionData2', JSON.stringify(pay));
    }, [data,pay]);

    const [userId, setUserId] = useState('');
  

    return (
        <ConectionContext.Provider value={{ data, userId, pay, setData, setUserId, setPay }}>
            {children}
        </ConectionContext.Provider>
    );
}







































// import { useState, createContext } from "react";
// import React from "react";

// export const ConectionContext = createContext()

// export default function ConectionProvider({children}) {

//     const [data, setData] = useState({
//         userName : "",
//         email:"",
//         phoneNumber: "",
//         churchName: "",
//         address: "",
//         vision: "",
//         mission: "",
//         password: "",
//         profileImage: ""
//     });

//     const [data, setData] = useState(() => {
//         // Get the initial state from localStorage
//         const savedData = localStorage.getItem('connectionData');
//         return savedData ? JSON.parse(savedData) : {};
//     });

//     useEffect(() => {
//         // Save data to localStorage whenever it changes
//         localStorage.setItem('connectionData', JSON.stringify(data));
//     }, [data]);


//     const [userId, setUserId] = useState('');

//     return (
//         <ConectionContext.Provider value={{data,userId, setData,setUserId}}>
//             {children}
//         </ConectionContext.Provider>
//     );
// }



