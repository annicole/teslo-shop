import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import NextLink from "next/link";
import { Box } from "@mui/system";
import {
  ShoppingCartCheckoutOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { UIContext } from "../../context";

export const Navbar = () => {
  const { asPath } = useRouter();

  const { toggleSideMenu } = useContext(UIContext);

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6" component="h1">
              Teslo |
            </Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1}></Box>
        <Box>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button color={asPath === "/category/men" ? "primary" : "info"}>
                Hombres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button color={asPath == "/category/women" ? "primary" : "info"}>
                Mujeres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Link>
              <Button color={asPath === "/category/kid" ? "primary" : "info"}>
                Niños
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartCheckoutOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={toggleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
