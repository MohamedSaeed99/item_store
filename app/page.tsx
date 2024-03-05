import Product from "@/app/components/Product/Product";
import { IProduct } from "@/models/Product"

const getProducts = async ()  => {
  const response = await fetch("http://127.0.0.1:8000/products/");
  const products = await response.json();
  return products
}

export default async function Home() {
  const products: IProduct[] = await getProducts();

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div>
        Store
      </div>
      <div className="flex flex-wrap">
        {products.map((product, index) => {
          return <Product product={product} key={index} />
        })
        }
      </div>
    </main>
  );
}