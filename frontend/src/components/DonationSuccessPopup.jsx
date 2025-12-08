import React from "react";

export default function DonationSuccessPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center animate-fadeIn">

        <img
          src="/plantpot.png"
          alt="plant"
          width={90}
          height={90}
          className="mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold text-green-700 mb-1">
          Successfully Donated
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          Thank You for Growing Hope in Bundelkhand!
        </p>

        <div className="border-t border-dashed border-gray-300 my-4"></div>

        <p className="font-medium text-gray-700 mb-3">You will receive :</p>

        <ul className="text-left text-sm text-gray-600 space-y-2 mx-auto w-fit">
          <li>✔ Donation Certificate</li>
          <li>✔ Impact Tracking Dashboard Access</li>
          <li>✔ Geo-tagged Tree Growth Updates</li>
        </ul>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
        >
          View My Trees
        </button>
      </div>
    </div>
  );
}
