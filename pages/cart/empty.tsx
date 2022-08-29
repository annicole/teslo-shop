import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layouts";
import NextLink from "next/link";

const EmptyPage = () => {
  return (
    <ShopLayout title="Carrito vacío" pageDescription="no hay articulos">
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        height="calc(100vh-200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Su carrito está vacio</Typography>
          <NextLink href="/" passHref>
            <Link>
              <Typography>Regresar</Typography>
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
