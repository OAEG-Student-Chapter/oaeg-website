"use client";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import React from "react";
import styles from "./register-form.module.css";
import textTheme from "@/lib/fonts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCheck,
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { FormIntro } from "./components/FormIntro";
import { MembershipSection } from "./components/MembershipSection";
import { PersonalDetailsSection } from "./components/PersonalDetailsSection";
import { SchoolSection } from "./components/SchoolSection";
import { UniversitySection } from "./components/UniversitySection";
import { IeslSection } from "./components/IeslSection";
import { ProfessionalSection } from "./components/ProfessionalSection";
import { WorkSection } from "./components/WorkSection";
import { MaritalSection } from "./components/MaritalSection";
import { FamilySection } from "./components/FamilySection";
import { ChildrenSection } from "./components/ChildrenSection";
import { IntroducedBySection } from "./components/IntroducedBySection";
import { buildPayload } from "./lib/buildPayload";
import { validateStep } from "./lib/validate";
import {
  ChildInfo,
  FormSectionProps,
  FormState,
  initialState,
  Referral,
  Step,
  StringField,
} from "./types";

const sectionComponents: Record<number, React.FC<FormSectionProps>> = {
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
  const [form, setForm] = React.useState<FormState>(initialState);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [error, setError] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [submitting, setSubmitting] = React.useState(false);

  const update = (field: StringField, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const updateBody = (index: number, field: "body" | "number", value: string) =>
    setForm((f) => ({
      ...f,
      professionalBodies: f.professionalBodies.map((b, i) =>
        i === index ? { ...b, [field]: value } : b,
      ),
    }));

  const updateChild = (index: number, field: keyof ChildInfo, value: string) =>
    setForm((f) => ({
      ...f,
      children: f.children.map((c, i) =>
        i === index ? { ...c, [field]: value } : c,
      ),
    }));

  const updateReferral = (
    index: number,
    field: keyof Referral,
    value: string,
  ) =>
    setForm((f) => ({
      ...f,
      referrals: f.referrals.map((r, i) =>
        i === index ? { ...r, [field]: value } : r,
      ),
    }));

  const steps: Step[] = [
    {
      section: 1,
      title: "Membership Category",
      subtitle: "Please select your membership category.",
      visible: true,
    },
    {
      section: 2,
      title: "Membership Type",
      subtitle: "For Corporate Memberships, Select the Membership Type",
      visible: form.membershipCategory === "Corporate Member",
    },
    {
      section: 3,
      title: "Personal Details",
      subtitle: "Tell us about yourself.",
      visible: true,
    },
    {
      section: 4,
      title: "School Details",
      subtitle: "Provide the details that are relevant to the school.",
      visible: true,
    },
    {
      section: 5,
      title: "University Details",
      subtitle: "Provide the details of your university.",
      visible: true,
    },
    {
      section: 6,
      title: "IESL Membership Details",
      subtitle:
        "Enter the membership details of The Institute of Engineers Sri Lanka (IESL) - If you don't have an IESL membership, select Membership type as student,and you can skip this section.",
      visible: true,
    },
    {
      section: 7,
      title: "Any Other Professional Details",
      subtitle:
        "Provide details of any memberships in any other professional bodies.",
      visible: form.hasOtherProfessionalMemberships === "Yes",
    },
    {
      section: 8,
      title: "Work Details",
      subtitle: "Enter the work related details. (Skip if irrelevant)",
      visible: true,
    },
    { section: 9, title: "Marital Status", visible: true },
    {
      section: 10,
      title: "Family Info",
      subtitle: "Enter the information of your family.",
      visible: form.isMarried === "Yes",
    },
    {
      section: 11,
      title: "Children Details",
      subtitle: "Fill in the details of your child or children",
      visible: form.hasChildren === "Yes" && form.isMarried === "Yes",
    },
    {
      section: 12,
      title: "Introduced By(Optional)",
      subtitle: "Who referred you?",
      visible: true,
    },
  ];

  const visibleSteps = steps.filter((s) => s.visible);
  const totalVisible = visibleSteps.length;
  const currentStep =
    visibleSteps[currentIndex] ?? visibleSteps[visibleSteps.length - 1];

  React.useEffect(() => {
    if (currentIndex >= totalVisible) {
      setCurrentIndex(Math.max(totalVisible - 1, 0));
    }
  }, [currentIndex, totalVisible]);

  const handleSubmit = async () => {
    setError(null);
    setStatus(null);
    if (!form.emailAddress) {
      setError("Please enter your email address at the top of the form.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.emailAddress)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(form)),
      });
      if (res.ok) {
        const successMessage =
          "Registration submitted successfully. Thank you!";
        toast.success(successMessage, toastOptions);
        setStatus({ type: "success", text: successMessage });
        setForm(initialState);
        setCurrentIndex(0);
      } else {
        const data = await res.json().catch(() => ({}));
        const failureMessage =
          data.error ||
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
  };

  const scrollToForm = () => {
    const cardEl = document.getElementById("member-form");
    if (cardEl) cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNext = () => {
    if (!currentStep) return;
    const err = validateStep(currentStep, form);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStatus(null);
    if (currentIndex === totalVisible - 1) {
      handleSubmit();
    } else {
      setCurrentIndex((i) => i + 1);
      scrollToForm();
    }
  };

  const goBack = () => {
    setError(null);
    setStatus(null);
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      scrollToForm();
    }
  };

  const goToStep = (index: number) => {
    if (index >= currentIndex) return;
    setError(null);
    setStatus(null);
    setCurrentIndex(index);
    scrollToForm();
  };

  const progress =
    totalVisible > 0
      ? Math.round(((currentIndex + 1) / totalVisible) * 100)
      : 0;
  const isLastStep = currentStep ? currentIndex === totalVisible - 1 : false;
  const ActiveSection = currentStep
    ? sectionComponents[currentStep.section]
    : null;
  const stepNum = String(currentIndex + 1).padStart(2, "0");

  return (
    <div className={`${navStyles.navbarSpace} ${styles.page}`}>
      {/* Compact hero header */}
      <FormIntro />

      {/* Full-screen split layout */}
      <div className={styles.splitLayout}>
        {/* Left sidebar — step navigation */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarTitle}>Application Progress</div>
            <div className={styles.sidebarProgress}>
              <div className={styles.sidebarProgressBar}>
                <div
                  className={styles.sidebarProgressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className={styles.sidebarProgressPercent}>{progress}%</span>
            </div>
          </div>
          <ol className={styles.sidebarSteps}>
            {visibleSteps.map((step, index) => {
              const isDone = index < currentIndex;
              const isCurrent = index === currentIndex;
              return (
                <li key={step.section}>
                  <button
                    type="button"
                    className={`${styles.sidebarStep} ${isCurrent ? styles.sidebarStepCurrent : ""} ${
                      isDone ? styles.sidebarStepDone : ""
                    }`}
                    onClick={() => goToStep(index)}
                    disabled={index > currentIndex}
                    aria-current={isCurrent ? "step" : undefined}
                  >
                    <span className={styles.sidebarStepCircle}>
                      {isDone ? (
                        <FaCheck />
                      ) : (
                        String(index + 1).padStart(2, "0")
                      )}
                    </span>
                    <span className={styles.sidebarStepTitle}>
                      {step.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>

        {/* Right — main form area */}
        <main className={styles.mainContent}>
          {/* Email strip at top */}
          <div className={styles.emailStrip}>
            <span className={styles.emailStripIcon}>
              <FaEnvelope />
            </span>
            <div className={styles.emailStripBody}>
              <label className={styles.fieldLabel} htmlFor="applicant-email">
                Applicant Email <span className={styles.required}>*</span>
              </label>
              <input
                id="applicant-email"
                className={styles.emailInput}
                type="email"
                placeholder="you@example.com"
                value={form.emailAddress}
                onChange={(e) => update("emailAddress", e.target.value)}
              />
            </div>
          </div>

          {/* Form card */}
          <section className={styles.card} id="member-form">
            {currentStep && (
              <>
                <header className={styles.sectionHeader}>
                  <div className={styles.stepBadge}>{stepNum}</div>
                  <div className={styles.sectionHeaderBody}>
                    <span className={styles.stepCount}>
                      Step {currentIndex + 1} of {totalVisible}
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
                        {currentStep.subtitle}
                      </p>
                    )}
                  </div>
                </header>

                <div className={styles.progressRow}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className={styles.progressLabel}>{progress}%</span>
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
                      section={currentStep.section}
                      form={form}
                      update={update}
                      updateBody={updateBody}
                      updateChild={updateChild}
                      updateReferral={updateReferral}
                    />
                  )}

                  {status && (
                    <p
                      role="status"
                      aria-live="polite"
                      className={
                        status.type === "success"
                          ? styles.successText
                          : styles.errorText
                      }
                    >
                      {status.text}
                    </p>
                  )}

                  {error && <p className={styles.errorText}>{error}</p>}

                  <div className={styles.navButtons}>
                    {currentIndex > 0 && (
                      <button
                        type="button"
                        className={styles.backButton}
                        onClick={goBack}
                      >
                        <FaArrowLeft /> Back
                      </button>
                    )}
                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={submitting}
                    >
                      {isLastStep ? (
                        submitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Submit Registration <FaArrowRight />
                          </>
                        )
                      ) : (
                        <>
                          Next <FaArrowRight />
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
  );
}
