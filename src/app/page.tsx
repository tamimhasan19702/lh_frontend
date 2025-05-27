/** @format */

import CharacterList from "@/components/CharacterList";
import EpisodesList from "@/components/EpisodesList";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <Hero />
      <section className="container mx-auto p-6">
        <CharacterList />
        <EpisodesList />
      </section>
    </main>
  );
}
