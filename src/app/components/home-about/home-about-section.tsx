import styles from "./home-about-section.module.css";
import TitleBadge from "@/components/title-badge";
import { Krub, Rubik } from "next/font/google";
import TestimonialCard from "@/app/components/home-about/testimonial-card";
import { MainTitle, SecondaryTitle, TertiaryTitle } from "@/components/titles";
import Link from "next/link";
const rubik = Rubik({ subsets: ["latin"], weight: ["400"] });
const krubItalic = Krub({ subsets: ["latin"], weight: ["400"] });

export default function HomeAboutSection() {
  return (
    <div className={`${styles.container} ${rubik.className}`}>
      <div className={styles.topSection}>
        <div className={styles.topLeft}>
          <TitleBadge title={"What We Do"} />
          <div style={{ marginTop: 10 }}>
            <Link
              href={"/about-us"}
              style={{
                textDecoration: "none",
                color: "var(--color-text-primary)",
              }}
            >
              <MainTitle title={"Who We Are"} />
            </Link>
          </div>
        </div>
        <div className={styles.topMiddle}>
          <InfoCard
            title={"Our Mission"}
            description={
              "Following the quality of our service thus having gained trust of our many clients."
            }
          />
        </div>
        <div className={styles.topRight}>
          <InfoCard
            title={"Our Vision"}
            description={
              "Following the quality of our service thus having gained trust of our many clients."
            }
          />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <TitleBadge title={"Testimonial"} />
        <div style={{ marginTop: 10 }}>
          <SecondaryTitle title={"Message from the Founder"} />
        </div>
        <div style={{ marginTop: 20 }}>
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

const InfoCard = (props: { title: string; description: string }) => {
  return (
    <>
      <TertiaryTitle title={props.title} />
      <p
        className={krubItalic.className}
        style={{
          marginTop: 10,
          color: "var(--color-text-secondary)",
        }}
      >
        {props.description}
      </p>
    </>
  );
};
