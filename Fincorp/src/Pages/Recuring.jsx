import React, { useState } from "react";
import Header from "../Component/Header";

function Recuring() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [year, setYear] = useState(5);
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("Fixed_Deposit");

  // Calculation based on Months
  const intrest = rate / 100;
  const n = 12;

  // const MonthlyRecuring = amount * ((Math.pow((1+intrest/year), year*year)-1) / (1- Math.pow((1+ intrest / year), -1)));
  // console.log(MonthlyRecuring);

  const yearlyRecuring = Math.ceil(
    amount *
      ((Math.pow(1 + intrest / n, n * year) - 1) /
        (1 - Math.pow(1 + intrest / n, -1)))
  );
  console.log(yearlyRecuring);

  const fixedDeposit = Math.ceil(amount + amount * rate * (year / 100));
  console.log(fixedDeposit);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <Header />
      <div className="tab-buttons">
        <button
          className={activeTab === "Fixed_Deposit" ? "active" : ""}
          onClick={() => handleTabClick("Fixed_Deposit")}
        >
          Fixed Deposit
        </button>
        <button
          className={activeTab === "Recurring_Deposit" ? "active" : ""}
          onClick={() => handleTabClick("Recurring_Deposit")}
        >
          Recurring Deposit
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "Fixed_Deposit" && (
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
              {
                <button onClick={handleToggle}>
                  {toggle ? "Months" : "Year"}
                </button>
              }
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
            <p>Fixed Deposit</p>
            <p>{fixedDeposit}</p>
          </div>
        )}
        {activeTab === "Recurring_Deposit" && (
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
              {
                <button onClick={handleToggle}>
                  {toggle ? "Months" : "Year"}
                </button>
              }
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
        )}
      </div>
    </div>
  );
}

export default Recuring;
