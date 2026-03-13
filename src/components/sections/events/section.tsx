import styles from "./section.module.css";
import Link from "next/link";
import React from "react";
import { SecondaryTitle } from "@/components/ui/titles";
import { getEventAlbumsServer } from "@/lib/albums";
import AppCard from "@/components/ui/card";
import { routesMap } from "@/lib/routes";

export default async function EventsSection() {
  const { albums } = await getEventAlbumsServer();
  const displayedAlbums = albums?.slice(0, 5);

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
        {displayedAlbums?.map((album) => {
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
