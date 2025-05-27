/** @format */

"use client";

interface EpisodeCardProps {
  episode: {
    id: number;
    name: string;
    episode: string;
  };
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div
      className="flex-none w-[300px] bg-[#ffffff15] rounded-lg overflow-hidden shadow-md  transition"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        clipPath: "polygon(0 0, 100% 0, 100% 75%, 80% 100%, 0 100%)",
      }}>
      <div className="p-8">
        <h3 className="text-white text-xl font-bold">{episode.episode}</h3>
        <p className="text-white truncate">{episode.name}</p>
      </div>
    </div>
  );
}
