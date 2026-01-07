"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Store, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CATEGORIES } from "@/lib/categories";
import Image from "next/image";

const mainNavLinks = [
  { name: "Home Interiors", href: "/home-interiors" },
  { name: "Business Furniture", href: "/business-furniture" },
  { name: "Repair Services", href: "/repair-services" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
        {/* LEFT: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-75 p-0">
                <div className="p-6 border-b">
                  <SheetTitle className="text-left text-2xl font-bold tracking-tighter">
                    LUMEN
                    <span className="font-light text-stone-500">STUDIO</span>
                  </SheetTitle>
                </div>

                <ScrollArea className="h-[calc(100vh-80px)] p-6">
                  <div className="space-y-8">
                    {/* Main Links */}
                    <nav className="flex ms-8 flex-col gap-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        Main Menu
                      </p>
                      {mainNavLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="text-lg font-medium text-stone-700"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>

                    {/* Category Links with Images */}
                    <nav className="flex flex-col gap-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        Shop by Category
                      </p>
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.name}
                          href="#"
                          className="flex items-center gap-3 group"
                        >
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                            <Image
                              src={cat.image}
                              alt={cat.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900">
                            {cat.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tighter text-stone-900"
          >
            LUMEN
            <span className="font-light text-stone-500 underline decoration-1">
              STUDIO
            </span>
          </Link>

          {/* Desktop Main Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600 ml-8">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-stone-900"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* MIDDLE: Search (Desktop) */}
        <div className="hidden lg:flex relative w-full max-w-sm items-center mx-4">
          <Search className="absolute left-3 h-4 w-4 text-stone-400" />
          <Input
            placeholder="Search collections..."
            className="pl-10 bg-stone-50 border-stone-200 focus-visible:ring-stone-400"
          />
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Store className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-stone-900 text-[10px] text-white">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
