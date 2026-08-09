import { FormState } from "../types";

export function buildPayload(form: FormState) {
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
            year_of_first_al: form.yearOfFirstAL ? Number(form.yearOfFirstAL) : null,
            is_oba_member:
                form.isObaMember === "Yes" ? true : form.isObaMember === "No" ? false : null,
            oba_membership_number: form.obaMembershipNumber || null,
        },
        universityDetails: {
            university: form.university === "Other" ? form.universityOther || null : form.university || null,
            faculty: form.faculty === "Other" ? form.facultyOther || null : form.faculty || null,
            degree_awarded: form.degreeAwarded || null,
            field_of_specialization: form.fieldOfSpecialization || null,
            year_of_graduation: form.yearOfGraduation ? Number(form.yearOfGraduation) : null,
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
            is_married: form.isMarried === "Yes" ? true : form.isMarried === "No" ? false : null,
            spouse_name: form.spouseName || null,
            spouse_occupation: form.spouseOccupation || null,
            has_children: form.hasChildren === "Yes" ? true : form.hasChildren === "No" ? false : null,
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
        ...(workDetails.workplace_name || workDetails.workplace_address || workDetails.designation
            ? { workDetails }
            : {}),
    };
}