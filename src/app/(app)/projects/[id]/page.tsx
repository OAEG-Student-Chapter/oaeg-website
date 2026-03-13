"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { blog } from "@/api/blogger/blog";

export const runtime = "edge";

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
    <div className="bg-white pt-12 min-h-screen">
      <div
        className="px-10 md:px-[200px] py-10 font-['Poppins',_sans-serif] 
                   [&_h1]:font-bold [&_h1]:mt-[1.2rem] [&_h1]:mb-4
                   [&_h2]:font-bold [&_h2]:mt-[1.2rem] [&_h2]:mb-4
                   [&_h3]:font-bold [&_h3]:mt-[1.2rem] [&_h3]:mb-4
                   [&_h1_span]:text-2xl [&_h1_span]:text-black [&_h1_span]:font-semibold [&_h1_span]:text-center
                   [&_img]:w-[clamp(300px,50vw,600px)] [&_img]:h-auto
                   [&_p]:mb-4 [&_h4]:mb-4 [&_h5]:mb-4 [&_h6]:mb-4
                   [&_ul]:mb-4 [&_ol]:mb-4 [&_li]:mb-2 [&_ul_li]:list-disc [&_ul_li]:ml-5
                   [&_blockquote]:mb-4 [&_pre]:mb-4 [&_table]:mb-4
                   [&_dl]:mb-4 [&_dd]:mb-4 [&_dt]:mb-4
                   [&_code]:mb-4 [&_figure]:mb-4 [&_figcaption]:mb-4
                   [&_span]:mb-4 [&_span]:font-['Poppins',_sans-serif]"
        dangerouslySetInnerHTML={template}
      ></div>
    </div>
  );
}
