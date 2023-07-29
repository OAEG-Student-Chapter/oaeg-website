import AppHero from "@/app/components/app-hero/app-hero";
import styles from "@/app/components/app-hero/app-hero.module.css";

export default function AppHeroSection() {

    return (
        <AppHero>
            <RedGradientOverlay/>
        </AppHero>
    );
}

function RedGradientOverlay() {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
        }} className={styles.redBlurGradient}/>
    )
}

