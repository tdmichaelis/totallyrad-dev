import { TbChevronLeft, TbMenu2 } from "react-icons/tb";
import MenuItems from "./MenuItems";

export default function SideDrawer({
  open,
  setOpen,
}: Readonly<{ open: boolean; setOpen: (open: boolean) => void }>) {
  return (
    <>
      <div className="relative z-50 flex -translate-x-full sm:translate-x-0 transition-all duration-300 md:overflow-visible">
        <section
          className={`border-r border-[var(--border)] sm:pr-5 transition-all duration-300 ${
            open ? "w-0 sm:w-[272px]" : "w-0"
          } `}
        >
          <div
            className={`transition-all duration-300 ${
              open ? "" : "-translate-x-[272px]"
            }`}
          >
            <MenuItems />
          </div>
        </section>
        <button
          className="absolute top-3 -right-3.5 text-xl  bg-[var(--background)] rounded-full border border-[var(--border)] p-1 hidden sm:block"
          onClick={() => setOpen(!open)}
        >
          {open ? <TbChevronLeft /> : <TbMenu2 />}
        </button>
      </div>
      <div
        className={`absolute inset-0 z-50 sm:hidden ${open ? "w-auto" : "w-0"}`}
      >
        <div
          className={`absolute inset-0 bg-black/80 ${
            open ? "block" : "hidden"
          }`}
          onClick={() => setOpen(false)}
        ></div>
        <section
          className={`relative h-full w-[272px] bg-[#0a0a0a] border-r border-[var(--border)] sm:pr-4 sm:mr-4 transition-all duration-300 overflow-hidden ${
            open ? "" : "-translate-x-full"
          } `}
        >
          <div
            className={`transition-all duration-300 ${
              open ? "" : "-translate-x-[272px]"
            }`}
          >
            <MenuItems />
          </div>
        </section>
      </div>
    </>
  );
}
