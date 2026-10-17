"use client";
import React from "react";
import {
    useFormContext,
    Controller,
    type FieldPath,
    type FieldValues,
    type Control,
    type FormState,
} from "react-hook-form";
import styles from "../register-form.module.css";

function getNestedError<T extends FieldValues>(
    errors: FormState<T>["errors"],
    name: string,
): { message: string } | undefined {
    const parts = name.split(".");
    let current: unknown = errors;
    for (const part of parts) {
        if (
            !current ||
            typeof current !== "object" ||
            !(part in current)
        ) {
            return undefined;
        }
        current = (current as Record<string, unknown>)[part];
    }
    if (
        current &&
        typeof current === "object" &&
        "message" in current &&
        typeof current.message === "string"
    ) {
        return { message: current.message };
    }
    return undefined;
}

export function FormField<T extends FieldValues>({
    name,
    label,
    required,
    hint,
    type = "text",
    placeholder,
    className,
    control,
}: {
    name: FieldPath<T>;
    label: string;
    required?: boolean;
    hint?: string;
    type?: string;
    placeholder?: string;
    className?: string;
    control: Control<T>;
}) {
    const {
        formState: { errors },
    } = useFormContext<T>();
    const error = getNestedError(errors, name);

    return (
        <div className={`${styles.field} ${className ?? ""}`}>
            <label className={styles.fieldLabel}>
                {label}{" "}
                {required && <span className={styles.required}>*</span>}
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        className={styles.inputField}
                        type={type}
                        placeholder={placeholder}
                        value={field.value ?? ""}
                    />
                )}
            />
            {hint && <p className={styles.hint}>{hint}</p>}
            {error && (
                <p className={styles.fieldError}>{error.message}</p>
            )}
        </div>
    );
}

export function DateField<T extends FieldValues>({
    name,
    label,
    required,
    className,
    control,
}: {
    name: FieldPath<T>;
    label: string;
    required?: boolean;
    className?: string;
    control: Control<T>;
}) {
    const {
        formState: { errors },
    } = useFormContext<T>();
    const error = getNestedError(errors, name);

    return (
        <div className={`${styles.field} ${className ?? ""}`}>
            <label className={styles.fieldLabel}>
                {label}{" "}
                {required && <span className={styles.required}>*</span>}
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className={styles.dateField}>
                        <input
                            {...field}
                            className={styles.inputField}
                            type="date"
                            value={field.value ?? ""}
                        />
                        <span className={styles.dateFieldIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                            >
                                <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v36H48C21.5 100 0 121.5 0 148v336c0 26.5 21.5 48 48 48h400c26.5 0 48-21.5 48-48V148c0-26.5-21.5-48-48-48h-48V96h40c6.6 0 12-5.4 12-12zM96 240c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zm112 0c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zm112 0c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zM96 400c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zm112 0c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zm112 0c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32z" />
                            </svg>
                        </span>
                    </div>
                )}
            />
            {error && (
                <p className={styles.fieldError}>{error.message}</p>
            )}
        </div>
    );
}

export function RadioField<T extends FieldValues>({
    name,
    label,
    required,
    options,
    fullWidth,
    className,
    control,
}: {
    name: FieldPath<T>;
    label: string;
    required?: boolean;
    options: string[];
    fullWidth?: boolean;
    className?: string;
    control: Control<T>;
}) {
    const {
        formState: { errors },
    } = useFormContext<T>();
    const error = getNestedError(errors, name);

    return (
        <div
            className={`${styles.field} ${fullWidth ? styles.fullWidth : ""} ${className ?? ""}`}
        >
            <label className={styles.fieldLabel}>
                {label}{" "}
                {required && <span className={styles.required}>*</span>}
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className={styles.radioGroup}>
                        {options.map((option) => (
                            <label
                                key={option}
                                className={`${styles.radioOption} ${field.value === option ? styles.radioOptionSelected : ""}`}
                            >
                                <input
                                    type="radio"
                                    {...field}
                                    value={option}
                                    checked={field.value === option}
                                    className={styles.radioInput}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                )}
            />
            {error && (
                <p className={styles.fieldError}>{error.message}</p>
            )}
        </div>
    );
}

export function SelectField<T extends FieldValues>({
    name,
    label,
    required,
    options,
    placeholder,
    className,
    control,
}: {
    name: FieldPath<T>;
    label: string;
    required?: boolean;
    options: { value: string; label: string }[];
    placeholder?: string;
    className?: string;
    control: Control<T>;
}) {
    const {
        formState: { errors },
    } = useFormContext<T>();
    const error = getNestedError(errors, name);

    return (
        <div className={`${styles.field} ${className ?? ""}`}>
            <label className={styles.fieldLabel}>
                {label}{" "}
                {required && <span className={styles.required}>*</span>}
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <select
                        {...field}
                        className={styles.selectField}
                        value={field.value ?? ""}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                )}
            />
            {error && (
                <p className={styles.fieldError}>{error.message}</p>
            )}
        </div>
    );
}
