"use client";

import React, { createContext, useContext, useRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Constants
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const DEFAULT_ICON_SIZE = 40;

const SPRING_CONFIG = {
  mass: 0.1,
  stiffness: 150,
  damping: 12,
} as const;

// Context for Dock state
interface DockContextValue {
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
}

const DockContext = createContext<DockContextValue | null>(null);

function useDockContext() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }
  return context;
}

// Dock Component
type DockDirection = "top" | "middle" | "bottom";

const dockVariants = cva(
  "mx-auto flex h-[58px] w-max gap-2 rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur-md"
);

const DIRECTION_CLASSES: Record<DockDirection, string> = {
  top: "items-start",
  middle: "items-center",
  bottom: "items-end",
};

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: DockDirection;
  children: ReactNode;
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);

    const handleMouseMove = (e: React.MouseEvent) => mouseX.set(e.pageX);
    const handleMouseLeave = () => mouseX.set(Infinity);

    const contextValue: DockContextValue = {
      mouseX,
      magnification,
      distance,
    };

    return (
      <DockContext.Provider value={contextValue}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(dockVariants({ className }), DIRECTION_CLASSES[direction])}
          {...props}
        >
          {children}
        </motion.div>
      </DockContext.Provider>
    );
  }
);

Dock.displayName = "Dock";

// DockIcon Component
export interface DockIconProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

function DockIcon({ className, children, onClick }: DockIconProps) {
  const { mouseX, magnification, distance } = useDockContext();
  const ref = useRef<HTMLDivElement>(null);

  const distanceFromMouse = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceFromMouse,
    [-distance, 0, distance],
    [DEFAULT_ICON_SIZE, magnification, DEFAULT_ICON_SIZE]
  );

  const width = useSpring(widthSync, SPRING_CONFIG);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
