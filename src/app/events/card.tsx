"use client";
import styles from "./card.module.css";
import textTheme from "@/lib/fonts";

export default function ProjectCard({
  title,
  shortDescription,
  link,
  imgSrc,
}: {
  title: string;
  shortDescription?: string;
  link: string;
  imgSrc: string;
}) {
  return (
    <div
      className={styles.card}
      onClick={() => {
        // go to project page
        window.location.href = link;
      }}
    >
      <div className={styles.content}>
        <h4 className={`${styles.title} ${textTheme.title.className}`}>
          {title}
        </h4>
        <p className={`${styles.smallDescription} ${textTheme.body.className}`}>
          {shortDescription}
        </p>
      </div>
      <div className={styles.image}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.blackOverlay}></div>
    </div>
  );
}
