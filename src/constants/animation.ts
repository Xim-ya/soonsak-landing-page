// Framer Motion animation presets for consistent animations across components

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const FADE_IN_SCALE = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

export const CURSOR_BLINK = {
  animate: { opacity: [1, 0] },
  transition: { duration: 0.5, repeat: Infinity },
};

// Animation durations in seconds
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
} as const;

// Animation delays for staggered animations
export const STAGGER_DELAY = {
  small: 0.1,
  normal: 0.2,
  large: 0.4,
} as const;

// Marquee speeds in seconds
export const MARQUEE_SPEED = {
  slow: 40,
  normal: 35,
  fast: 25,
} as const;
