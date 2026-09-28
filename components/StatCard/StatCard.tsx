import styles from "./StatCard.module.css";

/**
 * Widget-style tile: one big number and its labels. The values are
 * decorative, matching the mountain backdrop, not live weather.
 */
export function StatCard() {
  return (
    <div className={styles.tile}>
      <span className={styles.label}>Summit</span>
      <span className={styles.value}>-4°</span>
      <span className={styles.detail}>Clear skies · Wind 12 km/h</span>
    </div>
  );
}
