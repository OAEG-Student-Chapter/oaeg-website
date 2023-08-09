import Image from "next/image";
import Styles from "./app-footer.module.css";
import Link from "next/link";
import {FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaTwitter} from "react-icons/fa6";
import {routes} from "@/lib/routes";
import socialMediaLinks from "@/lib/social-media";

export const AppFooter = () => {
    return (
        <div className={Styles.main}>
            <Image src="/images/footer_image.png" alt="Footer Image" className={Styles.imgMain} width={1920}
                   height={312}/>
            <div className={Styles.blockContainer}>
                <div className={Styles.block1} id="td1">
                    <p className={Styles.aboutText}>
                        Leverage agile frameworks to provide a robust synopsis for strategy
                        collaborative thinking to further the overall value proposition.
                    </p>
                    <div className={Styles.contactContainer}>
                        <div className={Styles.circleIcon}>
                            <FaEnvelope className={Styles.fa_light}/>
                        </div>
                        <p>
                            Email<br/>
                            oaeg@gmail.com
                        </p>
                    </div>
                    <div className={Styles.contactContainer}>
                        <div className={Styles.circleIcon}>
                            <FaPhone className={Styles.fa_light}/>
                        </div>
                        <p>
                            Call Us<br/>
                            (00) 112 365 489
                        </p>
                    </div>
                </div>

                <div className={Styles.block2} id="td2">
                    <ul className={Styles.linkslist}>
                        {
                            routes.map((route, index) => (
                                <li key={index}>
                                    <Link href={route.path} className={Styles.innerLink}>{route.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className={Styles.block3} id="td4">
                    <div className={Styles.block3_content_wrapper}>
                        <input type="text" placeholder="Email" className={Styles.inputBox}/>
                        <div className={Styles.colspanDiv}>
                            <button className={Styles.sendButton}>Subscribe to our Newsletter</button>
                            <div className={Styles.social_container}>
                                {
                                    socialMediaLinks.map((link, index) => (
                                        <a href={link.url} key={index} className={Styles.social_link}>
                                            <link.icon className={Styles.image_class} />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className={Styles.copyrightText}>
                Copyright © Old Anandian Engineers Guild | Designed and Developed by the OAEG Student Chapter
            </p>
        </div>
    );
}

