import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field, RadioGroup } from "./fields";
import { FaCalendarDays } from "react-icons/fa6";

export const ChildrenSection: React.FC<FormSectionProps> = ({ form, updateChild }) => (
    <div className={styles.repeatableList}>
        {form.children.map((child, index) => (
            <div key={index} className={styles.repeatableBlock}>
                <h4 className={styles.subSectionTitle}>
                    Child {String(index + 1).padStart(2, "0")}
                    {index > 0 ? " (Optional)" : ""}
                </h4>
                <div className={styles.formGrid}>
                    <Field label="Name" required={index === 0}>
                        <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Child Name"
                            value={child.name}
                            onChange={(e) => updateChild(index, "name", e.target.value)}
                        />
                    </Field>
                    <Field label="Date of Birth" required={index === 0}>
                        <div className={styles.dateField}>
                            <input
                                className={styles.inputField}
                                type="date"
                                value={child.dob}
                                onChange={(e) => updateChild(index, "dob", e.target.value)}
                            />
                            <span className={styles.dateFieldIcon}>
                                <FaCalendarDays />
                            </span>
                        </div>
                    </Field>
                    <Field label="Gender" required={index === 0} className={styles.fullWidth}>
                        <RadioGroup
                            name={`childGender_${index}`}
                            value={child.gender}
                            options={["Son", "Daughter"]}
                            onChange={(v) => updateChild(index, "gender", v)}
                        />
                    </Field>
                </div>
            </div>
        ))}
    </div>
);