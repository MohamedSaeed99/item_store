import { IItem } from '@/models/Item';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialState = {
    itemsSelected: [] as IItem[]
}

export const items = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IItem>) => {
            return {
                itemsSelected: [...state.itemsSelected, action.payload]
            };
        },
        removeItem: (state, action: PayloadAction<IItem>) => {
            const selectedItems = [...state.itemsSelected];
            const index = selectedItems.map(item => item.name).indexOf(action.payload.name, 0);
            if(index > -1) {
                selectedItems.splice(index, 1)
            }
            return {
                itemsSelected: selectedItems
            };
        }
    }
})

export const {addItem, removeItem} = items.actions
export default items.reducer;