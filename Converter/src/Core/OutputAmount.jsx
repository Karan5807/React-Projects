import React from 'react'
import {Grid, Typography} from "@mui/material";

function OutputAmount({Amount}) {
  return (
    <Grid container>
        <Typography variant='h5' fontFamily={"sans-serif"}>{Amount}</Typography>
    </Grid>
  )
}

export default OutputAmount;