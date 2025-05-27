/** @format */

"use client";

import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCharacters } from "@/store/features/characters/characterSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CharacterCard from "./CharacterCard";
import Link from "next/link";

export default function CharacterList() {
  const dispatch = useAppDispatch();
  const { list, loading, error, hasNextPage } = useAppSelector(
    (state) => state.characters
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
    if (cardRef.current) {
      const style = window.getComputedStyle(cardRef.current);
      const marginLeft = parseFloat(style.marginLeft || "0");
      const marginRight = parseFloat(style.marginRight || "0");
      return cardRef.current.offsetWidth + marginLeft + marginRight;
    }
    return 380;
  };

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchCharacters(1));
    }
  }, [dispatch, list.length]);

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-[14px] md:text-[20px] font-light text-white md:text-2xl md:mb-0">
          Meet The Cast
        </h2>
        {hasNextPage && !loading && (
          <Link
            href="/characters"
            className="border-2 text-[14px] md:text-[17px] border-green-500 text-white px-6 py-2 rounded">
            View All
          </Link>
        )}
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="relative overflow-x-auto hide-scrollbar touch-auto">
        <div className="flex gap-6 p-4" style={{ scrollBehavior: "smooth" }}>
          {list.map((char, index) => (
            <div
              key={char.id}
              ref={index === 0 ? cardRef : null}
              className="flex-none w-full sm:w-64 md:w-80">
              <CharacterCard char={char} />
            </div>
          ))}

          {loading && (
            <p className="text-center flex-none w-full text-white">
              Loading more characters...
            </p>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleScrollLeft}
          className="bg-[#ffffff15] hover:bg-[#ffffff2d] text-green-500 px-4 py-2 rounded"
          aria-label="Scroll Left">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleScrollRight}
          className="bg-[#ffffff15] hover:bg-[#ffffff2d] text-green-500 px-4 py-2 rounded"
          aria-label="Scroll Right">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
