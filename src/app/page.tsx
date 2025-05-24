/** @format */

import CharacterList from "@/components/CharacterList";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="p-6 bg-gray-800">
        <h1 className="text-3xl font-bold">Rick & Morty Wiki</h1>
      </header>
      <section className="container mx-auto p-6">
        <CharacterList />
      </section>
    </main>
  );
}
