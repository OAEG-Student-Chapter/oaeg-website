import { SecondaryTitle } from "@/components/titles";
import React from "react";
import { getEventAlbums, EventAlbum } from "@/app/events/event_album_handlers";
import AppCard from "@/components/card";
import styles from "./page.module.css";
import textTheme from "@/lib/fonts";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import Link from "next/link";
import sectionStyles from "@/app/components/events/section.module.css";
import {routesMap} from "@/lib/routes";
export default async function Page() {
  let { albums } = await getEventAlbums();
  // albums = albums?.slice(0, albums.length);
  return (
    <div className={`bg-white min-h-[100vh] ${styles.container} ${navStyles.navbarSpace}`}>
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
        <SecondaryTitle title={"Gallery"} />
        <p className={textTheme.body.className}>
          Check the photo albums of our latest events and activities
        </p>
      </div>
      <div className={styles.grid}>
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
        <div className={"flex justify-center mt-6"}>
            <Link target={"_blank"} className={sectionStyles.moreButton}
                  href={"https://www.facebook.com/OldAnandianEngineersGuild/photos_albums"}>
                See All Albums
            </Link>
        </div>
    </div>
  );
}
