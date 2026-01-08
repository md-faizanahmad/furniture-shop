"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  User,
  Store,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";
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
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const mainNavLinks = [
  { name: "Home Interiors", href: "/home-interiors" },
  { name: "Business Furniture", href: "/business-furniture" },
  { name: "Repair Services", href: "/repair-services" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Helper function to close all overlays
  const handleNavClick = () => {
    setIsOpen(false);
    setIsSearchOpen(false);
  };

  // Prevent cascading renders by checking state before updating
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isSearchOpen) setIsSearchOpen(false);
    if (isOpen) setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 relative">
        {/* --- MOBILE SEARCH POP-OVER --- */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 z-60 bg-white flex items-center px-4 gap-2 md:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
              >
                <ArrowLeft className="h-5 w-5 text-stone-500" />
              </Button>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <Input
                  autoFocus
                  placeholder="Search furniture..."
                  className="w-full pl-10 h-10 bg-stone-50 border-none focus-visible:ring-1 focus-visible:ring-stone-200 rounded-full text-sm"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5 text-stone-400" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- LEFT: LOGO & NAVIGATION --- */}
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-stone-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-75 p-0 border-r-stone-100">
                <div className="p-6 border-b flex items-center justify-between">
                  <SheetTitle className="text-left text-xl font-bold tracking-tighter">
                    LUMEN{" "}
                    <span className="font-light text-stone-400 uppercase text-sm ml-1">
                      Studio
                    </span>
                  </SheetTitle>
                </div>
                <ScrollArea className="h-[calc(100vh-80px)]">
                  <div className="p-6 space-y-10">
                    <nav className="flex flex-col gap-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-2 ml-2">
                        Main Menu
                      </p>
                      {mainNavLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={handleNavClick}
                          className={cn(
                            "text-base font-medium px-4 py-3 rounded-2xl transition-all",
                            pathname === link.href
                              ? "bg-stone-900 text-white shadow-lg"
                              : "text-stone-600 hover:bg-stone-50"
                          )}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                    <nav className="flex flex-col gap-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-2 ml-2">
                        Categories
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        {CATEGORIES.map((cat) => (
                          <Link
                            key={cat.name}
                            href={`/categories/${cat.slug}`}
                            onClick={handleNavClick}
                            className={cn(
                              "flex items-center gap-4 p-2 rounded-2xl transition-all border",
                              pathname === `/categories/${cat.slug}`
                                ? "border-stone-200 bg-stone-50"
                                : "border-transparent hover:bg-stone-50"
                            )}
                          >
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-stone-100 shadow-sm">
                              <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm font-medium text-stone-900">
                              {cat.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tighter text-stone-900 group"
          >
            LUMEN{" "}
            <span className="font-light text-stone-500 group-hover:text-stone-900 transition-colors">
              STUDIO
            </span>
          </Link>

          {/* Desktop Links with Animated Indicator */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest ml-10">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-2 transition-colors",
                  pathname === link.href
                    ? "text-stone-900"
                    : "text-stone-400 hover:text-stone-900"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="header-active-line"
                    className="absolute -bottom-6.5 left-0 right-0 h-0.5 bg-stone-900"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* --- RIGHT: UTILITY ACTIONS --- */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* Desktop Search */}
          <div className="hidden lg:flex relative items-center mr-4">
            <Search className="absolute left-3 h-4 w-4 text-stone-400" />
            <Input
              placeholder="Search collections..."
              className="w-50 xl:w-75 pl-10 h-10 bg-stone-50 border-stone-200 focus-visible:ring-stone-400 rounded-full text-xs transition-all focus:w-87.5"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-stone-600"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex text-stone-600"
          >
            <Store className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="text-stone-600">
            <User className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative group text-stone-600"
          >
            <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-stone-900 text-[9px] font-bold text-white">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
