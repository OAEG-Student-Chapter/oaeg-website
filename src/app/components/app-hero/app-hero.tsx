'use client'
import styles from "./app-hero.module.css";
import {usePathname} from "next/navigation";
import {routesMap} from "@/lib/routes";
import 'react-slideshow-image/dist/styles.css'
import {Slide} from "react-slideshow-image";
import {Rubik} from "next/font/google"
import React from "react";
const rubik = Rubik({subsets: ['latin'], weight:['600']});

interface AppHeroProps {
    height?: number | string;
    children?: React.ReactNode
}
export default function AppHero(props:AppHeroProps) {

    const pathname = usePathname()
    let height : number|string|undefined = undefined;
    if (pathname !== routesMap.home.path) {
        height = '60vh';
    }

    const properties = {
        duration: 5000,
        autoplay: true,
        transitionDuration: 1000,
        arrows: false,
        infinite: true,
        easing: "ease",
    };

    return (
        <div style={{position:'relative'}}>
            <Slide {...properties} canSwipe={true}>
                {slideImages.map((slideImage, index)=>
                    <SliderItem key={index} height={height} slideImage={slideImage}/>
                )}
            </Slide>
        </div>

    );
}
interface SliderItemProps {
    slideImage: ISlideImage;
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

interface ISlideImage { caption: string; url: string, title: string }

const slideImages :ISlideImage[] = [
    {
        url: '/images/main-bg.png',
        title: "Title 1",
        caption: "Caption 1"
    },
    {
        url: '/images/exco.jpg',
        title: "Board of Officials",
        caption: "2022/2023"
    }
]

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