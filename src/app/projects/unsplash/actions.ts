"use server";
const revalidate = 60 * 5; // 5 minutes

export async function getRandomPhoto() {
  const res = await fetch("https://api.unsplash.com/photos/random", {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
    next: { revalidate: revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch image");
  }

  return res.json();
}

export async function searchPhotos(query: string) {
  console.log("searching for photos", query);
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: revalidate },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  return res.json();
}

export async function getPhotoById(id: string) {
  const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
    next: { revalidate: revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch photo");
  }

  return res.json();
}

export async function searchCollections(query: string) {
  const res = await fetch(
    `https://api.unsplash.com/search/collections?query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: revalidate },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch collections");
  }

  return res.json();
}

export async function getCollectionPhotos(collectionId: string) {
  if (!collectionId) {
    return [];
  }
  const res = await fetch(
    `https://api.unsplash.com/collections/${collectionId}/photos`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: revalidate },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch collection photos");
  }

  return res.json();
}
