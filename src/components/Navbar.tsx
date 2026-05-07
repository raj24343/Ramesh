"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#0b0c0f]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-lg font-semibold tracking-tight text-zinc-100">
          Ramesh
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <Link
                key={item}
                href={`#${id}`}
                className={cn(
                  "text-sm transition-colors",
                  active === id ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
                )}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className={cn(buttonVariants({ variant: "default", size: "sm" }), "hidden sm:inline-flex")}
          >
            Let&apos;s Build
          </Link>

          <Sheet>
            <SheetTrigger className="rounded-lg border border-zinc-700 p-2 text-zinc-300 lg:hidden">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent>
              <div className="mt-10 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-zinc-300 hover:text-zinc-100"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  className={cn(buttonVariants({ variant: "default" }), "mt-3 w-fit")}
                >
                  Let&apos;s Build
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
