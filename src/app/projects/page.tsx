"use client";
import React, { useEffect, useState } from "react";
import { blog } from "@/api/blogger/blog";
import ProjectPage from "@/app/projects/types";
import { SecondaryTitle } from "@/components/ui/titles";
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
        <div className="bg-white min-h-[100vh] py-4 px-4 pt-[var(--navbar-height)]">
            <div className="flex flex-col justify-center items-center gap-4 my-8 mx-4">
                <SecondaryTitle title={"Projects"} />
                <p className={textTheme.body.className}>
                    Our portfolio of projects and events
                </p>
            </div>

            <ProjectList projects={pages} />
        </div>
    );
}
