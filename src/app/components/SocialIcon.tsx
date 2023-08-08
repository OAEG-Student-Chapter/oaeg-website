import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa6";
import socialMediaList from "./socialMediaList.json";
import Styles from "./SocialIcon.module.css"

interface SocialIconProps {
    socialMedia: string;
    accountName: string;
}

export default function SocialIcon({ socialMedia, accountName }: SocialIconProps) {
    let webURL, IconComponent;
    switch (socialMedia) {
        case socialMediaList[0].name:
            webURL = socialMediaList[0].url+accountName;
            IconComponent = FaFacebook;
            break;
        case socialMediaList[1].name:
            webURL = socialMediaList[1].url+accountName;
            IconComponent = FaTwitter;
            break;
        case socialMediaList[2].name:
            webURL = socialMediaList[2].url+accountName;
            IconComponent = FaLinkedin;
            break;
        default:
            break;
    }
	return (
		<a href={webURL} className={Styles.linkComponent}>
            <IconComponent className={Styles.icon}/>
        </a>
	);

}
