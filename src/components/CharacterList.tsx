/** @format */

// src/components/CharacterList.tsx
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "@/store/features/characters/characterSlice";
import type { AppDispatch } from "@/store";
import { CharacterState } from "@/store/features/characters/characterSlice";

export default function CharacterList() {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {list.map((char) => (
        <div
          key={char.name}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition">
          <img
            src={char.image}
            alt={char.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-white text-xl font-bold">{char.name}</h3>
            <p className="text-green-500">
              {char.status} - {char.species}
            </p>
            <p className="text-gray-400">
              Origin: {char.origin?.name || "Unknown"}
            </p>
          </div>
        </div>
      ))}

      {loading && (
        <p className="text-center col-span-full">Loading more characters...</p>
      )}

      {hasNextPage && !loading && (
        <button
          onClick={loadMore}
          className="mt-4 mx-auto px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Load More
        </button>
      )}
    </div>
  );
}
