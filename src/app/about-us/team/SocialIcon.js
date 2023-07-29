import "./SocialIcon.css";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa6";

function SocialIcon(props) {
    let webURL, icon;
    switch (props.socialMedia) {
        case "facebook":
            webURL = "https://www.facebook.com/"+props.accountName;
            icon = FaFacebook;
            break;
        case "instagram":
            webURL = "https://www.instagram.com/"+props.accountName;
            icon = FaTwitter;
            break;
        case "twitter":
            webURL = "https://twitter.com/"+props.accountName;
            icon = FaLinkedin;
            break;
        default:
            break;
    }
	return (
		<a href={webURL}>
            {icon}
        </a>
	);
}

export default SocialIcon;