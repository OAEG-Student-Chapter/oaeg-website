'use client'
import styles from "./app-hero.module.css";
import { Rubik } from "next/font/google"
import React from "react";
import socialMediaLinks from "@/lib/social-media";
import IconLinks from "@/components/app-header/icon-links";
import { IHeroImage } from "@/components/app-hero/hero-images";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const rubik = Rubik({ subsets: ['latin'], weight: ['600'] });

interface AppHeroProps {
    height?: number | string;
    heroImages: IHeroImage[];
}

export default function AppHero(props: AppHeroProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    const fadePlugin = React.useRef(Fade());

    return (
        <div className={"relative bg-[#272727]"}>
            <div className={`w-full px-4 ${styles.heroText} ${rubik.className}`}>
                <h2 className={`text-4xl md:text-7xl text-white text-center`}>
                    <span className={"text-theme-yellow"}>Old Anandian</span> <br />
                    Engineers' Guild</h2>
                <h4 className="text-xl md:text-large text-center text-gray-100 mt-2">Est. in 2017</h4>
                <div className="flex mt-4 w-full justify-center">
                    {/*    font awesome icons */}
                    <IconLinks
                        color="white"
                        iconData={socialMediaLinks.map(l => {
                            return {
                                Icon: l.icon,
                                link: l.url
                            }
                        })}
                        iconClass={styles.heroSocialIcons}
                        className={"flex justify-center gap-2"}
                    />
                </div>
            </div>
            <Carousel
                plugins={[plugin.current, fadePlugin.current]}
                opts={{
                    loop: true,
                    duration: 30, // Adjust speed if needed. Lower is faster in Embla, but fade handles transition speed mostly.
                }}
            >
                <CarouselContent className="ml-0">
                    {props.heroImages.map((slideImage, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <SliderItem height={props.height} slideImage={slideImage} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}


interface SliderItemProps {
    slideImage: IHeroImage;
    height?: number | string;
}


const SliderItem = (props: SliderItemProps) => {
    const slideImage = props.slideImage;
    return (
        <div style={{
            height: props.height,
        }} className={styles.heroImageContainer}>
            <Overlay color={"rgba(0,0,0,0.7)"} />
            <img className={styles.heroImage} src={slideImage.url} alt="" />
        </div>
    );
};


function Overlay(props: { color?: string }) {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: props.color
        }} />
    )
}