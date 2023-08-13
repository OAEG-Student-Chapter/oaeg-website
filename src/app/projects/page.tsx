import {SecondaryTitle} from "@/components/titles";
import React from "react";
import {getProjectAlbums, ProjectAlbum} from "@/app/projects/project_albums";
import ProjectCard from "@/app/projects/card";
import styles from './page.module.css';
import textTheme from "@/lib/fonts";

export default async function Page() {
    let {albums} = await getProjectAlbums();
    albums = albums?.slice(0, albums.length - 5);
    return (
        <div className={styles.container}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: 'column',
                margin: '2rem 1rem',
            }}>
                <SecondaryTitle title={"Projects/Events"}/>
                <p className={textTheme.body.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                </p>
            </div>
            <div className={styles.grid}>
                {
                    albums?.map((album: ProjectAlbum) => {
                        return (<div className={`${styles.cardWrapper}`}>
                            <ProjectCard key={album.id} title={album.name} imgSrc={album.cover_photo}
                                         link={'/projects/' + album.id}
                            />
                            </div>)
                    })
                }
            </div>
        </div>
    );
}