import Checkout from "../components/Checkout/Checkout";
import Header from "../components/Header/Header";
import ProductCart from "../components/ProductCart/ProductCart";

const Cart = () => {
    return (
        <div className="flex">
            <div className="h-screen w-1/2 p-2 overflow-y-auto">
                <ProductCart className="flex flex-row gap-1" />
            </div>
            <div className="border-solid border-[1px]"></div>
            <div className="flex justify-center items-center h-screen w-1/2 p-10">
                <Checkout />
            </div>
        </div>
    )
}

export default Cart;