import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field } from "./fields";

export const PersonalDetailsSection: React.FC<FormSectionProps> = ({ form, update }) => (
    <div className={styles.formGrid}>
        <Field label="Full Name" required>
            <input
                className={styles.inputField}
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
            />
        </Field>
        <Field label="Name with Initials" required>
            <input
                className={styles.inputField}
                type="text"
                placeholder="Name with Initials"
                value={form.nameWithInitials}
                onChange={(e) => update("nameWithInitials", e.target.value)}
            />
        </Field>
        <Field label="Name called by friends">
            <input
                className={styles.inputField}
                type="text"
                placeholder="Name called by friends"
                value={form.nameCalledByFriends}
                onChange={(e) => update("nameCalledByFriends", e.target.value)}
            />
        </Field>
        <Field label="Date of Birth" required>
            <input
                className={styles.inputField}
                type="date"
                value={form.dateOfBirth}
                onChange={(e) => update("dateOfBirth", e.target.value)}
            />
        </Field>
        <Field
            label="Mobile Phone"
            required
            hint="Please include the country code when entering your phone numbers. Example: +94711231234"
        >
            <input
                className={styles.inputField}
                type="tel"
                placeholder="+94711231234"
                value={form.mobilePhone}
                onChange={(e) => update("mobilePhone", e.target.value)}
            />
        </Field>
        <Field label="Home Phone (Land)">
            <input
                className={styles.inputField}
                type="tel"
                placeholder="Home Phone (Land)"
                value={form.homePhone}
                onChange={(e) => update("homePhone", e.target.value)}
            />
        </Field>
        <Field label="Email Address for e-communication" required>
            <input
                className={styles.inputField}
                type="email"
                placeholder="you@example.com"
                value={form.emailForCommunication}
                onChange={(e) => update("emailForCommunication", e.target.value)}
            />
        </Field>
        <Field label="Address for Correspondence" required className={styles.fullWidth}>
            <input
                className={styles.inputField}
                type="text"
                placeholder="Address for Correspondence"
                value={form.addressForCorrespondence}
                onChange={(e) => update("addressForCorrespondence", e.target.value)}
            />
        </Field>
    </div>
);