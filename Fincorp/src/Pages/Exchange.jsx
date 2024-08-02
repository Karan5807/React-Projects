import React from "react";
import axios from "axios";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";
import AmtInput from "../Component/AmtInput";
import AmtOutput from "../Component/AmtOutput";
import Dropdown from "../Component/Dropdown";
import Header from "../Component/Header";

function Exchange() {
  const [countries, setCountries] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [convertAmt, setConvertedAmt] = useState("");
  const ExchangeAPI = import.meta.env.VITE_EXCHANGE_RATE;

  useEffect(() => {
    const fetchExRate = async () => {
      try {
        const result = (
          await axios.get(
            `${ExchangeAPI}${fromCurrency}/${toCurrency}/${amount}`
          )
        ).data.conversion_result;
        setConvertedAmt(result);
      } catch (error) {
        console.error("Error in fetching API");
      }
    };
    fetchExRate();
  }, [amount, toCurrency, fromCurrency]);

  const swapCountries = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="container text-white">
      <Header />
      <div className="container">
        <div className="text-center text-pretty font-medium">
          <h6>Fincorp Currency convertor</h6>
          <h6>Check live foreign currency exchange rates</h6>
        </div>

        <div className="container max-w-[600px] border-2 rounded-lg border-white">
          {/* Section for From Amount */}
          <div className=" container flex justify-around m-2 p-2">
            <h6 className=" text-lg font-medium font-sans m-2 ">From</h6>
            <Dropdown
              countries={countries}
              selectedCurrency={fromCurrency}
              onCurrencyChange={setFromCurrency}
            />
          </div>

          {/* Section for button */}
          <button className="container">
            <FaArrowRightArrowLeft
              className="bg-white text-black"
              onClick={swapCountries}
            />
          </button>

          {/* Section for To Amount */}
          <div className="container flex justify-around">
            <h6 className=" text-lg font-medium font-sans">To</h6>
            <Dropdown
              countries={countries}
              selectedCurrency={toCurrency}
              onCurrencyChange={setToCurrency}
            />
          </div>

          <AmtInput amount={amount} onAmountChange={setAmount} />
        </div>
        <div className="container flex ">
          <AmtOutput
            amount={amount}
            fromCurrency={fromCurrency}
            value={convertAmt}
            toCurrency={toCurrency}
          />
        </div>
      </div>
    </div>
  );
}

export default Exchange;
