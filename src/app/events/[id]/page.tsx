import styles from './page.module.css';
import textTheme from "@/lib/fonts";
import React from "react";
import {getSingleEventAlbum, EventAlbum} from "@/app/events/event_album_handlers";
import Gallery from "@/app/events/[id]/gallery";
import sectionStyles from "@/app/components/events/section.module.css";
import Link from "next/link";

export const runtime = 'edge';

export default async function Page({params}: { params: { id: string } }) {
    const {id} = params;
    const {album} = await getSingleEventAlbum(id);
    return <div className={`${styles.albumContainer} mt-28`}>
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

const getImages = (album:EventAlbum)  =>{
    return album.photos!.map((photo) => {
        return {
            original: photo,
            thumbnail: photo,
        }
    })
}