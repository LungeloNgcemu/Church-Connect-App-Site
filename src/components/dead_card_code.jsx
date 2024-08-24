
// // src/PaymentForm.js
// import React, { useEffect, useState } from 'react';
// import { payments } from '@square/web-sdk';
// import { io } from 'socket.io-client';

// const PaymentForm = () => {
//     const [card, setCard] = useState(null);
//     const [socket, setSocket] = useState(null);

  
    

//     useEffect(() => {


//         const initializeSquare = async () => {
//             try {
           
//                 const paymentsInstance = await payments('sandbox-sq0idb-RvMLEVf4fWWo1n12S1LbRQ',
//                     'EAAAl98skTyTYt2L2whDGt5NTn5Km0hVr5TAj0MDyNjxl9ADylracogVcAf_SuFt');
//                     const cardInstance = await paymentsInstance.card();
//                     await cardInstance.attach('#card');
                 
            
//             } catch (error) {
//                 console.error('Failed to initialize Square payments:', error);
//                 alert('Failed to initialize Square payments:', error);
//             }
//         };



//         if (!card) {
//             initializeSquare();
//             //   setCard(cardInstance);

//         }
//         const newSocket = io('http://localhost:3000');
//         setSocket(newSocket);

//         // Clean up the socket connection on unmount
//         return () => {
//             newSocket.disconnect();
//         };
//     }, []);

//     const handlePayment = async () => {
//         if (card) {
//             try {
//                 const result = await card.tokenize();
//                 if (result.status === 'OK') {

//                     await processPayment(result.token);

//                 } else {
//                     console.error(result.errors);
//                     alert('Failed to tokenize card details. Please try again.');
//                 }
//             } catch (error) {
//                 console.error('Error during tokenization:', error);
//                 alert('An error occurred. Please try again.');
//             }
//         }
//     };

//     const processPayment = (token) => {
//        

//             // Listen for payment errors
//             socket.on('paymentError', (error) => {
//                 console.error('Error processing payment:', error);
//                 alert('An error occurred while processing your payment. Please try again.');
//             });
//         } else {
//             alert('Socket connection not established. Please try again.');
//         }
//     };

//     const contain = {
//         backgroundColor: "red",
//         padding: "20px",
//         borderRadius: "20px",
//         margin: "20px"
//     }

//     return (
//         <div>
//             <div id="card" style={contain}></div>
//             <button onClick={handlePayment} id="card-button">Pay</button>
//         </div>
//     );
// };

// export default PaymentForm;