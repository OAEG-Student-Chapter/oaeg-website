'use client'
import styles from "./section.module.css";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { SecondaryTitle } from "@/components/titles";
import { getEventAlbums, EventAlbum } from "@/app/events/event_album_handlers";
import AppCard from "@/components/card";
import {routesMap} from "@/lib/routes";

export default function ProjectsSection() {
    const [albums, setAlbums] = useState<EventAlbum[]>();

    useEffect(() => {
        getEventAlbums().then(res => {
            setAlbums(res.albums?.slice(0,5))
        });
    }, []);

  return (
    <div className={`${styles.section} bg-white`}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          paddingInline: "2rem",
        }}
      >
        <SecondaryTitle title={"Event Gallery"} />
      </div>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.cardRow}>
        {albums?.map((album: EventAlbum) => {
          return (
            <div key={album.id} className={styles.cardWrapper}>
              <AppCard
                title={album.name}
                imgSrc={album.cover_photo}
                link={routesMap.gallery.path + album.id}
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          position: "relative",
        }}
      >
        <Link className={styles.moreButton} href={routesMap.gallery.path}>
          More
        </Link>
      </div>
    </div>
  );
}
