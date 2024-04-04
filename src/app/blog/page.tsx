"use client";
import React, { useEffect, useState } from "react";
import { blog } from "@/api/blogger/blog";
import styles from "./blog.module.css";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import Link from "next/link";

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
      
      <div className={`${styles.container} ${navStyles.navbarSpace} bg-white min-h-screen`}>
        <div className={styles.newsletterContainer}>
          <span className={styles.title}>Newsletter</span>
          <div className={styles.scrollable_container}>
            <div className={styles.newsletter}>
            <img src="/newsletter_images/Ben 10 2.jpg"/>
              <div className={styles.newsletterTitle}>Hello</div>
            </div>
            <Link href="/blog/newsletter/august-2023">
            <div className={styles.newsletter}>
              <img src="/newsletter_images/Ben 10 2.jpg"/>
              <div className={styles.newsletterTitle}>Hello</div>
            L</div>
            </Link>
            {/* <div className={styles.newsletter}>
              <img src="/newsletter_images/Ben 10.jpg"/>
              <div className={styles.newsletterTitle}>Hello</div>
            </div>
            <div className={styles.newsletter}>
              <img src="/newsletter_images/Ben 10.jpg"/>
              <div className={styles.newsletterTitle}>Hello</div>
            </div> */}
          </div>
        </div>
        <div className={`${styles.blogListContainer}  py-16 px-2 md:px-30 lg:px-40`}>
          <div className={styles.caption}>Our Blog</div>
          <span className={styles.title}>Engineers' Ink</span>
          {posts.map((post,index) => (
              <div
                  className={styles.blogContainer}
                  key={index}
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
      </div>

  );
}
