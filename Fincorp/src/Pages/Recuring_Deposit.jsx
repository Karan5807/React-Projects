import React, { useState } from "react";

const Recuring_Deposit = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [year, setYear] = useState(5);
  const [toggle, setToggle] = useState(false);

  // Calculation based on Months
  const intrest = rate / 100;
  const n = 12;

  const yearlyRecuring = Math.ceil(
    amount *
      ((Math.pow(1 + intrest / n, n * year) - 1) /
        (1 - Math.pow(1 + intrest / n, -1)))
  );
  console.log(yearlyRecuring);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
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
      <p>Rate of Intrest</p>
      <p>{rate}</p>
      <input
        type="range"
        min={1}
        max={15}
        step={1}
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <p>
        Time Period{" "}
        {<button onClick={handleToggle}>{toggle ? "Months" : "Year"}</button>}
      </p>
      <p>{year}</p>
      <input
        type="range"
        min={1}
        max={10}
        step={1}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <p>Recuring Deposit</p>
      <p>{yearlyRecuring}</p>
    </div>
  );
};

export default Recuring_Deposit;
