import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export const ScreenLoading = () => {
  return (

      <Box
        display="flex"
        justifyContent={"center"}
        flexDirection='column'
        alignItems="center"
        height="calc(100vh-200px)"
        sx={{flexDirection:{xs:'column',sm:'row'}}}
      >
        <Typography variant="h2" fontSize={22}>
         Cargando ...
        </Typography>
        <CircularProgress thickness={2}/>
      </Box>
  );
};

