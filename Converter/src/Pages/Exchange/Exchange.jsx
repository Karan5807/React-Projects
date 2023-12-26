import axios from "axios";
import Header from "../../Core/Header";
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
                const response = await axios.get(ExchangeAPI)
                setCurrencies(response.data.rates)
            } catch (error) {
                console.error("There is Error in Fetching API");
            }
        }
        fetchExAPI();
    }, []);

    const handleFrom = (event) => {
        setFromCurrency(event.target.value);
    }

    const handleTo = (event) => {
        setToCurrency(event.target.value);
    }

    return (
        <Grid container>
            {/* <Header/>  */}
            <Grid container>
                <Typography variant="h6">Exchange your Money Value</Typography>
            </Grid>
            {/* Section for From Currency */}
            <Grid container>
                <Grid item>
                    <Typography variant="body"> From </Typography>
                </Grid>
                <select value={fromCurrency} onChange={handleFrom}>
                    {Object.entries(currencies).map(([label, value]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </Grid>

            {/* Section for To Currency */}
            <Grid container>
                <Grid item>
                    <Typography variant="body"> TO </Typography>
                </Grid>
                <select value={toCurrency} onChange={handleTo}>
                    {Object.entries(currencies).map(([label, value]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </Grid>

            {/* Section for Input Amount */}
            <Grid container>
                <Grid item>
                    <Typography variant="body">Amount</Typography>
                </Grid>
                <Grid item>
                    <input type="number" placeholder="Amount" onChange={(e)=>{e.target.value}}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Exchange;