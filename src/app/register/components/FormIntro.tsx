import React from "react";
import textTheme from "@/lib/fonts";
import styles from "../register-form.module.css";
import { FaArrowRight } from "react-icons/fa6";

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
          Old Anandian Engineers&apos; Guild - Registration Form
        </p>
      </div>
      <a
        href={INSTRUCTIONS_URL}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.6rem 1.2rem",
          borderRadius: "999px",
          background: "var(--vt-c-ac-gold-gradient)",
          color: "#4a2c00",
          fontWeight: 700,
          fontSize: "0.85rem",
          textDecoration: "none",
          whiteSpace: "nowrap",
          boxShadow: "0 8px 20px -10px rgba(255, 190, 52, 0.55)",
          transition: "transform 0.2s ease",
        }}
      >
        Read Instructions <FaArrowRight style={{ fontSize: "0.75rem" }} />
      </a>
    </div>
  </section>
);
