import { ICart } from '@/models/Cart';
import { IProduct } from '@/models/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    cart: [] as ICart[]
}

export const products = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            const indexOfItem = state.cart.findIndex(item => { return item.product.id == action.payload.id });
            if (indexOfItem == -1) {
                state.cart.push({
                    count : 1,
                    product: action.payload
                });
            } else {
                state.cart[indexOfItem].count += 1
            }
        },
        removeProduct: (state, action: PayloadAction<IProduct>) => {
            const indexOfItem = state.cart.findIndex(item => { return item.product.id == action.payload.id });
            if(indexOfItem == -1) {
                return
            } else {
                if(state.cart[indexOfItem].count == 1) {
                    state.cart.splice(indexOfItem, 1);
                } else {
                    state.cart[indexOfItem].count -= 1;
                }
            }
        }
    }
});

export const {addProduct, removeProduct} = products.actions;
export default products.reducer;