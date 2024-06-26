import React from 'react';
import { IconType } from 'react-icons';
import Link from "next/link";

interface IconLinksProps {
    iconData: {
        Icon: IconType;
        link: string;
    }[];
    color?: string;
    iconSize?: string;
    iconClass?: string;
    className?: string;
}

const IconLinks = ({ iconData, iconClass, color,
                       iconSize = "100%",
                        className = "flex justify-center"} : IconLinksProps) => {

    const getIconStyle = () => {
        return {
            color: color || 'black',
            width: iconSize,
            height: iconSize
        };
    };

    const renderIconLinks = () => {
        return iconData.map((iconData, index) => {
            const {Icon, link} = iconData;
            return (
                <Link key={index} href={link} target={"_blank"}>
                    <Icon className={iconClass} style={getIconStyle()} />
                </Link>
            );
        });
    };

    return (
        <div className={className}>
            {renderIconLinks()}
        </div>
    );
};

export default IconLinks;
