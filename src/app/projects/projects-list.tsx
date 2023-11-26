// ProjectList.tsx
import React from "react";
import ProjectPage  from "./types";
import styles from "./page.module.css";
import ProjectCard from "@/app/events/card";

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
        <div className={styles.grid}>
            {projects.map((project) => (
                <div className={styles.cardWrapper} key={project.id}>
                    <ProjectCard
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
