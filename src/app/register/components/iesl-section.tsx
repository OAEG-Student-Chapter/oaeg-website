"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField, RadioField } from "./form-field";
import styles from "../register-form.module.css";

export const IeslSection: React.FC = () => {
    const { control } = useFormContext<FormValues>();

    return (
        <div className={styles.formGrid}>
            <RadioField
                name="ieslMembershipType"
                label="IESL Membership Type"
                required
                options={["Student", "Associate", "Member", "Fellow"]}
                fullWidth
                control={control}
            />
            <FormField
                name="ieslMembershipNumber"
                label="IESL Membership Number"
                placeholder="IESL Membership Number"
                control={control}
            />
            <FormField
                name="expertiseAreas"
                label="Expertise Areas"
                placeholder="Expertise Areas (e.g. Structural Engineering, Software Engineering)"
                className={styles.fullWidth}
                control={control}
            />
            <RadioField
                name="hasOtherProfessionalMemberships"
                label="Do you have any other professional memberships?"
                required
                options={["Yes", "No"]}
                fullWidth
                control={control}
            />
        </div>
    );
};
