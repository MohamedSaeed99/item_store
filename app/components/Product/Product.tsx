"use client";

import { IProduct } from "@/models/Product";
import Button from "../Button/Button";
import { addProduct, removeProduct } from "@/redux/features/product_slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

interface ProductProps {
    product: IProduct
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const count = useAppSelector((state) => state.productReducer.selectedProducts.filter(productSelected => product == productSelected).length);

    const handleAddProduct = () => {
        dispatch(addProduct(product))
    }

    const handleRemoveProduct = () => {
        dispatch(removeProduct(product))
    }

    return (
        <div className="border-solid border-[1px] m-2 hover:shadow-md">
            <div className="m-2">
                <img className="h-48 w-48"/>
                <div className="flex justify-between">
                    <span>{product.title}</span>
                    <span>{`$${product.price}`}</span>
                </div>
                <div className="flex justify-between">
                    <Button onClick={handleRemoveProduct}>-</Button>
                    <div className="flex justify-center items-center border-solid border-[1px] rounded-sm">
                        <p>{count}</p>
                    </div>
                    <Button onClick={handleAddProduct}>+</Button>
                </div>
            </div>
        </div>
    )
}

export default Product;