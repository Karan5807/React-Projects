import React, { useState } from 'react';
import { Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

const AmountInput = () => {
  const [amount, setAmount] = useState("");
  const [isValid, setValid] = useState(true);

  const handleInputChange = (e) => {
    const input = e.target.value;
    // Check if the input is a valid number
    const isValidNumber = /^\d*\.?\d+$/.test(input);
    setAmount(input);
    setValid(isValidNumber);
  };

  return (
    <div>
      <TextField 
      id="outlined-basic" 
      label="Enter Amount" 
      variant="outlined"         
      value={amount}
      onChange={handleInputChange}
      placeholder="Enter a valid amount"
      style={{ borderColor: isValid ? 'green' : 'red' }} />
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid amount.</p>}
    </div>
  );
};

export default AmountInput;
