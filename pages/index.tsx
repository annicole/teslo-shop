import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";
import { ScreenLoading } from "../components/ui";
import { useProducts } from "../hooks";

const Home: NextPage = () => {
  const { products, isLoading } = useProducts("/products");
  return (
    <ShopLayout
      title="teslo Shop"
      pageDescription="Encuentra los mejores productos"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <ScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default Home;
