"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AppStoreIcon, PlayStoreIcon } from "@/components/icons/StoreIcons";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import {
  FADE_IN_UP,
  FADE_IN_SCALE,
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

const APP_STORE_URL = "https://apps.apple.com";
const PLAY_STORE_URL = "https://play.google.com";

export function HeroContent({ className = "" }: HeroContentProps) {
  const { displayText } = useTypingAnimation({ texts: TYPING_TEXTS });

  const openInNewTab = (url: string) => () => window.open(url, "_blank");

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
        <div className="text-xl font-medium text-gray-300 md:text-2xl">
          결말까지 <span className="font-bold text-emerald-400">20분</span>만에
        </div>
      </motion.div>

      {/* Logo */}
      <motion.div
        {...FADE_IN_SCALE}
        transition={{
          duration: ANIMATION_DURATION.normal,
          delay: STAGGER_DELAY.large,
          ease: "easeOut",
        }}
        className="mb-4"
      >
        <Image
          src="/logo.svg"
          alt="순삭 로고"
          width={120}
          height={80}
          className="h-auto w-[80px] md:w-[120px]"
          priority
        />
      </motion.div>

      {/* Sub copy */}
      <motion.p
        {...FADE_IN_UP}
        transition={{
          duration: ANIMATION_DURATION.normal,
          delay: ANIMATION_DURATION.normal,
        }}
        className="mb-10 max-w-sm text-sm text-gray-500 md:text-base"
      >
        유튜브 영화·드라마 리뷰, 한 곳에서 순삭
      </motion.p>

      {/* App download Dock */}
      <motion.div
        {...FADE_IN_UP}
        transition={{
          duration: ANIMATION_DURATION.normal,
          delay: ANIMATION_DURATION.normal + STAGGER_DELAY.normal,
        }}
      >
        <Dock
          magnification={70}
          distance={100}
          direction="middle"
          className="border-emerald-500/20 bg-black/60"
        >
          <DockIcon
            className="bg-gradient-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800"
            onClick={openInNewTab(APP_STORE_URL)}
          >
            <AppStoreIcon className="size-6 text-white" />
          </DockIcon>
          <DockIcon
            className="bg-gradient-to-b from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600"
            onClick={openInNewTab(PLAY_STORE_URL)}
          >
            <PlayStoreIcon className="size-6 text-white" />
          </DockIcon>
        </Dock>
        <p className="mt-3 text-xs text-gray-500">앱 다운로드</p>
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
    <div className="relative whitespace-nowrap text-xl font-medium text-white md:text-2xl">
      {/* Invisible placeholder to maintain width */}
      <span className="invisible">{placeholder}</span>
      {/* Actual text + cursor */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-emerald-400">{displayText}</span>
        <motion.span
          {...CURSOR_BLINK}
          className="inline-block h-6 w-[2px] bg-emerald-400"
        />
      </span>
    </div>
  );
}
