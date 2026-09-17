import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field, RadioGroup } from "./fields";

export const SchoolSection: React.FC<FormSectionProps> = ({ form, update }) => (
    <div className={styles.formGrid}>
        <Field label="Year of first sitting for A/L" required>
            <input
                className={styles.inputField}
                type="number"
                placeholder="e.g. 2015"
                value={form.yearOfFirstAL}
                onChange={(e) => update("yearOfFirstAL", e.target.value)}
            />
        </Field>
        <Field label="Do you already have an OBA membership?" required className={styles.fullWidth}>
            <RadioGroup
                name="isObaMember"
                value={form.isObaMember}
                options={["Yes", "No"]}
                onChange={(v) => update("isObaMember", v)}
            />
        </Field>
        {form.isObaMember === "Yes" && (
            <Field label="OBA Membership Number" className={styles.fullWidth}>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="OBA Membership Number (optional)"
                    value={form.obaMembershipNumber}
                    onChange={(e) => update("obaMembershipNumber", e.target.value)}
                />
            </Field>
        )}
    </div>
);