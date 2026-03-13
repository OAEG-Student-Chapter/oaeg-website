'use client'
import textTheme from "@/lib/fonts";
import React, { useEffect, useState, use } from "react";
import { getSingleEventAlbum, EventAlbum } from "@/lib/albums";
import Gallery from "@/app/gallery/[id]/gallery";
import Link from "next/link";

export const runtime = 'edge';

export default function Page(props: { params: Promise<{ id: string }> }) {
    const params = use(props.params);
    const [album, setAlbum] = useState<EventAlbum>();

    useEffect(() => {
        const { id } = params;
        getSingleEventAlbum(id).then(res => {
            setAlbum(res.album);
        });
    }, [params]);

    return (
        <div className={'bg-white py-24 min-h-[100vh]'}>
            {album && (
                <div className="md:px-20 px-4">
                    <div className="flex flex-col justify-center items-center gap-4 my-8 mx-4">
                        <h2 className="font-bold">{album.name}</h2>
                        <p className={`${textTheme.body.className} md:px-20`}>
                            {album.description}
                        </p>
                    </div>
                    <Gallery images={getImages(album)} />
                    <div className={"flex justify-center mt-6"}>
                        <Link 
                            target={"_blank"} 
                            className="block bg-primary-dark text-white font-bold text-base border-none cursor-pointer transition-all duration-300 ease-in-out no-underline py-3 px-8" 
                            href={album.link}>
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