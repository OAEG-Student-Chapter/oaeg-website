'use client'
import styles from './page.module.css';
import textTheme from "@/lib/fonts";
import React, {useEffect, useState} from "react";
import {getSingleEventAlbum, EventAlbum} from "@/app/events/event_album_handlers";
import Gallery from "@/app/gallery/[id]/gallery";
import sectionStyles from "@/app/components/events/section.module.css";
import Link from "next/link";

export default function Page({params}: { params: { id: string } }) {

    const [album, setAlbum] = useState<EventAlbum>();

    useEffect(() => {
        const {id} = params;
        getSingleEventAlbum(id).then(res => {
            setAlbum(res.album);
        });
    }, []);

    return <div className={'bg-white py-24 min-h-[100vh]'}>
        {
            album && <div className={`${styles.albumContainer}`}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    flexDirection: 'column',
                    margin: '2rem 1rem',
                }}>
                    <h2 className={"fw-bold"}>{album.name}</h2>
                    <p className={`${textTheme.body.className} ${styles.description}`}>
                        {album.description}
                    </p>
                </div>
                <Gallery images={getImages(album)}/>
                <div className={"flex justify-center mt-6"}>
                    <Link target={"_blank"} className={sectionStyles.moreButton} href={album.link}>
                        See Full Album
                    </Link>
                </div>
            </div>
        }
    </div>
}

const getImages = (album:EventAlbum)  =>{
    if(!album.photos) return [];
    return album.photos!.map((photo) => {
        return {
            original: photo,
            thumbnail: photo,
        }
    })
}