"use client";
import styles from "./card.module.css";
import textTheme from "@/lib/fonts";
import Image from "next/image";

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
  const src = imgSrc;
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
        {/* <img src={imgSrc} alt={title} /> */}
        <Image
          loader={({ src }) => src}
          src={imgSrc}
          alt={title}
          style={{
            width:'100%',
            height:'100%',
            objectFit:'cover',
            aspectRatio: '2/2.65'
        }}
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={styles.blackOverlay}></div>
    </div>
  );
}
