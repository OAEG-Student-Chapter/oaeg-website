"use client";
import styles from "./card.module.css";
import textTheme from "@/lib/fonts";
import Link from "next/link";
import {ReactNode} from "react";

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
    <Link href={link}>
      <div
          className={styles.card}
      >
        <div className={styles.image}>
          <img src={imgSrc} alt={title} />
        </div>
        <InnerBottomShadow>
          <div className={styles.content}>
            <h4 className={`${styles.title} ${textTheme.title.className}`}>
              {title}
            </h4>
            <p className={`${styles.smallDescription} ${textTheme.body.className}`}>
              {shortDescription}
            </p>
          </div>
        </InnerBottomShadow>

      </div>
    </Link>
  );
}

const InnerBottomShadow = (props: {children:ReactNode}) => (
    <div className={styles.innerBottomShadow}>
      {props.children}
    </div>
    );
