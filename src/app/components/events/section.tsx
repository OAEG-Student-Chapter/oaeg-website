import styles from "./section.module.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { SecondaryTitle } from "@/components/titles";
import { getEventAlbums, EventAlbum } from "@/app/events/event_album_handlers";
import ProjectCard from "@/app/events/card";
import dynamic from "next/dynamic";

export const runtime = "edge";

export default async function ProjectsSection() {
  let { albums } = await getEventAlbums();
  const LazyProjectCard = dynamic(() => import("@/app/events/card"), {
    loading: () => <p>Loading...</p>,
  });
  albums = albums?.slice(0, 5);
  return (
    <div className={styles.section}>
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
            <div className={styles.cardWrapper}>
              {/* <ProjectCard
                key={album.id}
                title={album.name}
                imgSrc={album.cover_photo}
                link={"/events/" + album.id}
              /> */}
              <LazyProjectCard
                key={album.id}
                title={album.name}
                imgSrc={album.cover_photo}
                link={"/events/" + album.id}
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
