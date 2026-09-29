"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { MapPin, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Services", href: "/services", active: false },
    { name: "Shops", href: "/shops", active: false },
    { name: "Rooms/PG", href: "/rooms", active: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="HelpHive Logo"
            width={160}
            height={40}
            className="h-12 md:h-15 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center h-full gap-8 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[15px] transition-colors relative flex items-center h-full group ${
                link.active
                  ? "text-violet-600 font-semibold"
                  : "text-slate-600 font-medium hover:text-violet-600"
              }`}
            >
              {link.name}
              {link.active && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-violet-600 rounded-t-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
            <MapPin className="h-4 w-4 text-violet-600" />
            <span className="text-[14px] font-medium">Gaya Ji, Bihar</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </button>

          <div className="h-6 w-px bg-slate-200" />

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-[15px] font-semibold text-slate-700 hover:text-violet-600 transition-colors"
            >
              Login / Sign Up
            </Link>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-7 rounded-full h-11 shadow-md shadow-violet-200 transition-all">
              Become a Provider
            </Button>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-900 -mr-2"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col bg-white border-l border-slate-100 p-6 pt-12"
            >
              <SheetTitle className="hidden">Navigation Menu</SheetTitle>

              <div className="flex flex-col gap-6">
                <button className="flex w-full items-center justify-between px-2 py-1">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-violet-600" />
                    <span className="font-semibold text-slate-800">
                      Gaya Ji, Bihar
                    </span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </button>

                <nav className="flex flex-col gap-2 mt-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-[16px] transition-colors ${
                        link.active
                          ? "bg-violet-50 text-violet-700 font-bold"
                          : "text-slate-600 font-medium hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-auto pt-6 flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full border-slate-200 text-slate-700 rounded-full h-12 text-[15px] font-semibold hover:bg-slate-50"
                >
                  Login / Sign Up
                </Button>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full h-12 text-[15px] font-semibold shadow-md">
                  Become a Provider
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
