import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field } from "./fields";

export const WorkSection: React.FC<FormSectionProps> = ({ form, update }) => (
    <div className={styles.formGrid}>
        <Field label="Workplace Name">
            <input
                className={styles.inputField}
                type="text"
                placeholder="Workplace Name"
                value={form.workplaceName}
                onChange={(e) => update("workplaceName", e.target.value)}
            />
        </Field>
        <Field label="Designation">
            <input
                className={styles.inputField}
                type="text"
                placeholder="Designation"
                value={form.designation}
                onChange={(e) => update("designation", e.target.value)}
            />
        </Field>
        <Field label="Workplace Address" className={styles.fullWidth}>
            <input
                className={styles.inputField}
                type="text"
                placeholder="Workplace Address"
                value={form.workplaceAddress}
                onChange={(e) => update("workplaceAddress", e.target.value)}
            />
        </Field>
    </div>
);