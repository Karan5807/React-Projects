import { Grid, Typography } from "@mui/material";
import React, {useState} from "react";
import Header from "../../Core/Header";
import Stack from "@mui/material/Stack";
import SliderComp from "../../Core/Slider";

function EMICalculator() {

  
  const [principal, setPrincipal] = useState(1000000);
  const [Rate, setRate] = useState(10);
  const [year, setYear] = useState(5);

  const handleChange = (value) => {
    setPrincipal(value);
  };
  const handleRate = (value) =>{
    setRate(value);
  };
  const handleYear = (value) =>{
    setYear(value);
  };
    const month = year * 12;
 
    const monthlyIntrestRate = ((Rate/12)/100).toFixed(4);
    console.log(monthlyIntrestRate);
    const MonthlyIntrestAmt = monthlyIntrestRate * principal;
    console.log(MonthlyIntrestAmt);
  
    let v1 = 1+parseFloat(monthlyIntrestRate);
    console.log(v1);
  
  return (
    <Stack>
      <Header/>

      <Stack m={5}>
      <Grid item p={2}>
        <SliderComp descrption={"Loan Amount"} Sign={"₹"}  min={100000} max={10000000} value={principal} onChange={handleChange}/>
      </Grid>
      <Grid item p={2}>
        <SliderComp descrption={"Rate of Intrest %(P.A)"} Sign={"%"} min={1.0} max={30} value={Rate} onChange={handleRate}/>
      </Grid>
      <Grid item p={2}>
        <SliderComp descrption={"Loan Tenure"} min={1} max={30} Sign={"Year"} value={year} onChange={handleYear}/>
      </Grid>
      </Stack>
      
      <Grid container display={"flex"} justifyContent={"space-between"}>
        <Typography>Monthly EMI</Typography>
        <Typography>{}</Typography>
      </Grid>
    </Stack>
  );
}

export default EMICalculator;
