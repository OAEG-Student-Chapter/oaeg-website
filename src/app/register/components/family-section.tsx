"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField, RadioField } from "./form-field";
import styles from "../register-form.module.css";

export const FamilySection: React.FC = () => {
    const { control, watch } = useFormContext<FormValues>();
    const isMarried = watch("isMarried");

    if (isMarried !== "Yes") return null;

    return (
        <div className={styles.formGrid}>
            <FormField
                name="spouseName"
                label="Name of the Spouse"
                placeholder="Name of the Spouse"
                control={control}
            />
            <FormField
                name="spouseOccupation"
                label="Occupation of the Spouse"
                placeholder="Occupation of the Spouse"
                control={control}
            />
            <RadioField
                name="hasChildren"
                label="Do you have children?"
                required
                options={["Yes", "No"]}
                fullWidth
                control={control}
            />
        </div>
    );
};
