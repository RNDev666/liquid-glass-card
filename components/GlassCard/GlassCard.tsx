"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { useDraggable } from "@/hooks/useDraggable";
import styles from "./GlassCard.module.css";

const SCALE_STEP = 0.1;
const MIN_SCALE = 0.5;
const MAX_SCALE = 2;

/**
 * Draggable, zoomable liquid-glass surface. It owns the chrome and the
 * interaction; whatever it should show is passed in as children.
 */
export function GlassCard({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);
  const { offset, isDragging, dragHandlers } = useDraggable<HTMLDivElement>();

  const zoom = (step: number) =>
    setScale((current) =>
      Math.min(MAX_SCALE, Math.max(MIN_SCALE, Number((current + step).toFixed(2)))),
    );

  return (
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
        {children}

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
  );
}
