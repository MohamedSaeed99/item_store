"use client";

import Header from "./components/Header/Header";
import ProductsWrapper from "./components/ProductsWrapper/ProductsWrapper";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 bg-white">
      <Header />
      <ProductsWrapper />
    </main>
  );
}