"use client";
import { blog } from "@/api/blogger/blog";
import { useEffect, useState } from "react";

interface Post {
  title: string;
  url: string;
  blog: {
    id: string;
  };
  images: {
    url: string;
  }[];
  labels: string[];
  author: {
    displayName: string;
    image: {
      url: string;
    };
  };
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await blog.get("posts");
        setPosts(posts.items as Post[]); // explicitly specify the type of the posts array
      } catch (error) {
        // console.error(error);
      }
    }
    fetchData();
  }, []);

  function handleBlogClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-white pt-[var(--navbar-height)]">
      <div className="md:px-30 flex max-w-[80%] flex-col items-center justify-start px-2 py-16 lg:px-40">
        <div className="w-fit border-l-4 border-primary bg-[#f3f3f3] px-2 py-[0.2rem] text-base font-medium text-[#1c1f35]">
          Our Blog
        </div>
        <span className="mb-[30px] mt-[15px] text-[clamp(1.5rem,5vw,2.2rem)] font-semibold">
          Engineers' Ink
        </span>
        {posts.map((post, index) => (
          <div
            className="flex w-full max-w-full cursor-pointer flex-col items-start justify-start border-y border-[hsl(0,0%,84%)] px-8 py-5 md:flex-row md:px-0"
            key={index}
            onClick={() => handleBlogClick(post.url)}
          >
            <img
              className="mr-0 h-auto w-full max-w-full object-cover md:mr-5 md:w-auto md:max-w-[250px]"
              src={post.images[0].url}
              alt={post.title}
            />
            <div className="flex h-full flex-col">
              <span className="mt-4 text-[clamp(1rem,4vw,1.3rem)] font-semibold md:mt-0">
                {post.title}
              </span>
              <div className="mb-4 mt-2 flex flex-row flex-wrap gap-2.5">
                {post.labels?.map((label, index) => (
                  <span
                    key={index}
                    className="w-fit bg-[#f3f3f3] px-2 py-[0.2rem] text-[0.8rem] font-medium text-[#666c89]"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-2.5">
                <img
                  className="h-auto w-[2vw] min-w-[1em] rounded-full"
                  src={post.author.image.url}
                  alt={post.author.displayName}
                />
                <span className="text-[clamp(0.8rem,3vw,1rem)] font-medium">
                  {post.author.displayName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
