import { FaLinkedin } from "react-icons/fa6";
import Styles from "./SocialIcon.module.css"
import React from "react";
import { IconType } from "react-icons";

interface SocialIconProps {
    socialMedia: string;
    accountName: string;
}

export const socialMediaList: { name: string; icon: IconType }[] = [
    {
        "name": "linkedin",
        icon: FaLinkedin
    }
];

export default function SocialIcon({ socialMedia, accountName }: SocialIconProps) {
    const socialInfo = socialMediaList.find(item => item.name === socialMedia);

    if (!socialInfo) {
        return null;
    }

    const IconComponent = socialInfo.icon;
    const webURL = accountName;

    return (
        <a href={webURL} target={"_blank"} className={Styles.linkComponent} rel="noreferrer">
            <IconComponent className={Styles.icon} />
        </a>
    );
}

