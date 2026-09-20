"use client";
import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { FormValues } from "../lib/schema";
import { FormField } from "./form-field";
import styles from "../register-form.module.css";

export const IntroducedBySection: React.FC = () => {
    const { control } = useFormContext<FormValues>();
    const { fields } = useFieldArray({ control, name: "referrals" });

    return (
        <div className={styles.repeatableList}>
            {fields.map((field, index) => (
                <div key={field.id} className={styles.repeatableBlock}>
                    <h4 className={styles.subSectionTitle}>
                        Member {String(index + 1).padStart(2, "0")}
                    </h4>
                    <div className={styles.formGrid}>
                        <FormField
                            name={`referrals.${index}.name`}
                            label="Name"
                            placeholder="Name"
                            control={control}
                        />
                        <FormField
                            name={`referrals.${index}.number`}
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
