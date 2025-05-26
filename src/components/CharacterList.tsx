/** @format */

"use client";

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "@/store/features/characters/characterSlice";
import type { AppDispatch } from "@/store";
import {
  CharacterState,
  Character,
} from "@/store/features/characters/characterSlice";
import Link from "next/link";

import CharacterCard from "./CharacterCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CharacterList() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error, hasNextPage } = useSelector(
    (state: { characters: CharacterState }) => state.characters
  );

  // Ref for the scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to the left
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Scroll to the right
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
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
        <div
          className="flex gap-6 p-4"
          style={{ transition: "transform 0.3s ease-in-out" }}>
          {list.map((char) => (
            <CharacterCard key={char.id} char={char} />
          ))}

          {loading && (
            <p className="text-center flex-none w-full">
              Loading more characters...
            </p>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4 ">
        <button
          onClick={handleScrollLeft}
          className="bg-[#ffffff15] hover:bg-[#ffffff2d] text-green-500 px-4 py-2 rounded ">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleScrollRight}
          className="bg-[#ffffff15] hover:bg-[#ffffff2d] text-green-500 px-4 py-2 rounded">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
