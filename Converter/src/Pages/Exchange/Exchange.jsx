import axios from "axios";
import "./Exchange.css";
import Header from "../../Core/Header";
import AmountInput from "../../Core/AmountInput";
import CountryBox from "../../Core/Select";
import OutputAmount from "../../Core/OutputAmount";
import ExchangeButton from "../../Core/ExchangeButton";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

function Exchange() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const ExchangeAPI = import.meta.env.VITE_EXCHANGE_API;

  useEffect(() => {
    const fetchExAPI = async () => {
      try {
        const response = await axios.get(ExchangeAPI);
        setCurrencies(response.data.rates);
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

      <Grid container>
        <Typography variant="h6">Exchange your Money Value</Typography>

        {/* Section for Input Amount */}
        <AmountInput />

        {/* Section for From Currency */}
        <CountryBox value={fromCurrency} setValue={setFromCurrency}/>

        {/* Section for Exchange Button */}
        <ExchangeButton size="large"/>
        {/* Section for To Currency */}
        <CountryBox value={toCurrency} setValue={setToCurrency}/>
      </Grid>
      
      <Grid container>
        <OutputAmount/>
      </Grid>
    </div>
  );
}

export default Exchange;
