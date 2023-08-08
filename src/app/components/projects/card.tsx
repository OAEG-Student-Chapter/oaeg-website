import styles from './card.module.css';
import textTheme from "@/app/fonts";

export default function ProjectCard() {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h4 className={`${styles.title} ${textTheme.title.className}`}>Project Title</h4>
                <p className={`${styles.smallDescription} ${textTheme.body.className}`}>Project Description</p>
            </div>
            <div className={styles.image}>
                <img src="https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/341695095_748797073915290_6374723875895227703_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mRIjGf0XTmEAX-JdYFB&_nc_ht=scontent-dus1-1.xx&oh=00_AfAwzLE-audL0P8k10LEXK2ECSlhFLfo0W7nNBkl2xhtpw&oe=64D7AA47"
                     alt="Project Title"/>
            </div>
            <div className={styles.blackOverlay}></div>
        </div>
    );
}
