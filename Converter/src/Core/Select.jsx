import * as React from 'react';
import { Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useAxios from './useAxios';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';

export default function CountryBox({
    loaded,
    error,
    
}){

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
                <Typography variant='h6' fontFamily={"sans-serif"}> Something Went Wrong!</Typography>
            </Grid>
        )
    }

  return (
    <Autocomplete
      disablePortal
      id="selectBox"
      options={""}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
}
