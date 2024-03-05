import { IProduct } from "@/models/Product";
import Product from "../Product/Product";


const getProducts = async ()  => {
    const response = await fetch("http://127.0.0.1:8000/products");
    const products = await response.json();
    return products
}

const ItemsWrapper = async () => {
    const products: IProduct[] = await getProducts();

    return (
        <div className="flex flex-wrap">
            {
                products.map((product, index) => {
                    return <Product product={product} key={index} />
                })
            }
        </div>
    )
}

export default ItemsWrapper;