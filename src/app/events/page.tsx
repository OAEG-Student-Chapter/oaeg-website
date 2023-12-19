import { SecondaryTitle } from "@/components/titles";
import React from "react";
import { getEventAlbums, EventAlbum } from "@/app/events/event_album_handlers";
import ProjectCard from "@/app/events/card";
import styles from "./page.module.css";
import textTheme from "@/lib/fonts";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import Link from "next/link";
import sectionStyles from "@/app/components/events/section.module.css";
export default async function Page() {
  let { albums } = await getEventAlbums();
  // albums = albums?.slice(0, albums.length);
  return (
    <div className={`${styles.container} ${navStyles.navbarSpace}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexDirection: "column",
          margin: "2rem 1rem",
        }}
      >
        <SecondaryTitle title={"Events"} />
        <p className={textTheme.body.className}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisl eget
        </p>
      </div>
      <div className={styles.grid}>
        {albums?.map((album: EventAlbum) => {
          return (
            <div key={album.id} className={styles.cardWrapper}>
              <ProjectCard
                title={album.name}
                imgSrc={album.cover_photo}
                link={"/events/" + album.id}
              />
            </div>
          );
        })}
      </div>
        <div className={"flex justify-center mt-6"}>
            <Link target={"_blank"} className={sectionStyles.moreButton}
                  href={"https://www.facebook.com/OldAnandianEngineersGuild/photos_albums"}>
                See All Albums
            </Link>
        </div>
    </div>
  );
}
