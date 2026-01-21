"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  shop: [
    { name: "All Collections", href: "/collections" },
    { name: "Living Room", href: "/category/living-room" },
    { name: "Bedroom", href: "/category/bedroom" },
    { name: "Office", href: "/category/office" },
    { name: "New Arrivals", href: "category/new-arrivals" },
  ],
  support: [
    { name: "Order Tracking", href: "/track" },
    { name: "B2B Export & Logistics", href: "/b2b-export-logistics" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "FAQs", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  company: [
    { name: "Our Story", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Store Locator", href: "/stores" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Newsletter */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-white"
            >
              LUMEN<span className="font-light text-stone-400">STUDIO</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Elevating modern living through thoughtfully designed, sustainable
              furniture since 2010.
            </p>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                Join our list
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Email address"
                  className="bg-stone-800 border-stone-700 text-white placeholder:text-stone-500 rounded-none focus-visible:ring-stone-400"
                />
                <Button className="rounded-none bg-white text-stone-900 hover:bg-stone-200 px-4">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-[0.2em]">
              Shop
            </h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors text-sm font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-[0.2em]">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors text-sm font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-[0.2em]">
              Connect
            </h4>
            <div className="space-y-4 text-sm font-light text-stone-400">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-stone-500" />
                <span>
                  123 Design District,
                  <br />
                  New York, NY 10013
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-stone-500" />
                <span>+1 (555) 000-1234</span>
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="#" className="hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium uppercase tracking-widest text-stone-500">
          <p>© 2026 LUMEN STUDIO. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-stone-800/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-600">
            {/* --- YOUR NAME ADDED HERE --- */}
            <Link
              href="mdfaizanahmad.in"
              className="hover:text-white transition-colors border-l border-stone-800 pl-8 hidden md:block"
            >
              Design by <span className="text-stone-400">Md Faizan Ahmad</span>
            </Link>
          </div>

          {/* Design Credit for Mobile - visible only on small screens */}
          <p className="md:hidden text-[9px] font-bold uppercase tracking-[0.2em] text-stone-600">
            Design by{" "}
            <span className="text-stone-400 font-bold">
              <Link href="mdfaizanahmad.in">Md Faizan Ahmad</Link>
            </span>
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">
              Operational: India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
