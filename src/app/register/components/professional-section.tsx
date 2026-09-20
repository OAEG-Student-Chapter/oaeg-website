"use client";
import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField } from "./form-field";
import styles from "../register-form.module.css";

export const ProfessionalSection: React.FC = () => {
    const { control } = useFormContext<FormValues>();
    const { fields } = useFieldArray({ control, name: "professionalBodies" });

    return (
        <div className={styles.repeatableList}>
            {fields.map((field, index) => (
                <div key={field.id} className={styles.repeatableBlock}>
                    <h4 className={styles.subSectionTitle}>
                        Professional Body{" "}
                        {String(index + 1).padStart(2, "0")}
                        {index > 0 ? " (Optional)" : ""}
                    </h4>
                    <div className={styles.formGrid}>
                        <FormField
                            name={`professionalBodies.${index}.body`}
                            label="Professional Body"
                            placeholder="Professional Body"
                            control={control}
                        />
                        <FormField
                            name={`professionalBodies.${index}.number`}
                            label="Membership Number"
                            placeholder="Membership Number"
                            control={control}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
