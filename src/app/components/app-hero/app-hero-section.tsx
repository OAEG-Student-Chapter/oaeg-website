import AppHero from "@/app/components/app-hero/app-hero";
import {IHeroImage} from "@/app/components/app-hero/hero-images";


export const heroImages :IHeroImage[] = [
    {
        url: '/images/hero-2.webp',
        title: "What It Takes To Be A CEO",
        caption: "2022"
    },
    {
        url: '/images/exco2023.webp',
        title: "Board of Officials",
        caption: "2022/2023"
    },
    {
        url: '/images/hero-1.webp',
        title: "What It Takes To Be A CEO",
        caption: "Chapter 1"
    },
    {
        url: '/images/hero-3.webp',
        title: "Inaugural General Meeting of Old Anandians' Engineers Guild",
        caption: "2017"
    },
    {
        url: '/images/hero-4.webp',
        title: "Pathway to Engineering",
        caption: "2019"
    },
]

export default function AppHeroSection() {
    return <AppHero heroImages={heroImages}/>;
}

