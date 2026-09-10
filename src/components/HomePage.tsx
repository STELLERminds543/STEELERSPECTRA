import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Globe, Eye, UserCheck, GraduationCap, HeartHandshake, Layers, Box, Compass } from 'lucide-react';
import { AppPage } from '../types';
import { SPLINE_SCENES } from '../data/spectrascanData';
import { SplineHero } from './SplineHero';
import { KineticCanvas } from './KineticCanvas';
import { OpticalSimulator } from './OpticalSimulator';
import ConstellationGrid from './ui/constellation-grid';
import { playTactileClick } from '../utils/audio';

interface HomePageProps {
  onNavigate: (page: AppPage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [heroMode, setHeroMode] = useState<'constellation' | 'spline'>('constellation');
  const [activeSplineKey, setActiveSplineKey] = useState<keyof typeof SPLINE_SCENES>('v1');

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* PRIMARY HOMEPAGE HERO — CONSTELLATION GRID OR 3D SPLINE */}
      {heroMode === 'constellation' ? (
        <section className="relative w-full min-h-[90vh] lg:min-h-screen border-b border-[#2d2b27] overflow-hidden flex flex-col justify-center">
          {/* Top Hero Engine Switcher */}
          <div className="absolute top-6 right-6 z-30 flex items-center gap-2 font-mono text-[10px] bg-[#0f0e0d]/90 border border-[#47433c] px-3 py-1.5 rounded backdrop-blur-md">
            <span className="text-[#7e786e]">HERO ENGINE:</span>
            <button
              onClick={() => { playTactileClick(); setHeroMode('constellation'); }}
              className="px-2.5 py-1 rounded font-bold bg-[#ff6326] text-[#070706] shadow-[0_0_10px_rgba(255,99,38,0.4)]"
            >
              CONSTELLATION
            </button>
            <button
              onClick={() => { playTactileClick(); setHeroMode('spline'); }}
              className="px-2.5 py-1 rounded font-bold text-[#ded7c9] hover:text-[#f4be5c] transition-colors"
            >
              3D SPLINE
            </button>
          </div>

          {/* Interactive Constellation Grid Canvas Background */}
          <ConstellationGrid className="!h-[90vh] lg:!h-screen">
            {/* Overlay with exact requested typography:
                Minimalist font:
                1. First in white: WELCOME
                2. Under that: TO
                3. In yellow to orange transition: STELLER MINDS
            */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-12 flex flex-col items-center justify-center">
              {/* Hardware Division Badge */}
              <div className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171614]/90 border border-[#dca33e]/50 backdrop-blur-md text-[#f4be5c] font-mono text-xs mb-8 shadow-[0_0_20px_rgba(220,163,62,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#ff6326] animate-pulse" />
                <span className="tracking-widest uppercase">STELLER MINDS ACCESSIBILITY LABS</span>
              </div>

              {/* Minimalist Hero Typography */}
              <div className="space-y-1 sm:space-y-2 mb-6 select-none">
                {/* 1. First in white: WELCOME */}
                <div className="text-white text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] uppercase font-sans">
                  WELCOME
                </div>

                {/* 2. Under that: TO */}
                <div className="text-white/90 text-xl sm:text-3xl md:text-4xl font-light tracking-[0.35em] uppercase font-sans">
                  TO
                </div>

                {/* 3. In yellow to orange transition: STELLER MINDS */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight uppercase leading-none mt-2">
                  <span className="bg-gradient-to-r from-[#ffd166] via-[#f4be5c] via-[#ff9e3b] to-[#ff5416] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(255,99,38,0.25)]">
                    STELLER MINDS
                  </span>
                </h1>
              </div>

              {/* SpectraScan Product Announcement Subtitle */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#171614]/80 border border-[#2d2b27] backdrop-blur-sm font-mono text-xs sm:text-sm tracking-wider mb-6">
                <span className="text-[#7e786e]">PRESENTING PURPOSE-BUILT ACCESSIBILITY:</span>
                <span className="text-[#ff8246] font-bold">SPECTRASCAN</span>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-[#ded7c9] max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Transforming physical text into immediate speech, multilingual translation, and conversational AI understanding. Built for universal access.
              </p>

              {/* Interactive CTA Buttons */}
              <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
                <a
                  href="#meet-spectrascan"
                  onClick={playTactileClick}
                  className="px-6 py-3 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] font-mono text-xs font-bold transition-all shadow-[0_4px_18px_rgba(255,99,38,0.35)] flex items-center gap-2"
                >
                  <span>MEET SPECTRASCAN</span>
                  <span>↓</span>
                </a>

                <button
                  onClick={() => {
                    playTactileClick();
                    setHeroMode('spline');
                  }}
                  className="px-5 py-3 rounded bg-[#171614]/90 hover:bg-[#2e1c14] text-[#f4be5c] border border-[#dca33e] font-mono text-xs font-semibold transition-all flex items-center gap-2 shadow-[0_0_12px_rgba(220,163,62,0.15)]"
                >
                  <Box className="w-4 h-4 text-[#ff6326]" />
                  <span>3D SPLINE SCENES</span>
                </button>

                <button
                  onClick={() => { playTactileClick(); onNavigate('differentiation'); }}
                  className="px-5 py-3 rounded bg-[#171614]/90 hover:bg-[#2d2b27] text-[#ded7c9] border border-[#3d251a] hover:border-[#dca33e] font-mono text-xs font-semibold transition-all flex items-center gap-2"
                >
                  <span>COMPARE V1 · V2 · V3</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#dca33e]" />
                </button>
              </div>

              {/* Interactive Canvas Tip */}
              <p className="font-mono text-[10px] text-[#7e786e] tracking-wider uppercase">
                [ INTERACTIVE MESH: SWEEP CURSOR QUICKLY ACROSS GRID TO UNLEASH KINETIC SHOCKWAVES ]
              </p>
            </div>
          </ConstellationGrid>
        </section>
      ) : (
        /* 3D SPLINE HERO MODE */
        <div className="relative">
          {/* Engine Switcher */}
          <div className="absolute top-20 right-6 z-30 flex items-center gap-2 font-mono text-[10px] bg-[#0f0e0d]/90 border border-[#47433c] px-3 py-1.5 rounded backdrop-blur-md">
            <span className="text-[#7e786e]">HERO ENGINE:</span>
            <button
              onClick={() => { playTactileClick(); setHeroMode('constellation'); }}
              className="px-2.5 py-1 rounded font-bold text-[#ded7c9] hover:text-[#f4be5c] transition-colors"
            >
              CONSTELLATION
            </button>
            <button
              onClick={() => { playTactileClick(); setHeroMode('spline'); }}
              className="px-2.5 py-1 rounded font-bold bg-[#ff6326] text-[#070706] shadow-[0_0_10px_rgba(255,99,38,0.4)]"
            >
              3D SPLINE
            </button>
          </div>

          <SplineHero
            scene={SPLINE_SCENES[activeSplineKey]}
            onNavigate={onNavigate}
            currentPage="home"
            scrollToId="meet-spectrascan"
          />

          {/* Spline Scene Selector Bar */}
          <div className="bg-[#0f0e0d] border-b border-[#2d2b27] py-3 px-4">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <span className="text-[#7e786e]">SELECT 3D SPLINE SCENE EMBED:</span>
              <div className="flex flex-wrap gap-2">
                {(['v1', 'v2', 'v3', 'differentiation'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      playTactileClick();
                      setActiveSplineKey(key);
                    }}
                    className={`px-3 py-1 rounded text-xs transition-all ${
                      activeSplineKey === key
                        ? 'bg-[#3d251a] text-[#ff8246] border border-[#ff6326] font-bold shadow-[0_0_8px_rgba(255,99,38,0.3)]'
                        : 'bg-[#171614] border border-[#2d2b27] text-[#ded7c9] hover:border-[#47433c]'
                    }`}
                  >
                    {key === 'v1' && '01. V1 3D HERO (AI ANIMATION)'}
                    {key === 'v2' && '02. V2 3D HERO (ROTATING SECTION)'}
                    {key === 'v3' && '03. V3 3D HERO (DISCOVER AI)'}
                    {key === 'differentiation' && '04. DIFFERENTIATION 3D (DISTORTING)'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 01 — MEET SPECTRASCAN */}
      <section id="meet-spectrascan" className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 01 // OVERVIEW ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            MEET SPECTRASCAN
          </h2>
          <p className="text-base md:text-lg text-[#ded7c9] leading-relaxed">
            <strong className="text-white font-semibold">SpectraScan</strong> is a portable accessibility device that uses a precision camera and high-speed OCR to scan printed text, convert it into structured digital data, and make it easier to read, hear, translate, and understand.
          </p>
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="px-4 py-2 rounded bg-[#171614] border border-[#2d2b27] font-mono text-xs text-[#ded7c9] flex items-center gap-2">
            <span>📷</span> CAMERA SENSOR
          </span>
          <span className="px-4 py-2 rounded bg-[#171614] border border-[#2d2b27] font-mono text-xs text-[#ded7c9] flex items-center gap-2">
            <span>🔤</span> OPTICAL OCR
          </span>
          <span className="px-4 py-2 rounded bg-[#171614] border border-[#2d2b27] font-mono text-xs text-[#ded7c9] flex items-center gap-2">
            <span>🔊</span> TEXT-TO-SPEECH
          </span>
          <span className="px-4 py-2 rounded bg-[#171614] border border-[#2d2b27] font-mono text-xs text-[#ded7c9] flex items-center gap-2">
            <span>🌐</span> 110+ TRANSLATIONS
          </span>
          <span className="px-4 py-2 rounded bg-[#3d251a] border border-[#ff6326] font-mono text-xs text-[#ff8246] font-bold flex items-center gap-2 shadow-[0_0_10px_rgba(255,99,38,0.2)]">
            <span>🧠</span> NEURAL AI CONTEXT
          </span>
        </div>

        {/* Product Architecture Frame */}
        <div className="bg-[#0f0e0d] border border-[#47433c] border-t-2 border-t-[#dca33e] rounded shadow-2xl overflow-hidden">
          <div className="bg-[#171614] border-b border-[#2d2b27] px-4 py-2.5 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#ff6326]" />
              <span>THE SPECTRASCAN SYSTEM // SCANNING PEN + PORTABLE PROCESSING DECK</span>
            </div>
            <span className="text-[#f4be5c] hidden sm:inline">ALL-IN-ONE STANDALONE ARCHITECTURE</span>
          </div>

          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Device Anatomy Card 1 */}
            <div className="p-6 rounded bg-[#171614] border border-[#2d2b27] hover:border-[#dca33e] transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#ff6326] shadow-[0_0_8px_#ff6326]" />
                <h3 className="font-mono text-lg font-bold text-[#ff8246]">SCANNING PEN WAND</h3>
              </div>
              <p className="text-sm text-[#b4ad9f] leading-relaxed mb-4">
                Ultra-light ergonomic optical sensor with fixed white-and-amber LED guide array. Glides with calibrated friction directly against paper sentences.
              </p>
              <ul className="font-mono text-xs text-[#ded7c9] space-y-1.5 border-t border-[#2d2b27] pt-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#ff6326]">•</span> Sub-pixel 600 DPI macro sensor
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff6326]">•</span> Guided velocity vibration feedback
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff6326]">•</span> 60° to 90° angle tolerance
                </li>
              </ul>
            </div>

            {/* Right: Device Anatomy Card 2 */}
            <div className="p-6 rounded bg-[#171614] border border-[#2d2b27] hover:border-[#dca33e] transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#dca33e] shadow-[0_0_8px_#dca33e]" />
                <h3 className="font-mono text-lg font-bold text-[#f4be5c]">PORTABLE PROCESSING DECK</h3>
              </div>
              <p className="text-sm text-[#b4ad9f] leading-relaxed mb-4">
                Dedicated compute core, acoustic chamber speaker, high-contrast display, tactile mechanical switches, and long-life rechargeable lithium cell.
              </p>
              <ul className="font-mono text-xs text-[#ded7c9] space-y-1.5 border-t border-[#2d2b27] pt-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#dca33e]">•</span> 100% offline core intelligence
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#dca33e]">•</span> Sub-second sweep-to-audio latency
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#dca33e]">•</span> Multi-sensory: Display + Audio + Haptics
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#171614] border-t border-[#2d2b27] grid grid-cols-3 divide-x divide-[#2d2b27] text-center py-4 font-mono">
            <div>
              <div className="text-xl md:text-2xl font-bold text-[#f4be5c]">100%</div>
              <div className="text-[11px] text-[#7e786e] uppercase">Standalone Core</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-[#ff8246]">&lt; 0.25s</div>
              <div className="text-[11px] text-[#7e786e] uppercase">OCR Latency</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">Tri-Sensory</div>
              <div className="text-[11px] text-[#7e786e] uppercase">Display + Speech + Touch</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — THE PROBLEM (LOCKED PAGE & BARRIERS) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 02 // THE CHALLENGE ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            INFORMATION IS EVERYWHERE. ACCESS ISN'T.
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Every day, millions of people encounter vital printed text that remains locked behind sensory, linguistic, or cognitive barriers.
          </p>
        </div>

        {/* Central Hub & Surrounding Barriers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27] border-l-4 border-l-[#ff6326]">
            <Globe className="w-8 h-8 text-[#ff6326] mb-3" />
            <h3 className="font-bold text-white text-base mb-2">Language Barriers</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed">
              Foreign documentation, travel signage, medication instructions, and institutional forms written in unfamiliar scripts.
            </p>
          </div>

          <div className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27] border-l-4 border-l-[#dca33e]">
            <BookOpen className="w-8 h-8 text-[#f4be5c] mb-3" />
            <h3 className="font-bold text-white text-base mb-2">Reading Difficulties & Dyslexia</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed">
              Letters scramble, crowd, and fatigue the reader, turning ordinary school textbooks and reports into exhausting obstacles.
            </p>
          </div>

          <div className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27] border-l-4 border-l-[#dca33e]">
            <Eye className="w-8 h-8 text-[#f4be5c] mb-3" />
            <h3 className="font-bold text-white text-base mb-2">Visual Impairment & Low Vision</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed">
              Dim lighting, tiny 8pt print, cataracts, or low visual acuity prevent reading printed labels and bills without magnifying gear.
            </p>
          </div>

          <div className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27] border-l-4 border-l-[#ff6326]">
            <Layers className="w-8 h-8 text-[#ff6326] mb-3" />
            <h3 className="font-bold text-white text-base mb-2">Complex Information & Math</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed">
              Dense academic jargon, algebraic formulas, and convoluted legalese exclude older adults, diverse learners, and researchers.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 rounded bg-[#1e130d] border border-[#ff6326]/40 text-center font-mono text-xs text-[#f4be5c]">
          <span className="text-[#ff6326] font-bold">[ THE BRIDGE ]</span> SPECTRASCAN TRANSLATES STATIC PRINT INTO AUDIBLE, INTERACTIVE, TRANSLATED KNOWLEDGE.
        </div>
      </section>

      {/* SECTION 03 — WHO WE HELP */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 03 // HUMAN-CENTERED IMPACT ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            BUILT FOR PEOPLE, NOT JUST TECHNOLOGY
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            SpectraScan was engineered for real individuals navigating practical daily hurdles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] transition-all">
            <BookOpen className="w-8 h-8 text-[#dca33e] mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Dyslexia & Learning Support</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed mb-4">
              Real-time text-to-speech audio lets readers follow sentences without strain, building vocabulary and reading confidence.
            </p>
            <span className="font-mono text-[10px] text-[#f4be5c] uppercase">AUDIO PACING • DYSLEXIA FRIENDLY</span>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#ff6326] transition-all">
            <Globe className="w-8 h-8 text-[#ff6326] mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Multilingual Travelers & Expats</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed mb-4">
              Instantly decode foreign menus, railway tickets, transit signs, and museum placards across 110+ languages offline.
            </p>
            <span className="font-mono text-[10px] text-[#ff8246] uppercase">OFFLINE LEXICON • 110+ SCRIPTS</span>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] transition-all">
            <Eye className="w-8 h-8 text-[#dca33e] mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Low-Vision Readers</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed mb-4">
              Tactile guided vibration alerts the user if the scanner drifts off the line, while clear acoustic speech reads the sentence aloud.
            </p>
            <span className="font-mono text-[10px] text-[#f4be5c] uppercase">HAPTIC ALIGNMENT • 1.2W ACOUSTICS</span>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] transition-all">
            <UserCheck className="w-8 h-8 text-[#dca33e] mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Older Adults & Seniors</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed mb-4">
              Zero complicated smartphone apps, logins, or multi-step touchscreen gestures. A simple, physical, single-purpose instrument.
            </p>
            <span className="font-mono text-[10px] text-[#f4be5c] uppercase">PHYSICAL SWITCHES • ZERO DISTRACTIONS</span>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#ff6326] transition-all">
            <GraduationCap className="w-8 h-8 text-[#ff6326] mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Students & STEM Researchers</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed mb-4">
              Scan dense math equations, scientific papers, and foreign terminology. Receive instant step-by-step logic proofs and definitions.
            </p>
            <span className="font-mono text-[10px] text-[#ff8246] uppercase">MATH SOLVER • CONTEXTUAL Q&A</span>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] transition-all">
            <HeartHandshake className="w-8 h-8 text-[#dca33e] mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Schools, NGOs & Libraries</h3>
            <p className="text-xs text-[#b4ad9f] leading-relaxed mb-4">
              Purpose-engineered for institutional lending and community access programs, providing durable physical reading equipment.
            </p>
            <span className="font-mono text-[10px] text-[#f4be5c] uppercase">COMMUNITY DEPLOYMENT READY</span>
          </div>
        </div>
      </section>

      {/* SECTION 04 — HOW IT WORKS (PIPELINE & SIMULATOR) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 04 // THE PIPELINE ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            FROM PRINTED TEXT TO UNDERSTANDING
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            A seamless 5-stage transformation that turns physical ink into accessible knowledge.
          </p>
        </div>

        {/* 5 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          <div className="p-4 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <div className="font-mono text-[10px] text-[#dca33e] font-bold mb-1">STAGE 01</div>
            <div className="text-2xl mb-2">📷</div>
            <h4 className="font-bold text-white text-sm mb-1">Scan</h4>
            <p className="text-xs text-[#7e786e]">Camera in the wand tip glides with uniform illumination across paper text.</p>
          </div>

          <div className="p-4 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <div className="font-mono text-[10px] text-[#dca33e] font-bold mb-1">STAGE 02</div>
            <div className="text-2xl mb-2">🔤</div>
            <h4 className="font-bold text-white text-sm mb-1">OCR</h4>
            <p className="text-xs text-[#7e786e]">Sub-pixel character recognition parses pixels into raw character bytes.</p>
          </div>

          <div className="p-4 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <div className="font-mono text-[10px] text-[#dca33e] font-bold mb-1">STAGE 03</div>
            <div className="text-2xl mb-2">⚙️</div>
            <h4 className="font-bold text-white text-sm mb-1">Process</h4>
            <p className="text-xs text-[#7e786e]">Embedded DSP cleans noise, aligns sentence tokens, and verifies grammar.</p>
          </div>

          <div className="p-4 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <div className="font-mono text-[10px] text-[#dca33e] font-bold mb-1">STAGE 04</div>
            <div className="text-2xl mb-2">🧠</div>
            <h4 className="font-bold text-white text-sm mb-1">Understand</h4>
            <p className="text-xs text-[#7e786e]">Translates languages, queries dictionary models, or solves mathematical formulas.</p>
          </div>

          <div className="p-4 rounded bg-[#1e130d] border border-[#ff6326]/50">
            <div className="font-mono text-[10px] text-[#ff8246] font-bold mb-1">STAGE 05</div>
            <div className="text-2xl mb-2 text-[#ff6326]">🔊</div>
            <h4 className="font-bold text-[#ff8246] text-sm mb-1">Output</h4>
            <p className="text-xs text-[#b4ad9f]">Text is spoken aloud via TTS, displayed on screen, or simplified into summaries.</p>
          </div>
        </div>

        {/* Live Interactive Scanner Simulator */}
        <OpticalSimulator />
      </section>

      {/* SECTION 05 — THE THREE GENERATIONS (TRIAD CARDS) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 05 // THE THREE GENERATIONS ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            THREE VERSIONS. ONE MISSION.
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Each generation represents a targeted leap in human capability, from portable reading to global dialogue and deep cognitive intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* V1 Card */}
          <div className="bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] rounded flex flex-col justify-between p-6 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1e130d] border border-[#573727] text-[#f4be5c]">
                  GEN 01
                </span>
                <span className="font-mono text-xs font-bold text-white">SPECTRASCAN V1</span>
              </div>

              {/* 3D Model Quick Preview Tag */}
              <div className="p-3 mb-4 rounded bg-[#171614] border border-[#2d2b27] font-mono text-xs">
                <span className="text-[#ff6326] font-bold">[ 3D HERO ]</span> 3D AI Web Animation
              </div>

              <div className="mb-4">
                <span className="font-mono text-[10px] text-[#7e786e] block uppercase">PHILOSOPHY //</span>
                <h3 className="text-2xl font-bold text-[#f4be5c]">"I CAN READ IT."</h3>
                <p className="text-xs text-[#b4ad9f] mt-1">Portable accessible reading & audio playback.</p>
              </div>

              <p className="text-xs text-[#ded7c9] leading-relaxed mb-6">
                The foundational rugged accessibility unit. Compact scanning head, physical mechanical switches, transflective LCD screen, and instant local Text-to-Speech.
              </p>
            </div>

            <button
              onClick={() => { playTactileClick(); onNavigate('v1'); }}
              className="w-full py-2.5 rounded bg-[#171614] hover:bg-[#dca33e] text-[#f4be5c] hover:text-[#070706] border border-[#dca33e] font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>EXPLORE SPECTRASCAN V1</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* V2 Card */}
          <div className="bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] rounded flex flex-col justify-between p-6 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#2e1c14] border border-[#dca33e] text-[#f4be5c]">
                  GEN 02
                </span>
                <span className="font-mono text-xs font-bold text-white">SPECTRASCAN V2</span>
              </div>

              <div className="p-3 mb-4 rounded bg-[#171614] border border-[#2d2b27] font-mono text-xs">
                <span className="text-[#f4be5c] font-bold">[ 3D HERO ]</span> 3D Rotating Interactive Hero
              </div>

              <div className="mb-4">
                <span className="font-mono text-[10px] text-[#7e786e] block uppercase">PHILOSOPHY //</span>
                <h3 className="text-2xl font-bold text-[#f4be5c]">"I CAN UNDERSTAND IT."</h3>
                <p className="text-xs text-[#b4ad9f] mt-1">110+ languages & conversational bridge.</p>
              </div>

              <p className="text-xs text-[#ded7c9] leading-relaxed mb-6">
                The ergonomic pen wand leap. Supporting 110+ global languages, instant offline dictionary lookups, and real-time bidirectional Speech-to-Speech face-to-face dialogue.
              </p>
            </div>

            <button
              onClick={() => { playTactileClick(); onNavigate('v2'); }}
              className="w-full py-2.5 rounded bg-[#171614] hover:bg-[#dca33e] text-[#f4be5c] hover:text-[#070706] border border-[#dca33e] font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>EXPLORE SPECTRASCAN V2</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* V3 Card */}
          <div className="bg-[#1e130d]/50 border-2 border-[#ff6326] rounded flex flex-col justify-between p-6 transition-all shadow-[0_0_20px_rgba(255,99,38,0.15)] group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ff6326] text-[#070706] font-extrabold">
                  GEN 03 FLAGSHIP
                </span>
                <span className="font-mono text-xs font-bold text-[#ff8246]">SPECTRASCAN V3</span>
              </div>

              <div className="p-3 mb-4 rounded bg-[#171614] border border-[#ff6326]/50 font-mono text-xs">
                <span className="text-[#ff6326] font-bold">[ 3D HERO ]</span> 3D Discover AI Spatial Canvas
              </div>

              <div className="mb-4">
                <span className="font-mono text-[10px] text-[#7e786e] block uppercase">PHILOSOPHY //</span>
                <h3 className="text-2xl font-bold text-[#ff8246]">"I CAN THINK WITH IT."</h3>
                <p className="text-xs text-[#f4be5c] mt-1">Cognitive AI comprehension & math solver.</p>
              </div>

              <p className="text-xs text-[#ded7c9] leading-relaxed mb-6">
                The cognitive flagship. Sculpted stylus and 7-inch edge-to-edge capacitive OLED deck equipped with conversational AI document Q&A, paragraph summaries, and step-by-step mathematical reasoning.
              </p>
            </div>

            <button
              onClick={() => { playTactileClick(); onNavigate('v3'); }}
              className="w-full py-2.5 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(255,99,38,0.3)]"
            >
              <span>EXPLORE SPECTRASCAN V3</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 06 — CORE TECHNOLOGY SUBSYSTEMS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 06 // BUILDING BLOCKS ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            THE TECHNOLOGY BEHIND SPECTRASCAN
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Eight integrated core subsystems engineered to work together as a unified accessibility instrument.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '📷', title: 'Macro Camera', desc: 'Linear high-framerate CMOS sensor with macro optics.' },
            { icon: '🔤', title: 'Sub-Pixel OCR', desc: 'Extracts clean digital text even on degraded paper.' },
            { icon: '🔊', title: 'Text-to-Speech', desc: 'Natural voice synthesis through internal acoustic speaker.' },
            { icon: '🌐', title: '110+ Translation', desc: 'Cross-linguistic dictionary models for immediate speech.' },
            { icon: '📖', title: 'Lexicon Lookup', desc: 'Instant offline definition synthesis for unfamiliar terms.' },
            { icon: '🎙️', title: 'Speech-to-Speech', desc: 'Bidirectional conversational translation for dialogue.' },
            { icon: '🧠', title: 'AI Reasoning', desc: 'Contextual comprehension, Q&A, summaries, and math logic.' },
            { icon: '📳', title: 'Guided Haptics', desc: 'Precision eccentric vibration cues guiding sweep velocity.' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] transition-colors">
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-[#7e786e] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 07 — FINAL HOME CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="p-8 md:p-14 rounded bg-[#0f0e0d] border border-[#3d251a] border-t-4 border-t-[#ff6326] text-center shadow-2xl relative overflow-hidden">
          <div className="inline-block px-3 py-1 rounded bg-[#ff6326]/20 border border-[#ff6326] text-[#ff8246] font-mono text-xs font-bold mb-4">
            ACCESSIBLE INFORMATION REVOLUTION
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase max-w-3xl mx-auto mb-4">
            FROM READING TO UNDERSTANDING
          </h2>

          <p className="text-sm md:text-base text-[#b4ad9f] max-w-2xl mx-auto mb-8 leading-relaxed">
            What begins as a simple optical scan becomes knowledge you can read, hear, translate, define, question, and think with.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <button
              onClick={() => { playTactileClick(); onNavigate('v1'); }}
              className="px-5 py-2.5 rounded bg-[#171614] hover:bg-[#dca33e] text-[#f4be5c] hover:text-[#070706] border border-[#dca33e] font-mono text-xs font-bold transition-all"
            >
              EXPLORE V1 →
            </button>
            <button
              onClick={() => { playTactileClick(); onNavigate('v2'); }}
              className="px-5 py-2.5 rounded bg-[#171614] hover:bg-[#dca33e] text-[#f4be5c] hover:text-[#070706] border border-[#dca33e] font-mono text-xs font-bold transition-all"
            >
              EXPLORE V2 →
            </button>
            <button
              onClick={() => { playTactileClick(); onNavigate('v3'); }}
              className="px-6 py-2.5 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] font-mono text-xs font-bold transition-all shadow-[0_2px_12px_rgba(255,99,38,0.3)]"
            >
              EXPLORE V3 →
            </button>
          </div>

          <button
            onClick={() => { playTactileClick(); onNavigate('differentiation'); }}
            className="font-mono text-xs text-[#f4be5c] hover:underline"
          >
            Want to see all 3 versions compared side-by-side? View Differentiation Matrix →
          </button>
        </div>
      </section>
    </div>
  );
};
