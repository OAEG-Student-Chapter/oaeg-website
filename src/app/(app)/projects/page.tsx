"use client";
import React, { useEffect, useState } from "react";
import { blog } from "@/lib/blogger-api";
import ProjectPage from "@/app/(app)/projects/types";
import textTheme from "@/lib/fonts";
import ProjectList from "@/app/(app)/projects/projects-list";

export default function Page() {
  const [pages, setPages] = useState<ProjectPage[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pages = await blog.get("pages");
        setPages(pages.items as ProjectPage[]);
      } catch (error) {
        // console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 pb-24 pt-[calc(var(--navbar-height)+2rem)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="mb-12 flex flex-col items-center text-center space-y-4 border-b border-neutral-200 pb-8 md:items-start md:text-left md:flex-row md:justify-between md:space-y-0">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
              Projects
            </h1>
            <p className={`${textTheme.body.className} text-lg leading-relaxed text-neutral-600`}>
              Our portfolio of projects and events
            </p>
          </div>
        </div>

        {/* Project List */}
        <ProjectList projects={pages} />
        
      </div>
    </div>
  );
}
