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
      className="flex-none w-full md:w-[360px] bg-[#ffffff15] rounded-lg overflow-hidden shadow-md  transition"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
      }}>
      <div className="px-6 pt-8">
        <p className="text-white truncate">{episode.episode}</p>
        <h3 className="text-white text-[16px] md:text-xl font-bold">
          {episode.name}
        </h3>
      </div>
    </div>
  );
}
