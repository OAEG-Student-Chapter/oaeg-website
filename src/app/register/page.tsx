"use client";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import React, { useCallback, useMemo, useState } from "react";
import styles from "./register-form.module.css";
import textTheme from "@/lib/fonts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, FormProvider, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    FaCheck,
    FaEnvelope,
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa6";
import { FormIntro } from "./components/form-intro";
import { MembershipSection } from "./components/membership-section";
import { PersonalDetailsSection } from "./components/personaldetails-section";
import { SchoolSection } from "./components/school-section";
import { UniversitySection } from "./components/university-section";
import { IeslSection } from "./components/iesl-section";
import { ProfessionalSection } from "./components/professional-section";
import { WorkSection } from "./components/work-section";
import { MaritalSection } from "./components/marital-section";
import { FamilySection } from "./components/family-section";
import { ChildrenSection } from "./components/children-section";
import { IntroducedBySection } from "./components/introduced-by-section";
import {
    formSchema,
    type FormValues,
    STEP_FIELDS,
    buildPayload,
} from "./lib/schema";

interface StepConfig {
    section: number;
    title: string;
    subtitle?: string;
    visible: (get: <K extends keyof FormValues>(name: K) => FormValues[K]) => boolean;
}

const STEP_CONFIGS: StepConfig[] = [
    {
        section: 1,
        title: "Membership Category",
        subtitle: "Please select your membership category.",
        visible: () => true,
    },
    {
        section: 2,
        title: "Membership Type",
        subtitle: "For Corporate Memberships, Select the Membership Type",
        visible: (get) => get("membershipCategory") === "Corporate Member",
    },
    {
        section: 3,
        title: "Personal Details",
        subtitle: "Tell us about yourself.",
        visible: () => true,
    },
    {
        section: 4,
        title: "School Details",
        subtitle: "Provide the details that are relevant to the school.",
        visible: () => true,
    },
    {
        section: 5,
        title: "University Details",
        subtitle: "Provide the details of your university.",
        visible: () => true,
    },
    {
        section: 6,
        title: "IESL Membership Details",
        subtitle:
            "Enter the membership details of The Institute of Engineers Sri Lanka (IESL) - If you don't have an IESL membership, select Membership type as student, and you can skip this section.",
        visible: () => true,
    },
    {
        section: 7,
        title: "Any Other Professional Details",
        subtitle:
            "Provide details of any memberships in any other professional bodies.",
        visible: (get) =>
            get("hasOtherProfessionalMemberships") === "Yes",
    },
    {
        section: 8,
        title: "Work Details",
        subtitle: "Enter the work related details. (Skip if irrelevant)",
        visible: () => true,
    },
    {
        section: 9,
        title: "Marital Status",
        visible: () => true,
    },
    {
        section: 10,
        title: "Family Info",
        subtitle: "Enter the information of your family.",
        visible: (get) => get("isMarried") === "Yes",
    },
    {
        section: 11,
        title: "Children Details",
        subtitle: "Fill in the details of your child or children",
        visible: (get) =>
            get("hasChildren") === "Yes" && get("isMarried") === "Yes",
    },
    {
        section: 12,
        title: "Introduced By (Optional)",
        subtitle: "Who referred you?",
        visible: () => true,
    },
];

const sectionComponents: Record<number, React.FC<{ section?: number }>> = {
    1: MembershipSection,
    2: MembershipSection,
    3: PersonalDetailsSection,
    4: SchoolSection,
    5: UniversitySection,
    6: IeslSection,
    7: ProfessionalSection,
    8: WorkSection,
    9: MaritalSection,
    10: FamilySection,
    11: ChildrenSection,
    12: IntroducedBySection,
};

const toastOptions = {
    position: "bottom-left" as const,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light" as const,
};

export default function Page() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [status, setStatus] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema) as Resolver<FormValues>,
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
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
        },
    });

    const { watch, trigger, handleSubmit, formState } = form;
    const watchAll = watch();

    const visibleSteps = useMemo(() => {
        return STEP_CONFIGS.filter((step) => step.visible(watch));
    }, [watchAll]);

    const totalVisible = visibleSteps.length;
    const currentStep =
        visibleSteps[currentIndex] ??
        visibleSteps[visibleSteps.length - 1];

    React.useEffect(() => {
        if (currentIndex >= totalVisible) {
            setCurrentIndex(Math.max(totalVisible - 1, 0));
        }
    }, [currentIndex, totalVisible]);

    const scrollToForm = useCallback(() => {
        const cardEl = document.getElementById("member-form");
        if (cardEl)
            cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const onSubmit = useCallback(
        async (data: FormValues) => {
            setStatus(null);
            setSubmitting(true);
            try {
                const res = await fetch("/api/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(buildPayload(data)),
                });
                if (res.ok) {
                    const successMessage =
                        "Registration submitted successfully. Thank you!";
                    toast.success(successMessage, toastOptions);
                    setStatus({ type: "success", text: successMessage });
                    form.reset();
                    setCurrentIndex(0);
                } else {
                    const errData = await res.json().catch(() => ({}));
                    const failureMessage =
                        errData.error ||
                        "Registration could not be submitted. Please try again.";
                    toast.error(failureMessage, toastOptions);
                    setStatus({ type: "error", text: failureMessage });
                }
            } catch {
                const networkMessage =
                    "Network error. Please check your connection and try again.";
                toast.error(networkMessage, toastOptions);
                setStatus({ type: "error", text: networkMessage });
            } finally {
                setSubmitting(false);
                scrollToForm();
            }
        },
        [form, scrollToForm],
    );

    const goNext = useCallback(async () => {
        if (!currentStep) return;
        setStatus(null);

        const fields = STEP_FIELDS[currentStep.section] as
            | (keyof FormValues)[]
            | undefined;

        let valid = false;
        if (fields && fields.length > 0) {
            valid = await trigger(fields);
        } else {
            valid = true;
        }

        if (!valid) return;

        if (currentIndex === totalVisible - 1) {
            handleSubmit(onSubmit)();
        } else {
            setCurrentIndex((i) => i + 1);
            scrollToForm();
        }
    }, [
        currentStep,
        currentIndex,
        totalVisible,
        trigger,
        handleSubmit,
        onSubmit,
        scrollToForm,
    ]);

    const goBack = useCallback(() => {
        setStatus(null);
        if (currentIndex > 0) {
            setCurrentIndex((i) => i - 1);
            scrollToForm();
        }
    }, [currentIndex, scrollToForm]);

    const goToStep = useCallback(
        (index: number) => {
            if (index >= currentIndex) return;
            setStatus(null);
            setCurrentIndex(index);
            scrollToForm();
        },
        [currentIndex, scrollToForm],
    );

    const progress =
        totalVisible > 0
            ? Math.round(((currentIndex + 1) / totalVisible) * 100)
            : 0;
    const isLastStep = currentStep
        ? currentIndex === totalVisible - 1
        : false;
    const ActiveSection = currentStep
        ? sectionComponents[currentStep.section]
        : null;
    const stepNum = String(currentIndex + 1).padStart(2, "0");

    return (
        <FormProvider {...form}>
            <div
                className={`${navStyles.navbarSpace} ${styles.page}`}
            >
                <FormIntro />

                <div className={styles.splitLayout}>
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarHeader}>
                            <div className={styles.sidebarTitle}>
                                Application Progress
                            </div>
                            <div className={styles.sidebarProgress}>
                                <div
                                    className={styles.sidebarProgressBar}
                                >
                                    <div
                                        className={
                                            styles.sidebarProgressFill
                                        }
                                        style={{
                                            width: `${progress}%`,
                                        }}
                                    />
                                </div>
                                <span
                                    className={
                                        styles.sidebarProgressPercent
                                    }
                                >
                                    {progress}%
                                </span>
                            </div>
                        </div>
                        <ol className={styles.sidebarSteps}>
                            {visibleSteps.map((step, index) => {
                                const isDone = index < currentIndex;
                                const isCurrent =
                                    index === currentIndex;
                                return (
                                    <li key={step.section}>
                                        <button
                                            type="button"
                                            className={`${styles.sidebarStep} ${isCurrent ? styles.sidebarStepCurrent : ""} ${isDone ? styles.sidebarStepDone : ""}`}
                                            onClick={() =>
                                                goToStep(index)
                                            }
                                            disabled={
                                                index > currentIndex
                                            }
                                            aria-current={
                                                isCurrent
                                                    ? "step"
                                                    : undefined
                                            }
                                        >
                                            <span
                                                className={
                                                    styles.sidebarStepCircle
                                                }
                                            >
                                                {isDone ? (
                                                    <FaCheck />
                                                ) : (
                                                    String(
                                                        index + 1,
                                                    ).padStart(2, "0")
                                                )}
                                            </span>
                                            <span
                                                className={
                                                    styles.sidebarStepTitle
                                                }
                                            >
                                                {step.title}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                    </aside>

                    <main className={styles.mainContent}>
                        <div className={styles.emailStrip}>
                            <span className={styles.emailStripIcon}>
                                <FaEnvelope />
                            </span>
                            <div className={styles.emailStripBody}>
                                <label
                                    className={styles.fieldLabel}
                                    htmlFor="applicant-email"
                                >
                                    Applicant Email{" "}
                                    <span
                                        className={styles.required}
                                    >
                                        *
                                    </span>
                                </label>
                                <input
                                    id="applicant-email"
                                    className={styles.emailInput}
                                    type="email"
                                    placeholder="you@example.com"
                                    {...form.register("emailAddress")}
                                />
                            </div>
                        </div>

                        <section
                            className={styles.card}
                            id="member-form"
                        >
                            {currentStep && (
                                <>
                                    <header
                                        className={styles.sectionHeader}
                                    >
                                        <div
                                            className={styles.stepBadge}
                                        >
                                            {stepNum}
                                        </div>
                                        <div
                                            className={
                                                styles.sectionHeaderBody
                                            }
                                        >
                                            <span
                                                className={
                                                    styles.stepCount
                                                }
                                            >
                                                Step {currentIndex + 1}{" "}
                                                of {totalVisible}
                                            </span>
                                            <h3
                                                className={`${textTheme.title.className} ${styles.sectionTitle}`}
                                            >
                                                {currentStep.title}
                                            </h3>
                                            {currentStep.subtitle && (
                                                <p
                                                    className={`${textTheme.body.className} ${styles.sectionDescription}`}
                                                >
                                                    {
                                                        currentStep.subtitle
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    </header>

                                    <div
                                        className={styles.progressRow}
                                    >
                                        <div
                                            className={
                                                styles.progressBar
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.progressFill
                                                }
                                                style={{
                                                    width: `${progress}%`,
                                                }}
                                            />
                                        </div>
                                        <span
                                            className={
                                                styles.progressLabel
                                            }
                                        >
                                            {progress}%
                                        </span>
                                    </div>

                                    <form
                                        className={styles.form}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            goNext();
                                        }}
                                    >
                                        {ActiveSection && (
                                            <ActiveSection
                                                section={
                                                    currentStep.section
                                                }
                                            />
                                        )}

                                        {status && (
                                            <p
                                                role="status"
                                                aria-live="polite"
                                                className={
                                                    status.type ===
                                                    "success"
                                                        ? styles.successText
                                                        : styles.errorText
                                                }
                                            >
                                                {status.text}
                                            </p>
                                        )}

                                        {formState.errors.root && (
                                            <p
                                                className={
                                                    styles.errorText
                                                }
                                            >
                                                {
                                                    formState.errors.root
                                                        .message
                                                }
                                            </p>
                                        )}

                                        <div
                                            className={styles.navButtons}
                                        >
                                            {currentIndex > 0 && (
                                                <button
                                                    type="button"
                                                    className={
                                                        styles.backButton
                                                    }
                                                    onClick={goBack}
                                                >
                                                    <FaArrowLeft />{" "}
                                                    Back
                                                </button>
                                            )}
                                            <button
                                                type="submit"
                                                className={
                                                    styles.submitButton
                                                }
                                                disabled={submitting}
                                            >
                                                {isLastStep ? (
                                                    submitting ? (
                                                        "Submitting..."
                                                    ) : (
                                                        <>
                                                            Submit
                                                            Registration{" "}
                                                            <FaArrowRight />
                                                        </>
                                                    )
                                                ) : (
                                                    <>
                                                        Next{" "}
                                                        <FaArrowRight />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </section>
                    </main>
                </div>
                <ToastContainer {...toastOptions} />
            </div>
        </FormProvider>
    );
}
