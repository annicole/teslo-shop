import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes/light-theme";
import { SWRConfig } from "swr";
import { UIProvider } from "../context";
import { CartProvider } from "../context/cart/CartProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <UIProvider>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <ThemeProvider theme={lightTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </SWRConfig>
      </UIProvider>
    </CartProvider>
  );
}

export default MyApp;
