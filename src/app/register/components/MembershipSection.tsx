import React from "react";
import { FormSectionProps } from "../types";
import { RadioGroup } from "./fields";

export const MembershipSection: React.FC<FormSectionProps> = ({ section, form, update }) => {
    if (section === 2) {
        return (
            <RadioGroup
                name="membershipType"
                value={form.membershipType}
                options={["Annual Membership", "Life Membership"]}
                onChange={(v) => update("membershipType", v)}
            />
        );
    }
    return (
        <RadioGroup
            name="membershipCategory"
            value={form.membershipCategory}
            options={["Corporate Member", "Student Member"]}
            onChange={(v) => update("membershipCategory", v)}
        />
    );
};