import TitleBadge from "@/components/ui/title-badge";
import { SecondaryTitle } from "@/components/ui/titles";
import React, { ReactNode } from "react";
import { organization } from "@/lib/constants";
import { FaCheck } from "react-icons/fa6";
import { TestimonialsSection } from "./testimonials-section";
import { RegisterButton } from "@/components/app-header/app-navbar";
import { rubik, krub, krubItalic } from "@/lib/fonts";

export default function HomeAboutSection() {
    return (
        <div className={`bg-white py-16 px-[10%] md:px-[15%] ${rubik.className}`}>
            <TitleBadge title={"Who We Are"} />
            <div className="mt-4 md:flex">
                <img
                    className="mb-4 md:mb-0 md:mr-4 h-40 w-40"
                    src="/images/logo_oaeg.png"
                    alt="OAEG logo"
                />
                <div className="flex items-center">
                    <p className="text-justify">
                        {organization.description}
                    </p>
                </div>
            </div>
            <div className="mt-6">
                <div className="mt-6">
                    <SecondaryTitle title={'Our Mission'} />
                    <InfoCard>
                        <ul>
                            {
                                organization.mission.map((mission, index) => {
                                    return <li className="mb-1 flex" key={index}>
                                        <FaCheck className="mr-2" />
                                        {mission}</li>
                                })
                            }
                        </ul>
                    </InfoCard>
                </div>

            </div>
            <div className="mt-4">
                <TitleBadge title={"Still not a member?"} />
                <div className="mt-2">
                    <RegisterButton cta={"Join the Guild"} />
                </div>
            </div>
            <div className="mt-12 mb-12">
                <div className="mt-[10px]" id="testimonials">
                    <SecondaryTitle title={"Testimonials"} />
                </div>
                <div className="mt-[20px]">
                    <TestimonialsSection />
                </div>
            </div>
        </div>
    );
}

const InfoCard = (props: { children: ReactNode }) => {
    return (
        <div
            className={`mt-[10px] text-gray-500 ${krubItalic.className}`}
        >
            {props.children}
        </div>
    );
};
