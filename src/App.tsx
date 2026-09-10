import React, { useState, useEffect } from 'react';
import { AppPage } from './types';
import { SystemTelemetryBar } from './components/SystemTelemetryBar';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { V1Page } from './components/V1Page';
import { V2Page } from './components/V2Page';
import { V3Page } from './components/V3Page';
import { DifferentiationPage } from './components/DifferentiationPage';
import { Footer } from './components/Footer';
import { OpeningAnimation } from './components/OpeningAnimation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Handle URL hashes on mount & changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace(/^#/, '');
      if (hash === 'v1') {
        setCurrentPage('v1');
      } else if (hash === 'v2') {
        setCurrentPage('v2');
      } else if (hash === 'v3') {
        setCurrentPage('v3');
      } else if (hash === 'differentiation' || hash === 'differentiation.html') {
        setCurrentPage('differentiation');
      } else if (hash === 'video' || hash === 'instagram') {
        setCurrentPage('differentiation');
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: AppPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  const handleOpenVideo = () => {
    setCurrentPage('differentiation');
    window.location.hash = 'video';
    setTimeout(() => {
      const target = document.getElementById('video');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const handleOpenInstagram = () => {
    setCurrentPage('differentiation');
    window.location.hash = 'instagram';
    setTimeout(() => {
      const target = document.getElementById('instagram');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const getViewName = () => {
    switch (currentPage) {
      case 'v1':
        return 'SPECTRASCAN_V1 // OPTICAL_TTS_CORE';
      case 'v2':
        return 'SPECTRASCAN_V2 // 110_LANG_TRANSLATE';
      case 'v3':
        return 'SPECTRASCAN_V3 // COGNITIVE_AI_MATH';
      case 'differentiation':
        return 'TRIAD_DIFFERENTIATION // FULL_MATRIX';
      default:
        return 'HOME // 3D_PLATFORM_OVERVIEW';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070706] text-[#f5f1e8]">
      {/* Opening Animation Overlay */}
      {showIntro && (
        <OpeningAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* System Telemetry Bar (Live UTC millisecond clock & Phosphor theme toggle) */}
      <SystemTelemetryBar
        currentViewName={getViewName()}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenVideo={handleOpenVideo}
        onOpenInstagram={handleOpenInstagram}
      />

      {/* Dynamic View Route */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'v1' && <V1Page onNavigate={navigateTo} />}
        {currentPage === 'v2' && <V2Page onNavigate={navigateTo} />}
        {currentPage === 'v3' && <V3Page onNavigate={navigateTo} />}
        {currentPage === 'differentiation' && <DifferentiationPage onNavigate={navigateTo} />}
      </main>

      {/* Global Footer with Design Swatches */}
      <Footer
        onNavigate={navigateTo}
        onReplayIntro={() => setShowIntro(true)}
      />
    </div>
  );
}
