import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field, RadioGroup } from "./fields";

export const FamilySection: React.FC<FormSectionProps> = ({ form, update }) => (
    <div className={styles.formGrid}>
        {form.isMarried === "Yes" && (
            <>
                <Field label="Name of the Spouse">
                    <input
                        className={styles.inputField}
                        type="text"
                        placeholder="Name of the Spouse"
                        value={form.spouseName}
                        onChange={(e) => update("spouseName", e.target.value)}
                    />
                </Field>
                <Field label="Occupation of the Spouse">
                    <input
                        className={styles.inputField}
                        type="text"
                        placeholder="Occupation of the Spouse"
                        value={form.spouseOccupation}
                        onChange={(e) => update("spouseOccupation", e.target.value)}
                    />
                </Field>
            </>
        )}
        <Field label="Do you have children?" required className={styles.fullWidth}>
            <RadioGroup
                name="hasChildren"
                value={form.hasChildren}
                options={["Yes", "No"]}
                onChange={(v) => update("hasChildren", v)}
            />
        </Field>
    </div>
);