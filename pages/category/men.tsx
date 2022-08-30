import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { ScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";


const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=men");
  return (
    <ShopLayout
      title="men"
      pageDescription="Men category"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Hombres
      </Typography>

      {isLoading ? <ScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;