import styles from "./home-about-section.module.css";
import TitleBadge from "@/components/title-badge";
import {Krub, Rubik} from "next/font/google";
import TestimonialCard from "@/app/components/home-about/testimonial-card";
import {MainTitle, SecondaryTitle, TertiaryTitle} from "@/components/titles";
import {ReactNode} from "react";
import {organization} from "@/lib/constants";
import {FaCheck} from "react-icons/fa6";

const rubik = Rubik({subsets: ["latin"], weight: ["400"]});
const krubItalic = Krub({subsets: ["latin"], weight: ["400"]});

export default function HomeAboutSection() {
    return (
        <div className={`${styles.container} ${rubik.className}`}>
            <TitleBadge title={"Who We Are"}/>
            <div className={"mt-4 md:flex"}>
                <img className={"mb-4 md:mb-0 md:mr-4"} style={{height:"10rem", width:"10rem"}} src={"/images/logo_oaeg.png"} alt={"OAEG logo"}></img>
                <div className="flex items-center">
                    <p className={"text-justify"}>
                        {organization.description}
                    </p>
                </div>
            </div>
            <div className={styles.topSection}>
                <div className={"mt-6"}>
                    <SecondaryTitle title={'Our Mission'}/>
                    <InfoCard>
                        <ul>
                            {
                                organization.mission.map((mission, index) => {
                                    return <li className={"mb-1 flex"} key={index}>
                                        <FaCheck className={"mr-2"}/>
                                        {mission}</li>
                                })
                            }
                        </ul>
                    </InfoCard>
                </div>

            </div>
            <div className={styles.bottomSection}>
                <TitleBadge title={"Testimonial"}/>
                <div style={{marginTop: 10}}>
                    <SecondaryTitle title={"Message from the Founder"}/>
                </div>
                <div style={{marginTop: 20}}>
                    <TestimonialCard/>
                </div>
            </div>
        </div>
    );
}

const InfoCard = (props: { children: ReactNode }) => {
    return (
        <>

            <div
                className={krubItalic.className}
                style={{
                    marginTop: 10,
                    color: "var(--color-text-secondary)",
                }}
            >
                {props.children}
            </div>
        </>
    );
};
