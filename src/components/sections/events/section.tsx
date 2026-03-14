import Link from "next/link";
import React from "react";
import { SecondaryTitle } from "@/components/ui/titles";
import { getEventAlbumsServer } from "@/lib/albums";
import { routesMap } from "@/lib/routes";

export default async function EventsSection() {
  const { albums } = await getEventAlbumsServer();
  const displayedAlbums = albums?.slice(0, 5);

  return (
    <div className="relative bg-white pb-16 pt-8">
      <div className="mb-12 flex justify-center px-8 text-center">
        <SecondaryTitle title={"Event Gallery Highlight"} />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-[600px] md:h-[500px] w-full flex-col md:flex-row gap-2 md:gap-4 overflow-hidden">
          {displayedAlbums?.map((album, index) => {
            return (
              <div
                key={album.id}
                className="group relative flex-1 overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:flex-[3] md:hover:flex-[4] shadow-sm hover:shadow-xl cursor-pointer"
              >
                <Link href={routesMap.gallery.path + album.id} className="block w-full h-full">
                  <div className="absolute inset-0 bg-neutral-900/30 transition-opacity duration-500 group-hover:bg-neutral-900/10 z-10" />
                  <img
                    src={album.cover_photo}
                    alt={album.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg md:text-2xl whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity md:opacity-0 md:-translate-y-4 group-hover:translate-y-0 duration-500 transform">
                      {album.name}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-12 flex justify-center">
        <Link
          className="block rounded-xl bg-primary-dark px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-dark/30"
          href={routesMap.gallery.path}
        >
          View Full Gallery
        </Link>
      </div>
    </div>
  );
}
