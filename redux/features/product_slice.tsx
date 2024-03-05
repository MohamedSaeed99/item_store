import { IProduct } from '@/models/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    selectedProducts: [] as IProduct[]
}

export const products = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            return {
                selectedProducts: [...state.selectedProducts, action.payload]
            };
        },
        removeProduct: (state, action: PayloadAction<IProduct>) => {
            const selectedProducts = [...state.selectedProducts];
            const index = selectedProducts.map(item => item.id).indexOf(action.payload.id, 0);
            if(index > -1) {
                selectedProducts.splice(index, 1)
            }
            return {
                selectedProducts: selectedProducts
            };
        }
    }
})

export const {addProduct, removeProduct} = products.actions
export default products.reducer;