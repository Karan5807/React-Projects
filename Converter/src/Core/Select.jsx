import * as React from 'react';
import { Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useAxios from './useAxios';
import Skeleton from '@mui/material/Skeleton';

export default function CountryBox() {
    const [data,loaded, error] = useAxios("https://restcountries.com/v3.1/all#");
    const dataFilter = data.filter(item => "currencies" in item);

    const countryList = dataFilter.map(item => { return `${Object.keys(item.currencies)[0]} - ${item.name.common}`})
    console.log(countryList);

    if(loaded){
        return(
            <Grid container textAlign={"center"}>
                <Skeleton variant='text'  sx={{fontSize:"1rem"}}/>
            </Grid>
        )
    }

    if(error){
        return(
            <Grid container>
                <Typography variant='h3' fontFamily={"sans-serif"}> Something Went Wrong!</Typography>
            </Grid>
        )
    }

  return (
    <Autocomplete
      disablePortal
      id="selectBox"
      options={countryList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
}
