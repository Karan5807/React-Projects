import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

function SliderComp({ min, max, value, onChange, descrption }) {
  return (
    <Grid container>

      <Grid item display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6">{descrption}</Typography>
        <Typography variant="h6">{value}</Typography>
      </Grid>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider
          aria-label="Volume"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <VolumeUp />
      </Stack>
    </Grid>
  );
}

export default SliderComp;
