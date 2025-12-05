"use client";

import Link from "next/link";

interface DonatePopupProps {
  onClose: () => void;
}

export default function DonatePopup({ onClose }: DonatePopupProps) {
  return (
    <div
      role="dialog"
      aria-label="Donate options"
      className="w-56 bg-white border rounded-lg shadow-lg p-3 animate-slideDown donate-popup-area"
      onClick={(e) => e.stopPropagation()}
    >
      <Link
        href="/donate"
        onClick={onClose}
        className="block text-sm font-semibold text-green-700 hover:text-green-900 mb-2"
      >
        » Donate as Individual
      </Link>

      <Link
        href="/donate"
        onClick={onClose}
        className="block text-sm font-semibold text-green-700 hover:text-green-900"
      >
        » Donate as CSR
      </Link>
    </div>
  );
}