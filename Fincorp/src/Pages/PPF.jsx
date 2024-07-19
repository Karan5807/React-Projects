import React, { useState } from "react";

const PPF = () => {
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(8.1);
  const [year, setYear] = useState(30);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const intrest = rate / 100;
  const maturityAmount = Math.ceil(
    (amount * (Math.pow(1 + intrest, year) - 1)) / intrest
  );

  return (
    <div className="container">
      <div className="container border border-r-4 border-b-4 flex">
        <p>Monthly investment</p>
        <p>{amount}</p>
        <input
          type="range"
          min={500}
          max={1000000}
          step={1}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p>Monthly investment</p>
        <p>{rate}</p>
        <input
          type="range"
          min={1}
          max={15}
          step={1}
          value={rate}
          disabled
          onChange={(e) => setRate(e.target.value)}
        />
        <p>
          Time Period{" "}
          {<button onClick={handleToggle}>{toggle ? "Months" : "Year"}</button>}
        </p>
        <p>{year}</p>
        <input
          type="range"
          min={15}
          max={50}
          step={1}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="container">
        <p>Maturity Value</p>
        <p>{maturityAmount}</p>
      </div>
    </div>
  );
};

export default PPF;
