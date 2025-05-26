/** @format */

"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "@/store/features/characters/characterSlice";
import type { AppDispatch } from "@/store";
import { CharacterState } from "@/store/features/characters/characterSlice";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error, hasNextPage, currentPage } = useSelector(
    (state: { characters: CharacterState }) => state.characters
  );

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchCharacters(1));
    }
  }, [dispatch, list.length]);

  const loadMore = () => {
    if (!loading && hasNextPage) {
      dispatch(fetchCharacters(currentPage + 1));
    }
  };

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex  flex-row justify-between items-center mb-4">
        <h2 className=" text-[40px] md:text-[40px] font-bold text-[#13d9e5] md:text-2xl md:mb-4 mb-2">
          The Cast
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-center items-center">
        {list.map((char) => (
          <CharacterCard key={char.name} char={char} />
        ))}

        {loading && (
          <p className="text-center flex-none w-full col-span-4">
            Loading more characters...
          </p>
        )}
      </div>
      {hasNextPage && !loading && (
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={loadMore}
            className="border-2 text-[14px] md:text-[20px] border-green-500 text-white px-6 py-2  rounded ">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
