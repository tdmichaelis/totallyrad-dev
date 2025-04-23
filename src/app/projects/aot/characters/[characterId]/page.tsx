import Image from "next/image";
import { Character, Episode } from "../../page";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ characterId: string }>;
}) {
  const { characterId } = await params;
  const response = await fetch(
    `https://api.attackontitanapi.com/characters/${characterId}`
  );
  if (!response.ok) {
    return (
      <div className="grid place-content-center h-screen">
        Character not found
      </div>
    );
  }

  const data: Character = await response.json();
  // dedupe episodes because the api returns the same episode multiple times
  const uniqueEpisodes = Array.from(
    new Set(data.episodes.map((episode: Episode) => episode))
  );
  const episodes: Episode[] = await Promise.all(
    uniqueEpisodes.map(async (episode) => {
      console.log(episode);
      const res = await fetch(`${episode}`);
      if (!res.ok) {
        throw new Error("Failed to fetch episode");
      }
      const data = await res.json();
      return data;
    })
  );

  const character: Character = {
    ...data,
    episodes,
  };

  if (!character) {
    return (
      <div className="grid place-content-center h-screen">
        Character not found
      </div>
    );
  }
  return (
    <div className="container flex flex-col gap-2 py-4 px-6">
      {/* back to characters */}
      <div className="flex items-center">
        <Link
          href="/projects/aot"
          className="border rounded-md border-[var(--border)] py-1 px-2"
        >
          Back to Character List
        </Link>
      </div>
      <div className="flex items-center gap-4 p-4 border rounded-md hover:bg-gray-100 hover:text-[var(--background)] transition-colors duration-200">
        <Image
          src={character.img || "https://placehold.co/50x50"}
          alt={character.name}
          width={50}
          height={50}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div>
          <h2 className="text-xl font-semibold">{character.name}</h2>
          <p className="text-gray-500">{character.description}</p>
        </div>
      </div>
      <p>Episodes:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {character.episodes.map((episode) => (
          <div
            key={episode.id}
            className="flex flex-col border rounded-md hover:bg-gray-100 hover:text-[var(--background)] transition-colors duration-200 p-2"
          >
            <Image
              src={episode.img || "https://placehold.co/50x50"}
              alt={episode.name}
              width={50}
              height={50}
              className="w-32 h-32 object-cover rounded-md"
            />
            <div>
              <h2 className="text-xl font-semibold">{episode.name}</h2>
              <p className="text-gray-500">{episode.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
