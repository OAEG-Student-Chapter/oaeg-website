import React from "react";
import textTheme from "@/lib/fonts";
import styles from "../register-form.module.css";
import { Field } from "./fields";

export const INSTRUCTIONS_URL =
    "https://docs.google.com/document/d/1sn1BjEnYY3f6AMLsA7lB2gCL6ge5xTnG/edit?usp=sharing&ouid=110892561269839592164&rtpof=true&sd=true";

export const FormIntro = ({
    emailAddress,
    onEmailChange,
}: {
    emailAddress: string;
    onEmailChange: (value: string) => void;
}) => (
    <>
        <div className={"flex justify-start"}>
            <span className={styles.preFormTitle}>Become A Member</span>
        </div>
        <h2 className={textTheme.title.className} style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Old Anandian Engineers&apos; Guild Members Registration Form
        </h2>
        <p className={textTheme.body.className} style={{ color: "var(--vt-c-grey-dark)", marginBottom: "1rem" }}>
            Welcome to the Old Anandian Engineers&apos; Guild (OAEG) Membership Application!
        </p>
        <p className={textTheme.body.className} style={{ color: "var(--vt-c-black-text)", marginBottom: "1rem" }}>
            The OAEG is a global network of Old Anandian Engineers from various disciplines, organized under two main
            membership categories: Corporate Membership (for engineering graduates) and Student Membership (for
            engineering undergraduates). Corporate Members may choose Annual Membership or Life Membership, while
            Student Members subscribe to a single membership fee valid during their academic tenure.
        </p>
        <p className={textTheme.body.className} style={{ color: "var(--vt-c-black-text)", marginBottom: "1rem" }}>
            Membership provides networking opportunities, professional recognition, and access to the Guild&apos;s
            activities. Please ensure all compulsory fields are filled accurately. For full details, including
            eligibility, membership fees, and required documentation, refer to the{" "}
            <a href={INSTRUCTIONS_URL} target="_blank" rel="noreferrer" className={styles.link}>
                full instructions here
            </a>
            .
        </p>
        <p className={textTheme.body.className} style={{ color: "var(--vt-c-black-text)", marginBottom: "1rem" }}>
            For further information:
        </p>
        <ul className={styles.contactList}>
            <li>
                Contact the Joint Secretary at{" "}
                <a href="mailto:secoaeg@gmail.com" className={styles.link}>
                    secoaeg@gmail.com
                </a>
            </li>
            <li>Or Eng. Thilina Rajapaksha via 0710183816</li>
        </ul>

        <div className={styles.emailField}>
            <Field label="Email" required hint="This form is collecting emails.">
                <input
                    className={styles.inputField}
                    type="email"
                    placeholder="you@example.com"
                    value={emailAddress}
                    onChange={(e) => onEmailChange(e.target.value)}
                />
            </Field>
        </div>
    </>
);