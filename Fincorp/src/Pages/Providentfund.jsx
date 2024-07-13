import React from 'react';
import { useState } from 'react';
import Header from '../Component/Header';

function Providentfund() {
  const [amount , setAmount] = useState(10000);
  const [rate, setRate] = useState(7.1);
  const [year, setYear] = useState(50);
  const [toggle, setToggle] = useState(false); 

  const intrest = rate/100;
  console.log(intrest);
 
  const maturityAmount = Math.ceil(amount * (Math.pow(1+intrest,year)-1)/intrest);
  console.log(maturityAmount);
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  return (
    <div className='container'>
    <Header/>
    <button onClick={handleToggle}>{toggle?"PPF":"EPF"}</button>
    <div className='container border border-r-4 border-b-4 flex'>
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
      <p>Time Period {<button onClick={handleToggle}>{toggle ? "Months" : "Year"}</button>}</p>
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
  </div>
  )
}

export default Providentfund;


