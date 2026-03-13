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
    <div className="pb-16 relative bg-white">
      <div className="flex justify-center mb-8 px-8">
        <SecondaryTitle title={"Project Portfolio"} />
      </div>
      <div className="px-4 md:px-20 flex flex-row w-full max-sm:overflow-x-auto max-sm:h-[40vh] scrollbar-hide relative z-10">
        {displayedProjects.map((project) => {
          return (
            <div key={project.id} className="w-60 aspect-[3/4] mx-4 shrink-0 max-sm:w-[60vw] max-sm:m-4">
              <AppCard
                title={project.title}
                imgSrc={getThumbnail(project.content)}
                link={`/projects/project?title=${project.title}&id=${project.id}`}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8 relative z-10">
        <Link className="block bg-primary-dark text-white font-bold text-base no-underline px-8 py-3 transition-all duration-300 ease-in-out hover:scale-105" href={"/projects"}>
          More
        </Link>
      </div>
    </div>
  );
}
