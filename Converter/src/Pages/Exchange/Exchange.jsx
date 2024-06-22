import useAxios from "../../Core/useAxios";
import axios from "axios";
import "./Exchange.css";
import Header from "../../Core/Header";
import AmountInput from "../../Core/AmountInput";
import OutputAmount from "../../Core/OutputAmount";
import CurrencySelector from "../../Core/Select";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";


function Exchange() {
  const [amount, setAmount] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const ExchangeAPI = import.meta.env.VITE_EXCHANGE_API;

  useEffect(() => {
    const fetchExAPI = async () => {
      try {
        const response = await axios.get(ExchangeAPI);
        const hhdata = response.data;
        setCurrencies(Object.keys(hhdata));
      } catch (error) {
        console.error("There is Error in Fetching API");
      }
    };
    fetchExAPI();
  }, []);

  const handleFrom = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleTo = (event) => {
    setToCurrency(event.target.value);
  };



  return (
    <div>
      <Header />

      <div>
        <div>
        <Typography variant="h6">Exchange your Money Value</Typography>
        </div>
        {/* Section for Amount Inout */}
        <div>
          <AmountInput amount={amount} onAmountChange={setAmount}/>
        </div>
        <div>
        <CurrencySelector currencies={currencies} selectedCurrency={fromCurrency} onCurrencyChange={setFromCurrency} />
        <CurrencySelector currencies={currencies} selectedCurrency={toCurrency} onCurrencyChange={setToCurrency} />
        </div>

      </div>
      
      <Grid container>
        <OutputAmount/>
      </Grid>
    </div>
  );
}

export default Exchange;
