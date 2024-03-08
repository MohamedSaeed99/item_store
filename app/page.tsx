import Header from "./components/Header/Header";
import ProductsWrapper from "./components/ProductsWrapper/ProductsWrapper";

export default async function Home() {
  return (
    <main className="flex flex-col p-24 bg-white">
      <Header />
      <ProductsWrapper />
    </main>
  );
}