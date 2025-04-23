import Image from "next/image";
import Link from "next/link";

export type Episode = {
  id: number;
  name: string;
  img: string;
  description: string;
};
export type Character = {
  id: number;
  name: string;
  img: string;
  description: string;
  episodes: Episode[];
};

export default async function Page() {
  const res = await fetch("https://api.attackontitanapi.com/characters");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  if (!data) {
    return (
      <div className="grid place-content-center h-screen">
        Characters not found
      </div>
    );
  }
  const characters = data.results.map((character: Character) => ({
    id: character.id,
    name: character.name,
    img: character.img,
    description: character.description,
  }));
  return (
    <div className="container py-4 px-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Attack on Titan Characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((character: Character) => (
            <Link
              key={character.id}
              href={`/projects/aot/characters/${character.id}`}
              className="flex items-center gap-4 p-4 border rounded-md hover:bg-gray-100 hover:text-[var(--background)] transition-colors duration-200"
            >
              <Image
                src={character.img || "https://placehold.co/50x50"}
                alt={character.name}
                width={50}
                height={50}
                className="w-32 h-32 object-cover rounded-md"
              />
              <div>
                <h2 className="text-xl font-semibold">{character.name}</h2>
                <p className="">{character.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
