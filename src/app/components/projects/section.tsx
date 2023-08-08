import ProjectCard from "@/app/components/projects/card";
import styles from './section.module.css';
import Link from "next/link";

export default function ProjectsSection(){
    return (
        <div className={styles.section}>
            <div className={styles.backgroundGradient}></div>
            <div className={styles.cardRow}
            >
            {/*   5 Project cards*/}
                {
                    [1,2,3,4,5].map((i) => {
                        return (<div className={styles.cardWrapper}>
                            <ProjectCard key={i} />
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