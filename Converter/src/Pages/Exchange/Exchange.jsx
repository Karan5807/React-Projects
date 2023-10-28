import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

function Exchange() {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("");
    const ExchangeAPI = "http://data.fixer.io/api/latest?access_key=4651da2703bdd5755a3c3644f75f1810&format=1";

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
        console.log(event.target.value);
        setFromCurrency(event.target.value);
    }

    // console.log(currencies, "Curry");

    return (
        <Grid container>
            <Grid container>
                <Typography variant="h6">Exchange your Money Value</Typography>
            </Grid>
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
        </Grid>
    )
}

export default Exchange;