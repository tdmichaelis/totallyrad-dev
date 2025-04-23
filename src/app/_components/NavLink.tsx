import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

export default function NavLink({
  children,
  href,
  ActiveIcon,
  InactiveIcon,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  ActiveIcon?: IconType;
  InactiveIcon?: IconType;
}>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-[var(--border)] ${
        isActive ? "!bg-[var(--border)]" : ""
      }`}
    >
      <div className="flex items-center space-x-2">
        {isActive && ActiveIcon ? (
          <ActiveIcon className="text-2xl" />
        ) : (
          InactiveIcon && <InactiveIcon className="text-2xl" />
        )}
        <div>{children}</div>
      </div>
    </Link>
  );
}
