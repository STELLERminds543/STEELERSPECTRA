import React, { useState } from 'react';
import { Menu, X, Video, Instagram, Compass } from 'lucide-react';
import { AppPage } from '../types';
import { playTactileClick } from '../utils/audio';

interface NavbarProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  onOpenVideo?: () => void;
  onOpenInstagram?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenVideo,
  onOpenInstagram,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: AppPage; num: string; label: string }[] = [
    { id: 'home', num: '01.', label: 'HOME' },
    { id: 'v1', num: '02.', label: 'V1' },
    { id: 'v2', num: '03.', label: 'V2' },
    { id: 'v3', num: '04.', label: 'V3' },
    { id: 'differentiation', num: '05.', label: 'DIFFERENTIATION' },
  ];

  const handleNavClick = (page: AppPage) => {
    playTactileClick();
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-site-header"
      className="sticky top-[31px] z-40 bg-[#0f0e0d]/95 border-b border-[#3d251a] backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand Group */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group"
        >
          {/* Custom SVG Emblem */}
          <div className="w-10 h-10 rounded bg-[#1e130d] border border-[#dca33e] flex items-center justify-center p-1.5 shadow-[0_0_10px_rgba(220,163,62,0.2)] group-hover:border-[#ff6326] transition-colors">
            <Compass className="w-6 h-6 text-[#f4be5c] group-hover:rotate-45 transition-transform" />
          </div>
          <div>
            <div className="font-bold text-white text-base tracking-[0.14em] leading-tight">
              STELLER MINDS
            </div>
            <div className="font-mono text-[9px] text-[#dca33e] tracking-[0.18em]">
              INNOVATE • COLLABORATE • INSPIRE
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`font-mono text-xs tracking-wider transition-all relative py-1 flex items-center gap-1.5 ${
                currentPage === item.id
                  ? 'text-white font-bold'
                  : 'text-[#b4ad9f] hover:text-[#f4be5c]'
              }`}
            >
              <span className="text-[#dca33e] text-[10px]">{item.num}</span>
              <span>{item.label}</span>
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff6326] shadow-[0_0_6px_#ff6326]" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="watch-video-header-btn"
            onClick={() => {
              playTactileClick();
              if (onOpenVideo) onOpenVideo();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#dca33e] text-[#f4be5c] hover:bg-[#dca33e]/10 font-mono text-xs font-semibold transition-colors"
          >
            <Video className="w-3.5 h-3.5 text-[#ff6326]" />
            <span>WATCH VIDEO</span>
          </button>
          <button
            id="follow-us-header-btn"
            onClick={() => {
              playTactileClick();
              if (onOpenInstagram) onOpenInstagram();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] font-mono text-xs font-bold transition-colors shadow-[0_2px_10px_rgba(255,99,38,0.25)]"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>FOLLOW US</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-nav-toggle-btn"
          onClick={() => {
            playTactileClick();
            setMobileOpen(!mobileOpen);
          }}
          className="lg:hidden p-2 rounded text-[#f4be5c] hover:bg-[#1c1b18] border border-[#2d2b27]"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f0e0d] border-b-2 border-[#ff6326] px-4 py-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left font-mono text-sm py-2.5 px-3 rounded flex items-center justify-between border-b border-[#2d2b27] ${
                currentPage === item.id
                  ? 'bg-[#2e1c14] text-[#ff8246] font-bold'
                  : 'text-[#ded7c9] hover:bg-[#1c1b18]'
              }`}
            >
              <span>
                <span className="text-[#dca33e] mr-2">{item.num}</span>
                {item.label}
              </span>
              {currentPage === item.id && (
                <span className="w-2 h-2 rounded-full bg-[#ff6326]" />
              )}
            </button>
          ))}
          <div className="pt-3 flex gap-2">
            <button
              onClick={() => {
                playTactileClick();
                setMobileOpen(false);
                if (onOpenVideo) onOpenVideo();
              }}
              className="flex-1 py-2 rounded border border-[#dca33e] text-[#f4be5c] text-center font-mono text-xs font-semibold"
            >
              WATCH VIDEO
            </button>
            <button
              onClick={() => {
                playTactileClick();
                setMobileOpen(false);
                if (onOpenInstagram) onOpenInstagram();
              }}
              className="flex-1 py-2 rounded bg-[#ff6326] text-[#070706] text-center font-mono text-xs font-bold"
            >
              FOLLOW US
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
