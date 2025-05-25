/** @format */

import React from "react";
import Image from "next/image";
import Gun from "@/utils/images/Gun.png";
import Portal from "@/utils/images/portal.png";
import Bubble from "@/utils/images/bubble.png";

const Hero = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden flex flex-col items-center justify-center hero-class">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-hero-overlay"></div>

      {/* Decorative Bubble */}
      <div className="hidden md:block absolute top-[120px] left-[480px] -translate-x-1/2 -translate-y-1/2 z-[100]">
        <Image
          src={Bubble}
          alt="Bubble Effect"
          width={260}
          height={260}
          className="opacity-75"
        />
      </div>

      {/* Main Content */}

      <div className="flex flex-col items-center justify-center z-10">
        <div className="container mx-auto px-4  text-white relative ">
          <h1 className="text-5xl md:text-[130px] font-bold tracking-tighter text-white leading-tight relative flex flex-row">
            <span className="block font-sans font-bold z-10">THE</span>
            {/* Portal Image */}
            <div className="absolute top-[120px] left-[350px] transform -translate-x-1/2 -translate-y-full z-100">
              <Image
                src={Portal}
                alt="Rick's Portal"
                width={180}
                height={180}
                className="animate-pulse-slow z-100"
              />
            </div>

            <span className="text-gradient pl-[200px] z-10">RICK &</span>
          </h1>
        </div>

        <div className="container mx-auto px-4   text-center text-white relative z-20">
          <h1 className="text-5xl md:text-[130px] font-bold tracking-tighter text-white leading-tight relative">
            <span className="text-gradient">MORTY</span>{" "}
            <span style={{ fontFamily: "Italian" }}>WIKI</span>
            {/* Gun Image */}
            <div className="absolute top-[100px] right-[-150px] transform translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src={Gun}
                alt="Morty's Gun"
                width={350}
                height={350}
                className="animate-pulse-slow"
              />
            </div>
          </h1>

          {/* Watch Now Button */}
          <div className="mt-6 flex justify-center items-center">
            <button className="inline-flex items-center glow-button bg-gradient text-white px-6 py-3 rounded-full text-lg font-medium transition  ">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 3v4M7.5 21V9.25m12.75 11.75v-8.5M7.5 21l4.5-4.5 4.5 4.5"
                />
              </svg>
              Watch Now
            </button>

            {/* Description */}
            <p className="text-teal-400 mt-4 max-w-md mx-auto">
              Brilliant but boozey scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
