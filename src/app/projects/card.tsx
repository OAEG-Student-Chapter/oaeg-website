"use client";
import Link from "next/link";
import styles from "./card.module.css";
import textTheme from "@/lib/fonts";

export default function ProjectCard({
  id,
  title,
  shortDescription,
  imgSrc,
}: {
  id: string;
  title: string;
  shortDescription?: string;
  imgSrc: string;
}) {
  return (
    <div className={styles.card}>
      <Link href={`/projects/project?title=${title}&id=${id}`}>
        <div className={styles.content}>
          <h4 className={`${styles.title} ${textTheme.title.className}`}>
            {title}
          </h4>
          <p
            className={`${styles.smallDescription} ${textTheme.body.className}`}
          >
            {shortDescription}
          </p>
        </div>
        <div className={styles.image}>
          <img src={imgSrc} alt={title} />
        </div>
        <div className={styles.blackOverlay}></div>
      </Link>
    </div>
  );
}
