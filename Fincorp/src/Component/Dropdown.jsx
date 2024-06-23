import React from 'react';

const CurrencySelector = ({ countries, selectedCurrency, onCurrencyChange }) => {
  return (
    <div>
      <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {countries.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
