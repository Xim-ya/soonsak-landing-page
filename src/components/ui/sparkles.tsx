"use client";

import React, { useId, useCallback } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

interface ParticlesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

const DEFAULT_BACKGROUND = "#0d47a1";
const DEFAULT_PARTICLE_COLOR = "#ffffff";
const DEFAULT_MIN_SIZE = 1;
const DEFAULT_MAX_SIZE = 3;
const DEFAULT_SPEED = 4;
const DEFAULT_DENSITY = 120;

function createParticleOptions({
  background,
  particleColor,
  minSize,
  maxSize,
  speed,
  particleDensity,
}: {
  background: string;
  particleColor: string;
  minSize: number;
  maxSize: number;
  speed: number;
  particleDensity: number;
}) {
  return {
    background: {
      color: { value: background },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: false, mode: "repulse" },
        resize: { enable: true },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: particleColor },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "out" as const },
        random: false,
        speed: { min: 0.1, max: 1 },
        straight: false,
      },
      number: {
        density: { enable: true, width: 400, height: 400 },
        value: particleDensity,
      },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed: speed,
          sync: false,
          startValue: "random" as const,
        },
      },
      shape: { type: "circle" },
      size: {
        value: { min: minSize, max: maxSize },
      },
    },
    detectRetina: true,
  };
}

export function SparklesCore({
  id,
  className,
  background = DEFAULT_BACKGROUND,
  minSize = DEFAULT_MIN_SIZE,
  maxSize = DEFAULT_MAX_SIZE,
  speed = DEFAULT_SPEED,
  particleColor = DEFAULT_PARTICLE_COLOR,
  particleDensity = DEFAULT_DENSITY,
}: ParticlesProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsInitialized(true);
    });
  }, []);

  const handleParticlesLoaded = useCallback(
    async (container?: Container) => {
      if (container) {
        controls.start({
          opacity: 1,
          transition: { duration: 1 },
        });
      }
    },
    [controls]
  );

  const options = createParticleOptions({
    background,
    particleColor,
    minSize,
    maxSize,
    speed,
    particleDensity,
  });

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {isInitialized && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={handleParticlesLoaded}
          options={options}
        />
      )}
    </motion.div>
  );
}
