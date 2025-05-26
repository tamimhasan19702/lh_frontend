/** @format */

// src/app/characters/[id]/page.tsx
"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacterById } from "@/store/features/characters/characterSlice";
import Header from "@/components/header";

interface RootState {
  characters: {
    selectedCharacter: any;
    loading: boolean;
    error: string | null;
  };
}

export default function CharacterDetailPage(props: any) {
  const dispatch = useDispatch();
  const params = React.use(props.params);
  const id = parseInt(params.id, 10);

  const { selectedCharacter, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    if (!isNaN(id)) {
      dispatch(fetchCharacterById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!selectedCharacter) return <p>No character found</p>;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="container mx-auto p-6">
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
          {/* Character Image */}
          <div className="md:w-1/3 p-6 flex justify-center">
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              className="w-full h-auto max-w-xs rounded-md object-cover"
            />
          </div>

          {/* Character Details */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-4xl font-bold text-green-500 mb-4">
              {selectedCharacter.name}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p>
                  <strong>Status:</strong> {selectedCharacter.status}
                </p>
                <p>
                  <strong>Species:</strong> {selectedCharacter.species}
                </p>
                <p>
                  <strong>Type:</strong> {selectedCharacter.type || "N/A"}
                </p>
                <p>
                  <strong>Gender:</strong> {selectedCharacter.gender}
                </p>
              </div>
              <div>
                <p>
                  <strong>Origin:</strong>{" "}
                  {selectedCharacter.origin?.name || "Unknown"}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  {selectedCharacter.location?.name || "Unknown"}
                </p>
                <p>
                  <strong>Total Episodes:</strong>{" "}
                  {selectedCharacter.episode.length}
                </p>
                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(selectedCharacter.created).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Raw JSON Output (Optional) */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Raw Data:</h2>
          <pre className="bg-gray-900 text-sm text-gray-300 p-4 rounded overflow-x-auto">
            {JSON.stringify(selectedCharacter, null, 2)}
          </pre>
        </div>
      </section>
    </main>
  );
}
