import React from 'react';

const AmtOutput = ({ amount, fromCurrency, toCurrency, value }) => {
  return (
    <h6 className='container text-3xl text-center'>{amount} {fromCurrency} = {value} {toCurrency}</h6>
  );
};

export default AmtOutput;
