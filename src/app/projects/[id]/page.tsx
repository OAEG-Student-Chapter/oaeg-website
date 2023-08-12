import {getSingleAlbum} from "@/app/projects/api/getAlbums";
import {getSingleProjectAlbum} from "@/app/projects/project_albums";
import styles from './page.module.css';
import textTheme from "@/app/fonts";

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
        <div className={styles.grid}>
            {
                album.photos.map((photo) => {
                    return <img
                        className={styles.image}
                        src={photo} alt={photo}
                        loading="lazy"
                    />
                })
            }
        </div>
    </div>
}