'use client'
import styles from "./app-hero.module.css";
import 'react-slideshow-image/dist/styles.css'
import {Fade} from "react-slideshow-image";
import {Rubik} from "next/font/google"
import React from "react";
const rubik = Rubik({subsets: ['latin'], weight:['600']});
import socialMediaLinks from "@/lib/social-media";
import IconLinks from "@/app/components/app-header/icon-links";
import {IHeroImage} from "@/app/components/app-hero/hero-images";


interface AppHeroProps {
    height?: number | string;
    heroImages: IHeroImage[];
}

export default function AppHero(props:AppHeroProps) {

    const slideProps = {
        duration: 3000,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
    };


    return (
        <div className={"relative bg-[#272727]"}>
            <div className={`w-full px-4 ${styles.heroText} ${rubik.className}`}>
                <h2 className={`text-4xl md:text-7xl text-white text-center`}>
                    <span className={"text-theme-yellow"}>Old Anandian</span> <br/>
                    Engineers' Guild</h2>
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
                        layout={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1rem',
                        }}
                    />
                </div>
            </div>
            <Fade {...slideProps}>
                {props.heroImages.map((slideImage, index)=>
                    <SliderItem key={index} height={props.height} slideImage={slideImage}/>
                )}
            </Fade>
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
            <Overlay color={"rgba(0,0,0,0.7)"}/>
            <img className={styles.heroImage} src={slideImage.url} alt=""/>
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
        }}/>
    )
}