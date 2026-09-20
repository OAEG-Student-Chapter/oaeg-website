"use client";
import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField, RadioField } from "./form-field";
import styles from "../register-form.module.css";

export const ChildrenSection: React.FC = () => {
    const { control, watch } = useFormContext<FormValues>();
    const isMarried = watch("isMarried");
    const hasChildren = watch("hasChildren");

    const { fields } = useFieldArray({ control, name: "children" });

    if (isMarried !== "Yes" || hasChildren !== "Yes") return null;

    return (
        <div className={styles.repeatableList}>
            {fields.map((field, index) => (
                <div key={field.id} className={styles.repeatableBlock}>
                    <h4 className={styles.subSectionTitle}>
                        Child {String(index + 1).padStart(2, "0")}
                        {index > 0 ? " (Optional)" : ""}
                    </h4>
                    <div className={styles.formGrid}>
                        <FormField
                            name={`children.${index}.name`}
                            label="Name"
                            required={index === 0}
                            placeholder="Child Name"
                            control={control}
                        />
                        <FormField
                            name={`children.${index}.dob`}
                            label="Date of Birth"
                            required={index === 0}
                            type="date"
                            control={control}
                        />
                        <RadioField
                            name={`children.${index}.gender`}
                            label="Gender"
                            required={index === 0}
                            options={["Son", "Daughter"]}
                            fullWidth
                            control={control}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
