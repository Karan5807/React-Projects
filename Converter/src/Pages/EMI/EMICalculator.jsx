import { Grid } from "@mui/material";
import React, {useState} from "react";
import Header from "../../Core/Header";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import SliderComp from "../../Core/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

function EMICalculator() {
  const [newvalue, setNewValue] = useState(100000);
  const [rate, setRate] = useState(8);
  const [year, setYear] = useState(5);

  const handleChange = (value) => {
    setNewValue(value);
  };
  const handleRate = (value) =>{
    setRate(rate);
  };
  const handleYear = (value) =>{
    setYear(year);
  };
  return (
    <Box>
      <Header/>
      <Grid item>
        <SliderComp descrption={"Loan Amount"}  min={100000} max={1000000} value={newvalue} onChange={handleChange}/>
      </Grid>
      <Grid item>
        <SliderComp descrption={"Rate of Intrest %(P.A)"} min={1} max={30} value={rate} onChange={handleRate}/>
      </Grid>
      <Grid item>
        <SliderComp descrption={"Loan Tenure"} min={1} max={30} value={year} onChange={handleYear}/>
      </Grid>
    </Box>
  );
}

export default EMICalculator;
