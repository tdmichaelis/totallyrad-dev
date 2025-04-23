"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getPhotoById } from "../actions";
import Link from "next/link";
import { BiFullscreen } from "react-icons/bi";

export default function UnsplashGalleryPhoto({
  photoId,
  ...rest
}: Readonly<{
  photoId: string;
}>) {
  const [image, setImage] = useState({
    id: "",
    url: "",
    alt: "",
    description: "",
    user: {
      name: "",
      links: {
        html: "",
      },
    },
  });

  useEffect(() => {
    const fetchImage = async () => {
      const photo = await getPhotoById(photoId);
      if (!photo) {
        console.error("Failed to fetch image");
        return;
      }

      setImage({
        id: photo.id,
        url: photo.urls.regular,
        alt: photo.alt_description || "",
        description: photo.description || "",
        user: {
          name: photo.user.name,
          links: {
            html: photo.user.links.html,
          },
        },
      });
    };
    fetchImage();
  }, [photoId]);
  if (!image.url) return null;
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-md">
      <div className="relative inset-0 flex items-center justify-end h-full w-full">
        <Image
          src={image.url}
          alt={image.alt}
          width={500}
          height={500}
          style={{ height: "100%", objectFit: "cover" }}
          priority
          {...rest}
        />
        <div className="absolute inset-x-0 bottom-0 bg-black/60 bg-opacity-50 text-white p-2 rounded-b-lg truncate">
          Artist:{" "}
          <Link
            href={image.user.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline"
          >
            {image.user.name}
          </Link>
        </div>
        <div className="absolute top-0 bg-black/60 bg-opacity-50 text-white p-1 rounded-t-lg">
          <Link href={`/${image.id}`}>
            <BiFullscreen />
          </Link>
        </div>
      </div>
    </div>
  );
}
