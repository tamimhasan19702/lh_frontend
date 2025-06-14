/** @format */

"use client";

import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchEpisodes } from "@/store/features/episodes/episodeSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const dispatch = useAppDispatch();
  const { list, loading } = useAppSelector((state) => state.episodes);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchEpisodes());
    }
  }, [dispatch, list.length]);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth();
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth();
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const getCardWidth = () => {
    if (scrollRef.current) {
      const style = window.getComputedStyle(scrollRef.current);
      const marginLeft = parseFloat(style.marginLeft || "0");
      const marginRight = parseFloat(style.marginRight || "0");
      return scrollRef.current.offsetWidth + marginLeft + marginRight;
    }
    return 400;
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-[14px] md:text-[20px] font-light text-white md:text-2xl md:mb-0">
          Episodes
        </h2>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="relative overflow-x-auto hide-scrollbar touch-auto">
        <div
          className="flex gap-6 p-4"
          style={{ transition: "transform 0.3s ease-in-out" }}>
          {list.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}

          {loading && (
            <p className="text-center flex-none w-full text-white">
              Loading more episodes...
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleScrollLeft}
          className="bg-[#ffffff15] hover:bg-[#ffffff2d] text-green-500 px-4 py-2 rounded">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleScrollRight}
          className="bg-[#ffffff15] hover:bg-[#ffffff2d] text-green-500 px-4 py-2 rounded">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
