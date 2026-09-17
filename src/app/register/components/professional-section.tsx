import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field } from "./fields";

export const ProfessionalSection: React.FC<FormSectionProps> = ({ form, updateBody }) => (
    <div className={styles.repeatableList}>
        {form.professionalBodies.map((pb, index) => (
            <div key={index} className={styles.repeatableBlock}>
                <h4 className={styles.subSectionTitle}>
                    Professional Body {String(index + 1).padStart(2, "0")}
                    {index > 0 ? " (Optional)" : ""}
                </h4>
                <div className={styles.formGrid}>
                    <Field label="Professional Body">
                        <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Professional Body"
                            value={pb.body}
                            onChange={(e) => updateBody(index, "body", e.target.value)}
                        />
                    </Field>
                    <Field label="Membership Number">
                        <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Membership Number"
                            value={pb.number}
                            onChange={(e) => updateBody(index, "number", e.target.value)}
                        />
                    </Field>
                </div>
            </div>
        ))}
    </div>
);