"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import DonatePopup from "./DonatePopup";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDonatePopup, setShowDonatePopup] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((s) => !s);
  const toggleDonatePopup = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setShowDonatePopup((s) => !s);
  };

  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".donate-popup-area")) {
        setShowDonatePopup(false);
      }
    };

    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, []);

  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Our CSR’s", href: "#csr" },
    { label: "About BhundelKhand", href: "#mission" },
    { label: "AChievements", href: "#impact" },
    { label: "Contact Us", href: "#contribution" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-md shadow z-50">

        <Link href="/">
          <Image
            src="/Deep Jasmine FOUNDATION 1.png"
            alt="Deep Jasmine Foundation"
            width={120}
            height={48}
            className="h-12 w-auto cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden lg:block">
          <NavigationMenu className="bg-green-600 text-white rounded-full px-6 py-2">
            <NavigationMenuList className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={isAuthPage ? "/" : item.href}
                      className="font-semibold cursor-pointer hover:text-green-100"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-3">

          <Link href="/donate">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Join
            </Button>
          </Link>

          <div className="relative donate-popup-area">
            <Button
              onClick={(e) => toggleDonatePopup(e)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Donate
            </Button>

            {showDonatePopup && (
              <div className="absolute right-0 mt-2 z-[9999]">
                <DonatePopup onClose={() => setShowDonatePopup(false)} />
              </div>
            )}
          </div>
        </div>

        <button className="lg:hidden p-2 text-green-800" onClick={toggleMenu}>
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold text-lg text-green-700">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link key={item.label} href={isAuthPage ? "/" : item.href}>
                <span
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-green-600 border-b pb-2"
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <Link href="/signup">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Join
              </Button>
            </Link>

            <Link href="/donate">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}