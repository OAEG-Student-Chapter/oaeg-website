"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField, DateField } from "./form-field";
import styles from "../register-form.module.css";

export const PersonalDetailsSection: React.FC = () => {
    const { control } = useFormContext<FormValues>();

    return (
        <div className={styles.formGrid}>
            <FormField
                name="fullName"
                label="Full Name"
                required
                placeholder="Full Name"
                control={control}
            />
            <FormField
                name="nameWithInitials"
                label="Name with Initials"
                required
                placeholder="Name with Initials"
                control={control}
            />
            <FormField
                name="nameCalledByFriends"
                label="Name called by friends"
                placeholder="Name called by friends"
                control={control}
            />
            <DateField
                name="dateOfBirth"
                label="Date of Birth"
                required
                control={control}
            />
            <FormField
                name="mobilePhone"
                label="Mobile Phone"
                required
                type="tel"
                placeholder="+94711231234"
                hint="Please include the country code when entering your phone numbers. Example: +94711231234"
                control={control}
            />
            <FormField
                name="homePhone"
                label="Home Phone (Land)"
                type="tel"
                placeholder="Home Phone (Land)"
                control={control}
            />
            <FormField
                name="emailForCommunication"
                label="Email Address for e-communication"
                required
                type="email"
                placeholder="you@example.com"
                control={control}
            />
            <FormField
                name="addressForCorrespondence"
                label="Address for Correspondence"
                required
                placeholder="Address for Correspondence"
                className={styles.fullWidth}
                control={control}
            />
        </div>
    );
};
