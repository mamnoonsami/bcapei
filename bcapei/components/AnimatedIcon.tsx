"use client";

import React from "react";

/**
 * AnimatedIcon — a typed wrapper around Lordicon's <lord-icon> web component.
 *
 * Usage:
 *   <AnimatedIcon src="/icons/envelope.json" trigger="loop" size={64} />
 */

// Tell TypeScript about the custom element so JSX is happy
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          trigger?: string;
          colors?: string;
          stroke?: string | number;
          delay?: string | number;
          speed?: string | number;
          style?: React.CSSProperties;
          target?: string;
          state?: string;
          icon?: string;
        },
        HTMLElement
      >;
    }
  }
}

export interface AnimatedIconProps {
  /** URL to the Lordicon .json animation file (CDN or local /public) */
  src: string;
  /**
   * Animation trigger:
   * "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "boomerang" | "in"
   * @default "hover"
   */
  trigger?: string;
  /** Size in pixels (applied to both width and height). @default 64 */
  size?: number;
  /**
   * Color string passed to the lord-icon `colors` attribute.
   * Format: "primary:#RRGGBB,secondary:#RRGGBB"
   * Defaults to the project's primary (#00503a) and secondary (#7b5800).
   */
  colors?: string;
  /** Stroke weight: 50–200. @default 100 */
  stroke?: number;
  /** Extra Tailwind / CSS classes */
  className?: string;
  /** Animation playback speed (0.5–2). @default 1 */
  speed?: number;
  /** Delay before auto-play animations start (ms). @default 0 */
  delay?: number;
}

/** Project-wide default colors matching the "Riverine Harmony" design system */
const THEME_COLORS = "primary:#00503a,secondary:#7b5800";

export function AnimatedIcon({
  src,
  trigger = "hover",
  size = 65,
  colors = THEME_COLORS,
  stroke = 100,
  className,
  speed = 0.1,
  delay = 700,
}: AnimatedIconProps) {
  return (
    // @ts-expect-error — lord-icon is a custom element; types declared above
    <lord-icon
      src={src}
      trigger={trigger}
      colors={colors}
      stroke={stroke}
      speed={speed}
      delay={delay}
      style={{ width: size, height: size }}
      className={className}
    />
  );
}
