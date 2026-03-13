"use client"
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
    <div className="flex flex-col justify-start items-center pt-[var(--navbar-height)] bg-white min-h-screen w-full">
      <div className="flex flex-col justify-start items-center max-w-[80%] py-16 px-2 md:px-30 lg:px-40">
        <div className="text-[#1c1f35] font-medium px-2 py-[0.2rem] text-base border-l-4 border-primary bg-[#f3f3f3] w-fit">
          Our Blog
        </div>
        <span className="mt-[15px] mb-[30px] font-semibold text-[clamp(1.5rem,5vw,2.2rem)]">
          Engineers' Ink
        </span>
        {posts.map((post, index) => (
          <div
            className="flex flex-col md:flex-row py-5 border-y border-[hsl(0,0%,84%)] justify-start w-full cursor-pointer max-w-full items-start md:px-0 px-8"
            key={index}
            onClick={() => handleBlogClick(post.url)}>
            <img
              className="max-w-full md:max-w-[250px] w-full md:w-auto h-auto object-cover md:mr-5 mr-0"
              src={post.images[0].url}
              alt={post.title}
            />
            <div className="flex flex-col h-full">
              <span className="font-semibold text-[clamp(1rem,4vw,1.3rem)] mt-4 md:mt-0">
                {post.title}
              </span>
              <div className="flex flex-row flex-wrap gap-2.5 mt-2 mb-4">
                {post.labels?.map((label, index) => (
                  <span
                    key={index}
                    className="text-[#666c89] font-medium px-2 py-[0.2rem] text-[0.8rem] bg-[#f3f3f3] w-fit">
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex gap-2.5 items-center mt-auto">
                <img
                  className="w-[2vw] min-w-[1em] h-auto rounded-full"
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
