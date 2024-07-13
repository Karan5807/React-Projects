import React, { useState } from "react";
import Header from "../Component/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function Mutalfund() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(12);
  const [year, setYear] = useState(10);
  const [toggle, setToggle] = useState(false);

  const intrest = rate / 12 / 100;
  const r = rate / 100;
  const n = year / 12;
  const month = year * 12;
  const returnAmt = Math.ceil(
    amount * ([Math.pow(1 + intrest, month) - 1] / intrest) * (1 + intrest)
  );

  const investAmt = Math.ceil(amount * month);
  const intrestAmt = Math.ceil(returnAmt - investAmt);

  const data = {
    labels: ["Principal Amount", "Intrest Amount"],
    datasets: [
      {
        label: "EMI Chart",
        data: [investAmt, intrestAmt],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      aspectratio: 1,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Mutual Fund Return",
        },
      },
    },
  };

  //  Calculation for Lumpsum Ammount
  const lumpsumReturnAmt = Math.ceil(amount * Math.pow(1 + r, year));
  console.log(lumpsumReturnAmt, "lumpsum");

  // const lumpsumInvestAmt = (amount*month).toFixed(2);
  const lumpsumIntrestAmt = Math.ceil(lumpsumReturnAmt - amount);

  const lumpSumData = {
    labels: ["Principal Amount", "Intrest Amount"],
    datasets: [
      {
        label: "EMI Chart",
        data: [amount, lumpsumIntrestAmt],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const lumpsumconfig = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      aspectratio: 1,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Mutual Fund Return",
        },
      },
    },
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  if (toggle) {
    return (
      <div>
        <Header />
        <div className="container border border-r-4 border-b-4 flex">
          <button onClick={handleToggle}>{toggle ? "Sip" : "Lumpsum"}</button>
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
          <p>Return Rate</p>
          {rate}
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <p>Year of Tenure</p>
          {year}
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <div className="container-md">
            <Doughnut style={{ width: 300, height: 300 }} data={data} />
          </div>
        </div>
        <p>{investAmt}</p>
        <p>{intrestAmt}</p>
        <p>{returnAmt}</p>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="container border border-r-4 border-b-4 flex">
          <button onClick={handleToggle}>{toggle ? "Sip" : "Lumpsum"}</button>
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
          <p>Return Rate</p>
          {rate}
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <p>Year of Tenure</p>
          {year}
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <div className="container-md">
            <Doughnut style={{ width: 300, height: 300 }} data={lumpSumData} />
          </div>
        </div>
        <p>{amount}</p>
        <p>{lumpsumIntrestAmt}</p>
        <p>{lumpsumReturnAmt}</p>
      </div>
    );
  }
}

export default Mutalfund;
