"use client"
import { blog } from "@/api/blogger/blog";
import { DataItem, getNewsletters } from "@/api/newsletter/newsletter";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./blog.module.css";

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
  const [data, setData] = useState<DataItem[]>([]);
  
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsletters()
        console.log("Data:", data);
        setData(data as DataItem[]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`${styles.container} ${navStyles.navbarSpace} bg-white min-h-screen`}
    >
      <div className={styles.newsletterContainer}>
        <span className={styles.title}>Newsletter</span>
        <div className={styles.scrollable_container}>
          
          {data.map((item) => (
            <Link href={`/blog/newsletter/${item.key}`}>
              <div className={styles.newsletter} key={item.key}>
                <img src="/newsletter_images/Ben 10 2.jpg" />
                <div className={styles.newsletterTitle}>{item.key}</div>
              </div>
            </Link>
          ))}

        </div>
      </div>
      <div
        className={`${styles.blogListContainer}  py-16 px-2 md:px-30 lg:px-40`}
      >
        <div className={styles.caption}>Our Blog</div>
        <span className={styles.title}>Engineers' Ink</span>
        {posts.map((post, index) => (
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
