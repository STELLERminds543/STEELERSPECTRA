import React, { useState, useEffect } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

interface SystemTelemetryBarProps {
  currentViewName: string;
  onReplayIntro?: () => void;
}

export const SystemTelemetryBar: React.FC<SystemTelemetryBarProps> = ({ currentViewName, onReplayIntro }) => {
  const [timeString, setTimeString] = useState('12:00:00.0 UTC');
  const [isPhosphor, setIsPhosphor] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sm_spectra_theme');
    if (saved === 'amber-phosphor') {
      setIsPhosphor(true);
      document.documentElement.setAttribute('data-theme', 'amber-phosphor');
    }

    const interval = setInterval(() => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      const ms = String(Math.floor(now.getUTCMilliseconds() / 100));
      setTimeString(`${h}:${m}:${s}.${ms} UTC`);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const togglePhosphor = () => {
    playTactileClick();
    const next = !isPhosphor;
    setIsPhosphor(next);
    const themeName = next ? 'amber-phosphor' : 'retro-dark';
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('sm_spectra_theme', themeName);
  };

  return (
    <aside
      id="system-telemetry-bar"
      className="bg-[#0f0e0d] border-b border-[#2d2b27] text-xs py-1.5 px-4 sticky top-0 z-50 backdrop-blur-md"
      aria-label="Hardware System Telemetry"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
        {/* State / View indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff6326] shadow-[0_0_6px_#ff6326] animate-pulse" />
          <span className="text-[#7e786e] uppercase">SYS_VIEW:</span>
          <span className="text-[#f4be5c] font-semibold tracking-wider">
            {currentViewName}
          </span>
        </div>

        {/* Lineage Info (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2 text-[#b4ad9f]">
          <span className="text-[#7e786e]">LINEAGE:</span>
          <span>V1 [READ] • V2 [UNDERSTAND] • V3 [THINK]</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5">
          {onReplayIntro && (
            <button
              id="replay-intro-btn"
              onClick={() => {
                playTactileClick();
                onReplayIntro();
              }}
              title="Replay Hardware Boot & Opening Animation"
              className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#47433c] bg-[#171614] text-[#ded7c9] hover:border-[#ff6326] hover:text-[#ff8246] transition-all text-[10px]"
            >
              <RotateCcw className="w-3 h-3 text-[#ff6326]" />
              <span>REPLAY_INTRO</span>
            </button>
          )}

          <button
            id="phosphor-toggle-btn"
            onClick={togglePhosphor}
            title="Toggle Vintage Amber CRT Phosphor Shader"
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded border transition-all text-[10px] ${
              isPhosphor
                ? 'bg-[#3d251a] border-[#ff6326] text-[#ff8246]'
                : 'bg-[#171614] border-[#47433c] text-[#ded7c9] hover:border-[#dca33e] hover:text-[#f4be5c]'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#dca33e]" />
            <span>{isPhosphor ? 'PHOSPHOR: AMBER' : 'CRT_PHOSPHOR'}</span>
          </button>

          <span
            id="live-clock-display"
            className="text-[#ff6326] font-medium tracking-tight"
          >
            {timeString}
          </span>
        </div>
      </div>
    </aside>
  );
};
