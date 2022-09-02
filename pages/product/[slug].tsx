import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";
import React, { useContext, useState } from "react";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { dbProducts } from "../../database";
import { IProduct, ISize } from "../../interfaces";
import { ICartProduct } from "../../interfaces/cart";
import { useRouter } from "next/router";
import { CartContext } from "../../context";

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);

  const [tempCart, setTempCart] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const selectSize = (size: ISize) => {
    setTempCart((current) => ({
      ...current,
      size,
    }));
  };

  const updateQuantity = (quantity: number) => {
    setTempCart((current) => ({
      ...current,
      quantity,
    }));
  };

  const onAddProduct = () => {
    addProductToCart(tempCart);
    router.push("/cart");
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images}></ProductSlideshow>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              {product.price}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2" component="h1">
                Cantidad
              </Typography>
              <ItemCounter
                currentValue={tempCart.quantity}
                updateQuantity={(qty) => updateQuantity(qty)}
                maxValue={product.inStock}
              />
              <SizeSelector
                selectedSize={tempCart.size}
                sizes={product.sizes}
                onSelectedSize={(size) => selectSize(size)}
              />
            </Box>

            {product.inStock > 0 ? (
              <Button
                color="secondary"
                className="circular-btn"
                onClick={onAddProduct}
              >
                {tempCart.size ? " Agregar al carrito" : "Seleciona una talla"}
              </Button>
            ) : (
              <Chip label="no hay disponible" />
            )}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug } = params as { slug: string }; // your fetch function here

//   const product = await dbProdcuts.getProductBySlug(slug);

//   if (!product) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: "false",
//       },
//       props: {},
//     };
//   }

//   return {
//     props: {
//       product,
//     },
//   };
// };

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productSlugs = await dbProducts.getAllProductSlugs();

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const product = await dbProducts.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductPage;
