import React from 'react';

const CurrencySelector = ({ countries, selectedCurrency, onCurrencyChange }) => {
  return (
    <div className='container'>
      <select className=' text-black text-center p-2 m-2 text-lg rounded-md' value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {countries.map((currency) => (
          <option className=' text-black text-center p-2 m-2 text-lg scroll-smooth' key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default CurrencySelector;
