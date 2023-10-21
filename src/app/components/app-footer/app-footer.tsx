import Image from "next/image";
import styles from "./app-footer.module.css";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import socialMediaLinks from "@/lib/social-media";

export const AppFooter = () => {
  return (
    <div className={styles.main}>
      <Image
        src="/images/footer.webp"
        alt="Footer Image"
        className={styles.imgFooter}
        width={1920}
        height={312}
      />
      <div className={styles.copyrightContainer}>
        <p className={styles.copyrightText}>
          Copyright © Old Anandian Engineers Guild | Designed and Developed by
          the OAEG Student Chapter
        </p>
        <div className={styles.contactContainer}>
          <div className={styles.contactItem}>
            <div className={styles.circleIcon}>
              <FaEnvelope className={styles.fa_light} />
            </div>
            <p className={styles.contactText}>
              Email
              <br />
              oaeg@gmail.com
            </p>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.circleIcon}>
              <FaPhone className={styles.fa_light} />
            </div>
            <p className={styles.contactText}>
              Call Us
              <br />
              (00) 112 365 489
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
