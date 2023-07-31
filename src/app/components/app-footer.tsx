import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import Styles from "./app-footer.module.css";
import Link from "next/link";

export const AppFooter = () => {
  return (
        <div className={Styles.main}>
          <Image src="/images/footer_image.png" alt="Footer Image" className={Styles.imgMain} width={1920} height={312}/>
          <div className={Styles.blockContainer}>
            <div className={Styles.block1} id="td1">
              <p className={Styles.aboutText}>
                Leverage agile frameworks to provide a robust synopsis for strategy
                collaborative thinking to further the overall value proposition.
              </p>
              <div className={Styles.contactContainer}>
                <div className={Styles.circleIcon}>
                  <FontAwesomeIcon icon={faEnvelope} className={Styles.fa_light} />
                </div>
                <p>
                  Email<br />
                  oaeg@gmail.com
                </p>
              </div>
              <div className={Styles.contactContainer}>
                <div className={Styles.circleIcon}>
                  <FontAwesomeIcon icon={faPhone} className={Styles.fa_light} />
                </div>
                <p>
                  Call Us<br />
                  (00) 112 365 489
                </p>
              </div>
            </div>

          <div className={Styles.block2} id="td2">
              <ul className={Styles.linkslist}>
                <li><Link href="/" className={Styles.innerLink}>Home</Link></li>
                <li><Link href="/about-us" className={Styles.innerLink}>About Us</Link></li>
                <li><Link href="/projects" className={Styles.innerLink}>Projects</Link></li>
                <li><Link href="/blog" className={Styles.innerLink}>Blog</Link></li>
                <li><Link href="/contact-us" className={Styles.innerLink}>Contact Us</Link></li>
              </ul>
          </div>
      
          <div className={Styles.block3} id="td4">
            <div className={Styles.block3_content_wrapper}>
              <input type="text" placeholder="Email here*" className={Styles.inputBox} />
              <div className={Styles.colspanDiv}>
                <button className={Styles.sendButton}>Send Now</button>
                <div className={Styles.social_container}>
                  <a href="https://www.linkedin.com/company/oaeg/">
                    <FontAwesomeIcon icon={faLinkedin} className={Styles.image_class} />
                  </a>
                  <a href="https://www.twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} className={Styles.image_class} />
                  </a>
                  <a href="https://web.facebook.com/OldAnandianEngineersGuild/">
                    <FontAwesomeIcon icon={faFacebook} className={Styles.image_class} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>

          <p className={Styles.copyrightText}>
            Copyright © Old Anandian Engineers Guild | Designed and by OAEG Student
            Chapter
          </p>
        </div>
      );
}

