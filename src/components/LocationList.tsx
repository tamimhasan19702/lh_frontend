/** @format */

"use client";

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "@/store/features/locations/locationSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const dispatch = useDispatch();
  const { list, loading, error, hasNextPage } = useSelector(
    (state: any) => state.locations
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchLocations(1));
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
    return 380;
  };

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-[14px] md:text-[20px] font-light text-white md:text-2xl md:mb-0">
          Locations
        </h2>
        {hasNextPage && !loading && (
          <Link
            href="/locations"
            className="border-2 text-[14px] md:text-[17px] border-green-500 text-white px-6 py-2 rounded">
            View All
          </Link>
        )}
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="relative overflow-x-auto hide-scrollbar touch-auto">
        <div className="flex gap-6 p-4">
          {list.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}

          {loading && (
            <p className="text-center flex-none w-full">
              Loading more locations...
            </p>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
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
