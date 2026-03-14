// ProjectList.tsx
import React from "react";
import ProjectPage from "./types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import textTheme from "@/lib/fonts";

interface ProjectListProps {
  projects: ProjectPage[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const getThumbnail = (html: string) => {
    const thumbnailRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const match = html.match(thumbnailRegex);
    return match && match[1] ? match[1] : "";
  };

  const stripHtml = (html: string) => {
    // Basic HTML stripping to get a plaintext summary
    let text = html.replace(/<[^>]*>?/gm, " ");

    // Decode common HTML entities
    text = text
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    text = text.replace(/\s+/g, " ").trim();
    return text.length > 200 ? text.slice(0, 200) + "..." : text;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8 relative items-start">
      {/* Left: Main Projects List */}
      <div className="flex flex-col gap-12 sm:gap-16 w-full lg:w-3/4 lg:pr-8">
        {projects.map((project, index) => {
          const thumbnail = getThumbnail(project.content);
          const summary = stripHtml(project.content);
          const projectLink = `/projects/project?title=${project.title}&id=${project.id}`;

          // Alternate layout for desktop: even items have image on right, odd on left
          const isEven = index % 2 === 0;

          return (
            <div
              id={`project-${project.id}`}
              key={project.id}
              className={`group flex flex-col gap-8 md:items-center scroll-mt-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 lg:w-3/5 overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:shadow-xl aspect-[16/9] bg-neutral-100 flex-shrink-0 relative">
                <Link href={projectLink} className="absolute inset-0 z-10 block" aria-label={`View ${project.title}`} />
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-neutral-400 bg-neutral-200">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center space-y-4 px-2 sm:px-0">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-primary">
                  <Link href={projectLink}>{project.title}</Link>
                </h2>

                <p className={`${textTheme.body.className} text-base leading-relaxed text-neutral-600 line-clamp-4`}>
                  {summary}
                </p>

                <div className="pt-4">
                  <Link
                    href={projectLink}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3 hover:text-primary-dark"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right: Sticky Thumbnail Scroll View */}
      <div className="hidden lg:block lg:w-1/4 sticky top-[calc(var(--navbar-height)+2rem)] max-h-[calc(100vh-var(--navbar-height)-4rem)] overflow-y-auto no-scrollbar rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3">
          {projects.map((project) => {
            const thumbnail = getThumbnail(project.content);
            return (
              <a
                key={`thumb-${project.id}`}
                href={`#project-${project.id}`}
                className="group flex items-start gap-3 rounded-lg border border-transparent p-2 transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-200 hover:shadow-sm"
              >
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-md bg-neutral-100 shadow-inner">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                      No Img
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center h-full">
                  <span className="text-sm font-semibold text-neutral-700 line-clamp-2 transition-colors group-hover:text-primary">
                    {project.title}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Add custom CSS to hide scrollbar for the sticky sidebar to make it cleaner */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}} />
    </div>
  );
};

export default ProjectList;
