import Header from "./components/Header/Header";
import ItemsWrapper from "./components/ItemWrapper/ItemWrapper";

export default async function Home() {
  return (
    <main className="flex h-screen flex-col p-24 bg-white">
      <Header />
      <ItemsWrapper />
    </main>
  );
}