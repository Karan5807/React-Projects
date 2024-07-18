import React from 'react';

const CurrencyInput = ({ amount, onAmountChange }) => {
  return (
    <div className='container text-black text-center font-medium font-sans flex justify-center gap-4'>
      <h6 className='text-white p-2 m-2 text-lg'>Amount</h6>
      <input
      className='text-center p-2 m-2 text-lg rounded-md'
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
    </div>
  );
};

export default CurrencyInput;
