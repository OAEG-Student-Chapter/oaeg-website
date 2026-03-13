'use client'
import { SecondaryTitle } from "@/components/ui/titles";
import React from "react";
import { getEventAlbums, EventAlbum } from "@/lib/albums";
import AppCard from "@/components/ui/card";
import textTheme from "@/lib/fonts";
import Link from "next/link";
import { routesMap } from "@/lib/routes";


export default function Page() {
  const [albums, setAlbums] = React.useState<EventAlbum[]>();
  React.useEffect(() => {
    getEventAlbums().then(res => {
      setAlbums(res.albums)
    });
  }, []);

  // albums = albums?.slice(0, albums.length);
  return (
    <div className="bg-white min-h-[100vh] py-4 px-4 pt-[var(--navbar-height)]">
      <div className="flex flex-col justify-center items-center gap-4 my-8 mx-4">
        <SecondaryTitle title={"Gallery"} />
        <p className={textTheme.body.className}>
          Check the photo albums of our latest events and activities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] px-0 md:px-20 gap-4">
        {albums?.map((album: EventAlbum) => {
          return (
            <div key={album.id} className="w-full aspect-[3/4]">
              <AppCard
                title={album.name}
                imgSrc={album.cover_photo}
                link={routesMap.gallery.path + album.id}
              />
            </div>
          );
        })}
      </div>
      <div className={"flex justify-center mt-6"}>
        <Link 
          target={"_blank"} 
          className="block bg-primary-dark text-white font-bold text-base border-none cursor-pointer transition-all duration-300 ease-in-out no-underline py-3 px-8"
          href={"https://www.facebook.com/OldAnandianEngineersGuild/photos_albums"}>
          See All Albums
        </Link>
      </div>
    </div>
  );
}
