"use client";

import moviesData from "@/data/movies.json";
import { TMDB_IMAGE_BASE, TMDB_LOGO_BASE } from "@/constants/tmdb";
import { MarqueeRow } from "@/components/shared/MarqueeRow";

interface MovieWithLogo {
  id: number;
  backdrop_path: string;
  title: string;
  logo_path: string;
}

interface BackdropSliderProps {
  className?: string;
}

// Remove duplicates by movie ID
const movies: MovieWithLogo[] = moviesData.filter(
  (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
);

const ROW_1_MOVIES = movies.slice(0, 8);
const ROW_2_MOVIES = movies.slice(8, 16);

export function BackdropSlider({ className = "" }: BackdropSliderProps) {
  return (
    <div className={`absolute inset-x-0 top-0 h-[50%] overflow-hidden ${className}`}>
      {/* Diagonal container */}
      <div
        className="absolute inset-0 origin-top-left scale-110"
        style={{ transform: "skewY(-4deg) translateY(-30px)" }}
      >
        {/* Backdrop marquee rows */}
        <div className="flex h-full flex-col justify-center gap-4">
          <MovieMarqueeRow movies={ROW_1_MOVIES} direction="left" speed={35} />
          <MovieMarqueeRow movies={ROW_2_MOVIES} direction="right" speed={40} />
        </div>
      </div>

      {/* Vignette effect */}
      <VignetteOverlay />

      {/* Edge fade effects */}
      <EdgeFades />
    </div>
  );
}

interface MovieMarqueeRowProps {
  movies: MovieWithLogo[];
  direction: "left" | "right";
  speed: number;
}

function MovieMarqueeRow({ movies, direction, speed }: MovieMarqueeRowProps) {
  const duplicatedMovies = [...movies, ...movies];

  return (
    <MarqueeRow direction={direction} speed={speed} gap={4}>
      {duplicatedMovies.map((movie, index) => (
        <MovieCard key={`${movie.id}-${index}`} movie={movie} />
      ))}
    </MarqueeRow>
  );
}

interface MovieCardProps {
  movie: MovieWithLogo;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="relative h-[138px] w-[245px] flex-shrink-0 overflow-hidden rounded-lg md:h-[173px] md:w-[307px]">
      {/* Backdrop image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${TMDB_IMAGE_BASE}${movie.backdrop_path}`}
        alt={movie.title}
        className="h-full w-full object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Logo image - bottom center */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${TMDB_LOGO_BASE}${movie.logo_path}`}
          alt={`${movie.title} logo`}
          className="h-auto max-h-[40px] w-auto max-w-[161px] object-contain drop-shadow-lg md:max-h-[52px] md:max-w-[207px]"
        />
      </div>
    </div>
  );
}

function VignetteOverlay() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 120% 100% at 50% 0%, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 100%)",
      }}
    />
  );
}

function EdgeFades() {
  return (
    <>
      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 to-transparent" />

      {/* Left/right fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </>
  );
}
