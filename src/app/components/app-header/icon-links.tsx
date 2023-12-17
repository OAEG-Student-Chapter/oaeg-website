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
}

const IconLinks = ({ iconData, direction = 'row', color, iconSize = "100%" } : IconLinksProps) => {

    const getIconStyle = () => {
        return { color: color || 'black', width: iconSize, height: iconSize };
    };

    const renderIconLinks = () => {
        return iconData.map((iconData, index) => {
            const {Icon, link} = iconData;
            return (
                <Link key={index} href={link} target={"_blank"}>
                    <Icon style={getIconStyle()} />
                </Link>
            );
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: direction }}>
            {renderIconLinks()}
        </div>
    );
};

export default IconLinks;
