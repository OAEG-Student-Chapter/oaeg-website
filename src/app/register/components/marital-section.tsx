import React from "react";
import { FormSectionProps } from "../types";
import { Field, RadioGroup } from "./fields";

export const MaritalSection: React.FC<FormSectionProps> = ({ form, update }) => (
    <Field label="Are you married?" required>
        <RadioGroup
            name="isMarried"
            value={form.isMarried}
            options={["Yes", "No"]}
            onChange={(v) => update("isMarried", v)}
        />
    </Field>
);