"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { RadioField } from "./form-field";

export const MaritalSection: React.FC = () => {
    const { control } = useFormContext<FormValues>();

    return (
        <RadioField
            name="isMarried"
            label="Are you married?"
            required
            options={["Yes", "No"]}
            control={control}
        />
    );
};
