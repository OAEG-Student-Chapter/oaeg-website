"use client";
import styles from "./section.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SecondaryTitle } from "@/components/titles";
import { blog } from "../../../api/blogger/blog";
import ProjectCard from "@/app/events/card";
import ProjectPage from "@/app/projects/types";
import ProjectList from "@/app/projects/projects-list";

export default function ProjectsSection() {
  const [pages, setPages] = useState<ProjectPage[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pages = await blog.get("pages");
        setPages(pages.items as ProjectPage[]);
        console.log(pages.items);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const getThumbnail = (html: string) => {
    const thumbnailRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const match = html.match(thumbnailRegex);

    return match && match[1] ? match[1] : "";
  };

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
        <SecondaryTitle title={"Latest Projects"} />
      </div>
      {/* <ProjectList projects={pages.slice(0, 5)} /> */}
      <div className={styles.cardRow}>
        {pages?.slice(0, 5).map((project) => {
          return (
            <div className={styles.cardWrapper}>
              <ProjectCard
                key={project.id}
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
