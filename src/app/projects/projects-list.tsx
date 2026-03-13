// ProjectList.tsx
import React from "react";
import ProjectPage from "./types";
import AppCard from "@/components/ui/card";

interface ProjectListProps {
    projects: ProjectPage[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    const getThumbnail = (html: string) => {
        const thumbnailRegex = /<img[^>]+src=["']([^"']+)["']/i;
        const match = html.match(thumbnailRegex);

        return match && match[1] ? match[1] : "";
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 px-0 md:px-20 gap-4">
            {projects.map((project) => (
                <div className="w-full aspect-[3/4]" key={project.id}>
                    <AppCard
                        title={project.title}
                        imgSrc={getThumbnail(project.content)}
                        link={`/projects/project?title=${project.title}&id=${project.id}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
