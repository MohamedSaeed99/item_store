"use client";

import { useAppSelector } from "@/redux/store";
import Button from "../Button/Button";

const Header = () => {
    const total = useAppSelector((state) => state.itemReducer.itemsSelected.map(items => items.price).reduce((a, b) => a + b, 0));
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleCheckout = () => {
        console.log("Checking out")
    }

    return (
        <div className="flex justify-between">
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