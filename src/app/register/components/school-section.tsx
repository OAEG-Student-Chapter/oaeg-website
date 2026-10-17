"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField, RadioField } from "./form-field";
import styles from "../register-form.module.css";

export const SchoolSection: React.FC = () => {
    const { control, watch } = useFormContext<FormValues>();
    const isObaMember = watch("isObaMember");

    return (
        <div className={styles.formGrid}>
            <FormField
                name="yearOfFirstAL"
                label="Year of first sitting for A/L"
                required
                type="number"
                placeholder="e.g. 2015"
                control={control}
            />
            <RadioField
                name="isObaMember"
                label="Do you already have an OBA membership?"
                required
                options={["Yes", "No"]}
                fullWidth
                control={control}
            />
            {isObaMember === "Yes" && (
                <FormField
                    name="obaMembershipNumber"
                    label="OBA Membership Number"
                    placeholder="OBA Membership Number (optional)"
                    className={styles.fullWidth}
                    control={control}
                />
            )}
        </div>
    );
};
