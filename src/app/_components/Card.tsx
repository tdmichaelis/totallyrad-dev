export default function Card({
  children,
  outlined = true,
  shadow = false,
  filled = false,
}: Readonly<{
  children: React.ReactNode;
  outlined?: boolean;
  shadow?: boolean;
  filled?: boolean;
}>) {
  let classes = "";
  if (outlined) {
    classes += "border border-[var(--border)] ";
  }
  if (shadow) {
    classes += "shadow-lg ";
  }
  if (filled) {
    classes += "bg-[var(--border)] ";
  }

  return (
    <div className={`flex flex-col p-4 rounded-lg ${classes}`}>{children}</div>
  );
}
