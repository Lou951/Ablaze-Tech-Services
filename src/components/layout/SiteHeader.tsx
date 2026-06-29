"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Packages",
    href: "#packages",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-300/10 bg-[#050b18] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/#home"
          className="group flex items-center"
          onClick={closeMenu}
        >
          <Image
            src="/images/ablaze-mark-transparent.png"
            alt=""
            width={88}
            height={88}
            priority
            className="h-16 w-16 object-contain"
          />

          <div>
            <p className="text-lg font-extrabold tracking-tight text-white">
              Ablaze
            </p>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-blue-200">
              Tech Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-100 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 md:inline-flex"
        >
          Start a project
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-[#050b18] px-6 pb-6 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-bold text-slate-100 transition hover:bg-white/10 hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Start a project
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
