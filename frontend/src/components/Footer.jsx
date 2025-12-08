import React from "react";
import { MapPin, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#2e9e5b] text-white pt-12 md:pt-16 overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <img
          src="/ForestLeaf.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#2e9e5b] mix-blend-multiply opacity-90" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4 lg:gap-8 pb-8 md:pb-12 text-center md:text-left">
        <div className="space-y-6 sm:col-span-2 lg:col-span-1">
          <div>
            <h3 className="flex items-center justify-center md:justify-start gap-2 font-bold text-lg mb-2">
              <MapPin className="w-5 h-5 shrink-0" /> Address:
            </h3>
            <p className="text-sm opacity-90 leading-relaxed max-w-xs mx-auto md:mx-0">
              NGO’s legal name
              <br />
              Complete address (village/city, district, state, PIN)
            </p>
          </div>

          <div>
            <h3 className="flex items-center justify-center md:justify-start gap-2 font-bold text-lg mb-2">
              <Phone className="w-5 h-5 shrink-0" /> Contact
            </h3>
            <p className="text-sm opacity-90">+91 123 456 7890</p>
            <p className="text-sm opacity-90">contact@ngo.org</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Company</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                The Bundelkhand Problem
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Projects</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <a href="#" className="hover:underline">
                Ongoing Plantations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Land Restoration
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Water Conservation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community Livelihoods
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Women SHG Programs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Legal</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start sm:col-span-2 lg:col-span-1">
          <h3 className="font-bold text-xl mb-4">Social Links</h3>

          <div className="flex gap-4 mb-6 justify-center md:justify-start">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-green-700 font-bold overflow-hidden shadow-lg relative">
              <img
                src="/Bundelkhand.png"
                alt="QR"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <span className="font-bold text-sm">Bundelkhand</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-[1340px] mx-auto px-6 py-6 text-center md:text-left text-xs opacity-80">
          Copyright © 2025 Vasudev Kutumbhakam .
          All Rights Reserved
        </div>
      </div>

      <div className="w-full h-12 md:h-20 relative -mt-4 z-10">
        <img
          src="/trees.png"
          alt="Trees decoration"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </footer>
  );
};

export default Footer;
