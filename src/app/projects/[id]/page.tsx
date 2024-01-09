"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { blog } from "@/api/blogger/blog";
import styles from "./page.module.scss";
import {white} from "next/dist/lib/picocolors";

export const runtime = "edge";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [content, setContent] = useState("");

  const template = { __html: content };

  useEffect(() => {
    async function fetchData() {
      try {
        const project = await blog.getProject(id!); // explicitly specify the type of the pages array
        setContent(project.content);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
      <div className={"bg-white pt-12 min-h-[100vh]"}>
        <div
            className={`${styles.projectContainer} `}
            dangerouslySetInnerHTML={template}
        ></div>
      </div>
  );
}
