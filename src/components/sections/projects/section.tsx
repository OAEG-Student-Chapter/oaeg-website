import Link from "next/link";
import React from "react";
import { SecondaryTitle } from "@/components/ui/titles";
import { blog } from "@/api/blogger/blog";
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

  const displayedProjects = pages.slice(0, 5);

  return (
    <div className="relative bg-white pb-16">
      <div className="mb-8 flex justify-center px-8">
        <SecondaryTitle title={"Project Portfolio"} />
      </div>
      <div className="scrollbar-hide relative z-10 flex w-full flex-row px-4 max-sm:h-[40vh] max-sm:overflow-x-auto md:px-20">
        {displayedProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="mx-4 aspect-[3/4] w-60 shrink-0 max-sm:m-4 max-sm:w-[60vw]"
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
      <div className="relative z-10 mt-8 flex justify-center">
        <Link
          className="block bg-primary-dark px-8 py-3 text-base font-bold text-white no-underline transition-all duration-300 ease-in-out hover:scale-105"
          href={"/projects"}
        >
          More
        </Link>
      </div>
    </div>
  );
}
