/** @format */

"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCharacterById } from "@/store/features/characters/characterSlice";
import Header from "@/components/header";
import {
  Heart,
  Globe,
  User,
  Edit2Icon,
  MapIcon,
  FileArchiveIcon,
} from "lucide-react";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  episodeNames: string[];
}

type Params = {
  id: string;
};

export default function CharacterDetailPage(props: {
  params: Promise<Params>;
}) {
  const dispatch = useAppDispatch(); // ✅ Changed to useAppDispatch
  const params = React.use(props.params);
  const id = parseInt(params.id, 10);

  const { selectedCharacter, loading, error } = useAppSelector(
    (state) => state.characters
  ); // ✅ Changed to useAppSelector

  useEffect(() => {
    if (!isNaN(id)) {
      dispatch(fetchCharacterById(id));
    }
  }, [dispatch, id]);

  if (loading)
    return <p className="text-center p-6 text-white">Loading character...</p>;
  if (error) return <p className="text-red-500 text-center p-6">{error}</p>;
  if (!selectedCharacter)
    return <p className="text-center p-6 text-white">Character not found</p>;

  return (
    <main className="min-h-screen text-white font-sans">
      <Header />
      <section className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left Column */}
          <div className="flex flex-col items-center justify-center md:items-center md:w-1/2 w-full">
            <h1 className="text-[30px] font-[600] text-cyan-400 mb-4">
              {selectedCharacter.name}
            </h1>
            <div className="rounded-md overflow-hidden p-10 bg-[#ffffff15]">
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="w-60 h-60 object-cover rounded-md"
              />
            </div>

            <h1
              className="md:block hidden text-[60px] font-extrabold text-transparent relative left-[-300px] top-1/2 -translate-y-1/2 rotate-[-90deg] tracking-wider select-none"
              style={{
                WebkitTextStroke: "1px #13dae536",
              }}>
              {selectedCharacter.name}
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex-1 md:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#ffffff15] rounded-lg p-4 flex flex-col justify-start items-start">
                <Heart size={24} color="#00FF00" className="mt-1" />
                <div className="p-0 mt-2">
                  <p className="text-[15px] text-green-400">Status</p>
                  <p className="text-[25px] font-bold">
                    {selectedCharacter.status}
                  </p>
                </div>
              </div>

              <div className="bg-[#ffffff15] rounded-lg p-4 flex flex-col justify-start items-start">
                <Globe size={24} color="#00FF00" className="mt-1" />
                <div className="p-0 mt-2">
                  <p className="text-[15px] text-green-400">Species</p>
                  <p className="text-[25px] font-bold">
                    {selectedCharacter.species}
                  </p>
                </div>
              </div>

              <div className="bg-[#ffffff15] rounded-lg p-4 flex flex-col justify-start items-start">
                <User size={24} color="#00FF00" className="mt-1" />
                <div className="p-0 mt-2">
                  <p className="text-[15px] text-green-400">Gender</p>
                  <p className="text-[25px] font-bold">
                    {selectedCharacter.gender}
                  </p>
                </div>
              </div>
            </div>

            {/* Origin Section */}
            <div className="bg-[#ffffff15] rounded-lg p-4 flex flex-col justify-start items-start mb-4">
              <Globe size={24} color="#00FF00" className="mt-1" />
              <div className="p-0 mt-2 w-full">
                <p className="text-sm text-green-400">Origin</p>
                <div className="flex w-full justify-between">
                  <p className="text-xl font-bold w-full">
                    {selectedCharacter.origin?.name || "Unknown"}
                  </p>
                  <Edit2Icon className="w-[10%]" />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-[#ffffff15] rounded-lg p-4 flex flex-col justify-start items-start mb-4">
              <MapIcon size={24} color="#00FF00" className="mt-1" />
              <div className="p-0 mt-2 w-full">
                <p className="text-sm text-green-400">Last Known Location</p>
                <div className="flex w-full justify-between">
                  <p className="text-xl font-bold w-full">
                    {selectedCharacter.location?.name || "Unknown"}
                  </p>
                  <Edit2Icon className="w-[10%]" />
                </div>
              </div>
            </div>

            {/* Episodes Section */}
            <div className="bg-[#ffffff15] rounded-lg p-4 flex flex-col justify-start items-start mb-4">
              <FileArchiveIcon size={24} color="#00FF00" className="mt-1" />
              <div className="p-0 mt-2 w-full">
                <p className="text-sm text-green-400">
                  Episodes ({selectedCharacter.episode.length})
                </p>
                <div className="flex w-full justify-between">
                  <ul className="overflow-y-auto max-h-[200px] w-full epi-scroll pl-6 mt-4 list-disc">
                    {selectedCharacter.episodeNames?.map((name, index) => (
                      <li key={index} className="text-xl font-bold mb-1">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
