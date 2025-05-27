/** @format */

"use client";

interface LocationCardProps {
  location: {
    id: number;
    name: string;
    type: string;
  };
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div
      className="flex-none w-full md:w-[360px] bg-[#ffffff15] rounded-lg overflow-hidden shadow-md  transition"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        clipPath: "polygon(0 0, 100% 0, 100% 75%, 80% 100%, 0 100%)",
      }}>
      <div className="px-6 pt-8 md:pb-0 pb-4">
        <p className="text-green-500 truncate text-white">#{location.id}</p>
        <h3 className="text-white text-[16px] md:text-xl font-bold">
          {location.name}
        </h3>
      </div>
    </div>
  );
}
