import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

function SliderComp({ min, max, value, onChange, descrption, Sign }) {
  return (
    <Box sx={{width:750}}>

      <Grid item display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6">{descrption}</Typography>
        <Typography variant="h6">{`${value} ${Sign}`}</Typography>
      </Grid>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider
          aria-label="Volume"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Stack>
    </Box>
  );
}

export default SliderComp;
