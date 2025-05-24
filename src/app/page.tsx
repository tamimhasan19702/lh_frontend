/** @format */

import CharacterList from "@/components/CharacterList";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <section className="container mx-auto p-6">
        <CharacterList />
      </section>
    </main>
  );
}
