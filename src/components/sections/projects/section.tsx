import styles from "./section.module.css";
import Link from "next/link";
import React from "react";
import { SecondaryTitle } from "@/components/ui/titles";
import { blog } from "@/api/blogger/blog";
import AppCard from "@/components/ui/card";
import ProjectPage from "@/app/projects/types";

export default async function ProjectsSection() {
  let pages: ProjectPage[] = [];
  try {
    const data = await blog.get("pages");
    pages = data.items as ProjectPage[] || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  const getThumbnail = (html: string) => {
    const thumbnailRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const match = html.match(thumbnailRegex);
    return match && match[1] ? match[1] : "";
  };

  const displayedProjects = pages.slice(0, 5);

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
        <SecondaryTitle title={"Project Portfolio"} />
      </div>
      <div className={styles.cardRow}>
        {displayedProjects.map((project) => {
          return (
            <div key={project.id} className={styles.cardWrapper}>
              <AppCard
                title={project.title}
                imgSrc={getThumbnail(project.content)}
                link={`/projects/project?title=${project.title}&id=${project.id}`}
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
        <Link className={styles.moreButton} href={"/projects"}>
          More
        </Link>
      </div>
    </div>
  );
}
