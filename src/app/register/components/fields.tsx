import React from "react";
import styles from "../register-form.module.css";

export const Field = ({
    label,
    required = false,
    hint,
    children,
    className,
}: {
    label: string;
    required?: boolean;
    hint?: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={`${styles.field} ${className ?? ""}`}>
        <label className={styles.fieldLabel}>
            {label} {required && <span className={styles.required}>*</span>}
        </label>
        {children}
        {hint && <p className={styles.hint}>{hint}</p>}
    </div>
);

export const RadioGroup = ({
    name,
    value,
    options,
    onChange,
}: {
    name: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
}) => (
    <div className={styles.radioGroup}>
        {options.map((option) => (
            <label
                key={option}
                className={`${styles.radioOption} ${
                    value === option ? styles.radioOptionSelected : ""
                }`}
            >
                <input
                    type="radio"
                    name={name}
                    value={option}
                    checked={value === option}
                    onChange={() => onChange(option)}
                    className={styles.radioInput}
                />
                <span>{option}</span>
            </label>
        ))}
    </div>
);