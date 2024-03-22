import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import ProductCart from "../components/ProductCart/ProductCart";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);


const Cart = () => {
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

    return <div className="min-h-screen">
        <ProductCart />
    </div>
}

export default Cart;