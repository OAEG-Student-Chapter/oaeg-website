export interface ProfessionalBody {
    body: string;
    number: string;
}

export interface ChildInfo {
    name: string;
    dob: string;
    gender: string;
}

export interface Referral {
    name: string;
    number: string;
}

export interface FormState {
    emailAddress: string;
    membershipCategory: string;
    membershipType: string;
    fullName: string;
    nameWithInitials: string;
    nameCalledByFriends: string;
    dateOfBirth: string;
    mobilePhone: string;
    homePhone: string;
    emailForCommunication: string;
    addressForCorrespondence: string;
    yearOfFirstAL: string;
    isObaMember: string;
    obaMembershipNumber: string;
    university: string;
    universityOther: string;
    faculty: string;
    facultyOther: string;
    degreeAwarded: string;
    fieldOfSpecialization: string;
    yearOfGraduation: string;
    ieslMembershipType: string;
    ieslMembershipNumber: string;
    expertiseAreas: string;
    hasOtherProfessionalMemberships: string;
    professionalBodies: ProfessionalBody[];
    workplaceName: string;
    workplaceAddress: string;
    designation: string;
    isMarried: string;
    spouseName: string;
    spouseOccupation: string;
    hasChildren: string;
    children: ChildInfo[];
    referrals: Referral[];
}

export type StringField = Exclude<
    keyof FormState,
    "professionalBodies" | "children" | "referrals"
>;

export const initialState: FormState = {
    emailAddress: "",
    membershipCategory: "",
    membershipType: "",
    fullName: "",
    nameWithInitials: "",
    nameCalledByFriends: "",
    dateOfBirth: "",
    mobilePhone: "",
    homePhone: "",
    emailForCommunication: "",
    addressForCorrespondence: "",
    yearOfFirstAL: "",
    isObaMember: "",
    obaMembershipNumber: "",
    university: "",
    universityOther: "",
    faculty: "",
    facultyOther: "",
    degreeAwarded: "",
    fieldOfSpecialization: "",
    yearOfGraduation: "",
    ieslMembershipType: "",
    ieslMembershipNumber: "",
    expertiseAreas: "",
    hasOtherProfessionalMemberships: "",
    professionalBodies: [
        { body: "", number: "" },
        { body: "", number: "" },
        { body: "", number: "" },
    ],
    workplaceName: "",
    workplaceAddress: "",
    designation: "",
    isMarried: "",
    spouseName: "",
    spouseOccupation: "",
    hasChildren: "",
    children: [
        { name: "", dob: "", gender: "" },
        { name: "", dob: "", gender: "" },
        { name: "", dob: "", gender: "" },
    ],
    referrals: [
        { name: "", number: "" },
        { name: "", number: "" },
    ],
};

export interface Step {
    section: number;
    title: string;
    subtitle?: string;
    visible: boolean;
}

export interface FormSectionProps {
    section: number;
    form: FormState;
    update: (field: StringField, value: string) => void;
    updateBody: (index: number, field: "body" | "number", value: string) => void;
    updateChild: (index: number, field: keyof ChildInfo, value: string) => void;
    updateReferral: (index: number, field: keyof Referral, value: string) => void;
}