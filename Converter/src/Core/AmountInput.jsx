// src/components/CurrencyInput.js
import React from 'react';

const CurrencyInput = ({ amount, onAmountChange }) => {
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
    </div>
  );
};

export default CurrencyInput;
