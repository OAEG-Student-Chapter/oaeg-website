import React from "react";
import textTheme from "@/lib/fonts";
import styles from "../register-form.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { organization } from "@/lib/constants";

export const INSTRUCTIONS_URL =
  "https://docs.google.com/document/d/1sn1BjEnYY3f6AMLsA7lB2gCL6ge5xTnG/edit?usp=sharing&ouid=110892561269839592164&rtpof=true&sd=true";

export const FormIntro = () => (
  <section className={styles.hero}>
    <div className={styles.heroInner}>
      <div>
        <div className={styles.heroEyebrow}>OAEG · Membership</div>
        <h1 className={`${textTheme.title.className} ${styles.heroTitle}`}>
          Become a Member of the Guild
        </h1>
        <p className={`${textTheme.body.className} ${styles.heroLead}`}>
          {organization.name} - Registration Form
        </p>
      </div>
      <a
        href={INSTRUCTIONS_URL}
        target="_blank"
        rel="noreferrer"
        className={styles.introURL}
      >
        Read Instructions <FaArrowRight className={styles.arrrow} />
      </a>
    </div>
  </section>
);
