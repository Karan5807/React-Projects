import React from 'react';

const CurrencySelector = ({ currencies, selectedCurrency, onCurrencyChange }) => {
  return (
    <div>
      <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
