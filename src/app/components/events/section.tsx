import styles from "./section.module.css";
import Link from "next/link";
import React from "react";
import { SecondaryTitle } from "@/components/titles";
import { getEventAlbums, EventAlbum } from "@/app/events/event_album_handlers";
import AppCard from "@/components/card";
import {routesMap} from "@/lib/routes";

export const runtime = "edge";

export default async function ProjectsSection() {
  let { albums } = await getEventAlbums();
  albums = albums?.slice(0, 5);
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
        <SecondaryTitle title={"Latest Events"} />
      </div>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.cardRow}>
        {albums?.map((album: EventAlbum) => {
          return (
            <div key={album.id} className={styles.cardWrapper}>
              <AppCard
                title={album.name}
                imgSrc={album.cover_photo}
                link={routesMap.gallery + album.id}
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
        <Link className={styles.moreButton} href={"/events"}>
          More
        </Link>
      </div>
    </div>
  );
}
