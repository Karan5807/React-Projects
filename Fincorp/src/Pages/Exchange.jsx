import React from 'react';
import axios from 'axios';
import { RiSwap2Fill } from "react-icons/ri";
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
    <div className='container'>
      <Header/>
      <div className='container'>
        <Dropdown countries={countries} selectedCurrency={fromCurrency} onCurrencyChange={setFromCurrency}/>
        <RiSwap2Fill onClick={swapCountries}/>
        <Dropdown countries={countries} selectedCurrency={toCurrency} onCurrencyChange={setToCurrency}/>
        <AmtInput amount={amount} onAmountChange={setAmount}/>
        <AmtOutput value={convertAmt}/>
      </div>
    </div>
  )
}

export default Exchange;