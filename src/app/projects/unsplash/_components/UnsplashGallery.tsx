"use client";

import { searchPhotos } from "../actions";
import UnsplashGalleryPhoto from "./UnsplashGalleryPhoto";
import { useEffect, useRef, useState } from "react";
export type UnsplashImage = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  description: string;
  height: number;
  width: number;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
};
export default function UnsplashGallery() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [images, setPhotos] = useState<UnsplashImage[]>([]);

  const searchImages = async () => {
    const search = searchRef.current?.value || "guitars";
    const { results } = await searchPhotos(search);
    console.log(results);
    if (!results) {
      console.error("Failed to fetch photos");
      return;
    }
    setPhotos(results);
  };

  useEffect(() => {
    searchImages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-end pb-4 w-full">
        <div className="flex items-center space-x-2">
          <input
            ref={searchRef}
            type="text"
            name="search"
            className="border border-[var(--border)] rounded-md px-2 py-1"
            placeholder="Search for photos"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchImages();
              }
            }}
          />
          <button className="border rounded-md border-[var(--border)] py-1 px-2">
            Search
          </button>
        </div>
      </div>
      {/* split into 3 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* {images.map((chunk, index) => (
          <div key={index} className="flex flex-col space-y-4"> */}
        {images.map((image) => (
          <UnsplashGalleryPhoto key={image.id} photoId={image.id} />
        ))}
        {/* </div>
        ))} */}
      </div>
    </div>
  );
}
