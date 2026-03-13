import { FaLinkedin } from "react-icons/fa6";
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
        <a href={webURL} target={"_blank"} className="flex flex-col items-center justify-center" rel="noreferrer">
            <IconComponent className="text-black h-8 w-8 m-2 hover:text-primary-dark transition-colors" />
        </a>
    );
}

