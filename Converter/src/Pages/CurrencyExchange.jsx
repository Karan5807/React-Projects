import axios from "axios";
import "./CurrencyExchange.css";
import { useState, useEffect } from 'react';

const CurrencyExchange = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [amount, setAmount] = useState(1);
    const [convertAmt, setConvertAmt] = useState(null);

    const ExchangeAPI = "https://v6.exchangerate-api.com/v6/5be08a70145ba4bbeae60dfd/latest/USD";

    useEffect(() => {
        const fetchExAPI = async () => {
            try {
                const response = await axios.get(ExchangeAPI)
                setCurrencies(response.data.conversion_rates)
            } catch (error) {
                console.error("There is Error in Fetching API");
            }
        }
        fetchExAPI()
    }, [])

    console.log(currencies);

    return (
        <>
            <div>CurrencyExchange</div>
            <select value={""}>
                {Object.entries(currencies).map(([label, value]) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
        </>
    )
}

export default CurrencyExchange;