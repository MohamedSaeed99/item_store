import Item from "@/app/components/Item/Item";
import { IItem } from "@/models/Item"

const getItems = async ()  => {
  const response = await fetch("http://127.0.0.1:8000/items");
  const items = await response.json();
  return items
}

export default async function Home() {
  const { items }: {items: IItem[]} = await getItems();

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div>
        Store
      </div>
      <div className="flex flex-wrap">
        {items.map((item, index) => {
          return <Item item={item} key={index} />
        })
        }
      </div>
    </main>
  );
}