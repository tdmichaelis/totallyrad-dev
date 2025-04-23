import { useState } from "react";
import { TbChevronDown } from "react-icons/tb";

export default function Collapse({
  children,
  header,
  isOpen = false,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  isOpen?: boolean;
}>) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div>
      <button
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-[var(--border)] w-full"
        onClick={() => setOpen(!open)}
      >
        <span className="flex-grow">{header}</span>
        <span className={`duration-300 ${open ? "rotate-180" : ""}`}>
          <TbChevronDown className="text-lg" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
