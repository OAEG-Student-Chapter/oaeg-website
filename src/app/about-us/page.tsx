"use client"

import React from 'react';
import Styles from './about-us.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Page(){
    const [description, setDescription] = useState("See our Goal and Vision");
    return (
        <div className={Styles.main}>
            <div className={Styles.detailBlock}>
                <h2 className={Styles.detailBlockHeader}>Our Guild Overview</h2>
                <p className={Styles.detailBlockOverview}>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className={Styles.rowButtonContainer}>
                    <button className={Styles.rowButton} onClick={()=>{setDescription(
                        "Description for Our Goal; Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, itecto beatae vitae dicta sunt, explicabo."
                        )}}>Our Goal</button>
                    <button className={Styles.rowButton} onClick={()=>{setDescription(
                        "Description for Our Vision; Sed ut perspiciatis, unde omnis laudantium, totam rem aperiam eaque ipsa, et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit."
                        )}}>Our Vision</button>
                </div>
                <p className={Styles.rowButtonDescription}>{description}</p>
                <button className={Styles.learnMoreButton}>
                    <Link href="/" className={Styles.innerLink}>Learn More</Link>
                </button>
            </div>

            <div className={Styles.servicesBlock}>
                <h2 className={Styles.servicesHeader}>Services Header</h2>
                <div className={Styles.servicesRow}>
                    <div className={Styles.serviceContainer}>
                        <div className={Styles.serviceTitle}>Service Title</div>
                        <div className={Styles.serviceDescription}>Service Description</div>
                    </div>
                    <div className={Styles.serviceContainer}>
                        <div className={Styles.serviceTitle}>Project & Exhibition</div>
                        <div className={Styles.serviceDescription}>Following the quality of our service thus having gained trust of our many clients.</div>
                    </div>
                    <div className={Styles.serviceContainer}>
                        <div className={Styles.serviceTitle}>Service Title</div>
                        <div className={Styles.serviceDescription}>Service Description</div>
                    </div>
                </div>
                <div className={Styles.servicesRow}>
                    <div className={Styles.serviceContainer}>
                        <div className={Styles.serviceTitle}>Service Title</div>
                        <div className={Styles.serviceDescription}>Service Description</div>
                    </div>
                    <div className={Styles.serviceContainer}>
                        <div className={Styles.serviceTitle}>Service Title</div>
                        <div className={Styles.serviceDescription}>Service Description</div>
                    </div>
                    <div className={Styles.serviceContainer}>
                        <div className={Styles.serviceTitle}>Service Title</div>
                        <div className={Styles.serviceDescription}>Service Description</div>
                    </div>
                </div>
                <button className={Styles.moreWorksButton}>
                <Link href="/" className={Styles.innerLink}>More Work</Link></button>
            </div>
            <div className={Styles.officialsBoardContainer}>
                <h2 className={Styles.officialsBoardHeader}>Officials Header</h2>
                <div className={Styles.officialsRow}>
                    <div className={Styles.subContainer}>
                        <div className={Styles.mainBodyTitle}>Main Body</div>
                            <Link href="/">
                                <Image src="/images/officials_preview.png" alt="Image" width={460} height={587} className={Styles.mainBodyImage}/>
                            </Link>
                    </div>
                    <div className={Styles.subContainer}>
                        <div className={Styles.mainBodyTitle}>Student Chapter</div>
                            <Link href="/">
                                <Image src="/images/officials_preview.png" alt="Image" width={460} height={587} className={Styles.mainBodyImage}/>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}