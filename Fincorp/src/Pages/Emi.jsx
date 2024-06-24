import React, { useState } from 'react';
import Header from '../Component/Header';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

function Emi() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [amount, setAmount] = useState(1000000);
  const [rate, setrate] = useState(6.5);
  const [year, setYear] = useState(5);

  // Conversion of Rate and Time to Per Month
  const intrest = rate/12/100;
  const tenure = year*12;

  const EMI = ([amount*intrest* Math.pow(1+intrest,tenure)]/[Math.pow(1+intrest,tenure)-1]).toFixed(2);
  const totalAmt = EMI*tenure;
  const totalIntrest = totalAmt-amount;
  console.log(totalIntrest);
  console.log(EMI, "KK");

  const data = {
    labels: [
      'Intrest Amount',
      'Principal Amount',
    ],
    datasets: [{
      label: 'EMI Chart',
      data: [totalIntrest, amount],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      aspectratio:1,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  };

  return (
    <div className='container'>
      <Header/>
      <div className='border border-r-4 border-b-4 m-4 flex'>
      <p>Amount</p> 
      <p>{amount}</p>
      <input className="w-2/4" type="range" min={100000} max={5000000} step={1} value={amount} onChange={(e) => setAmount(e.target.value)} />
      <p>Rate of Intrest</p>
      <p>{rate}</p>
      <input className="w-2/4" type="range" min={1} max={25} step={1} value={rate} onChange={(e) => setrate(e.target.value)} />
      <p>Year of Tenure</p>
      <p>{year}</p>
      <input className="w-2/4" type="range" min={1} max={25} step={1} value={year} onChange={(e) => setYear(e.target.value)} />

      <div className='container-md'>
      <Doughnut style={{width:300, height:300}} data={data}/>
      </div>
      
      </div>
      <p>EMI: {EMI}</p>
      <p>Loan AMount: {amount}</p>
      <p>Total Intrest: {totalIntrest}</p>
      <p>Total Amount: {totalAmt}</p>
    </div>
  )
}

export default Emi;