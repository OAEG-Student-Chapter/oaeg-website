import styles from "./newsletter.module.css";

export default function Page() {
  return (
    <div className={`${styles.container} bg-white min-h-screen`}>
      <iframe
        className={styles.newsletter}
        loading="lazy"
        src="https://www.canva.com/design/DAGA4bH8HVc/Yic5zLE2RRjCvMzi-B89HA/view?embed"
        allow="fullscreen"
      />
    </div>
  );
}
