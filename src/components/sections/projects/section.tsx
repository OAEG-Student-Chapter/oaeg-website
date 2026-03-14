import Link from "next/link";
import React from "react";
import { SecondaryTitle } from "@/components/ui/titles";
import { blog } from "@/lib/blogger-api";
import AppCard from "@/components/ui/card";
import ProjectPage from "@/app/(app)/projects/types";

export default async function ProjectsSection() {
  let pages: ProjectPage[] = [];
  try {
    const data = await blog.get("pages");
    pages = (data.items as ProjectPage[]) || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  const getThumbnail = (html: string) => {
    const thumbnailRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const match = html.match(thumbnailRegex);
    return match && match[1] ? match[1] : "";
  };

  const displayedProjects = pages.slice(0, 6);

  return (
    <div className="relative bg-neutral-50 pb-16 pt-8">
      <div className="mb-12 flex justify-center px-8">
        <SecondaryTitle title={"Project Portfolio"} />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-6">
          {displayedProjects.map((project, index) => {
            // Apply varied aspect ratios for the masonry effect
            const isTall = index % 3 === 0;
            const aspectClass = isTall ? "aspect-[3/4]" : "aspect-[4/3]";

            return (
              <div
                key={project.id}
                className={`relative w-full break-inside-avoid overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl ${aspectClass}`}
              >
                <AppCard
                  title={project.title}
                  imgSrc={getThumbnail(project.content)}
                  link={`/projects/project?title=${project.title}&id=${project.id}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-12 flex justify-center">
        <Link
          className="block rounded-xl bg-neutral-900 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/30"
          href={"/projects"}
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}
