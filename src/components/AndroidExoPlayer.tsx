/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Play, Volume2, ShieldAlert, Cpu } from 'lucide-react';

interface AndroidExoPlayerProps {
  videoUrl?: string;
  videoID?: string;
  title?: string;
  isLocked?: boolean;
  onUnlockClick?: () => void;
  onPlay?: () => void;
}

export default function AndroidExoPlayer({
  videoUrl,
  videoID,
  title = "סרטון הדרכה",
  isLocked = false,
  onUnlockClick,
  onPlay
}: AndroidExoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    if (onPlay) {
      onPlay();
    }
  };

  // Resolve dynamic sources: supporting both url or dynamic ID (Vimeo / MP4 streams / YouTube)
  let finalSrc = "";
  if (videoUrl) {
    finalSrc = videoUrl;
  } else if (videoID) {
    // If we only have a videoID, default to youtube embed but we can support any provider
    finalSrc = `https://www.youtube.com/embed/${videoID}`;
  } else {
    // Fallback default
    finalSrc = "https://www.youtube.com/embed/S_8n0l6_aIE";
  }

  // Auto-play on overlay button clicked
  if (isPlaying && finalSrc.includes("youtube.com") && !finalSrc.includes("autoplay=1")) {
    finalSrc += finalSrc.includes("?") ? "&autoplay=1" : "?autoplay=1";
  }

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden bg-zinc-950 border border-[#1a1a24] relative shadow-lg group select-none" id="exo-player-container">
      {isLocked ? (
        // Premium Locked State Cover
        <div 
          onClick={onUnlockClick}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/85 text-center p-4 cursor-pointer gap-2"
        >
          <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-1">
            <span className="text-amber-500 text-lg">🔒</span>
          </div>
          <span className="text-xs font-black text-amber-300">תוכן פרימיום נעול (ExoPlayer Shield)</span>
          <span className="text-[10px] text-zinc-400 max-w-[85%] leading-relaxed">
            לחץ על מנת לפתוח את הרמה ולצפות בסרטון התרגול המלא.
          </span>
        </div>
      ) : !isPlaying ? (
        // Unloaded Poster with centered overlay play button
        <div 
          onClick={handlePlay}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-[#0e0e15] to-[#040406] cursor-pointer"
        >
          {/* Subtle ExoPlayer technology brand tag in upper corner */}
          <div className="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded bg-black/60 border border-zinc-800 text-[8px] font-mono font-medium text-zinc-400 tracking-wide flex items-center gap-1">
            <Cpu className="w-2.5 h-2.5 text-[#007BFF]" />
            <span>MEDIA3:EXOPLAYER</span>
          </div>

          <div className="absolute top-2.5 left-2.5 text-[9px] font-black text-zinc-500 max-w-[60%] truncate">
            {title}
          </div>

          {/* Centered Play Button with premium glow effect */}
          <div className="relative group-hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0 rounded-full bg-[#007BFF]/25 blur-md group-hover:bg-[#007BFF]/35 transition-all duration-200" />
            <div className="relative w-14 h-14 rounded-full bg-zinc-900 border border-[#007BFF]/40 flex items-center justify-center shadow-2xl">
              <Play className="w-5 h-5 text-[#007BFF] fill-[#007BFF]/10 ml-0.5" />
            </div>
          </div>
          
          <span className="text-[9px] text-[#007BFF] font-extrabold mt-3 tracking-wide">
            לחץ לניגון בנגן המדיה
          </span>
        </div>
      ) : (
        // Playing layout wrapping native Web Frame
        <div className="w-full h-full relative">
          <iframe 
            src={finalSrc}
            title={title}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            referrerPolicy="no-referrer"
          />

          {/* Floating minimal ExoPlayer Controller indicator at the bottom (Fades on active cursor) */}
          <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2 flex items-center justify-between text-white text-[8px] font-mono pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                STREAMING
              </span>
              <span className="text-zinc-400">1080p Ultra-HD</span>
            </div>
            
            <div className="flex items-center gap-2 text-zinc-550">
              <span>H.264 / AAC</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">ExoPlayer v1.1.0</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
