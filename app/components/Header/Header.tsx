"use client";

import { useAppSelector } from "@/redux/store";
import Button from "../Button/Button";

const Header = () => {
    const total = useAppSelector((state) => state.productReducer.selectedProducts.map(products => products.price).reduce((a, b) => a + b, 0));
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleCheckout = () => {
        console.log("Checking out")
    }

    return (
        <div className="w-screen fixed top-0 right-0 left-0 flex justify-between shadow-md pl-10 pr-10 pt-4 pb-4 bg-blue-50">
            <div>
                Store
            </div>
            <div className="flex justify-center items-center gap-4">
                <div>
                    {formatter.format(total)}
                </div>
                <Button onClick={handleCheckout}>Checkout</Button>
            </div>
        </div>
    )
}

export default Header;