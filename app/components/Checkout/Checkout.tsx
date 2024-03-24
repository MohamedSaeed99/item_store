"use client";

import { useAppSelector } from "@/redux/store";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = () => {
    const cart = useAppSelector((state) => state.productReducer.cart);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((cart) => {
            total += cart.count * cart.product.price
        });

        return total;
    }
    
    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;

            const sessionId = await axios.post('http://127.0.0.1:8000/checkout/').then(res => res.data)
            await stripe!.redirectToCheckout({
                sessionId: sessionId,
            });
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col w-[100%]">
            <div>
                {
                    cart.map((cart, index) => {
                        return <div>
                            {cart.product.name} x {cart.count}:     {formatter.format(cart.count * cart.product.price)}
                        </div>
                    })
                }
            </div>
            <div className="border-solid border-black border-[1px]" />
            <div>
                Total: {formatter.format(calculateTotal())}
            </div>
        </div>
    )
};

export default Checkout;