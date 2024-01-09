import {FaLinkedin} from "react-icons/fa6";
import Styles from "./SocialIcon.module.css"

interface SocialIconProps {
    socialMedia: string;
    accountName: string;
}

export const socialMediaList = [
    {
        "name": "linkedin",
        "url": "https://www.linkedin.com/",
        icon: FaLinkedin
    }
];

export default function SocialIcon({ socialMedia, accountName }: SocialIconProps) {
    let webURL, IconComponent;
    for (let i = 0; i < socialMediaList.length; i++) {
        if (socialMediaList[i].name === socialMedia) {
            webURL = socialMediaList[i].url + accountName;
            IconComponent = socialMediaList[i].icon;
            break;
        }
    }
	return (
		<a href={webURL} className={Styles.linkComponent}>
            <IconComponent className={Styles.icon}/>
        </a>
	);

}
