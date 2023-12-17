import {FaFacebook, FaLinkedin} from "react-icons/fa6";

const facebook = {
    name: 'Facebook',
    url: 'https://www.facebook.com/OldAnandianEngineersGuild/',
    icon: FaFacebook,
};

const linkedIn = {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/oaeg/',
    icon: FaLinkedin,
}

const socialMediaLinks = [
    facebook,
    linkedIn,
]

export default socialMediaLinks;
export {facebook, linkedIn};