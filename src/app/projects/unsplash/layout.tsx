export default function UnsplashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grow flex flex-col overflow-auto">
      <div className="border-b border-[var(--border)]">
        <div className="text-2xl font-bold py-3 px-6">
          Unsplash Image Gallery
        </div>
      </div>
      <div className="grow flex py-4 px-6">{children}</div>
    </div>
  );
}
