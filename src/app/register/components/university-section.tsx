import React from "react";
import styles from "../register-form.module.css";
import { FormSectionProps } from "../types";
import { Field } from "./fields";

export const UniversitySection: React.FC<FormSectionProps> = ({ form, update }) => (
    <div className={styles.formGrid}>
        <Field label="University / Institution" required>
            <select
                className={styles.selectField}
                value={form.university}
                onChange={(e) => update("university", e.target.value)}
            >
                <option value="" disabled>
                    Select University
                </option>
                <option value="University of Moratuwa">University of Moratuwa</option>
                <option value="University of Peradeniya">University of Peradeniya</option>
                <option value="University of Ruhuna">University of Ruhuna</option>
                <option value="Other">Other</option>
            </select>
        </Field>
        {form.university === "Other" && (
            <Field label="Enter University" required>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="University"
                    value={form.universityOther}
                    onChange={(e) => update("universityOther", e.target.value)}
                />
            </Field>
        )}
        <Field label="Faculty" required>
            <select
                className={styles.selectField}
                value={form.faculty}
                onChange={(e) => update("faculty", e.target.value)}
            >
                <option value="" disabled>
                    Select Faculty
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Other">Other</option>
            </select>
        </Field>
        {form.faculty === "Other" && (
            <Field label="Enter Faculty" required>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Faculty"
                    value={form.facultyOther}
                    onChange={(e) => update("facultyOther", e.target.value)}
                />
            </Field>
        )}
        <Field label="Degree Awarded" required>
            <input
                className={styles.inputField}
                type="text"
                placeholder="Degree Awarded"
                value={form.degreeAwarded}
                onChange={(e) => update("degreeAwarded", e.target.value)}
            />
        </Field>
        <Field label="Field of Specialization" required>
            <input
                className={styles.inputField}
                type="text"
                placeholder="Field of Specialization"
                value={form.fieldOfSpecialization}
                onChange={(e) => update("fieldOfSpecialization", e.target.value)}
            />
        </Field>
        <Field label="Year of Graduation" required>
            <input
                className={styles.inputField}
                type="number"
                placeholder="e.g. 2020"
                value={form.yearOfGraduation}
                onChange={(e) => update("yearOfGraduation", e.target.value)}
            />
        </Field>
    </div>
);