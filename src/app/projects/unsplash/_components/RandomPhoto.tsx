"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRandomPhoto } from "../actions";

export default function RandomPhoto() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [image, setImage] = useState({
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

  const fetchImage = async () => {
    const i = await getRandomPhoto();
    if (!i) {
      setError("Failed to fetch image");
      return;
    }
    setImage({
      url: i.urls.regular,
      alt: i.alt_description || "",
      description: i.description || "",
      user: {
        name: i.user.name,
        links: {
          html: i.user.links.html,
        },
      },
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchImage();
  }, []);
  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  if (!image.url) return null;
  return (
    <div>
      <div className="flex justify-center mb-4">
        <Image
          src={image.url}
          alt={image.alt}
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
      <p className="text-center">{image.description}</p>
      <p className="text-center">
        Photo by{" "}
        <a
          href={image.user?.links?.html}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {image.user?.name}
        </a>{" "}
        on Unsplash
      </p>
    </div>
  );
}
