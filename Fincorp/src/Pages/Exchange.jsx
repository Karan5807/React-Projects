import React from 'react';
import axios from 'axios';
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
  
  useEffect(()=>{
    const fetchCountries = async() => {
      try {
        const result = (await axios.get("https://api.frankfurter.app/currencies")).data;
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

  return (
    <div className='container'>
      <Header/>
      <div className='container'>
        <Dropdown countries={countries} selectedCurrency={fromCurrency} onCurrencyChange={setFromCurrency}/>
        <Dropdown countries={countries} selectedCurrency={toCurrency} onCurrencyChange={setToCurrency}/>
        <AmtInput amount={amount} onAmountChange={setAmount}/>
        <AmtOutput value={convertAmt}/>
      </div>
    </div>
  )
}

export default Exchange;