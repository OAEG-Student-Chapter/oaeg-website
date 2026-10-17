"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField, SelectField } from "./form-field";
import styles from "../register-form.module.css";

export const UniversitySection: React.FC = () => {
    const { control, watch } = useFormContext<FormValues>();
    const university = watch("university");
    const faculty = watch("faculty");

    return (
        <div className={styles.formGrid}>
            <SelectField
                name="university"
                label="University / Institution"
                required
                placeholder="Select University"
                options={[
                    {
                        value: "University of Moratuwa",
                        label: "University of Moratuwa",
                    },
                    {
                        value: "University of Peradeniya",
                        label: "University of Peradeniya",
                    },
                    {
                        value: "University of Ruhuna",
                        label: "University of Ruhuna",
                    },
                    { value: "Other", label: "Other" },
                ]}
                control={control}
            />
            {university === "Other" && (
                <FormField
                    name="universityOther"
                    label="Enter University"
                    required
                    placeholder="University"
                    control={control}
                />
            )}
            <SelectField
                name="faculty"
                label="Faculty"
                required
                placeholder="Select Faculty"
                options={[
                    { value: "Engineering", label: "Engineering" },
                    { value: "Other", label: "Other" },
                ]}
                control={control}
            />
            {faculty === "Other" && (
                <FormField
                    name="facultyOther"
                    label="Enter Faculty"
                    required
                    placeholder="Faculty"
                    control={control}
                />
            )}
            <FormField
                name="degreeAwarded"
                label="Degree Awarded"
                required
                placeholder="Degree Awarded"
                control={control}
            />
            <FormField
                name="fieldOfSpecialization"
                label="Field of Specialization"
                required
                placeholder="Field of Specialization"
                control={control}
            />
            <FormField
                name="yearOfGraduation"
                label="Year of Graduation"
                required
                type="number"
                placeholder="e.g. 2020"
                control={control}
            />
        </div>
    );
};
