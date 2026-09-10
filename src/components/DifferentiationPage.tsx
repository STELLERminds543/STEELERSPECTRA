import React from 'react';
import { AppPage } from '../types';
import { SPLINE_SCENES, COMPARISON_MATRIX, TEAM_MEMBERS, SMARTPHONE_VS_SPECTRASCAN, INSTAGRAM_URL, INSTAGRAM_HANDLE, INSTAGRAM_ACCOUNT_NAME } from '../data/spectrascanData';
import { SplineHero } from './SplineHero';
import { playTactileClick } from '../utils/audio';
import { Video, Instagram, ArrowRight, Check, ExternalLink, ShieldCheck } from 'lucide-react';

interface DifferentiationPageProps {
  onNavigate: (page: AppPage) => void;
}

export const DifferentiationPage: React.FC<DifferentiationPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* DIFFERENTIATION SPLINE HERO — EXACT REQUESTED EMBED */}
      <SplineHero
        scene={SPLINE_SCENES.differentiation}
        onNavigate={onNavigate}
        currentPage="differentiation"
        scrollToId="diff-matrix"
      />

      {/* BANNER TITLE */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ COMPARATIVE ARCHITECTURE ]
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-3">
            THE TRIAD DIFFERENTIATION
          </h1>
          <p className="text-base md:text-lg text-[#ded7c9] leading-relaxed">
            Why do we build three versions, and what changes across the SpectraScan platform?
          </p>
        </div>
      </section>

      {/* SECTION 1 — COMPREHENSIVE FEATURE MATRIX TABLE */}
      <section id="diff-matrix" className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 01 // FEATURE MATRIX ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            THREE VERSIONS. THREE LEVELS OF CAPABILITY.
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            A granular comparison of optical, compute, linguistic, and intelligence subsystems.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto bg-[#0f0e0d] border border-[#2d2b27] rounded shadow-2xl">
          <table className="w-full text-left border-collapse font-mono text-xs md:text-sm">
            <thead>
              <tr className="border-b border-[#2d2b27] bg-[#171614]">
                <th className="p-4 text-[#7e786e] font-semibold w-1/4">SUBSYSTEM / FEATURE</th>
                <th className="p-4 text-white font-bold border-l border-[#2d2b27]">
                  <div className="text-white text-sm">SPECTRASCAN V1</div>
                  <div className="text-[10px] text-[#f4be5c] font-normal">Accessibility Baseline</div>
                </th>
                <th className="p-4 text-white font-bold border-l border-[#2d2b27]">
                  <div className="text-white text-sm">SPECTRASCAN V2</div>
                  <div className="text-[10px] text-[#f4be5c] font-normal">Communication Leap</div>
                </th>
                <th className="p-4 text-[#ff8246] font-bold border-l border-[#2d2b27] bg-[#1e130d]/80 border-t-2 border-t-[#ff6326]">
                  <div className="text-[#ff8246] text-sm">SPECTRASCAN V3</div>
                  <div className="text-[10px] text-[#f4be5c] font-normal">Cognitive Flagship</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2d2b27]">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#171614] transition-colors">
                  <td className="p-4 text-[#dca33e] font-semibold bg-[#171614]/40">
                    {row.feature}
                  </td>
                  <td className="p-4 text-[#ded7c9] border-l border-[#2d2b27]">
                    {row.v1}
                  </td>
                  <td className="p-4 text-[#ded7c9] border-l border-[#2d2b27]">
                    {row.v2}
                  </td>
                  <td className="p-4 text-white font-medium border-l border-[#2d2b27] bg-[#1e130d]/30">
                    {row.v3.startsWith('★') ? (
                      <span className="text-[#ff8246] font-bold">{row.v3}</span>
                    ) : (
                      row.v3
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2 — THE TRIAD PROGRESSION (THREE GIANT STATEMENTS) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 02 // PHILOSOPHICAL PROGRESSION ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            THE TRIAD PROGRESSION
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto font-mono">
          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-[#7e786e] block uppercase">V1 // ACCESSIBILITY</span>
              <h3 className="text-2xl font-bold text-[#f4be5c]">"I CAN READ IT."</h3>
              <p className="text-xs text-[#b4ad9f] mt-1 font-sans">
                Breaking sensory barriers. Turning static characters into synthesized speech and crisp visual readout.
              </p>
            </div>
            <button
              onClick={() => { playTactileClick(); onNavigate('v1'); }}
              className="px-4 py-2 rounded bg-[#171614] hover:bg-[#dca33e] text-[#f4be5c] hover:text-[#070706] border border-[#dca33e] text-xs font-bold shrink-0 transition-colors"
            >
              V1 DETAILS →
            </button>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-[#7e786e] block uppercase">V2 // COMMUNICATION</span>
              <h3 className="text-2xl font-bold text-[#f4be5c]">"I CAN UNDERSTAND IT."</h3>
              <p className="text-xs text-[#b4ad9f] mt-1 font-sans">
                Breaking linguistic barriers. 110+ languages, on-device dictionary lookups, and bidirectional Speech-to-Speech dialogue.
              </p>
            </div>
            <button
              onClick={() => { playTactileClick(); onNavigate('v2'); }}
              className="px-4 py-2 rounded bg-[#171614] hover:bg-[#dca33e] text-[#f4be5c] hover:text-[#070706] border border-[#dca33e] text-xs font-bold shrink-0 transition-colors"
            >
              V2 DETAILS →
            </button>
          </div>

          <div className="p-6 rounded bg-[#1e130d] border border-[#ff6326] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_0_20px_rgba(255,99,38,0.15)]">
            <div>
              <span className="text-[10px] text-[#ff8246] block uppercase font-bold">V3 // INTELLIGENCE</span>
              <h3 className="text-2xl font-bold text-[#ff8246]">"I CAN THINK WITH IT."</h3>
              <p className="text-xs text-[#ded7c9] mt-1 font-sans">
                Breaking cognitive barriers. Conversational AI questions, paragraph summaries, and step-by-step mathematical reasoning.
              </p>
            </div>
            <button
              onClick={() => { playTactileClick(); onNavigate('v3'); }}
              className="px-4 py-2 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] text-xs font-bold shrink-0 transition-colors"
            >
              V3 DETAILS →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY NOT JUST USE A SMARTPHONE? */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 03 // THE CRITICAL QUESTION ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            WHY NOT JUST USE A PHONE?
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Smartphones are impressive computers, but they were never engineered as dedicated sensory instruments.
          </p>
        </div>

        <div className="overflow-x-auto bg-[#0f0e0d] border border-[#2d2b27] rounded shadow-2xl mb-6">
          <table className="w-full text-left border-collapse font-mono text-xs md:text-sm">
            <thead>
              <tr className="border-b border-[#2d2b27] bg-[#171614]">
                <th className="p-4 text-[#7e786e] font-bold w-1/2">SMARTPHONE</th>
                <th className="p-4 text-[#ff8246] font-bold border-l border-[#2d2b27] bg-[#1e130d]">
                  SPECTRASCAN (PURPOSE-BUILT)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2d2b27]">
              {SMARTPHONE_VS_SPECTRASCAN.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#171614] transition-colors">
                  <td className="p-4 text-[#7e786e]">
                    {item.phone}
                  </td>
                  <td className="p-4 text-white font-medium border-l border-[#2d2b27] bg-[#1e130d]/20">
                    <span className="text-[#ff6326] mr-1.5">★</span>
                    {item.spectrascan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded bg-[#171614] border border-[#dca33e]/40 text-center font-mono text-xs text-[#f4be5c] max-w-3xl mx-auto">
          "SpectraScan does not aim to replace the smartphone. It aims to make information access friction-free for people who need a purpose-built instrument."
        </div>
      </section>

      {/* SECTION 4 — WORKING YOUTUBE PROTOTYPE VIDEO EMBED */}
      <section id="video" className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2 flex items-center justify-center gap-1.5">
            <Video className="w-4 h-4 text-[#ff6326]" />
            <span>[ 04 // PROTOTYPE DEMONSTRATION ]</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            SEE SPECTRASCAN IN ACTION
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Watch our laboratory prototype demonstrate how SpectraScan translates printed ink into synthesized speech and understanding in real time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#0f0e0d] border border-[#47433c] rounded shadow-2xl overflow-hidden">
          {/* Chassis Topbar */}
          <div className="bg-[#1e130d] border-b border-[#3d251a] px-4 py-2 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-[#f4be5c]">
              <span className="w-2 h-2 rounded-full bg-[#ff6326] animate-pulse" />
              <span>STELLER MINDS LABS // OFFICIAL PROTOTYPE DEMO</span>
            </div>
            <span className="text-[#7e786e] hidden sm:inline">1080P HD RECORDING</span>
          </div>

          {/* 16:9 Aspect Ratio Embed */}
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/VFKLzN1ixR4"
              title="SpectraScan Hardware Prototype Demonstration by Stellar Minds"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>

          <div className="bg-[#171614] border-t border-[#2d2b27] px-4 py-2.5 flex items-center justify-between font-mono text-xs text-[#7e786e]">
            <span>SOURCE: YOUTUBE // STELLER MINDS</span>
            <span className="text-[#ff8246]">PROTOTYPE RUNNING SUB-SECOND OCR</span>
          </div>
        </div>
      </section>

      {/* SECTION 5 — INSTAGRAM COMMUNITY */}
      <section id="instagram" className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2 flex items-center justify-center gap-1.5">
            <Instagram className="w-4 h-4 text-[#ff6326]" />
            <span>[ 05 // COMMUNITY & UPDATES ]</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            FOLLOW STELLER MINDS
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Follow our open hardware development journey, laboratory breakthroughs, and accessibility updates on Instagram.
          </p>
        </div>

        <div className="max-w-xl mx-auto p-8 rounded bg-[#0f0e0d] border border-[#47433c] text-center font-mono space-y-6 shadow-2xl">
          {/* Instagram Account Card */}
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#f59e0b] via-[#ff6326] to-[#ec4899] p-[2px] shadow-lg">
            <div className="w-full h-full rounded-full bg-[#070706] flex items-center justify-center">
              <Instagram className="w-10 h-10 text-[#ff6326]" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e130d] border border-[#ff6326]/40 text-[#ff8246] text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff6326] animate-pulse" />
              <span>OFFICIAL STELLER MINDS INSTAGRAM</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-white tracking-wider">
              {INSTAGRAM_HANDLE}
            </div>
            <div className="text-xs text-[#dca33e] mt-1 font-mono">
              account: {INSTAGRAM_ACCOUNT_NAME}
            </div>
            <p className="text-xs md:text-sm text-[#b4ad9f] mt-3 font-sans max-w-md mx-auto leading-relaxed">
              Stay connected with our lab sessions, CAD designs, user trials with visually impaired students, and product release announcements.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playTactileClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] text-xs font-bold transition-all shadow-[0_2px_14px_rgba(255,99,38,0.3)]"
            >
              <Instagram className="w-4 h-4" />
              <span>VISIT @STELLER_MINDS11 ON INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          <div className="pt-2 border-t border-[#2d2b27] text-[11px] text-[#7e786e]">
            DIRECT LINK // INSTAGRAM.COM/STELLER_MINDS11
          </div>
        </div>
      </section>

      {/* SECTION 6 — THE MINDS BEHIND SPECTRASCAN (TEAM) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ 06 // LEADERSHIP & CONTRIBUTORS ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            THE MINDS BEHIND SPECTRASCAN
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            The multidisciplinary engineering, organizational, and product leadership driving Stellar Minds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#1e130d] border border-[#dca33e] flex items-center justify-center text-xl mb-3">
                  {member.icon}
                </div>
                <h3 className="font-bold text-white text-sm">{member.role}</h3>
                <div className={`text-xs font-semibold mb-2 ${member.color === 'orange' ? 'text-[#ff8246]' : 'text-[#f4be5c]'}`}>
                  {member.title}
                </div>
              </div>
              <p className="text-xs text-[#7e786e] font-sans leading-relaxed mt-2">
                {member.contribution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — FINAL INITIATIVE CTA */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="p-8 md:p-14 rounded bg-[#0f0e0d] border border-[#3d251a] shadow-2xl relative">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ INITIATE OPTICAL REVOLUTION ]
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase mb-4 tracking-tight max-w-3xl mx-auto">
            THE FUTURE OF ACCESSIBLE READING STARTS WITH ONE SCAN.
          </h2>
          <div className="flex justify-center gap-4 font-mono text-xs text-[#ff8246] mb-8 font-bold">
            <span>Scan.</span> • <span>Understand.</span> • <span>Interact.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
};
