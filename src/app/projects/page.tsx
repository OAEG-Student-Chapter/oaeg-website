"use client";
import React, { useEffect, useState } from "react";
import { blog } from "@/api/blogger/blog";
import styles from "./page.module.css";
import ProjectPage from "@/app/projects/types";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import {SecondaryTitle} from "@/components/titles";
import textTheme from "@/lib/fonts";
import ProjectList from "@/app/projects/projects-list";

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
        <div className={`bg-white min-h-[100vh] ${styles.container} ${navStyles.navbarSpace}`}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    flexDirection: "column",
                    margin: "2rem 1rem",
                }}
            >
                <SecondaryTitle title={"Projects"} />
                <p className={textTheme.body.className}>
                    Our portfolio of projects and events
                </p>
            </div>

            <ProjectList projects={pages} />
        </div>
    );
}
