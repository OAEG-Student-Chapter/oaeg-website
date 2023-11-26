'use client'
import styles from "./app-hero.module.css";
import 'react-slideshow-image/dist/styles.css'
import {Slide} from "react-slideshow-image";
import {Rubik} from "next/font/google"
import React from "react";
import {heroImages, IHeroImage} from "@/app/components/app-hero/hero-images";
const rubik = Rubik({subsets: ['latin'], weight:['600']});

interface AppHeroProps {
    height?: number | string;
    heroImages: IHeroImage[];
}
export default function AppHero(props:AppHeroProps) {

    const slideProps = {
        duration: 5000,
        autoplay: true,
        transitionDuration: 1000,
        arrows: false,
        infinite: true,
        easing: "ease",
    };

    return (
        <div style={{position:'relative'}}>
            <Slide {...slideProps} canSwipe={true}>
                {props.heroImages.map((slideImage, index)=>
                    <SliderItem key={index} height={props.height} slideImage={slideImage}/>
                )}
            </Slide>
        </div>
    );
}


interface SliderItemProps {
    slideImage: IHeroImage;
    height?: number | string;
}


const SliderItem = (props: SliderItemProps) =>
{
    const slideImage = props.slideImage;
    return (
        <div style={{
            height: props.height,
        }} className={styles.heroImageContainer}>
            <RedGradientOverlay/>
            <img className={styles.heroImage} src={slideImage.url} alt=""/>
            <div className={`${styles.heroText} ${rubik.className}`}>
                <h2 className={styles.imageTitle}>{slideImage.title}</h2>
                <div className={styles.imageCaption}>{slideImage.caption}</div>
            </div>
        </div>
    );
};


function RedGradientOverlay() {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
        }} className={styles.redBlurGradient}/>
    )
}