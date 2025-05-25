/** @format */

import CharacterList from "@/components/CharacterList";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <Hero />
      <section className="container mx-auto p-6">
        <CharacterList />
      </section>
    </main>
  );
}
