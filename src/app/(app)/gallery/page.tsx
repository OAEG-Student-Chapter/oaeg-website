"use client";
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
    getEventAlbums().then((res) => {
      setAlbums(res.albums);
    });
  }, []);

  // albums = albums?.slice(0, albums.length);
  return (
    <div className="min-h-[100vh] bg-white px-4 py-4 pt-[var(--navbar-height)]">
      <div className="mx-4 my-8 flex flex-col items-center justify-center gap-4">
        <SecondaryTitle title={"Gallery"} />
        <p className={textTheme.body.className}>
          Check the photo albums of our latest events and activities
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-0 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:px-20">
        {albums?.map((album: EventAlbum) => {
          return (
            <div key={album.id} className="aspect-[3/4] w-full">
              <AppCard
                title={album.name}
                imgSrc={album.cover_photo}
                link={routesMap.gallery.path + album.id}
              />
            </div>
          );
        })}
      </div>
      <div className={"mt-6 flex justify-center"}>
        <Link
          target={"_blank"}
          className="block cursor-pointer border-none bg-primary-dark px-8 py-3 text-base font-bold text-white no-underline transition-all duration-300 ease-in-out"
          href={
            "https://www.facebook.com/OldAnandianEngineersGuild/photos_albums"
          }
        >
          See All Albums
        </Link>
      </div>
    </div>
  );
}
