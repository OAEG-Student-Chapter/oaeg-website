import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field, RadioGroup } from "./fields";

export const IeslSection: React.FC<FormSectionProps> = ({ form, update }) => (
    <div className={styles.formGrid}>
        <Field label="IESL Membership Type" required className={styles.fullWidth}>
            <RadioGroup
                name="ieslMembershipType"
                value={form.ieslMembershipType}
                options={["Student", "Associate", "Member", "Fellow"]}
                onChange={(v) => update("ieslMembershipType", v)}
            />
        </Field>
        <Field label="IESL Membership Number">
            <input
                className={styles.inputField}
                type="text"
                placeholder="IESL Membership Number"
                value={form.ieslMembershipNumber}
                onChange={(e) => update("ieslMembershipNumber", e.target.value)}
            />
        </Field>
        <Field label="Expertise Areas" className={styles.fullWidth}>
            <textarea
                className={styles.textAreaField}
                placeholder="Expertise Areas (e.g. Structural Engineering, Software Engineering)"
                value={form.expertiseAreas}
                onChange={(e) => update("expertiseAreas", e.target.value)}
            />
        </Field>
        <Field label="Do you have any other professional memberships?" required className={styles.fullWidth}>
            <RadioGroup
                name="hasOtherProfessionalMemberships"
                value={form.hasOtherProfessionalMemberships}
                options={["Yes", "No"]}
                onChange={(v) => update("hasOtherProfessionalMemberships", v)}
            />
        </Field>
    </div>
);