"use client"

import Image from "next/image";
import Link from "next/link";
import Styles from "./description-container.module.css";
import { useState } from 'react';

interface DescriptionContainerProps {
    goal: string;
    vision: string;
    overview: string;
}

export default function DescriptionContainer({goal, vision, overview}: DescriptionContainerProps) {
    const [description, setDescription] = useState(goal);
    return (
        <div className={Styles.detailBlock}>
                <div className={Styles.imageContainer}>
                    <Image src="/images/main-bg.png" alt="main-bg image" className={Styles.mainImage} width={1000} height={1000}/>
                </div>
                <div className ={Styles.descriptionContainer}>
                    <h2 className={Styles.detailBlockHeader}>Our Guild Overview</h2>
                    <p className={Styles.detailBlockOverview}>{overview}</p>
                    <div className={Styles.rowButtonContainer}>
                        <button className={Styles.rowButton} onClick={()=>{setDescription(goal)}}>Our Goal</button>
                        <button className={Styles.rowButton} onClick={()=>{setDescription(vision)}}>Our Vision</button>
                    </div>
                    <p className={Styles.rowButtonDescription}>{description}</p>
                </div>
            </div>
    )
}

