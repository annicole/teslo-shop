import Head from "next/head";
import React, { FC } from "react";

interface Props {
  children: any;
  title: string;
  pageDescription: string;
  imageUrl: string;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageUrl,
}) => {
  return (
    <>
      <Head>
        <title>{}</title>
      </Head>
      <nav></nav>

      <main>

      </main>
      <footer>
        
      </footer>
    </>
  );
};
