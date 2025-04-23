import { TbMenu2 } from "react-icons/tb";

export default function Header({
  open,
  setOpen,
}: Readonly<{ open: boolean; setOpen: (open: boolean) => void }>) {
  return (
    <header className="relative border-b border-[var(--border)]">
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center space-x-2">
          <button className="sm:hidden" onClick={() => setOpen(!open)}>
            <TbMenu2 />
          </button>
          <div className="text-lg font-roboto font-bold">totallyrad.dev</div>
        </div>
      </div>
    </header>
  );
}
