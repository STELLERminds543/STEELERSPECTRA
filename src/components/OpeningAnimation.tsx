import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Volume2, VolumeX, ArrowRight, ShieldCheck, Cpu, Sparkles } from 'lucide-react';
import {
  playTactileClick,
  playSystemBootSweep,
  playSystemReadyChime,
  isAudioEnabled,
  toggleAudio
} from '../utils/audio';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const BOOT_MESSAGES = [
  { step: '01/04', text: 'CALIBRATING 600 DPI MACRO CCD OPTICAL ARRAY', target: 25 },
  { step: '02/04', text: 'TUNING HAPTIC GUIDANCE MOTOR & SWEEP RATE SENSOR', target: 50 },
  { step: '03/04', text: 'MOUNTING OFFLINE ACOUSTIC SPEECH & 110+ LEXICONS', target: 75 },
  { step: '04/04', text: 'ENGAGING DUAL NPU COGNITIVE REASONING MATRIX', target: 100 },
];

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [soundOn, setSoundOn] = useState(isAudioEnabled());
  const [exiting, setExiting] = useState(false);

  // Trigger boot audio once on initial mount if sound enabled
  useEffect(() => {
    const timer = setTimeout(() => {
      playSystemBootSweep();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleFinish = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    playTactileClick();
    playSystemReadyChime();
    setTimeout(() => {
      onComplete();
    }, 500);
  }, [exiting, onComplete]);

  // Keyboard shortcut: Escape or Enter skips/enters
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  // Progress ticker simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        // Accelerating progress curve
        const increment = prev < 30 ? 2 : prev < 70 ? 3 : prev < 90 ? 4 : 2;
        const next = Math.min(100, prev + increment);

        // Update boot message based on percentage
        if (next >= 75) setCurrentMessageIdx(3);
        else if (next >= 50) setCurrentMessageIdx(2);
        else if (next >= 25) setCurrentMessageIdx(1);
        else setCurrentMessageIdx(0);

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Auto transition after finishing progress if user doesn't click
  useEffect(() => {
    if (progress >= 100) {
      const autoTimer = setTimeout(() => {
        handleFinish();
      }, 1400);
      return () => clearTimeout(autoTimer);
    }
  }, [progress, handleFinish]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !soundOn;
    setSoundOn(next);
    toggleAudio(next);
    if (next) playTactileClick();
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          id="opening-animation-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#070706] text-[#f5f1e8] flex flex-col justify-between select-none overflow-hidden"
        >
          {/* BACKGROUND RETICLE & SCAN GRID */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #3d251a 1px, transparent 1px),
                  linear-gradient(to bottom, #3d251a 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* CRT SCANLINE SHADER */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.6) 3px)',
            }}
          />

          {/* TOP TELEMETRY & SKIP CONTROLS */}
          <header className="relative z-10 p-6 max-w-7xl w-full mx-auto flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6326] shadow-[0_0_10px_#ff6326] animate-ping" />
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-widest uppercase">
                  SPECTRASCAN // INITIALIZATION PROTOCOL
                </span>
                <span className="text-[#7e786e] text-[10px] tracking-wider">
                  SYSTEM CORE VER 3.4.1 • STELLER MINDS LABS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Sound Toggle */}
              <button
                type="button"
                id="intro-sound-toggle-btn"
                onClick={toggleSound}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#171614] border border-[#3d251a] hover:border-[#ff6326] text-[#ded7c9] hover:text-white transition-colors"
                title="Toggle Audio"
              >
                {soundOn ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#ff6326]" />
                    <span className="text-[11px] font-mono">AUDIO: ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#7e786e]" />
                    <span className="text-[11px] font-mono text-[#7e786e]">MUTED</span>
                  </>
                )}
              </button>

              {/* Skip Button */}
              <button
                type="button"
                id="skip-intro-btn"
                onClick={handleFinish}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#171614] border border-[#ff6326] text-[#ff8246] hover:bg-[#3d251a] font-mono text-xs font-bold transition-all shadow-[0_0_12px_rgba(255,99,38,0.2)]"
              >
                <span>SKIP INTRO [ESC]</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </header>

          {/* MAIN RETICLE & APERTURE HERO STAGE */}
          <main className="relative z-10 flex flex-col items-center justify-center px-4 my-auto text-center">
            {/* OPTICAL RADAR APERTURE */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8">
              {/* Outer Degree Ring */}
              <div className="absolute inset-0 rounded-full border border-[#3d251a] flex items-center justify-center animate-spin [animation-duration:35s]">
                <span className="absolute top-1 text-[8px] font-mono text-[#7e786e]">000°</span>
                <span className="absolute right-1 text-[8px] font-mono text-[#7e786e]">090°</span>
                <span className="absolute bottom-1 text-[8px] font-mono text-[#7e786e]">180°</span>
                <span className="absolute left-1 text-[8px] font-mono text-[#7e786e]">270°</span>
              </div>

              {/* Middle Dashed Ring (Reverse Rotation) */}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#ff6326]/40 animate-spin [animation-duration:18s] [animation-direction:reverse]" />

              {/* Cyan Secondary Ring */}
              <div className="absolute inset-10 rounded-full border border-[#2dd4bf]/30" />

              {/* Laser Optical Sweep Beam */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none animate-spin [animation-duration:4s]"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(255,99,38,0.3) 0deg, rgba(255,99,38,0.02) 60deg, transparent 90deg)',
                }}
              />

              {/* Crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-[#3d251a]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-full w-[1px] bg-[#3d251a]" />
              </div>

              {/* Center Glowing Emblem Badge */}
              <div className="relative z-20 w-24 h-24 rounded-2xl bg-[#171614] border-2 border-[#dca33e] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(220,163,62,0.35)] transition-all">
                <Compass className="w-10 h-10 text-[#f4be5c] animate-pulse" />
                <span className="font-mono text-[8px] text-[#ff8246] tracking-widest mt-1 font-bold">
                  STELLER
                </span>
              </div>
            </div>

            {/* BRAND TITLE & MISSION STATEMENT */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="font-mono text-xs md:text-sm text-[#ff8246] tracking-[0.3em] uppercase mb-2 flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#f4be5c]" />
                <span>STELLER MINDS LABORATORY PRESENTS</span>
                <Sparkles className="w-3.5 h-3.5 text-[#f4be5c]" />
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase mb-3">
                SPECTRASCAN
              </h1>

              <p className="font-mono text-xs md:text-sm text-[#b4ad9f] tracking-wider uppercase">
                THE PHYSICAL ACCESSIBILITY & COGNITIVE READING SUITE
              </p>
            </div>

            {/* GENERATION STATUS TRIAD PILLS */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-lg w-full mb-8 font-mono text-[10px] md:text-xs">
              <div
                className={`p-2.5 rounded border transition-all ${
                  progress >= 25
                    ? 'bg-[#3d251a]/70 border-[#ff6326] text-white shadow-[0_0_12px_rgba(255,99,38,0.25)]'
                    : 'bg-[#171614] border-[#2d2b27] text-[#7e786e]'
                }`}
              >
                <div className="text-[#ff8246] font-bold">V1 OPTICAL</div>
                <div className="text-[9px] mt-0.5 opacity-80">600 DPI TTS</div>
              </div>

              <div
                className={`p-2.5 rounded border transition-all ${
                  progress >= 50
                    ? 'bg-[#132e2d]/70 border-[#2dd4bf] text-white shadow-[0_0_12px_rgba(45,212,191,0.25)]'
                    : 'bg-[#171614] border-[#2d2b27] text-[#7e786e]'
                }`}
              >
                <div className="text-[#2dd4bf] font-bold">V2 MULTILINGUAL</div>
                <div className="text-[9px] mt-0.5 opacity-80">110+ LANGUAGES</div>
              </div>

              <div
                className={`p-2.5 rounded border transition-all ${
                  progress >= 80
                    ? 'bg-[#2e1c14]/70 border-[#dca33e] text-white shadow-[0_0_12px_rgba(220,163,62,0.25)]'
                    : 'bg-[#171614] border-[#2d2b27] text-[#7e786e]'
                }`}
              >
                <div className="text-[#f4be5c] font-bold">V3 COGNITIVE AI</div>
                <div className="text-[9px] mt-0.5 opacity-80">EDGE REASONING</div>
              </div>
            </div>

            {/* LIVE CALIBRATION DIAGNOSTIC CONSOLE */}
            <div className="w-full max-w-md bg-[#0f0e0d] border border-[#2d2b27] rounded p-3 mb-6 font-mono text-left text-xs">
              <div className="flex items-center justify-between text-[#7e786e] text-[10px] mb-1.5 pb-1 border-b border-[#1f1d19]">
                <span>DIAGNOSTIC STATUS:</span>
                <span className="text-[#ff6326] font-bold">{progress}% COMPLETE</span>
              </div>
              <div className="flex items-center gap-2 text-[#ded7c9] text-[11px]">
                <span className="text-[#dca33e] font-bold">
                  [{BOOT_MESSAGES[currentMessageIdx].step}]
                </span>
                <span className="truncate">{BOOT_MESSAGES[currentMessageIdx].text}</span>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full max-w-md h-2 bg-[#171614] rounded-full overflow-hidden border border-[#2d2b27] mb-6 p-0.5">
              <div
                className="h-full rounded-full transition-all duration-100 ease-out"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #ff6326 0%, #2dd4bf 50%, #f4be5c 100%)',
                  boxShadow: '0 0 10px rgba(255, 99, 38, 0.5)',
                }}
              />
            </div>

            {/* ACTION / ENTER BUTTON */}
            <div>
              <button
                type="button"
                id="enter-spectrascan-btn"
                onClick={handleFinish}
                className={`px-8 py-3.5 rounded-lg font-mono text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-3 ${
                  isReady
                    ? 'bg-gradient-to-r from-[#ff6326] via-[#ff8246] to-[#f4be5c] text-[#070706] shadow-[0_0_25px_rgba(255,99,38,0.5)] scale-105 hover:scale-110'
                    : 'bg-[#171614] border border-[#3d251a] text-[#ded7c9] hover:border-[#ff6326] hover:text-white'
                }`}
              >
                <span>{isReady ? 'ENTER SPECTRASCAN' : 'COMMENCE INTERFACE'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </main>

          {/* BOTTOM FOOTER TELEMETRY */}
          <footer className="relative z-10 p-6 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between font-mono text-[11px] text-[#7e786e] border-t border-[#1f1d19]">
            <div>© {new Date().getFullYear()} STELLER MINDS // ACCESSIBLE HARDWARE INITIATIVE</div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]" />
              <span>OFFLINE FIRST • NO MANDATORY SUBSCRIPTIONS • 100% STANDALONE</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
