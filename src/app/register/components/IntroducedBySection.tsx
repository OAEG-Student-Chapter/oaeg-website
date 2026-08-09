import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field } from "./fields";

export const IntroducedBySection: React.FC<FormSectionProps> = ({ form, updateReferral }) => (
    <div className={styles.repeatableList}>
        {form.referrals.map((ref, index) => (
            <div key={index} className={styles.repeatableBlock}>
                <h4 className={styles.subSectionTitle}>Member {String(index + 1).padStart(2, "0")}</h4>
                <div className={styles.formGrid}>
                    <Field label="Name">
                        <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Name"
                            value={ref.name}
                            onChange={(e) => updateReferral(index, "name", e.target.value)}
                        />
                    </Field>
                    <Field label="Membership Number">
                        <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Membership Number"
                            value={ref.number}
                            onChange={(e) => updateReferral(index, "number", e.target.value)}
                        />
                    </Field>
                </div>
            </div>
        ))}
    </div>
);