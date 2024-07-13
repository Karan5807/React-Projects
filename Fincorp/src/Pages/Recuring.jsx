import React, { useState } from 'react';
import Header from '../Component/Header';

function Recuring() {
  const [amount , setAmount] = useState(50000);
  const [rate, setRate] = useState(8);
  const [year, setYear] = useState(3);
  const [toggle, setToggle] = useState(false);

  // Calculation based on Months
  const quater = year/3;
  const intrest = rate/100;
  
  // const totalValue = amount * Math.pow((1+(intrest/quater)),quater*year);
  // console.log(totalValue, "KK");

  let maturityAmount = Math.ceil(amount * (((1 + intrest / quater) ** (quater * year) - 1) / (intrest / quater)));
  console.log(maturityAmount);
  
  let maturityAmount2 = Math.ceil(amount * (((1 + intrest / year) ** (year * year) - 1) / (intrest / year)));
  console.log(maturityAmount2);
  // Calculation based on Years

  const handleToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <div className='container'>
      <Header/>
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
            onChange={(e) => setRate(e.target.value)}
          />
        <p>Time Period {<button onClick={handleToggle}>{toggle ? "Months" : "Year"}</button>}</p>
          <p>{year}</p>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
      </div>
    </div>
  )
}

export default Recuring;