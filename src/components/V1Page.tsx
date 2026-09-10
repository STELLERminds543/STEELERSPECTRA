import React, { useState } from 'react';
import { AppPage } from '../types';
import { SPLINE_SCENES } from '../data/spectrascanData';
import { SplineHero } from './SplineHero';
import { playTactileClick } from '../utils/audio';
import { ChevronDown, ChevronUp, Cpu, Volume2, Eye, ShieldCheck, ArrowRight, Layers, Sliders } from 'lucide-react';

interface V1PageProps {
  onNavigate: (page: AppPage) => void;
}

export const V1Page: React.FC<V1PageProps> = ({ onNavigate }) => {
  const [specsOpen, setSpecsOpen] = useState(false);

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* V1 Spline 3D Hero */}
      <SplineHero
        scene={SPLINE_SCENES.v1}
        onNavigate={onNavigate}
        currentPage="v1"
        scrollToId="v1-foundation"
      />

      {/* SECTION 1 — FOUNDATION OVERVIEW & HARDWARE PHOTOGRAPHY */}
      <section id="v1-foundation" className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-6">
            <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
              [ V1.01 // FOUNDATION UNIT ]
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
              THE FIRST STEP TOWARD ACCESSIBLE READING
            </h2>
            <p className="text-base md:text-lg text-[#ded7c9] leading-relaxed mb-6">
              <strong className="text-white font-semibold">SpectraScan V1</strong> is the foundational portable unit of the SpectraScan platform, designed to scan printed text, recognize characters using local OCR, and convert them immediately into spoken audio and crisp screen display.
            </p>

            <div className="flex flex-wrap gap-2 font-mono text-xs text-[#f4be5c] mb-6">
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] rounded">CAMERA SCAN</span>
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] rounded">LOCAL OCR</span>
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] rounded">TEXT-TO-SPEECH</span>
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] rounded">2–3 LANGUAGES</span>
              <span className="px-3 py-1 bg-[#3d251a] border border-[#ff6326] text-[#ff8246] rounded font-bold">100% OFFLINE</span>
            </div>

            {/* Visual Hardware Callout Checklist */}
            <div className="bg-[#12110f] border border-[#2d2b27] rounded p-4 font-mono text-xs text-[#b4ad9f] space-y-2">
              <div className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff6326]" />
                <span>PHYSICAL HARDWARE INVENTORY (V1 KIT)</span>
              </div>
              <ul className="space-y-1.5 pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6326]">•</span>
                  <span><strong>Scanning Pen:</strong> Rigid rectangular wand with high-speed macro optics, LED illumination, and sub-pixel guidance roller.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6326]">•</span>
                  <span><strong>Portable Processing Box:</strong> Heavy-duty matte chassis featuring backlit STN LCD screen, tactile rubber navigation keys (LEFT, RIGHT, MODE, SELECT), and internal speaker.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* V1 Hardware Technical Schematic Blueprint */}
          <div className="lg:col-span-6">
            <div className="bg-[#0f0e0d] border border-[#3d251a] rounded-lg p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#2d2b27] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6326] animate-pulse" />
                  <span className="text-white font-bold tracking-wider">HARDWARE SPECIFICATIONS // V1 BLUEPRINT</span>
                </div>
                <span className="text-[#ff6326] text-[10px] px-2 py-0.5 rounded bg-[#3d251a]/60 border border-[#ff6326]/40 font-bold">
                  REV 1.02
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#f4be5c] font-bold mb-1">OPTICAL SUBSYSTEM</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Sensor: 600 DPI Macro CCD</div>
                    <div>• Guidance: Amber LED Line Bevel</div>
                    <div>• Sweep Rate: 12–28 cm/sec</div>
                    <div>• Line Thickness: 4pt to 28pt</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#f4be5c] font-bold mb-1">ACOUSTIC & HAPTIC</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Speaker: 1.2W Acoustic Chamber</div>
                    <div>• Jack: 3.5mm Stereo Headphone</div>
                    <div>• Haptics: ERM Vibration Guidance</div>
                    <div>• Feedback: Velocity & Line Deviation</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#f4be5c] font-bold mb-1">PROCESSING & DISPLAY</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Compute: Stellar DSP Core v1</div>
                    <div>• Display: STN Backlit Mono LCD</div>
                    <div>• OCR Latency: &lt; 250ms per sentence</div>
                    <div>• Storage: MicroSD (Up to 32GB)</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#f4be5c] font-bold mb-1">POWER & PHYSICAL</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Battery: 2200mAh Li-ion Cell</div>
                    <div>• Battery Life: 8.5 Hours Continuous</div>
                    <div>• Chassis: Impact-Resistant ABS</div>
                    <div>• Weight: 145g (Deck) + 48g (Stylus)</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#12110f] border border-[#2d2b27] rounded text-[11px] text-[#7e786e] flex items-center justify-between">
                <span>STATUS: ACTIVE INDUSTRIAL STANDARD</span>
                <span className="text-[#ff6326] font-bold">100% STANDALONE OFFLINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PIPELINE FLOW LADDER */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V1.02 // ARCHITECTURE PIPELINE ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-2">
            HOW V1 OPERATES
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            A continuous sub-second optical and acoustic pipeline from printed page to human comprehension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 font-mono">
          {[
            { num: '01', icon: '🖊️', title: 'SCANNING PEN', desc: 'User places guided tip on the printed line.' },
            { num: '02', icon: '📷', title: 'CAMERA EXPOSURE', desc: 'Macro sensor takes rapid micro-exposures.' },
            { num: '03', icon: '🔤', title: 'OCR PARSING', desc: 'Converts pixel matrices into character bytes.' },
            { num: '04', icon: '⚙️', title: 'DSP PROCESSING', desc: 'Embedded chip tokenizes sentences & punctuation.' },
            { num: '05', icon: '📟', title: 'DISPLAY + TTS', desc: 'Speaker drives synthetic speech and LCD text.' },
            { num: '06', icon: '🎧', title: 'READ OR LISTEN', desc: 'Instant access via acoustic speaker or 3.5mm jack.', highlight: true },
          ].map((step, idx) => (
            <div
              key={idx}
              className={`p-4 rounded border flex flex-col justify-between ${
                step.highlight
                  ? 'bg-[#1e130d] border-[#ff6326] text-[#ff8246]'
                  : 'bg-[#0f0e0d] border-[#2d2b27] text-[#ded7c9]'
              }`}
            >
              <div>
                <span className="text-[10px] text-[#7e786e] block mb-2">{step.num} //</span>
                <span className="text-2xl mb-2 block">{step.icon}</span>
                <h4 className="font-bold text-sm mb-1 text-white">{step.title}</h4>
              </div>
              <p className="text-xs text-[#b4ad9f] leading-relaxed mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — SCAN ANY LINE */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
              [ V1.03 // OPTICAL MECHANICS ]
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
              SCAN ANY PRINTED LINE
            </h2>
            <p className="text-sm md:text-base text-[#b4ad9f] leading-relaxed mb-4">
              Move the scanning tip smoothly across printed text and let the integrated optical array capture sentences with high reliability.
            </p>
            <p className="text-sm text-[#b4ad9f] leading-relaxed mb-6">
              Whether reading a dense academic textbook, fine print on medicine boxes, or official paperwork, the scanning tip guides your hand along the row with balanced friction and directional tactile feedback.
            </p>

            <div className="p-4 rounded bg-[#0f0e0d] border border-[#2d2b27] font-mono text-xs text-[#f4be5c] space-y-1">
              <div>// SENSOR ANGLE TOLERANCE: 60° TO 90°</div>
              <div>// SWIPE VELOCITY RANGE: UP TO 30 CM/SECOND</div>
              <div>// ILLUMINATION: AMBER + WHITE FIXED LED GUIDE</div>
            </div>
          </div>

          <div className="p-8 rounded bg-[#0f0e0d] border border-[#47433c] text-center font-mono">
            <div className="text-5xl mb-4">🖊️ ➔ 📄</div>
            <div className="text-sm text-[#f4be5c] font-bold mb-2">
              SUB-PIXEL LINE TRACKING
            </div>
            <p className="text-xs text-[#7e786e] max-w-sm mx-auto">
              Roller-guided aperture maintains steady vertical focal distance over textured paper or glossy bindings.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TEXT RECOGNITION (RAW INK TO DIGITAL STRING) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V1.04 // DIGITIZATION ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            TEXT. RECOGNIZED.
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Optical Character Recognition instantly turns physical ink into digital tokens for screen and audio reproduction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          <div className="p-6 rounded bg-[#f6f3eb] text-[#1a1714] border border-[#cfc7ba] shadow-inner">
            <div className="text-[10px] text-[#784c36] font-bold uppercase mb-2">
              01. PHYSICAL PRINT SPECIMEN
            </div>
            <div className="text-lg font-serif leading-relaxed italic text-[#12100e]">
              "Knowledge belongs to everyone who seeks it, regardless of sensory barrier or script."
            </div>
            <div className="mt-4 text-[10px] text-[#784c36]">
              [ RAW INK ON 80 GSM MATTE PAPER ]
            </div>
          </div>

          <div className="p-6 rounded bg-[#070706] border border-[#dca33e] text-[#f5f1e8] shadow-2xl">
            <div className="text-[10px] text-[#ff8246] font-bold uppercase mb-2 flex items-center justify-between">
              <span>02. RECOGNIZED DIGITAL BUFFER</span>
              <span className="text-[#27ae60]">CONFIDENCE: 99.8%</span>
            </div>
            <div className="text-xs text-[#7e786e] mb-2">
              01001011 01101110 01101111 01110111 01101100 01100101 01100100 01100111...
            </div>
            <div className="text-base text-[#f4be5c] font-bold leading-relaxed">
              "Knowledge belongs to everyone who seeks it, regardless of sensory barrier or script."
            </div>
            <div className="mt-4 text-[10px] text-[#ff6326]">
              [ PARSED IN 24ms • SUB-PIXEL CONFIRMED ]
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — MULTI-SCRIPT SUPPORT (2-3 LANGUAGES) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V1.05 // MULTI-SCRIPT SCRIPTS ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            MORE THAN ONE LANGUAGE
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            SpectraScan V1 is preloaded with core regional scripts for foundational literacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] transition-all">
            <div className="font-mono text-[10px] text-[#dca33e] uppercase mb-1">SCRIPT 01 // LATIN</div>
            <h3 className="text-xl font-bold text-white mb-2">English</h3>
            <p className="text-sm text-[#ded7c9] italic mb-3">"Welcome to accessible reading."</p>
            <span className="font-mono text-[10px] text-[#7e786e]">LATIN ALPHABET • COMPLETE VOCABULARY</span>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#dca33e] transition-all">
            <div className="font-mono text-[10px] text-[#f4be5c] uppercase mb-1">SCRIPT 02 // DEVANAGARI</div>
            <h3 className="text-xl font-bold text-white mb-2">Hindi</h3>
            <p className="text-sm text-[#ded7c9] italic mb-3">"सुगम पठन में आपका स्वागत है।"</p>
            <span className="font-mono text-[10px] text-[#7e786e]">DEVANAGARI CHARACTERS • PHONETIC ALIGNMENT</span>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27] hover:border-[#ff6326] transition-all">
            <div className="font-mono text-[10px] text-[#ff8246] uppercase mb-1">SCRIPT 03 // REGIONAL</div>
            <h3 className="text-xl font-bold text-white mb-2">Odia / Regional</h3>
            <p className="text-sm text-[#ded7c9] italic mb-3">"ସହଜ ପଠନକୁ ସ୍ୱାଗତ।"</p>
            <span className="font-mono text-[10px] text-[#7e786e]">REGIONAL DICTIONARY • OFFLINE VOCABULARY</span>
          </div>
        </div>
      </section>

      {/* SECTION 6 — HARDWARE ANATOMY & COLLAPSIBLE SPECS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V1.06 // HARDWARE SPECIFICATION ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            WHAT'S INSIDE V1?
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Built with robust industrial components selected for long-term physical endurance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {[
            { icon: '📷', name: 'Camera', spec: 'Macro CMOS' },
            { icon: '🖊️', name: 'Scanning Tip', spec: 'Roller Aperture' },
            { icon: '🟩', name: 'Custom PCB', spec: 'Stellar Minds v1' },
            { icon: '⚡', name: 'DSP Core', spec: 'Low-Power RISC' },
            { icon: '📟', name: 'LCD Display', spec: 'Transflective STN' },
            { icon: '🔊', name: 'Speaker', spec: '1.2W Acoustic' },
            { icon: '🎙️', name: 'Microphone', spec: 'Noise Canceling' },
            { icon: '🔋', name: 'Battery', spec: '1200mAh Li-Ion' },
            { icon: '💾', name: 'SD Storage', spec: 'Up to 32GB' },
            { icon: '🎧', name: '3.5mm Jack', spec: 'Stereo Out' },
            { icon: '🔌', name: 'USB-C Port', spec: 'Charge & Data' },
            { icon: '📳', name: 'Vibration', spec: 'Haptic Actuator' },
            { icon: '🔘', name: 'Tact Switches', spec: 'Mechanical' },
            { icon: '🛡️', name: 'Chassis', spec: 'ABS Enclosure' },
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded bg-[#0f0e0d] border border-[#2d2b27] text-center font-mono">
              <span className="text-xl mb-1 block">{item.icon}</span>
              <div className="text-xs font-bold text-white">{item.name}</div>
              <div className="text-[10px] text-[#7e786e]">{item.spec}</div>
            </div>
          ))}
        </div>

        {/* Collapsible Technical Specs Table */}
        <div className="bg-[#0f0e0d] border border-[#47433c] rounded overflow-hidden">
          <button
            onClick={() => {
              playTactileClick();
              setSpecsOpen(!specsOpen);
            }}
            className="w-full p-4 flex items-center justify-between font-mono text-xs font-bold text-[#f4be5c] hover:bg-[#171614] transition-colors"
          >
            <span>[ + ] DETAILED TECHNICAL SPECIFICATIONS (V1 HARDWARE)</span>
            {specsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {specsOpen && (
            <div className="p-5 border-t border-[#2d2b27] font-mono text-xs">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-[#2d2b27]">
                    <td className="py-2 text-[#dca33e] font-semibold w-1/3">Optical Resolution</td>
                    <td className="py-2 text-[#b4ad9f]">1280 × 720 px macro optical matrix (Sub-pixel parsing)</td>
                  </tr>
                  <tr className="border-b border-[#2d2b27]">
                    <td className="py-2 text-[#dca33e] font-semibold">Scan Speed Range</td>
                    <td className="py-2 text-[#b4ad9f]">10 cm/sec to 30 cm/sec continuous line swipe</td>
                  </tr>
                  <tr className="border-b border-[#2d2b27]">
                    <td className="py-2 text-[#dca33e] font-semibold">Illumination Array</td>
                    <td className="py-2 text-[#b4ad9f]">Dual-channel amber (650nm) + white micro-LED guides</td>
                  </tr>
                  <tr className="border-b border-[#2d2b27]">
                    <td className="py-2 text-[#dca33e] font-semibold">Display Screen</td>
                    <td className="py-2 text-[#b4ad9f]">128 × 64 px transflective STN monochrome LCD with backlight</td>
                  </tr>
                  <tr className="border-b border-[#2d2b27]">
                    <td className="py-2 text-[#dca33e] font-semibold">Audio Hardware</td>
                    <td className="py-2 text-[#b4ad9f]">1.2W acoustic chamber internal speaker + 3.5mm headphone jack</td>
                  </tr>
                  <tr className="border-b border-[#2d2b27]">
                    <td className="py-2 text-[#dca33e] font-semibold">Storage Capacity</td>
                    <td className="py-2 text-[#b4ad9f]">MicroSD slot supporting up to 32GB offline reading library</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-[#dca33e] font-semibold">Battery Runtime</td>
                    <td className="py-2 text-[#b4ad9f]">1200mAh Lithium-Ion (~6 hours continuous reading)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 7 — SUMMARY HERO */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="p-8 md:p-14 rounded bg-[#0f0e0d] border border-[#3d251a] shadow-2xl">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V1.07 // SUMMARY ]
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#f4be5c] uppercase mb-4 tracking-tight">
            SCAN. READ. LISTEN.
          </h2>
          <div className="flex justify-center gap-4 font-mono text-xs text-[#b4ad9f] mb-6">
            <span>PORTABLE</span> • <span>ACCESSIBLE</span> • <span>INDEPENDENT</span>
          </div>
          <p className="text-sm md:text-base text-[#ded7c9] max-w-xl mx-auto mb-8 leading-relaxed">
            The foundation of accessible reading. SpectraScan V1 proves that printed text no longer needs to be a closed barrier.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => { playTactileClick(); onNavigate('v2'); }}
              className="px-6 py-3 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] font-mono text-xs font-bold transition-all shadow-[0_2px_12px_rgba(255,99,38,0.3)] flex items-center gap-2"
            >
              <span>SEE WHAT V2 ADDS (110+ LANGUAGES)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { playTactileClick(); onNavigate('differentiation'); }}
              className="px-6 py-3 rounded bg-[#171614] hover:bg-[#2d2b27] text-[#f4be5c] border border-[#dca33e] font-mono text-xs font-semibold transition-colors"
            >
              COMPARE ALL THREE VERSIONS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
