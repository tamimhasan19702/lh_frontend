/** @format */

// src/components/CharacterList.tsx
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "@/store/features/characters/characterSlice";

export default function CharacterList() {
  const dispatch = useDispatch();
  const { list, loading, error, hasNextPage, currentPage } = useSelector(
    (state: any) => state.characters
  );

  // Load first page on mount
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
          key={char.id}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-green-500/20 transition-shadow duration-200">
          <img
            src={char.image}
            alt={char.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-white text-xl font-bold truncate">
              {char.name}
            </h3>
            <p className="text-green-500">
              {char.species} - {char.status}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Origin: {char.origin?.name || "Unknown"}
            </p>
          </div>
        </div>
      ))}

      {loading && (
        <p className="col-span-full text-center py-4 text-gray-400">
          Loading more characters...
        </p>
      )}

      {hasNextPage && !loading && (
        <button
          onClick={loadMore}
          className="mt-4 mx-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition">
          Load More
        </button>
      )}
    </div>
  );
}
