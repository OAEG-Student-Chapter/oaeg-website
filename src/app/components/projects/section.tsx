import ProjectCard from "@/app/components/projects/card";
import styles from './section.module.css';
import Link from "next/link";
import {getProjectAlbums, ProjectAlbum} from "@/app/projects/project_albums";
import React, {useEffect} from "react";
import {getAlbums} from "@/app/projects/api/getAlbums";

export default async function ProjectsSection() {
    // const [albums, setAlbums] = React.useState<ProjectAlbum[]>([]);
    // useEffect(() => {
    //     getProjectAlbums().then(({albums}) => {
    //         setAlbums(albums?.slice(0, 5));
    //     });
    // }, [albums]);
    let {albums} = await getProjectAlbums();
    albums = albums?.slice(0, 5);
    return (
        <div className={styles.section}>
            <div className={styles.backgroundGradient}></div>
            <div className={styles.cardRow}
            >
                {
                    albums?.map((album: ProjectAlbum) => {
                        return (<div className={styles.cardWrapper}>
                            <ProjectCard key={album.id} title={album.name} imgSrc={album.cover_photo}
                                         link={'/projects/' + album.id}
                            />
                        </div>)
                    })
                }
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
                position: 'relative',
            }}>
                <Link className={styles.moreButton} href={'/projects'}>
                    More
                </Link>
            </div>
        </div>
    );
}



