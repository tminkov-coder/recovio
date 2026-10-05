import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import appLogo from '../assets/images/app_logo_1780247868814.svg';

interface AnimatedSplashScreenProps {
  onComplete: () => void;
}

export default function AnimatedSplashScreen({ onComplete }: AnimatedSplashScreenProps) {
  const [showGlow, setShowGlow] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show glow / start neon pulse after the scale-up finishes (or subtly right after)
    const glowTimer = setTimeout(() => {
      setShowGlow(true);
    }, 800);

    // Wait 1000ms before fading in the text "Recovio Academy"
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    // After 2800ms total, complete the splash sequence
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(glowTimer);
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="absolute inset-0 bg-black flex flex-col items-center justify-center z-50 select-none overflow-hidden h-full w-full">
      {/* Background layer to ensure complete solid pitch black */}
      <div className="absolute inset-0 bg-black" />

      {/* Center Group with high-contrast electric blue aura */}
      <div className="relative flex flex-col items-center justify-center p-8 z-10">
        
        {/* Glow aura (Electric Blue) backdrop pulsing with neon effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: showGlow ? [0.25, 0.65, 0.25] : 0,
            scale: showGlow ? [1, 1.25, 1] : 0.8,
          }}
          transition={{
            opacity: { repeat: Infinity, duration: 2.0, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: 2.0, ease: "easeInOut" },
            initial: { duration: 0.5 }
          }}
          className="absolute w-44 h-44 rounded-full bg-[#007BFF] blur-[46px] pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* The elegant high-contrast Recovio Logo image with overshoot scale zoom */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.0, // 1000ms scale-up and fade-in
            ease: [0.16, 1, 0.3, 1] // modern ease-out expo-style
          }}
          className="relative z-10 w-24 h-24 rounded-full bg-black/90 flex items-center justify-center border-2 border-[#007BFF]/50 shadow-[0_0_35px_rgba(0,123,255,0.6)] overflow-hidden"
        >
          <img
            src={appLogo}
            alt="Recovio Logo"
            className="w-[90%] h-[90%] rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Vertically Aligned Branding Text Box */}
        <div className="h-14 mt-5 flex items-center justify-center">
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-center z-10 flex flex-col items-center"
              >
                <h1 className="text-sm font-black text-white tracking-[0.25em] font-sans uppercase">
                  RECOVIO
                </h1>
                <span className="text-[10px] text-[#007BFF] font-black tracking-[0.35em] uppercase block mt-1.5">
                  ACADEMY
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
