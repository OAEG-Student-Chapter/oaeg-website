"use client"

import Styles from "./description-container.module.css";
import {useState} from 'react';

interface DescriptionContainerProps {
    goal: string;
    vision: string;
    overview: string;
}

export default function DescriptionContainer({goal, vision, overview}: DescriptionContainerProps) {
    const [description, setDescription] = useState(goal);
    const buttons = [
        {name: "Our Goal", description: goal},
        {name: "Our Vision", description: vision}
    ];
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    return (
        <div className={Styles.detailBlock}>
            <div className={Styles.imageContainer}>
                <img src="/images/main-bg.png" alt="main-bg image" className={Styles.mainImage}/>
                <div className={Styles.imageOnTop}>
                    <img src="/images/logo_oaeg.png" alt="OAEG Logo"/>
                </div>
            </div>
            <div className={Styles.descriptionContainer}>
                <h2 className={`${Styles.detailBlockHeader}`}>Our Guild Overview</h2>
                <p className={Styles.detailBlockOverview}>{overview}</p>
                <div className={Styles.rowButtons}>
                    {buttons.map((button, index) => (
                        <div key={index}
                            className={Styles.rowButtonContainer}>
                            <button className={`${Styles.rowButton} 
                                    ${activeButtonIndex === index ? Styles.activeRowButton : ""}`}
                                    onClick={() => {
                                        setDescription(button.description);
                                        setActiveButtonIndex(index);
                                    }}>
                                {button.name}
                            </button>
                        </div>
                    ))}
                </div>
                <p className={Styles.rowButtonDescription}>{description}</p>
            </div>
        </div>
    )
}

