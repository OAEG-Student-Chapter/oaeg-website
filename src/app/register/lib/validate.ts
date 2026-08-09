import { FormState, Step } from "../types";

export function validateStep(step: Step, form: FormState): string | null {
    switch (step.section) {
        case 1:
            return form.membershipCategory ? null : "Please select your membership category.";
        case 2:
            return form.membershipType ? null : "Please select your membership type.";
        case 3:
            if (!form.fullName) return "Full Name is required.";
            if (!form.nameWithInitials) return "Name with Initials is required.";
            if (!form.dateOfBirth) return "Date of Birth is required.";
            if (!form.mobilePhone) return "Mobile Phone is required.";
            if (!/^\d{10,15}$/.test(form.mobilePhone.replace(/[^0-9]/g, "")))
                return "Please enter a valid phone number including the country code. Example: +94711231234";
            if (!form.emailForCommunication) return "Email Address for e-communication is required.";
            if (!/^\S+@\S+\.\S+$/.test(form.emailForCommunication))
                return "Please enter a valid email address for e-communication.";
            if (!form.addressForCorrespondence) return "Address for Correspondence is required.";
            return null;
        case 4:
            if (!form.yearOfFirstAL) return "Year of first sitting for A/L is required.";
            if (!/^\d{4}$/.test(form.yearOfFirstAL)) return "Please enter a valid year (e.g. 2015).";
            if (!form.isObaMember) return "Please answer whether you already have an OBA membership.";
            return null;
        case 5:
            if (!form.university) return "Please select your University / Institution.";
            if (form.university === "Other" && !form.universityOther)
                return "Please enter your university.";
            if (!form.faculty) return "Please select your Faculty.";
            if (form.faculty === "Other" && !form.facultyOther) return "Please enter your faculty.";
            if (!form.degreeAwarded) return "Degree Awarded is required.";
            if (!form.fieldOfSpecialization) return "Field of Specialization is required.";
            if (!form.yearOfGraduation) return "Year of Graduation is required.";
            if (!/^\d{4}$/.test(form.yearOfGraduation)) return "Please enter a valid graduation year (e.g. 2020).";
            return null;
        case 6:
            if (!form.ieslMembershipType) return "Please select your IESL membership type.";
            if (!form.hasOtherProfessionalMemberships)
                return "Please answer whether you have any other professional memberships.";
            return null;
        case 9:
            if (!form.isMarried) return "Please answer whether you are married.";
            return null;
        case 10:
            if (!form.hasChildren) return "Please answer whether you have children.";
            return null;
        case 11:
            if (!form.children[0].name) return "Please enter the name of your first child.";
            if (!form.children[0].dob) return "Please enter the date of birth of your first child.";
            if (!form.children[0].gender) return "Please select the gender of your first child.";
            return null;
        default:
            return null;
    }
}