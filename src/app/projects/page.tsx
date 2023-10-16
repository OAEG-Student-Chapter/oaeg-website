"use client";
import { SecondaryTitle } from "@/components/titles";
import React, { useEffect, useState } from "react";
import { blog } from "../../api/blogger/blog";
import ProjectCard from "@/app/projects/card";
import styles from "./page.module.css";
import textTheme from "@/lib/fonts";

interface Page {
  title: string;
  id: string;
  content: string;
  url: string;
}

export default function Page() {
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
    <div className={styles.container}>
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
        <SecondaryTitle title={"Projects"} />
        <p className={textTheme.body.className}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisl eget
        </p>
      </div>
      <div className={styles.grid}>
        {pages?.map((project) => {
          return (
            <div className={`${styles.cardWrapper}`}>
              <ProjectCard
                id={project.id}
                key={project.id}
                title={project.title}
                imgSrc={getThumnbnail(project.content)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
