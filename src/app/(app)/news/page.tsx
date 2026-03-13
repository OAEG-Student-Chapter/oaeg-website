"use client";
import {
  DataItem,
  getNewsletters,
  getSingleNewsletter,
} from "@/api/newsletter/newsletter";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<DataItem[]>([]);
  const [newsletter, setNewsletter] = useState<DataItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsletters();
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
    // Changes the displaying newsletter, without changing the URL and reloading the page again
    setNewsletter(newsletter);
  }

  return (
    <div className="flex h-auto w-full flex-col bg-white pb-4 pt-[calc(var(--navbar-height)+1rem)] md:h-screen md:flex-row">
      <div className="flex max-h-min w-full flex-col items-center justify-center border-b border-[#d6d6d6] px-[10px] md:w-1/4 md:border-b-0 md:border-r">
        <div className="mb-3 mt-5 w-fit border-l-4 border-primary bg-[#f3f3f3] px-2 py-[0.2rem] text-base font-medium text-[#1c1f35]">
          Newsletters
        </div>
        <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 flex h-full flex-row justify-center overflow-x-auto whitespace-nowrap px-[10px] md:flex-col md:overflow-y-auto md:whitespace-normal">
          {data.map((item) => (
            <div
              key={item.key}
              className="relative mb-5 ml-2.5 inline-block h-[182.5px] w-[125px] cursor-pointer overflow-hidden rounded-[5px] border border-black md:ml-0 md:block md:h-auto md:w-full"
              onClick={() => handleNewsletterClick(item)}
            >
              <img
                src={"/newsletter_images/" + item.key + ".webp"}
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] p-[10px] text-center text-white">
                {item.key}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2.5 flex h-auto w-full md:mt-0 md:h-full">
        {newsletter && (
          <div className="flex h-[600px] w-full flex-col items-center p-0 md:h-full md:p-5">
            <iframe
              className="h-full w-full"
              loading="lazy"
              src={newsletter.val}
            />
          </div>
        )}
      </div>
    </div>
  );
}
