"use client";

import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface OfferWithTimerProps {
  children: ReactNode;
  interval?: number; // ms
  animationDuration?: number; // ms
  direction?: Direction;
  className?: string; // container classes
  itemClassName?: string; // item classes
  pauseOnHover?: boolean;
}

const dirToExit = (direction: Direction) => {
  switch (direction) {
    case "up":
      return "-translate-y-2";
    case "down":
      return "translate-y-2";
    case "left":
      return "-translate-x-2";
    case "right":
      return "translate-x-2";
    default:
      return "translate-x-0 translate-y-0";
  }
};

export function OfferWithTimer({
  children,
  interval = 5000,
  animationDuration = 300,
  direction = "up",
  className = "",
  itemClassName = "",
  pauseOnHover = true,
}: OfferWithTimerProps) {
  const items = useMemo(() => React.Children.toArray(children), [children]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // لو عدد العناصر اتغير وخلى index خارج الرينج
  useEffect(() => {
    if (currentIndex >= items.length) setCurrentIndex(0);
  }, [items.length, currentIndex]);

  useEffect(() => {
    if (items.length <= 1) return;
    if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setIsExiting(true);

      // safety: امسح أي timeout قديم
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsExiting(false);
      }, animationDuration);
    }, interval);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [items.length, interval, animationDuration, isPaused]);

  if (items.length === 0) return null;

  const exitMove = dirToExit(direction);

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center text-center w-full ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        style={{ transitionDuration: `${animationDuration}ms` }}
        className={[
          "will-change-transform",
          "transition-all ease-in-out",
          isExiting
            ? `opacity-0 ${exitMove} blur-[1px]`
            : "opacity-100 translate-x-0 translate-y-0 blur-0",
          itemClassName,
        ].join(" ")}
      >
        {items[currentIndex]}
      </div>
    </div>
  );
}
