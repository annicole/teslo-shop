import { Box, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../components/layouts";

const Custom404 = () => {
  return (
    <ShopLayout title="Page not found" pageDescription="no hya nada">
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        height="calc(100vh-200px)"
        sx={{flexDirection:{xs:'column',sm:'row'}}}
      >
        <Typography variant="h1" component="h1" fontSize={200} fontWeight={200}>
          4004 |
        </Typography>
        <Typography variant="h1" component="h1" marginLeft={2}>
          No encontramos ninguna página
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
