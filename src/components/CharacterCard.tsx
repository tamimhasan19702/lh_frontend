/** @format */

"use client";

import Link from "next/link";

interface CharacterCardProps {
  char: {
    id: number;
    name: string;
    image: string;
  };
}

export default function CharacterCard({ char }: CharacterCardProps) {
  return (
    <Link key={char.id} href={`/characters/${char.id}`}>
      <div
        className="flex-none w-full md:w-80  bg-[#ffffff15] rounded-[8px] overflow-hidden relative shadow-md transition-transform transform border-none  border-gradient "
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        }}>
        <div className=" border-r-10">
          <div className="flex flex-col items-start justify-start px-6 pt-6 pb-2">
            <img
              src={char.image}
              alt={char.name}
              className="w-fullh-40 object-cover rounded-md"
            />
            <div className=" py-3">
              <h3 className="text-white text-start text-sm font-medium tracking-wide">
                {char.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
