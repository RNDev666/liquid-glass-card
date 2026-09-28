import styles from "./HowItWorksCard.module.css";

const REPO_URL = "https://github.com/RNDev666/liquid-glass-card";

/** Tells visitors what to try, and how the effect is made. */
export function HowItWorksCard() {
  return (
    <>
      <h2 className={styles.heading}>How it works</h2>

      <ul className={styles.steps}>
        <li>Drag any card around.</li>
        <li>Use − and + to resize it.</li>
        <li>
          The glass is <code>backdrop-filter</code> plus an SVG{" "}
          <code>feDisplacementMap</code> driven by turbulence noise.
        </li>
      </ul>

      <a className={styles.link} href={REPO_URL} target="_blank" rel="noreferrer">
        View source
      </a>
    </>
  );
}
