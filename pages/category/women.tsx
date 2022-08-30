import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { ScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";


const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=women");
  return (
    <ShopLayout
      title="Kid"
      pageDescription="Women category"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Kids
      </Typography>

      {isLoading ? <ScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;