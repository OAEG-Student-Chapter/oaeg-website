'use client'
import styles from "./app-hero.module.css";
import {usePathname} from "next/navigation";
import {routesMap} from "@/lib/routes";
import 'react-slideshow-image/dist/styles.css'
import {Slide} from "react-slideshow-image";

interface AppHeroProps {
    height?: number | string;
    children: React.ReactNode
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
        <Slide {...properties} canSwipe={true}>
            {slideImages.map((slideImage, index)=> (
                <div key={index} style={{
                    height: height,
                    backgroundImage: `url(${slideImage.url})`
                }} className={styles.heroImageContainer}>
                    <span style={spanStyle}>{slideImage.caption}</span>
                </div>
            ))}
        </Slide>

    );
}

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const slideImages = [
    {
        url: '/images/main-bg.png',
        caption: "Caption 1"
    },
    {
        url: '/images/exco.jpg',
        caption: "Caption 2"
    }
]
