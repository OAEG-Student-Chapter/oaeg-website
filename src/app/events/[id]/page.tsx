import {getSingleProjectAlbum, ProjectAlbum} from "@/app/projects/project_albums";
import styles from './page.module.css';
import textTheme from "@/lib/fonts";
import React from "react";
import Gallery from "@/app/projects/[id]/gallery";

export default async function Page({params}: { params: { id: string } }) {
    const {id} = params;
    const {album} = await getSingleProjectAlbum(id);
    return <div className={styles.albumContainer}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexDirection: 'column',
            margin: '2rem 1rem',
        }}>
            <h1 className={textTheme.title.className}>{album.name}</h1>
            <p className={`${textTheme.body.className} ${styles.description}`}>
                {album.description}
            </p>
        </div>
        <Gallery images={getImages(album)}/>
    </div>
}

const getImages = (album:ProjectAlbum)  =>{
    return album.photos.map((photo) => {
        return {
            original: photo,
            thumbnail: photo,
        }
    })
}