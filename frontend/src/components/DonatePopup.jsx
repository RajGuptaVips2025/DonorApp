import React from "react";

export default function DonatePopup({ onClose }) {
  return (
    <div
      role="dialog"
      aria-label="Donate options"
      className="w-56 bg-white border rounded-lg shadow-lg p-3 animate-slideDown donate-popup-area"
      onClick={(e) => e.stopPropagation()}
    >
      <a
        href="/donate"
        onClick={onClose}
        className="block text-sm font-semibold text-green-700 hover:text-green-900 mb-2"
      >
        » Donate as Individual
      </a>

      <a
        href="/donate"
        onClick={onClose}
        className="block text-sm font-semibold text-green-700 hover:text-green-900"
      >
        » Donate as CSR
      </a>
    </div>
  );
}
