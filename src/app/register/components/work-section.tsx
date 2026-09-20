"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField } from "./form-field";
import styles from "../register-form.module.css";

export const WorkSection: React.FC = () => {
    const { control } = useFormContext<FormValues>();

    return (
        <div className={styles.formGrid}>
            <FormField
                name="workplaceName"
                label="Workplace Name"
                placeholder="Workplace Name (Optional)"
                control={control}
            />
            <FormField
                name="designation"
                label="Designation"
                placeholder="Designation (Optional)"
                control={control}
            />
            <FormField
                name="workplaceAddress"
                label="Workplace Address"
                placeholder="Workplace Address (Optional)"
                className={styles.fullWidth}
                control={control}
            />
        </div>
    );
};
