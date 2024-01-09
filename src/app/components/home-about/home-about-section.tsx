import styles from "./home-about-section.module.css";
import TitleBadge from "@/components/title-badge";
import {Krub, Rubik} from "next/font/google";
import TestimonialCard from "@/app/components/home-about/testimonial-card";
import {MainTitle, SecondaryTitle, TertiaryTitle} from "@/components/titles";
import {ReactNode} from "react";
import {organization} from "@/lib/constants";

const rubik = Rubik({subsets: ["latin"], weight: ["400"]});
const krubItalic = Krub({subsets: ["latin"], weight: ["400"]});

export default function HomeAboutSection() {
    return (
        <div className={`${styles.container} ${rubik.className}`}>
            <TitleBadge title={"Who We Are"}/>
            <div className={"mt-4 md:flex"}>
                <img className={"mb-4 md:mb-0 md:mr-4"} style={{height:"10rem", width:"10rem"}} src={"/images/logo_oaeg.png"} alt={"OAEG logo"}></img>
                <div className="flex items-center">
                    <p className={""}>
                        The Old Anandian Engineers’ Guild was formally established in 2017 by the founding president Eng.
                        Kithsiri Gunasekara.
                        It was incorporated into the college's main OBA as an affiliate group in 2018.
                        The current president is Prof. Udeni Nawagamuwa leading a 26-strong group of EXCO Associates and
                        Chartered Members of IESL (Institution Of Engineers Sri Lanka). The OAEG is further strengthened by
                        its student chapter, which comprises all engineering undergraduates from state universities.
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
                                    return <li className={"mb-1"} key={index}>{mission}</li>
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
