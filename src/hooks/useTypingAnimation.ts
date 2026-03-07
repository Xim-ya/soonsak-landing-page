"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface UseTypingAnimationOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

interface UseTypingAnimationReturn {
  displayText: string;
  isDeleting: boolean;
  currentIndex: number;
}

const DEFAULT_TYPING_SPEED = 100;
const DEFAULT_DELETING_SPEED = 50;
const DEFAULT_PAUSE_DURATION = 2000;

export function useTypingAnimation({
  texts,
  typingSpeed = DEFAULT_TYPING_SPEED,
  deletingSpeed = DEFAULT_DELETING_SPEED,
  pauseDuration = DEFAULT_PAUSE_DURATION,
}: UseTypingAnimationOptions): UseTypingAnimationReturn {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    // Completed typing current text - pause then start deleting
    if (!isDeleting && displayText === currentText) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return clearTimeoutRef;
    }

    // Completed deleting - move to next text
    if (isDeleting && displayText === "") {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 0);
      return clearTimeoutRef;
    }

    // Continue typing or deleting
    timeoutRef.current = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentText.slice(0, prev.length + 1)
      );
    }, speed);

    return clearTimeoutRef;
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration, clearTimeoutRef]);

  return {
    displayText,
    isDeleting,
    currentIndex: textIndex,
  };
}
