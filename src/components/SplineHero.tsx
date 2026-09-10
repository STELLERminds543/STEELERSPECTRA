import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, Minimize2, RotateCcw, Volume2, VolumeX, Sparkles, ExternalLink } from 'lucide-react';
import { SplineSceneConfig, AppPage } from '../types';
import { SPLINE_SCENES } from '../data/spectrascanData';
import { playTactileClick, toggleAudio, isAudioEnabled } from '../utils/audio';

interface SplineHeroProps {
  scene: SplineSceneConfig;
  onNavigate?: (page: AppPage) => void;
  currentPage?: AppPage;
  scrollToId?: string;
}

export const SplineHero: React.FC<SplineHeroProps> = ({
  scene,
  onNavigate,
  currentPage,
  scrollToId,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [audioOn, setAudioOn] = useState(isAudioEnabled());
  const [key, setKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(true);
  }, [scene.splineUrl, key]);

  const handleReload = () => {
    playTactileClick();
    setKey((prev) => prev + 1);
  };

  const handleToggleFullscreen = async () => {
    playTactileClick();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch {
        window.open(scene.splineUrl, '_blank');
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleToggleAudio = () => {
    const updated = toggleAudio();
    setAudioOn(updated);
    if (updated) playTactileClick();
  };

  const handleScrollDown = () => {
    playTactileClick();
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: window.innerHeight * 0.88, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="spline-hero-container"
      className={`relative w-full overflow-hidden bg-[#030303] border-b border-[#2d2b27] select-none ${
        isFullscreen ? 'h-screen' : 'h-[750px] lg:h-[840px]'
      }`}
      aria-label={`${scene.title} Interactive 3D Scene`}
    >
      {/* Background blueprint grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(220,163,62,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(220,163,62,0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#070706]/90 backdrop-blur-md pointer-events-none">
          <div className="relative w-16 h-16 flex items-center justify-center mb-4">
            <div className="absolute inset-0 border-2 border-[#dca33e]/30 rounded-full animate-ping" />
            <div className="absolute inset-1 border-2 border-t-[#ff6326] border-r-transparent border-b-[#dca33e] border-l-transparent rounded-full animate-spin" />
            <Sparkles className="w-6 h-6 text-[#ff8246] animate-pulse" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#dca33e]">
            INITIALIZING 3D SPLINE SCENE...
          </p>
          <span className="font-mono text-[10px] text-[#7e786e] mt-1">
            {scene.title}
          </span>
        </div>
      )}

      {/* Embedded Live Spline 3D Scene */}
      <iframe
        key={key}
        id={`spline-iframe-${scene.id}`}
        src={scene.splineUrl}
        title={scene.title}
        onLoad={() => setIsLoading(false)}
        className="absolute inset-0 w-full h-full border-0 z-0"
        allow="fullscreen; accelerometer; gyroscope; magnetometer; xr-spatial-tracking"
        loading="eager"
      />

      {/* Top HUD Controls Overlay (pointer-events-none on parent, pointer-events-auto on buttons) */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* Left: Active Scene Badge */}
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded bg-[#0f0e0d]/85 border border-[#47433c] backdrop-blur-md shadow-lg shadow-black/60">
          <span className="w-2 h-2 rounded-full bg-[#ff6326] shadow-[0_0_8px_#ff6326] animate-pulse" />
          <span className="font-mono text-[11px] font-semibold text-[#f4be5c] tracking-wider">
            {scene.badge}
          </span>
        </div>

        {/* Center: Version Quick Switcher Chips */}
        {onNavigate && (
          <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded bg-[#0f0e0d]/85 border border-[#2d2b27] backdrop-blur-md">
            <button
              id="switch-to-v1-btn"
              onClick={() => { playTactileClick(); onNavigate('v1'); }}
              className={`font-mono text-[10px] px-2.5 py-1 rounded transition-all ${
                currentPage === 'v1'
                  ? 'bg-[#3d251a] text-[#ff8246] border border-[#ff6326] font-bold'
                  : 'text-[#b4ad9f] hover:text-white hover:bg-[#1c1b18]'
              }`}
            >
              V1: READ
            </button>
            <button
              id="switch-to-v2-btn"
              onClick={() => { playTactileClick(); onNavigate('v2'); }}
              className={`font-mono text-[10px] px-2.5 py-1 rounded transition-all ${
                currentPage === 'v2'
                  ? 'bg-[#3d251a] text-[#f4be5c] border border-[#dca33e] font-bold'
                  : 'text-[#b4ad9f] hover:text-white hover:bg-[#1c1b18]'
              }`}
            >
              V2: TRANSLATE
            </button>
            <button
              id="switch-to-v3-btn"
              onClick={() => { playTactileClick(); onNavigate('v3'); }}
              className={`font-mono text-[10px] px-2.5 py-1 rounded transition-all ${
                currentPage === 'v3'
                  ? 'bg-[#3d251a] text-[#ff8246] border border-[#ff6326] font-bold'
                  : 'text-[#b4ad9f] hover:text-white hover:bg-[#1c1b18]'
              }`}
            >
              V3: AI THINK
            </button>
            <button
              id="switch-to-diff-btn"
              onClick={() => { playTactileClick(); onNavigate('differentiation'); }}
              className={`font-mono text-[10px] px-2.5 py-1 rounded transition-all ${
                currentPage === 'differentiation'
                  ? 'bg-[#3d251a] text-[#f4be5c] border border-[#dca33e] font-bold'
                  : 'text-[#b4ad9f] hover:text-white hover:bg-[#1c1b18]'
              }`}
            >
              DIFFERENTIATION
            </button>
          </div>
        )}

        {/* Right: Functional Control Icons */}
        <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded bg-[#0f0e0d]/85 border border-[#47433c] backdrop-blur-md">
          <button
            id="toggle-audio-btn"
            onClick={handleToggleAudio}
            title={audioOn ? 'Mute Interface Sound FX' : 'Enable Interface Sound FX'}
            className="p-1.5 rounded hover:bg-[#2d2b27] text-[#b4ad9f] hover:text-[#f4be5c] transition-colors"
          >
            {audioOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-[#ff6326]" />}
          </button>
          <button
            id="reload-scene-btn"
            onClick={handleReload}
            title="Reload 3D Scene"
            className="p-1.5 rounded hover:bg-[#2d2b27] text-[#b4ad9f] hover:text-[#f4be5c] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            id="fullscreen-toggle-btn"
            onClick={handleToggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen 3D Mode'}
            className="p-1.5 rounded hover:bg-[#2d2b27] text-[#b4ad9f] hover:text-[#ff8246] transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <a
            id="open-spline-direct-link"
            href={scene.splineUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open Direct Spline Canvas"
            className="p-1.5 rounded hover:bg-[#2d2b27] text-[#b4ad9f] hover:text-[#f4be5c] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Floating Scrim & Title Callout */}
      <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="pointer-events-auto max-w-xl p-4 md:p-5 rounded-sm bg-[#0f0e0d]/90 border border-[#47433c] border-l-4 border-l-[#ff6326] backdrop-blur-lg shadow-2xl">
          <div className="flex items-center gap-2 text-[#dca33e] font-mono text-[11px] tracking-wider mb-1">
            <span>[ 3D IMMERSIVE CANVAS ]</span>
            <span>•</span>
            <span className="text-[#ff6326]">{scene.tagline}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-tight mb-1">
            {scene.title}
          </h2>
          <p className="text-xs md:text-sm text-[#b4ad9f] leading-relaxed">
            {scene.description}
          </p>
          <div className="mt-2.5 flex items-center gap-3 font-mono text-[10px] text-[#7e786e]">
            <span className="text-[#f4be5c]">INTERACTION:</span>
            <span>CLICK & DRAG TO ROTATE</span>
            <span>•</span>
            <span>SCROLL TO ZOOM</span>
          </div>
        </div>

        {/* Scroll Down Trigger */}
        <button
          id="hero-scroll-down-btn"
          onClick={handleScrollDown}
          className="pointer-events-auto self-start md:self-end flex items-center gap-2 px-4 py-2.5 rounded bg-[#171614]/90 hover:bg-[#ff6326] text-[#f4be5c] hover:text-[#070706] border border-[#dca33e] hover:border-[#ff8246] font-mono text-xs font-bold transition-all shadow-xl tracking-wider group"
        >
          <span>EXPLORE HARDWARE SPECIFICATIONS</span>
          <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
        </button>
      </div>

      {/* Vignette Gradients (don't block mouse) */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070706] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#070706]/70 to-transparent pointer-events-none z-10" />
    </section>
  );
};
