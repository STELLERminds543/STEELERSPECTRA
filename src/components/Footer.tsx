import React from 'react';
import { Compass } from 'lucide-react';
import { AppPage } from '../types';
import { playTactileClick } from '../utils/audio';

interface FooterProps {
  onNavigate: (page: AppPage) => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplayIntro }) => {
  const handleNav = (page: AppPage) => {
    playTactileClick();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#070706] border-t border-[#2d2b27] py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <div className="w-7 h-7 rounded bg-[#1e130d] border border-[#dca33e] flex items-center justify-center">
              <Compass className="w-4 h-4 text-[#f4be5c]" />
            </div>
            <span className="font-bold text-white text-base tracking-[0.14em]">
              STELLER MINDS
            </span>
          </div>
          <p className="font-mono text-[11px] text-[#7e786e] max-w-md">
            &copy; 2026 STELLER MINDS. ALL RIGHTS RESERVED. SPECTRASCAN PURPOSE-BUILT ACCESSIBILITY PLATFORM.
          </p>
        </div>

        {/* Center: Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#b4ad9f]">
          <button onClick={() => handleNav('home')} className="hover:text-[#f4be5c] transition-colors">
            Home
          </button>
          <button onClick={() => handleNav('v1')} className="hover:text-[#f4be5c] transition-colors">
            SpectraScan V1
          </button>
          <button onClick={() => handleNav('v2')} className="hover:text-[#f4be5c] transition-colors">
            SpectraScan V2
          </button>
          <button onClick={() => handleNav('v3')} className="hover:text-[#f4be5c] transition-colors">
            SpectraScan V3
          </button>
          <button onClick={() => handleNav('differentiation')} className="hover:text-[#f4be5c] transition-colors">
            Differentiation
          </button>
          {onReplayIntro && (
            <button
              onClick={() => {
                playTactileClick();
                onReplayIntro();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#f4be5c] hover:text-[#ff8246] transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Opening Animation ↺</span>
            </button>
          )}
          <a
            href="https://www.instagram.com/steller_minds11?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff8246] hover:text-[#ff6326] transition-colors font-semibold"
          >
            Instagram (@steller_minds11) ↗
          </a>
        </nav>

        {/* Right: Palette Swatches */}
        <div className="text-center md:text-right font-mono">
          <div className="flex items-center justify-center md:justify-end gap-1.5 mb-1.5">
            <span className="w-5 h-3 rounded-[1px] bg-[#070706] border border-[#2d2b27]" title="Obsidian Black" />
            <span className="w-5 h-3 rounded-[1px] bg-[#3d251a]" title="Bakelite Brown" />
            <span className="w-5 h-3 rounded-[1px] bg-[#dca33e]" title="Stellar Gold" />
            <span className="w-5 h-3 rounded-[1px] bg-[#ff6326]" title="Phosphor Orange" />
            <span className="w-5 h-3 rounded-[1px] bg-[#7e786e]" title="Industrial Gray" />
            <span className="w-5 h-3 rounded-[1px] bg-[#f5f1e8]" title="Chalk White" />
          </div>
          <div className="text-[10px] text-[#dca33e]">
            PALETTE: RETRO INDUSTRIAL
          </div>
        </div>
      </div>
    </footer>
  );
};
