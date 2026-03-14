"use client";
import React from "react";
import { getEventAlbums, EventAlbum } from "@/lib/albums";
import AppCard from "@/components/ui/card";
import textTheme from "@/lib/fonts";
import Link from "next/link";
import { routesMap } from "@/lib/routes";
import { ExternalLink } from "lucide-react";

export default function Page() {
  const [albums, setAlbums] = React.useState<EventAlbum[]>();

  React.useEffect(() => {
    getEventAlbums().then((res) => {
      setAlbums(res.albums);
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 pb-24 pt-[calc(var(--navbar-height)+2rem)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="mb-12 flex flex-col items-center text-center space-y-4 border-b border-neutral-200 pb-8 md:items-start md:text-left md:flex-row md:justify-between md:space-y-0">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
              Gallery
            </h1>
            <p className={`${textTheme.body.className} text-lg leading-relaxed text-neutral-600`}>
              Check the photo albums of our latest events and activities
            </p>
          </div>

          <Link
            target="_blank"
            href="https://www.facebook.com/OldAnandianEngineersGuild/photos_albums"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4 md:mt-0"
          >
            See All Albums
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {albums?.map((album: EventAlbum) => {
            return (
              <div key={album.id} className="aspect-[3/4] w-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg">
                <AppCard
                  title={album.name}
                  imgSrc={album.cover_photo}
                  link={routesMap.gallery.path + album.id}
                />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
