"use client";
import React, { useEffect, useState } from "react";
import { blog } from "@/api/blogger/blog";
import ProjectPage from "@/app/(app)/projects/types";
import { SecondaryTitle } from "@/components/ui/titles";
import textTheme from "@/lib/fonts";
import ProjectList from "@/app/(app)/projects/projects-list";

export default function Page() {
  const [pages, setPages] = useState<ProjectPage[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pages = await blog.get("pages");
        setPages(pages.items as ProjectPage[]);
        // console.log(pages.items);
      } catch (error) {
        // console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-[100vh] bg-white px-4 py-4 pt-[var(--navbar-height)]">
      <div className="mx-4 my-8 flex flex-col items-center justify-center gap-4">
        <SecondaryTitle title={"Projects"} />
        <p className={textTheme.body.className}>
          Our portfolio of projects and events
        </p>
      </div>

      <ProjectList projects={pages} />
    </div>
  );
}
