import React from 'react';

// Custom Input Component
const CustomInputRegistration = React.forwardRef(({ value, onChange, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      style={{
       width: "100%",
        backgroundColor: 'white',
        color: 'black',  // Optional: to make the text visible against the red background
        padding: '10px',
        border: '1px solid #6495ED',
        boxShadow: "0 1px 8px grey",
        // Optional: to add a border
      }}
      {...rest}
    />
  );
});

export default CustomInputRegistration;