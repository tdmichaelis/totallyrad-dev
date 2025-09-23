import Image from "next/image";

export default function Home() {
  return (
    <div className="container py-4 px-6 flex flex-col  min-h-screen">
      <Image
        src="/logo_full.png"
        alt="Logo Full"
        style={{ maxWidth: "400px", width: "100%" }}
        width={400}
        height={400}
        priority
        className="mb-8"
      />
      {/* ...existing code... */}
    </div>
  );
}
