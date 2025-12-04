"use client";

import { useState } from "react";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    "Home",
    "About Us",
    "Our CSR’s",
    "About Bundelkhand",
    "Achievements",
    "Contact Us"
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 
                      bg-white/90 backdrop-blur-md shadow z-50 transition-all duration-300">
        <div className="flex items-center gap-2">
          <Image
            src="/Deep Jasmine FOUNDATION 1.png"
            alt="Deep Jasmine Foundation"
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </div>

        <div className="hidden lg:block">
          <NavigationMenu className="bg-green-600 text-white rounded-full px-6 py-2">
            <NavigationMenuList className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link}>
                  <NavigationMenuLink className="font-semibold cursor-pointer hover:text-green-100 transition-colors">
                    {link}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Join
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Donate
          </Button>
        </div>

        <button 
          className="lg:hidden p-2 text-green-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      <div 
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 z-[70] h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold text-lg text-green-700">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1">
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-lg font-medium text-gray-800 hover:text-green-600 border-b border-gray-100 pb-2"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Join
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}







