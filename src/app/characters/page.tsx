/** @format */

import CharacterGrid from "@/components/CharacterGrid";
import Header from "@/components/header";

export default function Characters() {
  return (
    <main className="min-h-screen ">
      <Header />
      <section className="container mx-auto p-6">
        <CharacterGrid />
      </section>
    </main>
  );
}
