"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { useDraggable } from "@/hooks/useDraggable";
import styles from "./GlassCard.module.css";

const SCALE_STEP = 0.1;
const MIN_SCALE = 0.5;
const MAX_SCALE = 2;

export type GithubProfile = {
  name: string;
  handle: string;
  avatarUrl: string;
  profileUrl: string;
  repos: number;
  followers: number;
};

export function GlassCard({ profile }: { profile: GithubProfile }) {
  const [scale, setScale] = useState(1);
  const { offset, isDragging, dragHandlers } = useDraggable<HTMLDivElement>();

  const zoom = (step: number) =>
    setScale((current) =>
      Math.min(MAX_SCALE, Math.max(MIN_SCALE, Number((current + step).toFixed(2)))),
    );

  return (
    <>
      <LiquidGlassFilter />

      <div
        className={`${styles.card} ${isDragging ? styles.dragging : ""}`}
        style={
          {
            "--offset-x": `${offset.x}px`,
            "--offset-y": `${offset.y}px`,
            "--scale": scale,
          } as CSSProperties
        }
        {...dragHandlers}
      >
        <div className={styles.content}>
          <div className={styles.avatar}>
            <Image
              src={profile.avatarUrl}
              alt={`${profile.name} profile`}
              width={76}
              height={76}
              priority
            />
          </div>

          <h2 className={styles.name}>{profile.name}</h2>
          <p className={styles.handle}>@{profile.handle}</p>

          <div className={styles.stats}>
            <Stat value={profile.repos} label="Repos" />
            <Stat value={profile.followers} label="Followers" />
          </div>

          <a
            className={styles.followButton}
            href={profile.profileUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            Follow
          </a>

          <div className={styles.zoomControls}>
            <button
              className={styles.zoomButton}
              onClick={() => zoom(-SCALE_STEP)}
              disabled={scale <= MIN_SCALE}
              title="Decrease size"
            >
              -
            </button>
            <button
              className={styles.zoomButton}
              onClick={() => zoom(SCALE_STEP)}
              disabled={scale >= MAX_SCALE}
              title="Increase size"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

/** Displacement filter referenced by the card's backdrop layer in CSS. */
function LiquidGlassFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="liquid-glass-distortion" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.012"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="85"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className={styles.githubIcon} viewBox="0 0 16 16" aria-hidden>
      <path
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}
