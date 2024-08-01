import React from 'react';
import { Currencies } from '../Component/Currency_List';


const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  return (
    <div className='container'>
      <select className=' text-black text-center p-2 m-2 text-lg rounded-md' value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {Currencies.map((currency) => (
          <option className=' text-black text-center p-2  text-lg scroll-smooth' key={currency.value} value={currency.value}>
            {`${currency.value} - ${currency.label}`}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default CurrencySelector;
