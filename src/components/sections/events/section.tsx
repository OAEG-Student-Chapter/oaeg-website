import Link from "next/link";
import React from "react";
import { SecondaryTitle } from "@/components/ui/titles";
import { getEventAlbumsServer } from "@/lib/albums";
import AppCard from "@/components/ui/card";
import { routesMap } from "@/lib/routes";

export default async function EventsSection() {
  const { albums } = await getEventAlbumsServer();
  const displayedAlbums = albums?.slice(0, 5);

  return (
    <div className="relative bg-white pb-8">
      <div className="mb-8 flex justify-center px-8">
        <SecondaryTitle title={"Event Gallery"} />
      </div>
      <div className="absolute bottom-0 left-0 z-0 h-1/2 w-full bg-gradient-to-r from-[#ffb629] via-[#ffda56] to-[#ffd7a6]"></div>
      <div className="scrollbar-hide relative z-10 flex w-full flex-row px-4 max-sm:h-[40vh] max-sm:overflow-x-auto md:px-20">
        {displayedAlbums?.map((album) => {
          return (
            <div
              key={album.id}
              className="mx-4 aspect-[3/4] w-80 shrink-0 max-sm:m-4 max-sm:w-[80vw]"
            >
              <AppCard
                title={album.name}
                imgSrc={album.cover_photo}
                link={routesMap.gallery.path + album.id}
              />
            </div>
          );
        })}
      </div>
      <div className="relative z-10 mt-8 flex justify-center">
        <Link
          className="block bg-primary-dark px-8 py-3 text-base font-bold text-white no-underline transition-all duration-300 ease-in-out hover:scale-105"
          href={routesMap.gallery.path}
        >
          More
        </Link>
      </div>
    </div>
  );
}
