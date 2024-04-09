"use client";
import {
  DataItem,
  getNewsletters,
  getSingleNewsletter,
} from "@/api/newsletter/newsletter";
import { useEffect, useState } from "react";
import styles from "./newsletter.module.css";

export default function Page() {
  const [data, setData] = useState<DataItem[]>([]);
  const [newsletter, setNewsletter] = useState<DataItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsletters();
        console.log("Data:", data);
        setData(data as DataItem[]);

        // Get the query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get("key"); // give any name to the search parameter

        // Set the newsletter based on the key (if available)
        if (key) {
          const fetched_newsletter = await getSingleNewsletter(key);
          if (fetched_newsletter) {
            setNewsletter(fetched_newsletter);
          } else {
            console.warn(`No newsletter found with key: ${key}`);
          }
        } else {
          // Loads the first newsletter by default
          if (data && data.length > 0) {
            setNewsletter(data[0]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  async function handleNewsletterClick(newsletter: DataItem) {
    // The following piece of code changes the URL
    // by adding a search parameter "key"
    // and reloads the page again
    // ----------------------------------------------------------------------
    // const currentUrl = new URL(window.location.href);

    // if (newsletter.key)
    //     currentUrl.searchParams.set("key", newsletter.key);

    // // Update browser history (optional)
    // window.history.pushState({}, currentUrl.toString());

    // console.log("New URL with query parameter:", currentUrl.toString());

    // // Reload the page again with search parameter "key"
    // window.location.href = currentUrl.toString();
    //--------------------------------------------------------------------------

    // The below line changes the displaying newsletter,
    // without changing the URL and reloading the page again
    setNewsletter(newsletter);
  }

  return (
    <div className={`${styles.pageWrapper} bg-white`}>
      <div className={styles.newsletterContainer}>
        <div className={`${styles.caption} mt-5 mb-3`}>Newsletters</div>
        <div className={styles.scrollable_container}>
          {data.map((item) => (
            <div
              className={styles.newsletter}
              onClick={() => handleNewsletterClick(item)}
              data-key={item.key}
            >
              {/* Remember to change the image displayed here */}
              <img src="/newsletter_images/Ben 10 2.jpg" />

              <div className={styles.newsletterTitle}>{item.key}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.iframe_box}>
        {newsletter && (
          <div className={styles.iframe_container}>
            <iframe
              className={styles.iframe}
              loading="lazy"
              src={newsletter.val}
            />
          </div>
        )}
      </div>
    </div>
  );
}
