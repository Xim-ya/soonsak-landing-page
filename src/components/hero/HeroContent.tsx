"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import splashLogo from "@/assets/lottie/splash_logo.json";
import { AppStoreIcon, PlayStoreIcon } from "@/components/icons/StoreIcons";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import {
  FADE_IN_UP,
  CURSOR_BLINK,
  ANIMATION_DURATION,
  STAGGER_DELAY,
} from "@/constants/animation";

interface HeroContentProps {
  className?: string;
}

const TYPING_TEXTS = [
  "2시간짜리 영화",
  "16부작 드라마",
  "밀린 시즌물",
  "놓친 화제작",
  "밥 먹을 때 영화",
  "출퇴근길에 드라마",
];

// The longest text is used to maintain consistent width
const LONGEST_TEXT = "출퇴근길에 드라마";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.soonsak.app&hl=ko";

export function HeroContent({ className = "" }: HeroContentProps) {
  const { displayText } = useTypingAnimation({ texts: TYPING_TEXTS });

  const openInNewTab = (url: string) => () => window.open(url, "_blank");

  const showComingSoonAlert = () => {
    alert("아직 서비스 준비중이에요.\n조금만 기다려 주세요!");
  };

  return (
    <div
      className={`relative z-10 flex flex-col items-center justify-start pt-8 px-6 text-center ${className}`}
    >
      {/* Main copy - Typing effect */}
      <motion.div
        {...FADE_IN_UP}
        transition={{ duration: ANIMATION_DURATION.normal, delay: STAGGER_DELAY.normal }}
        className="mb-6 flex flex-col items-center gap-1"
      >
        <TypingDisplay displayText={displayText} placeholder={LONGEST_TEXT} />
        <div className="text-2xl font-medium text-gray-300 md:text-3xl">
          결말까지 <span className="font-bold text-[#19D67D]">20분</span>만에
        </div>
      </motion.div>

      {/* Logo */}
      <div className="mb-4 w-[100px] md:w-[120px]">
        <Lottie
          animationData={splashLogo}
          loop={false}
          autoplay={true}
          aria-label="순삭 로고"
        />
      </div>

      {/* Sub copy */}
      <motion.div
        {...FADE_IN_UP}
        transition={{
          duration: ANIMATION_DURATION.normal,
          delay: ANIMATION_DURATION.normal,
        }}
        className="mb-10 max-w-sm text-base text-gray-500 md:text-lg text-center"
      >
        <span className="flex items-center justify-center gap-1">
          <YouTubeIcon className="size-3 md:size-4" />
          <span>유튜브 영화 드라마 요약·리뷰</span>
        </span>
        <span>한 곳에서 순삭</span>
      </motion.div>

      {/* App download buttons */}
      <motion.div
        {...FADE_IN_UP}
        transition={{
          duration: ANIMATION_DURATION.normal,
          delay: ANIMATION_DURATION.normal + STAGGER_DELAY.normal,
        }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex gap-2 md:gap-3">
          <StoreButton
            icon={<AppStoreIcon className="size-5 md:size-6" />}
            label="App Store"
            onClick={showComingSoonAlert}
          />
          <StoreButton
            icon={<PlayStoreIcon className="size-5 md:size-6" />}
            label="Google Play"
            onClick={openInNewTab(PLAY_STORE_URL)}
            primary
          />
        </div>
        <p className="text-sm text-gray-500">지금 바로 순삭하기</p>
      </motion.div>
    </div>
  );
}

interface TypingDisplayProps {
  displayText: string;
  placeholder: string;
}

function TypingDisplay({ displayText, placeholder }: TypingDisplayProps) {
  return (
    <div className="relative whitespace-nowrap text-2xl font-medium text-white md:text-3xl">
      {/* Invisible placeholder to maintain width */}
      <span className="invisible">{placeholder}</span>
      {/* Actual text + cursor */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-[#19D67D]">{displayText}</span>
        <motion.span
          {...CURSOR_BLINK}
          className="inline-block h-7 w-[2px] bg-[#19D67D]"
        />
      </span>
    </div>
  );
}

interface StoreButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  primary?: boolean;
}

function StoreButton({ icon, label, onClick, primary = false }: StoreButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex items-center gap-2 md:gap-2.5 rounded-lg md:rounded-xl
        px-3 py-2 md:px-4 md:py-2.5
        border transition-colors duration-200
        ${primary
          ? "border-[#19D67D]/30 bg-[#19D67D]/10 hover:bg-[#19D67D]/20 hover:border-[#19D67D]/50"
          : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
        }
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className={primary ? "text-[#19D67D]" : "text-white"}>
        {icon}
      </div>
      <span className={`text-sm md:text-base font-semibold ${primary ? "text-[#19D67D]" : "text-white"}`}>
        {label}
      </span>
    </motion.button>
  );
}

function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        fill="#FF0000"
      />
      <path
        d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
