"use client";
import styles from "./section.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SecondaryTitle } from "@/components/titles";
import { blog } from "../../../api/blogger/blog";
import ProjectCard from "@/app/events/card";

interface Page {
  title: string;
  id: string;
  content: string;
  url: string;
}

export default function ProjectsSection() {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pages = await blog.get("pages");
        setPages(pages.items as Page[]); // explicitly specify the type of the posts array
        console.log(pages.items);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const getThumnbnail = (html: String) => {
    const thumbnailRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const match = html.match(thumbnailRegex);

    if (match && match[1]) {
      return match[1];
    } else {
      return "";
    }
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
      <div className={styles.backgroundGradient}></div>
      <div className={styles.cardRow}>
        {pages?.slice(0, 5).map((project) => {
          return (
            <div className={styles.cardWrapper}>
              <ProjectCard
                key={project.id}
                title={project.title}
                imgSrc={getThumnbnail(project.content)}
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
