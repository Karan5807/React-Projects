import React from "react";
import { useState } from "react";
import Header from "../Component/Header";
import EPFCalculator from "./EPF";

function Providentfund() {
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(8.1);
  const [year, setYear] = useState(30);
  const [hike, setHike] = useState(5);
  const [contri, setContri] = useState(12);
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("EPF");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const intrest = rate / 100;
  console.log(intrest);

  const maturityAmount = Math.ceil(
    (amount * (Math.pow(1 + intrest, year) - 1)) / intrest
  );
  console.log(maturityAmount);

  return (
    <div className="container">
      <Header />
      <div className="tab-buttons">
        <button
          className={activeTab === "EPF" ? "active" : ""}
          onClick={() => handleTabClick("EPF")}
        >
          PPF
        </button>
        <button
          className={activeTab === "PPF" ? "active" : ""}
          onClick={() => handleTabClick("PPF")}
        >
          EPF
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "EPF" && (
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
                {
                  <button onClick={handleToggle}>
                    {toggle ? "Months" : "Year"}
                  </button>
                }
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
        )}
        {activeTab === "PPF" && (
          <div className="container">
            <EPFCalculator />
          </div>
        )}
      </div>
    </div>
  );
}

export default Providentfund;
