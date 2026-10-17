import { z } from "zod";

const phoneRegex = /^\+?[\d\s-]{10,15}$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const yearRegex = /^\d{4}$/;

const childSchema = z.object({
    name: z.string().default(""),
    dob: z.string().default(""),
    gender: z.string().default(""),
});

const professionalBodySchema = z.object({
    body: z.string().default(""),
    number: z.string().default(""),
});

const referralSchema = z.object({
    name: z.string().default(""),
    number: z.string().default(""),
});

export const formSchema = z
    .object({
        emailAddress: z
            .string()
            .min(1, "Email is required.")
            .regex(emailRegex, "Please enter a valid email address."),

        membershipCategory: z
            .string()
            .min(1, "Please select your membership category."),
        membershipType: z.string().default(""),

        fullName: z.string().min(1, "Full Name is required."),
        nameWithInitials: z
            .string()
            .min(1, "Name with Initials is required."),
        nameCalledByFriends: z.string().default(""),
        dateOfBirth: z.string().min(1, "Date of Birth is required."),
        mobilePhone: z
            .string()
            .min(1, "Mobile Phone is required.")
            .regex(
                phoneRegex,
                "Please enter a valid phone number including the country code. Example: +94711231234",
            ),
        homePhone: z.string().default(""),
        emailForCommunication: z
            .string()
            .min(1, "Email Address for e-communication is required.")
            .regex(
                emailRegex,
                "Please enter a valid email address for e-communication.",
            ),
        addressForCorrespondence: z
            .string()
            .min(1, "Address for Correspondence is required."),

        yearOfFirstAL: z
            .string()
            .min(1, "Year of first sitting for A/L is required.")
            .regex(yearRegex, "Please enter a valid year (e.g. 2015)."),
        isObaMember: z
            .string()
            .min(
                1,
                "Please answer whether you already have an OBA membership.",
            ),
        obaMembershipNumber: z.string().default(""),

        university: z
            .string()
            .min(1, "Please select your University / Institution."),
        universityOther: z.string().default(""),
        faculty: z.string().min(1, "Please select your Faculty."),
        facultyOther: z.string().default(""),
        degreeAwarded: z.string().min(1, "Degree Awarded is required."),
        fieldOfSpecialization: z
            .string()
            .min(1, "Field of Specialization is required."),
        yearOfGraduation: z
            .string()
            .min(1, "Year of Graduation is required.")
            .regex(
                yearRegex,
                "Please enter a valid graduation year (e.g. 2020).",
            ),

        ieslMembershipType: z
            .string()
            .min(1, "Please select your IESL membership type."),
        ieslMembershipNumber: z.string().default(""),
        expertiseAreas: z.string().default(""),
        hasOtherProfessionalMemberships: z
            .string()
            .min(
                1,
                "Please answer whether you have any other professional memberships.",
            ),

        professionalBodies: z
            .array(professionalBodySchema)
            .default([
                { body: "", number: "" },
                { body: "", number: "" },
                { body: "", number: "" },
            ]),

        workplaceName: z.string().default(""),
        workplaceAddress: z.string().default(""),
        designation: z.string().default(""),

        isMarried: z
            .string()
            .min(1, "Please answer whether you are married."),

        spouseName: z.string().default(""),
        spouseOccupation: z.string().default(""),
        hasChildren: z.string().default(""),

        children: z
            .array(childSchema)
            .default([
                { name: "", dob: "", gender: "" },
                { name: "", dob: "", gender: "" },
                { name: "", dob: "", gender: "" },
            ]),

        referrals: z
            .array(referralSchema)
            .default([
                { name: "", number: "" },
                { name: "", number: "" },
            ]),
    })
    .superRefine((data, ctx) => {
        if (
            data.membershipCategory === "Corporate Member" &&
            !data.membershipType
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please select your membership type.",
                path: ["membershipType"],
            });
        }

        if (data.university === "Other" && !data.universityOther) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please enter your university.",
                path: ["universityOther"],
            });
        }

        if (data.faculty === "Other" && !data.facultyOther) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please enter your faculty.",
                path: ["facultyOther"],
            });
        }

        if (data.isMarried === "Yes" && !data.hasChildren) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please answer whether you have children.",
                path: ["hasChildren"],
            });
        }

        if (data.isMarried === "Yes" && data.hasChildren === "Yes") {
            const firstChild = data.children[0];
            if (!firstChild?.name) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Please enter the name of your first child.",
                    path: ["children", 0, "name"],
                });
            }
            if (!firstChild?.dob) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message:
                        "Please enter the date of birth of your first child.",
                    path: ["children", 0, "dob"],
                });
            }
            if (!firstChild?.gender) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Please select the gender of your first child.",
                    path: ["children", 0, "gender"],
                });
            }
        }
    });

export type FormValues = z.infer<typeof formSchema>;

export const STEP_FIELDS: Record<number, (keyof FormValues)[]> = {
    1: ["membershipCategory"],
    2: ["membershipType"],
    3: [
        "fullName",
        "nameWithInitials",
        "dateOfBirth",
        "mobilePhone",
        "emailForCommunication",
        "addressForCorrespondence",
    ],
    4: ["yearOfFirstAL", "isObaMember"],
    5: [
        "university",
        "universityOther",
        "faculty",
        "facultyOther",
        "degreeAwarded",
        "fieldOfSpecialization",
        "yearOfGraduation",
    ],
    6: ["ieslMembershipType", "hasOtherProfessionalMemberships"],
    7: [],
    8: [],
    9: ["isMarried"],
    10: ["hasChildren"],
    11: ["children"],
    12: [],
};

export interface InsertPayload {
    member: Record<string, unknown>;
    schoolDetails?: Record<string, unknown>;
    universityDetails?: Record<string, unknown>;
    ieslDetails?: Record<string, unknown>;
    professionalMemberships?: Record<string, unknown>[];
    workDetails?: Record<string, unknown>;
    maritalDetails?: Record<string, unknown>;
    children?: Record<string, unknown>[];
    referrals?: Record<string, unknown>[];
}

export function buildPayload(form: FormValues): InsertPayload {
    const workDetails = {
        workplace_name: form.workplaceName || null,
        workplace_address: form.workplaceAddress || null,
        designation: form.designation || null,
    };
    return {
        member: {
            email_address: form.emailAddress || null,
            membership_category: form.membershipCategory || null,
            membership_type: form.membershipType || null,
            full_name: form.fullName || null,
            name_with_initials: form.nameWithInitials || null,
            name_called_by_friends: form.nameCalledByFriends || null,
            date_of_birth: form.dateOfBirth || null,
            mobile_phone: form.mobilePhone || null,
            home_phone: form.homePhone || null,
            email_for_communication: form.emailForCommunication || null,
            address_for_correspondence: form.addressForCorrespondence || null,
        },
        schoolDetails: {
            year_of_first_al: form.yearOfFirstAL
                ? Number(form.yearOfFirstAL)
                : null,
            is_oba_member:
                form.isObaMember === "Yes"
                    ? true
                    : form.isObaMember === "No"
                      ? false
                      : null,
            oba_membership_number: form.obaMembershipNumber || null,
        },
        universityDetails: {
            university:
                form.university === "Other"
                    ? form.universityOther || null
                    : form.university || null,
            faculty:
                form.faculty === "Other"
                    ? form.facultyOther || null
                    : form.faculty || null,
            degree_awarded: form.degreeAwarded || null,
            field_of_specialization: form.fieldOfSpecialization || null,
            year_of_graduation: form.yearOfGraduation
                ? Number(form.yearOfGraduation)
                : null,
        },
        ieslDetails: {
            membership_type: form.ieslMembershipType || null,
            iesl_membership_number: form.ieslMembershipNumber || null,
            expertise_areas: form.expertiseAreas || null,
            has_other_professional_memberships:
                form.hasOtherProfessionalMemberships === "Yes"
                    ? true
                    : form.hasOtherProfessionalMemberships === "No"
                      ? false
                      : null,
        },
        professionalMemberships: form.professionalBodies.map((pb) => ({
            professional_body: pb.body || null,
            membership_number: pb.number || null,
        })),
        maritalDetails: {
            is_married:
                form.isMarried === "Yes"
                    ? true
                    : form.isMarried === "No"
                      ? false
                      : null,
            spouse_name: form.spouseName || null,
            spouse_occupation: form.spouseOccupation || null,
            has_children:
                form.hasChildren === "Yes"
                    ? true
                    : form.hasChildren === "No"
                      ? false
                      : null,
        },
        children: form.children.map((c) => ({
            child_name: c.name || null,
            child_date_of_birth: c.dob || null,
            child_gender: c.gender || null,
        })),
        referrals: form.referrals.map((r) => ({
            ref_name: r.name || null,
            ref_membership_number: r.number || null,
        })),
        ...(workDetails.workplace_name ||
        workDetails.workplace_address ||
        workDetails.designation
            ? { workDetails }
            : {}),
    };
}
