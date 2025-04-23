"use client";
import { useState } from "react";
import Header from "./_components/Header";
import SideDrawer from "./_components/SideDrawer";

export default function PageCore({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className="relative flex-grow flex h-full">
        <SideDrawer open={open} setOpen={setOpen} />
        <main className="grow flex flex-col overflow-auto">{children}</main>
      </div>
    </>
  );
}
