"use client"
import { DataItem, getNewsletters } from "@/api/newsletter/newsletter";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./newsletter.module.css";

export default function Page() {
    const [data, setData] = useState<DataItem[]>([]);
    const [newsletter, setNewsletter] = useState<DataItem | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getNewsletters()
                console.log("Data:", data);
                setData(data as DataItem[]);
                if(data && data.length > 0)
                    setNewsletter(data[0]);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className={`${styles.pageWrapper} h-screen bg-white`}>
            <div className={styles.newsletterContainer}>
                <div className={`${styles.caption} mt-5 mb-3`}>Newsletters</div>
                <div className={styles.scrollable_container}>

                    {data.map((item) => (
                        <Link key={item.key} href={`/news/${item.key}`}>
                            <div className={styles.newsletter}>
                                <img src="/newsletter_images/Ben 10 2.jpg" />
                                <div className={styles.newsletterTitle}>{item.key}</div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
            <div className={`flex w-full px-10`}>
                {
                    newsletter && (
                        <div className={'flex-col w-full items-center'}>
                            <iframe
                                className={`w-full h-full`}
                                loading="lazy"
                                src={newsletter.val}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
}
