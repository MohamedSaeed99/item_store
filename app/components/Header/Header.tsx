"use client";

import { useAppSelector } from "@/redux/store";
import Link from "next/link";

const Header = () => {
    const cart = useAppSelector((state) => state.productReducer.cart);
    const count = cart.map(cart => cart.count).reduce((a, b) => a + b, 0);

    return (
        <div className="w-screen fixed top-0 right-0 left-0 flex justify-between shadow-md pl-10 pr-10 pt-4 pb-4 bg-blue-50">
            <div>
                Store
            </div>
            <div className="flex justify-center items-center">
                <Link href="/cart" className="rounded-sm flex items-center border-solid border-[1px] pl-4 pr-4">
                    <div className="mr-1">
                        {count}
                    </div>
                    <div className="ml-1">
                        Cart
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;