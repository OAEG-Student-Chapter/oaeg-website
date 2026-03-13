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
    <div className="flex flex-col md:flex-row w-full pt-[calc(var(--navbar-height)+1rem)] pb-4 h-auto md:h-screen bg-white">
      <div className="flex flex-col justify-center items-center w-full md:w-1/4 max-h-min px-[10px] border-b md:border-b-0 md:border-r border-[#d6d6d6]">
        <div className="text-[#1c1f35] font-medium px-2 py-[0.2rem] text-base border-l-4 border-primary bg-[#f3f3f3] w-fit mt-5 mb-3">
          Newsletters
        </div>
        <div className="flex flex-row md:flex-col justify-center h-full overflow-x-auto md:overflow-y-auto px-[10px] md:whitespace-normal whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {data.map((item) => (
            <div
              key={item.key}
              className="border border-black rounded-[5px] relative overflow-hidden mb-5 cursor-pointer inline-block md:block ml-2.5 md:ml-0 w-[125px] md:w-full h-[182.5px] md:h-auto"
              onClick={() => handleNewsletterClick(item)}>
              <img
                src={"/newsletter_images/" + item.key + ".webp"}
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-[10px] bg-[rgba(0,0,0,0.7)] text-white text-center">
                {item.key}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full h-auto md:h-full mt-2.5 md:mt-0">
        {newsletter && (
          <div className="flex flex-col w-full items-center p-0 md:p-5 h-[600px] md:h-full">
            <iframe
              className="w-full h-full"
              loading="lazy"
              src={newsletter.val}
            />
          </div>
        )}
      </div>
    </div>
  );
}
