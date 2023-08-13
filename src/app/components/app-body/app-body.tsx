import styles from "@/app/components/app-body/app-body.module.css";

export default function AppBody({children}: { children: React.ReactNode }) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
}