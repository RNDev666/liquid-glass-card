"use client";

import { useRef, useState, type PointerEvent } from "react";

type Point = { x: number; y: number };

/**
 * Pointer-capture based dragging. Returns the accumulated offset (px) plus the
 * handlers to spread onto the draggable element.
 *
 * Drags that start on an interactive child (button/link) are ignored so the
 * card's own controls stay clickable.
 */
export function useDraggable<T extends HTMLElement>() {
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const origin = useRef<Point>({ x: 0, y: 0 });

  const onPointerDown = (event: PointerEvent<T>) => {
    if ((event.target as HTMLElement).closest("button, a")) return;

    origin.current = { x: event.clientX - offset.x, y: event.clientY - offset.y };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const onPointerMove = (event: PointerEvent<T>) => {
    if (!isDragging) return;

    setOffset({
      x: event.clientX - origin.current.x,
      y: event.clientY - origin.current.y,
    });
  };

  const stopDragging = () => setIsDragging(false);

  return {
    offset,
    isDragging,
    dragHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: stopDragging,
      // Covers cancellation (and capture loss) without a pointerup.
      onLostPointerCapture: stopDragging,
    },
  };
}
