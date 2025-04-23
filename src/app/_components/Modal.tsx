"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 text-black p-6 rounded-md overflow-auto">
      {/* Modal Background */}
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/60"
        onClick={() => router.back()}
      ></button>
      {/* Modal Content */}
      <div className="relative flex justify-center bg-white rounded-lg p-4 w-full mx-auto">
        <button
          className="absolute top-0 right-2 z-50 bg-white py-0.5 px-2 rounded-md text-lg cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
