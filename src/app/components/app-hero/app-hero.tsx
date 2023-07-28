'use client'
import styles from "./app-hero.module.css";
import {usePathname} from "next/navigation";
import {routesMap} from "@/lib/routes";

interface AppHeroProps {
    height?: number | string;
    children: React.ReactNode
}
export default function AppHero(props:AppHeroProps) {

    const pathname = usePathname()
    let height = undefined;
    if (pathname !== routesMap.home.path) {
        height = '60vh';
    }

    return (
        <div className={styles.heroImageContainer}
             style={{
                 height: height,
                 position: "relative",
             }}
        >
            {props.children}
            <img src="/images/main-bg.png" className={styles.heroImage} alt=""/>
        </div>
    );
}

