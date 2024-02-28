"use client";

import { IItem } from "@/models/Item";
import Button from "../Button/Button";
import { addItem, removeItem } from "@/redux/features/item_slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

interface ItemProps {
    item: IItem
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const dispatch = useDispatch<AppDispatch>();
    const count = useAppSelector((state) => state.itemReducer.itemsSelected.filter(itemSelected => item == itemSelected).length);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleAddItem = () => {
        dispatch(addItem(item))
    }

    const handleRemoveItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <div className="border-solid border-[1px] m-2 hover:shadow-md">
            <div className="flex flex-col gap-2 m-2">
                <img className="h-48 w-48"/>
                <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{formatter.format(item.price)}</span>
                </div>
                <div className="flex justify-between">
                    <Button onClick={handleRemoveItem}>-</Button>
                    <div className="flex justify-center items-center border-solid border-[1px] rounded-sm w-12">
                        <p>{count}</p>
                    </div>
                    <Button onClick={handleAddItem}>+</Button>
                </div>
            </div>
        </div>
    )
}

export default Item;