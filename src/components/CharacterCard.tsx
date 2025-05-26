/** @format */

"use client";

import Image from "next/image";
import { CharacterState } from "@/store/features/characters/characterSlice";
import { div } from "framer-motion/client";

interface CharacterCardProps {
  char: CharacterState;
}

export default function CharacterCard({ char }: CharacterCardProps) {
  return (
    <div
      key={char.name}
      className="flex-none w-52 sm:w-60 bg-[#ffffff15] rounded-[8px] overflow-hidden relative shadow-md transition-transform transform border-none  border-gradient "
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)",
      }}>
      <div className=" border-r-10">
        <div className="flex flex-col items-start justify-start px-4 pt-4 pb-2">
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
  );
}
