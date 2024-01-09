"use client";
import React, { useEffect, useState } from "react";
import { blog } from "@/api/blogger/blog";
import styles from "./blog.module.css";
import navStyles from "@/app/components/app-header/app-navbar.module.css";

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
        console.log(posts.items);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function handleBlogClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div className={`${styles.container} ${navStyles.navbarSpace} py-12 px-2 md:px-30 lg:px-40`}>
      <div className={styles.caption}>Our Blog</div>
      <span className={styles.title}>Our Latest News</span>
      {posts.map((post) => (
        <div
          className={`${styles.blogContainer} cursor-pointer`}
          key={post.blog.id}
          onClick={() => handleBlogClick(post.url)}
        >
          <img
            className={styles.thumbnail}
            src={post.images[0].url}
            alt={post.title}
          />
          <div className={styles.info}>
            <span className={styles.blogTitle}>{post.title}</span>
            <div className={styles.labelContainer}>
              {post.labels?.map((label, index) => (
                <span key={index} className={styles.label}>
                  {label}
                </span>
              ))}
            </div>
            <div className={styles.authorInfo}>
              <img
                className={styles.authorImage}
                src={post.author.image.url}
                alt={post.author.displayName}
              />
              <span className={styles.authorName}>
                {post.author.displayName}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
