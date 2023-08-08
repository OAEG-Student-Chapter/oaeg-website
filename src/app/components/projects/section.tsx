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
                            <ProjectCard key={i} title={'Project title'} imgSrc={
                                "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/341695095_748797073915290_6374723875895227703_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mRIjGf0XTmEAX-JdYFB&_nc_ht=scontent-dus1-1.xx&oh=00_AfAwzLE-audL0P8k10LEXK2ECSlhFLfo0W7nNBkl2xhtpw&oe=64D7AA47"
                            }
                                         shortDescription={"Short description goes here"}
                                         link={'/'}
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