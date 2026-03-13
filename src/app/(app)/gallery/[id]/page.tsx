"use client";
import textTheme from "@/lib/fonts";
import React, { useEffect, useState, use } from "react";
import { getSingleEventAlbum, EventAlbum } from "@/lib/albums";
import Gallery from "@/app/(app)/gallery/[id]/gallery";
import Link from "next/link";

export const runtime = "edge";

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
    <div className={"min-h-[100vh] bg-white py-24"}>
      {album && (
        <div className="px-4 md:px-20">
          <div className="mx-4 my-8 flex flex-col items-center justify-center gap-4">
            <h2 className="font-bold">{album.name}</h2>
            <p className={`${textTheme.body.className} md:px-20`}>
              {album.description}
            </p>
          </div>
          <Gallery images={getImages(album)} />
          <div className={"mt-6 flex justify-center"}>
            <Link
              target={"_blank"}
              className="block cursor-pointer border-none bg-primary-dark px-8 py-3 text-base font-bold text-white no-underline transition-all duration-300 ease-in-out"
              href={album.link}
            >
              See Full Album
            </Link>
          </div>
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
      thumbnail: photo,
    };
  });
};
