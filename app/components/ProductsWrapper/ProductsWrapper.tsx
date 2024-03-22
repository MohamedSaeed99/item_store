"use client";

import { IProduct } from "@/models/Product";
import Product from "../Product/Product";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addProduct } from "@/redux/features/product_slice";


const getProducts = async ()  => {
    const response = await fetch("http://127.0.0.1:8000/products");
    const products = await response.json();
    return products
}

const ItemsWrapper = async () => {
    const dispatch = useDispatch<AppDispatch>();
    const products: IProduct[] = await getProducts();

    const handleAddProduct = (product: IProduct) => {
        dispatch(addProduct(product));
    }

    return (
        <div className="flex flex-wrap">
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="border-solid border-[1px] p-2 m-2 hover:shadow-md">
                            <Product product={product} key={index} />
                            <div className="flex justify-center items-center">
                                <Button onClick={() => handleAddProduct(product)}>Add to Cart</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemsWrapper;