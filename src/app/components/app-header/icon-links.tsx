import React from 'react';
import { IconType } from 'react-icons';
import Link from "next/link";

interface IconLinksProps {
    iconData: {
        Icon: IconType;
        link: string;
    }[];
    direction?: 'row' | 'column';
    color?: string;
    iconSize?: string;
    layout?: React.CSSProperties;
    iconClass?: string;
}

const IconLinks = ({ iconData, iconClass,
                       direction = 'row', color,
                       iconSize = "100%",
                       layout = { display: 'flex', flexDirection: direction } } : IconLinksProps) => {

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
        <div style={layout}>
            {renderIconLinks()}
        </div>
    );
};

export default IconLinks;
