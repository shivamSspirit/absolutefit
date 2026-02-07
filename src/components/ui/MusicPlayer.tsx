"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const audio = new Audio("/background-music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = "auto";
    audioRef.current = audio;

    const handleCanPlay = () => setIsLoaded(true);
    audio.addEventListener("canplaythrough", handleCanPlay);

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };
    tryAutoplay();

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.pause();
      audio.src = "";
    };
  }, [mounted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      disabled={!mounted || !isLoaded}
      aria-label={isPlaying ? "Mute music" : "Play music"}
      className={`
        fixed z-[100]
        bottom-4 right-4
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8
        w-12 h-12 sm:w-14 sm:h-14
        rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${!mounted || !isLoaded ? "cursor-wait opacity-60" : "cursor-pointer"}
        ${isPlaying
          ? "bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] shadow-[0_0_25px_rgba(202,255,51,0.5),0_0_50px_rgba(202,255,51,0.2)]"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] shadow-[0_0_20px_rgba(255,45,45,0.4),0_0_40px_rgba(255,45,45,0.15)]"
        }
        border ${isPlaying ? "border-[#CAFF33]/60" : "border-white/20"}
        hover:scale-110 active:scale-95
        group
      `}
    >
      {isPlaying ? (
        <div className="flex items-end justify-center gap-[2px] sm:gap-[3px] h-5 sm:h-6">
          <span className="w-[3px] sm:w-[4px] rounded-full bg-gradient-to-t from-red-500 to-red-400 animate-soundbar1" />
          <span className="w-[3px] sm:w-[4px] rounded-full bg-gradient-to-t from-orange-500 to-orange-400 animate-soundbar2" />
          <span className="w-[3px] sm:w-[4px] rounded-full bg-gradient-to-t from-yellow-500 to-yellow-300 animate-soundbar3" />
          <span className="w-[3px] sm:w-[4px] rounded-full bg-gradient-to-t from-lime-500 to-lime-300 animate-soundbar4" />
          <span className="w-[3px] sm:w-[4px] rounded-full bg-gradient-to-t from-emerald-500 to-emerald-300 animate-soundbar5" />
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/70 group-hover:text-white transition-colors sm:w-[22px] sm:h-[22px]"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </svg>
      )}
    </button>
  );
}
