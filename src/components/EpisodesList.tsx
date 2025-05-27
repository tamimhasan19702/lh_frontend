/** @format */

// src/components/EpisodeList.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "@/store/features/episodes/episodeSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const dispatch = useDispatch();
  const { list, loading, error, hasNextPage } = useSelector(
    (state: any) => state.episodes
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch initial episodes if empty
  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchEpisodes(1));
    }
  }, [dispatch, list.length]);

  // Scroll left/right
  const handleScrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
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
            <p className="text-center flex-none w-full">
              Loading more episodes...
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-4 ">
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
