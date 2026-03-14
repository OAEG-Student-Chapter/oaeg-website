"use client";
import React, { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  original: string;
  thumbnail: string;
}

export default function Gallery({ images }: { images: Image[] }) {
  const [openGallery, setOpenGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const closeGallery = useCallback(() => {
    setOpenGallery(false);
  }, []);

  const navigateGallery = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "next") {
        setGalleryIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {
        setGalleryIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    },
    [images.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!openGallery) return;

      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      }
    };

    if (openGallery) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [openGallery, closeGallery, navigateGallery]);

  return (
    <div className="relative w-full">
      {/* Masonry Grid */}
      <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4">
        {images?.map((photo, index) => {
          return (
            <div
              key={index}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <img
                onClick={() => {
                  setGalleryIndex(index);
                  setOpenGallery(true);
                }}
                className="w-full cursor-zoom-in object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                src={photo.original}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {openGallery && (
        <div className="fixed inset-0 z-50 flex h-[100dvh] w-screen items-center justify-center bg-black/80 backdrop-blur-xl transition-opacity duration-300">
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white/70 transition-colors hover:bg-black/70 hover:text-white sm:right-6 sm:top-6"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateGallery("prev");
            }}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/70 transition-colors hover:bg-black/70 hover:text-white sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateGallery("next");
            }}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/70 transition-colors hover:bg-black/70 hover:text-white sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative flex h-full w-full items-center justify-center p-4 sm:p-12"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeGallery();
              }
            }}
          >
            <img
              className="max-h-[85vh] max-w-[95vw] object-contain shadow-2xl"
              src={images[galleryIndex].original}
              alt={`Gallery image ${galleryIndex + 1}`}
            />
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md">
              {galleryIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
