"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { RadioField } from "./form-field";

export const MembershipSection: React.FC<{ section?: number }> = ({
    section = 1,
}) => {
    const { control } = useFormContext<FormValues>();

    if (section === 2) {
        return (
            <RadioField
                name="membershipType"
                label="Membership Type"
                required
                options={["Annual Membership", "Life Membership"]}
                control={control}
            />
        );
    }
    return (
        <RadioField
            name="membershipCategory"
            label="Membership Category"
            required
            options={["Corporate Member", "Student Member"]}
            control={control}
        />
    );
};
