"use client";

import { useEffect, useState } from "react";

const phrases = [
  "small businesses.",
  "creators.",
  "local brands.",
  "service-based businesses.",
  "websites built to generate enquiries.",
];

export function HeroTypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex];
  const visibleText = currentPhrase.slice(0, letterIndex);

  useEffect(() => {
    const typingSpeed = isDeleting ? 35 : 70;
    const pauseTime = 1300;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && letterIndex < currentPhrase.length) {
          setLetterIndex((current) => current + 1);
          return;
        }

        if (!isDeleting && letterIndex === currentPhrase.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && letterIndex > 0) {
          setLetterIndex((current) => current - 1);
          return;
        }

        if (isDeleting && letterIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((current) =>
            current === phrases.length - 1 ? 0 : current + 1,
          );
        }
      },
      !isDeleting && letterIndex === currentPhrase.length
        ? pauseTime
        : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [currentPhrase, isDeleting, letterIndex]);

  return (
    <p className="mt-5 text-lg font-semibold text-slate-200 md:text-xl">
      Websites for{" "}
      <span className="text-blue-300">
        {visibleText}
        <span className="ml-1 inline-block animate-pulse text-blue-400">|</span>
      </span>
    </p>
  );
}
