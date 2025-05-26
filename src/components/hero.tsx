/** @format */

import React from "react";
import Image from "next/image";
import Gun from "@/utils/images/Gun.png";
import Portal from "@/utils/images/portal.png";
import Bubble from "@/utils/images/bubble.png";
import { CirclePlay } from "lucide-react";
import Rectangal from "@/utils/images/rectangal.png";

const Hero = () => {
  return (
    <section className="relative h-[50vh]  md:h-[70vh] overflow-hidden flex flex-col items-center justify-center hero-class">
      <div className="absolute inset-0 z-0 bg-hero-overlay"></div>

      <div className=" absolute top-[90px] left-[40px] md:top-[130px] md:left-[500px] -translate-x-1/2 -translate-y-1/2 z-[100]">
        <Image
          src={Bubble}
          alt="Bubble Effect"
          className="w-[100px] md:w-[250px] h-full opacity-75"
        />
      </div>

      <div className="flex flex-col items-center justify-center z-10 p-2 md:p-0">
        <div className="container mx-auto px-4  text-white relative ">
          <h1 className="text-5xl md:text-[130px] font-bold tracking-tighter text-white leading-tight relative flex flex-row">
            <span className="block font-sans font-bold z-10 italic">THE</span>

            <div className="absolute top-[50px] left-[135px] md:top-[130px] md:left-[360px] transform -translate-x-1/2 -translate-y-full z-100">
              <Image
                src={Portal}
                alt="Rick's Portal"
                className="w-[70px] md:w-[180px] h-full z-100"
              />
            </div>

            <span className="text-gradient pl-[80px] md:pl-[200px] z-10">
              RICK &
            </span>

            <div className="hidden md:block absolute top-[20px] right-[-30px] transform -translate-x-1/2 -translate-y-full z-100">
              <Image
                src={Rectangal}
                alt="Morty's Rectangal"
                className="w-[60px] h-full z-100"
              />
            </div>
          </h1>
        </div>

        <div className="container mx-auto px-4  text-center text-white relative z-20">
          <h1 className="text-5xl md:text-[130px] font-bold tracking-tighter text-white leading-tight relative">
            <span className="text-gradient">MORTY</span>{" "}
            <span className="font-sans font-bold z-10 italic">WIKI</span>
            <div className="absolute top-[160px] right-[0px]  md:top-[120px] md:right-[-100px] transform translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src={Gun}
                alt="Morty's Gun"
                className=" md:w-[350px] w-[200px] h-full"
              />
            </div>
          </h1>

          {/* Watch Now Button */}
          <div className="mt-6 flex flex-col-reverse md:flex-row gap-6 justify-center md:items-center items-start">
            <button className="inline-flex gap-4 justify-start items-center glow-button bg-gradient text-white px-6 py-3 rounded-full text-lg font-medium transition  ">
              <CirclePlay />
              Watch Now
            </button>

            {/* Description */}
            <p className="text-teal-400 text-[12px] md:text-[16px] max-w-[250px] md:max-w-[500px] md:px-4 px-0 text-left">
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
