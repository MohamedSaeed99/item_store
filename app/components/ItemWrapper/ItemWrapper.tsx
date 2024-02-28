import { IItem } from "@/models/Item";
import Item from "../Item/Item";


const getItems = async ()  => {
    const response = await fetch("http://127.0.0.1:8000/items");
    const items = await response.json();
    return items
}

const ItemsWrapper = async () => {
    const { items }: { items: IItem[] } = await getItems();

    return (
        <div className="flex flex-wrap">
            {
                items.map((item, index) => {
                    return <Item item={item} key={index} />
                })
            }
        </div>
    )
}

export default ItemsWrapper;