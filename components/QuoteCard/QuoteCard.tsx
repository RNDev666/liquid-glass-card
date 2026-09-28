import styles from "./QuoteCard.module.css";

/** Plain typography, to show how text reads over the distorted backdrop. */
export function QuoteCard() {
  return (
    <figure className={styles.quote}>
      <blockquote className={styles.text}>
        Glass is only as interesting as whatever sits behind it.
      </blockquote>
      <figcaption className={styles.caption}>Drag me over the peaks</figcaption>
    </figure>
  );
}
