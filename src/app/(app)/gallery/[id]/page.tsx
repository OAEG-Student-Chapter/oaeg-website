"use client";
import textTheme from "@/lib/fonts";
import React, { useEffect, useState, use } from "react";
import { getSingleEventAlbum, EventAlbum } from "@/lib/albums";
import Gallery from "@/app/(app)/gallery/[id]/gallery";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Page(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  const [album, setAlbum] = useState<EventAlbum>();

  useEffect(() => {
    const { id } = params;
    getSingleEventAlbum(id).then((res) => {
      setAlbum(res.album);
    });
  }, [params]);

  return (
    <div className="min-h-screen bg-neutral-50 pb-24 pt-[calc(var(--navbar-height)+2rem)]">
      {album && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link
            href="/gallery"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Galleries
          </Link>

          {/* Hero Section */}
          <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                {album.name}
              </h1>
              <p
                className={`${textTheme.body.className} text-lg leading-relaxed text-neutral-600`}
              >
                {album.description}
              </p>
            </div>
            
            <Link
              target="_blank"
              href={album.link}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View on Facebook
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          {/* Gallery Grid */}
          <Gallery images={getImages(album)} />
        </div>
      )}
    </div>
  );
}

const getImages = (album: EventAlbum) => {
  if (!album.photos) return [];
  return album.photos!.map((photo) => {
    return {
      original: photo,
      thumbnail: photo, // Or use a separate thumbnail if available in EventAlbum later
    };
  });
};
