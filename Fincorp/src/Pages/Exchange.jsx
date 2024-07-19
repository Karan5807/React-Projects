import React from 'react';
import axios from 'axios';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import AmtInput from "../Component/AmtInput";
import AmtOutput from '../Component/AmtOutput';
import Dropdown from "../Component/Dropdown";
import Header from '../Component/Header';

function Exchange() {
  const [countries, setCountries] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const [convertAmt, setConvertedAmt] = useState('');
  const ExchangeAPI = import.meta.env.VITE_EXCHANGE_RATE;
  const CountriesAPI = import.meta.env.VITE_COUNTRY_NAME;
  
  useEffect(()=>{
    const fetchCountries = async() => {
      try {
        const result = (await axios.get(CountriesAPI)).data;
        setCountries(Object.keys(result));
      } catch (error) {
        console.error("Error in fetching API");
      }
    }
    fetchCountries();
  },[]);

  useEffect(()=>{
    const fetchExRate = async() => {
      try {
        const result = (await axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)).data.rates[toCurrency];
        console.log(result);
        setConvertedAmt(result);
      } catch (error) {
        console.error("Error in fetching API");
      }
    }
    fetchExRate();
  },[amount,toCurrency,fromCurrency]);

  const swapCountries = () =>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  if(fromCurrency === toCurrency){
    return(
      <div className='text-3xl'>
        Change atleast one value
      </div>
    )
  }
  return (
    <div className='container text-white'>
      <Header/>
      <div className='container' style={{maxWidth:780}}>
        <div className='text-center text-pretty font-medium'>
          <h6>Fincorp Currency convertor</h6>
          <h6>Check live foreign currency exchange rates</h6>
        </div>

        <div className='container flex justify-center'>
          <div className='flex justify-around'>
            <h6 className='m-2 p-2 text-lg font-medium font-sans'>From</h6>
            <Dropdown countries={countries} selectedCurrency={fromCurrency} onCurrencyChange={setFromCurrency}/>
          </div>
          <div className=' flex justify-around'>
            <h6 className='m-2 p-2 text-lg font-medium font-sans'>To</h6>
            <Dropdown countries={countries} selectedCurrency={toCurrency} onCurrencyChange={setToCurrency}/>
          </div>
          {/* Section for button */}
        <button className='container pl-14 '>
        <FaArrowRightArrowLeft className='bg-white text-black' onClick={swapCountries}/>
        </button>

        <AmtInput amount={amount} onAmountChange={setAmount}/>
        </div>
        <div className='container flex '>
        <AmtOutput amount={amount} fromCurrency={fromCurrency} value={convertAmt} toCurrency={toCurrency}  />
        </div>

      </div>
    </div>
  )
}

export default Exchange;