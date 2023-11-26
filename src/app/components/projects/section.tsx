"use client";
import styles from "./section.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SecondaryTitle } from "@/components/titles";
import { blog } from "../../../api/blogger/blog";
import ProjectCard from "@/app/events/card";
import ProjectPage from "@/app/projects/types";
import ProjectList from "@/app/projects/projects-list";

export default function ProjectsSection() {
    const [pages, setPages] = useState<ProjectPage[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const pages = await blog.get("pages");
                setPages(pages.items as ProjectPage[]);
                console.log(pages.items);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={styles.section}>
            {/* ... (your existing code) */}
            <ProjectList projects={pages.slice(0, 5)} />
            {/* ... (your existing code) */}
        </div>
    );
}

