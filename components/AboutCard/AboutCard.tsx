import type { GithubProfile } from "@/lib/github";
import styles from "./AboutCard.module.css";

/** Shown when the GitHub profile has no bio set. Edit here, or set the bio. */
const FALLBACK_BIO = "Developer. Mostly building things for the web.";

/** Short "about me" panel, meant to be dropped inside a GlassCard. */
export function AboutCard({ profile }: { profile: GithubProfile }) {
  const joined = new Date(profile.joinedAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.bio}>{profile.bio ?? FALLBACK_BIO}</p>

      <dl className={styles.facts}>
        {profile.location && <Fact label="Based in" value={profile.location} />}
        <Fact label="On GitHub since" value={joined} />
        <Fact label="Public repos" value={String(profile.repos)} />
      </dl>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.fact}>
      <dt className={styles.factLabel}>{label}</dt>
      <dd className={styles.factValue}>{value}</dd>
    </div>
  );
}
