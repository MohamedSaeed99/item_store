"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import Product from "../Product/Product";
import Button from "../Button/Button";
import { IProduct } from "@/models/Product";
import { addProduct, removeProduct } from "@/redux/features/product_slice";
import { useDispatch } from "react-redux";


const ProductCart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useAppSelector((state) => state.productReducer.cart);

    const handleAddProduct = (product: IProduct) => {
        dispatch(addProduct(product))
    }

    const handleRemoveProduct = (product: IProduct) => {
        dispatch(removeProduct(product))
    }

    const getTotalProductByProduct = (product: IProduct) => {

    }

    return (
        <div>
            {
                cart.map((cart, index) => {
                    return (
                        <div key={index} className="border-solid border-[1px] p-2 m-2 hover:shadow-md">
                            <Product product={cart.product} key={index} />
                            <div className="flex justify-center items-center">
                                <Button onClick={() => handleRemoveProduct(cart.product)}>-</Button>
                                <div>
                                    {}
                                </div>
                                <Button onClick={() => handleAddProduct(cart.product)}>+</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductCart;