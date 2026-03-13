'use client'
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
        <div className="relative bg-[#272727]">
            <div className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 ${rubik.className}`}>
                <h2 className="text-4xl md:text-7xl text-white text-center">
                    <span className="text-theme-yellow">Old Anandian</span> <br />
                    Engineers' Guild</h2>
                <h4 className="text-xl md:text-2xl text-center text-gray-100 mt-2 font-normal">Est. in 2017</h4>
                <div className="flex mt-4 w-full justify-center">
                    <IconLinks
                        color="white"
                        iconData={socialMediaLinks.map(l => {
                            return {
                                Icon: l.icon,
                                link: l.url
                            }
                        })}
                        iconClass="h-8 w-8 md:h-12 md:w-12"
                        className="flex justify-center gap-2"
                    />
                </div>
            </div>
            <Carousel
                plugins={[plugin.current, fadePlugin.current]}
                opts={{
                    loop: true,
                    duration: 30,
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
        }} className="w-full relative h-[100vh] md:h-[calc(100vh-var(--navbar-height))] md:mt-[var(--navbar-height)]">
            <div className="absolute inset-0 z-[1] bg-black/70" />
            <img className="h-full w-full object-top object-cover" src={slideImage.url} alt="" />
        </div>
    );
};