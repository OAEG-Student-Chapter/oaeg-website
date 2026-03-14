"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { blog } from "@/lib/blogger-api";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [content, setContent] = useState("");

  const template = { __html: content };

  useEffect(() => {
    async function fetchData() {
      try {
        const project = await blog.getProject(id!); // explicitly specify the type of the pages array
        setContent(project.content);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-neutral-50 pb-24 pt-[calc(var(--navbar-height)+2rem)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Back Navigation */}
        <Link
          href="/projects"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <article className="rounded-2xl bg-white p-8 shadow-sm sm:p-12 border border-neutral-100">
          <div
            className="prose prose-lg max-w-none 
                       prose-headings:font-extrabold prose-headings:text-neutral-900 prose-headings:tracking-tight
                       prose-p:leading-relaxed prose-p:mb-4
                       prose-img:rounded-xl prose-img:mx-auto prose-img:shadow-md prose-img:my-0
                       prose-a:text-primary hover:prose-a:text-primary-dark
                       prose-strong:text-neutral-900 text-neutral-900"
            dangerouslySetInnerHTML={template}
          />
        </article>
      </div>
    </div>
  );
}
