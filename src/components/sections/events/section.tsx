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
    <div className="pb-8 relative bg-white">
      <div className="flex justify-center mb-8 px-8">
        <SecondaryTitle title={"Event Gallery"} />
      </div>
      <div className="bg-gradient-to-r from-[#ffb629] via-[#ffda56] to-[#ffd7a6] h-1/2 bottom-0 absolute z-0 w-full left-0"></div>
      <div className="px-4 md:px-20 flex flex-row w-full max-sm:overflow-x-auto max-sm:h-[40vh] relative z-10 scrollbar-hide">
        {displayedAlbums?.map((album) => {
          return (
            <div key={album.id} className="w-80 aspect-[3/4] mx-4 shrink-0 max-sm:w-[80vw] max-sm:m-4">
              <AppCard
                title={album.name}
                imgSrc={album.cover_photo}
                link={routesMap.gallery.path + album.id}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8 relative z-10">
        <Link className="block bg-primary-dark text-white font-bold text-base no-underline px-8 py-3 transition-all duration-300 ease-in-out hover:scale-105" href={routesMap.gallery.path}>
          More
        </Link>
      </div>
    </div>
  );
}
