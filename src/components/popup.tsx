"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TShirtPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Popup Content */}
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[95vh] 
      overflow-y-auto mx-2 md:mx-4 p-4 md:p-6 transform transition-all"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white btn-circle text-gray-500 hover:text-theme-maroon text-2xl font-bold transition-colors"
        >
          ×
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          {/* T-shirt Image - Left Side */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src="/images/tshirt.jpg"
              alt="OAEG T-shirt"
              width={400}
              height={400}
              className="w-full h-auto max-h-[300px] md:max-h-none object-cover rounded-lg shadow-md"
            />
          </div>

          {/* T-shirt Information - Right Side */}
          <div className="flex-1 space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-theme-maroon mb-3 md:mb-4">
              🎉 Special T-shirt Offer!
            </h2>

            <div className="bg-gradient-to-r from-theme-yellow/10 to-theme-yellow/20 p-3 md:p-4 rounded-lg border-2 border-theme-yellow/30">
              <p className="text-base md:text-lg font-semibold text-theme-maroon mb-2">
                ✨ T-shirt Price: Rs. 2,000/=
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Grab yours before it's too late and wear the honor of OAEG! 🙌
              </p>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="bg-theme-yellow/10 p-2 md:p-3 rounded-lg border border-theme-yellow/30">
                <p className="text-xs md:text-sm font-medium text-theme-maroon">
                  Preorders closing on 7th OCT!
                </p>
                <a
                  href="https://forms.gle/5zYjCYDDry4LuZDL6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-theme-maroon text-white px-3 md:px-4 py-2 rounded-lg hover:bg-theme-maroon/90 transition-colors text-xs md:text-sm font-medium w-full md:w-auto text-center"
                >
                  Order Now
                </a>
              </div>

              <div className="bg-theme-maroon/5 p-2 md:p-3 rounded-lg border border-theme-maroon/20">
                <p className="text-xs md:text-sm font-medium text-theme-maroon mb-2">
                  For inquiries 📞:
                </p>
                <div className="space-y-1 text-xs md:text-sm text-gray-700">
                  <p>‪+94 72 976 1592‬ (Savinu)</p>
                  <p>‪+94 71 303 6921‬ (Dhanuja)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtPopup;
