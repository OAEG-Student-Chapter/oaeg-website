"use client";
import React, { useEffect, useState } from "react";
import { blog } from "@/api/blogger/blog";
import styles from "./page.module.css";
import ProjectPage from "@/app/projects/types";
import ProjectList from "@/app/projects/projects-list";


export default function Page() {
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
        <div className={styles.container}>
            {/* ... (your existing code) */}
            <ProjectList projects={pages} />
            {/* ... (your existing code) */}
        </div>
    );
}
