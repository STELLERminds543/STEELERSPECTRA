import React from 'react';
import { AppPage } from '../types';
import { SPLINE_SCENES } from '../data/spectrascanData';
import { SplineHero } from './SplineHero';
import { DictionaryLookup } from './DictionaryLookup';
import { playTactileClick } from '../utils/audio';
import { Globe, ArrowRight, Mic, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface V2PageProps {
  onNavigate: (page: AppPage) => void;
}

export const V2Page: React.FC<V2PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* V2 Spline 3D Hero */}
      <SplineHero
        scene={SPLINE_SCENES.v2}
        onNavigate={onNavigate}
        currentPage="v2"
        scrollToId="v2-overview"
      />

      {/* SECTION 1 — MULTILINGUAL LEAP OVERVIEW & HARDWARE SPECIFICATIONS */}
      <section id="v2-overview" className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-6">
            <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
              [ V2.01 // THE MULTILINGUAL LEAP ]
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
              FROM READING TO UNDERSTANDING
            </h2>
            <p className="text-base md:text-lg text-[#ded7c9] leading-relaxed mb-6">
              <strong className="text-white font-semibold">SpectraScan V2</strong> advances beyond foundational reading by introducing high-performance multilingual translation, an on-device lexicon dictionary, and bidirectional Speech-to-Speech conversation.
            </p>

            <div className="flex flex-wrap gap-2 font-mono text-xs mb-6">
              <span className="px-3 py-1 bg-[#2e1c14] border border-[#dca33e] text-[#f4be5c] font-bold rounded">
                110+ LANGUAGES
              </span>
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] text-[#ded7c9] rounded">
                TWO-WAY TRANSLATION
              </span>
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] text-[#ded7c9] rounded">
                OFFLINE DICTIONARY
              </span>
              <span className="px-3 py-1 bg-[#3d251a] border border-[#ff6326] text-[#ff8246] font-bold rounded">
                SPEECH-TO-SPEECH (S2S)
              </span>
            </div>

            {/* Visual Hardware Callout Checklist */}
            <div className="bg-[#12110f] border border-[#2d2b27] rounded p-4 font-mono text-xs text-[#b4ad9f] space-y-2">
              <div className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2dd4bf]" />
                <span>PHYSICAL HARDWARE INVENTORY (V2 KIT)</span>
              </div>
              <ul className="space-y-1.5 pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#2dd4bf]">•</span>
                  <span><strong>Ergonomic Scanning Wand:</strong> Smooth contoured tactile barrel with ribbed thumb trigger switch and precision silver guidance nose cone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2dd4bf]">•</span>
                  <span><strong>Handheld Processing Terminal:</strong> Ergonomic curved handheld deck featuring circular 5-way D-pad navigation, dedicated MODE, PLAY, STOP, and POWER buttons, and high-contrast processed text screen.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* V2 Hardware Technical Schematic Blueprint */}
          <div className="lg:col-span-6">
            <div className="bg-[#0f0e0d] border border-[#132e2d] rounded-lg p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#2d2b27] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                  <span className="text-white font-bold tracking-wider">HARDWARE SPECIFICATIONS // V2 BLUEPRINT</span>
                </div>
                <span className="text-[#2dd4bf] text-[10px] px-2 py-0.5 rounded bg-[#132e2d] border border-[#2dd4bf]/40 font-bold">
                  REV 2.01
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#2dd4bf] font-bold mb-1">FIELD ERGONOMICS</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Wand: Contoured Palm Barrel</div>
                    <div>• Trigger: Sliding Thumb Rocker</div>
                    <div>• Tip: Silver Optical Nose Cone</div>
                    <div>• Cable: Braided Kevlar-Core Bus</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#2dd4bf] font-bold mb-1">LINGUISTIC ENGINE</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Support: 110+ Global Languages</div>
                    <div>• Dictionary: Offline Full Lexicon</div>
                    <div>• Audio: Bidirectional S2S Audio</div>
                    <div>• Microphones: Dual Beamforming Array</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#2dd4bf] font-bold mb-1">CONTROLS & DISPLAY</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Nav: Circular 5-Way Tactile D-Pad</div>
                    <div>• Keys: MODE, PLAY, STOP, PWR</div>
                    <div>• Screen: 4.2" High-Contrast LCD</div>
                    <div>• Memory: Dual MicroSD Slots</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#2dd4bf] font-bold mb-1">ACOUSTICS & POWER</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Speaker: Dynamic Acoustic Port</div>
                    <div>• Battery: 3100mAh Fast-Charge</div>
                    <div>• Battery Life: 12 Hours Runtime</div>
                    <div>• Port: USB-C Fast Data & Audio</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#12110f] border border-[#2d2b27] rounded text-[11px] text-[#7e786e] flex items-center justify-between">
                <span>STATUS: GLOBAL PRODUCTION READY</span>
                <span className="text-[#2dd4bf] font-bold">110+ LANGUAGES OFFLINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — 110+ LANGUAGES GLOBAL ORBIT */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V2.02 // GLOBAL SCRIPT COMPATIBILITY ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            ONE DEVICE. 110+ LANGUAGES.
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            SpectraScan V2 eliminates international barriers with pre-compiled linguistic dictionaries across every inhabited continent.
          </p>
        </div>

        <div className="p-8 rounded bg-[#0f0e0d] border border-[#47433c] text-center font-mono relative overflow-hidden">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-12 h-12 text-[#f4be5c] animate-pulse" />
            <div className="text-5xl md:text-6xl font-extrabold text-[#f4be5c]">110+</div>
          </div>
          <div className="text-sm font-bold text-white uppercase tracking-widest mb-6">
            LANGUAGES & SCRIPT ENGINES INSTALLED
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto text-xs">
            {[
              'English', 'Spanish', 'French', 'German', 'Hindi', 'Mandarin (Simplified & Traditional)',
              'Japanese', 'Korean', 'Arabic', 'Russian', 'Portuguese', 'Italian', 'Odia', 'Bengali',
              'Tamil', 'Telugu', 'Urdu', 'Dutch', 'Turkish', 'Vietnamese', 'Thai', 'Greek', 'Hebrew',
              'Swedish', 'Polish', 'Czech', 'Indonesian', 'Tagalog', 'Malay', 'Finnish', 'Danish'
            ].map((lang) => (
              <span key={lang} className="px-3 py-1 rounded bg-[#171614] border border-[#2d2b27] text-[#ded7c9] hover:border-[#dca33e] hover:text-[#f4be5c] transition-colors">
                {lang}
              </span>
            ))}
            <span className="px-3 py-1 rounded bg-[#2e1c14] border border-[#dca33e] text-[#f4be5c] font-bold">
              + 80 More Global Languages
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — INSTANT TRANSLATION DEMO */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V2.03 // DUAL-WAY CONVERSION ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            READ. TRANSLATE. UNDERSTAND.
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Translate printed sentences between languages in less than a second with contextual grammar alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          <div className="p-6 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <div className="flex items-center justify-between text-[10px] text-[#7e786e] mb-3">
              <span className="text-[#f4be5c] font-bold">SCANNED INPUT // HINDI</span>
              <span>CAMERA SENSOR OK</span>
            </div>
            <div className="text-lg md:text-xl font-medium text-[#f4be5c] leading-relaxed mb-4">
              "शिक्षा सभी के लिए सुलभ और समान होनी चाहिए।"
            </div>
            <div className="text-xs text-[#7e786e]">
              TOKENIZED: [शिक्षा] [सभी के लिए] [सुलभ] [और] [समान] [होनी चाहिए]
            </div>
          </div>

          <div className="p-6 rounded bg-[#1e130d]/60 border border-[#ff6326]">
            <div className="flex items-center justify-between text-[10px] text-[#7e786e] mb-3">
              <span className="text-[#ff8246] font-bold">TRANSLATED OUTPUT // ENGLISH</span>
              <span className="text-[#27ae60]">LATENCY: 0.18s</span>
            </div>
            <div className="text-lg md:text-xl font-medium text-white leading-relaxed mb-4">
              "Education must be accessible and equitable for all."
            </div>
            <div className="text-xs text-[#ff8246]">
              [ SYNTHETIC ACOUSTIC SPEECH READY FOR PLAYBACK ]
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — INTERACTIVE LEXICON DICTIONARY */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V2.04 // ON-DEVICE LEXICON ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            EVERY WORD HAS A MEANING
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Test SpectraScan V2's instant on-device definition engine. Click any word or search:
          </p>
        </div>

        <DictionaryLookup />
      </section>

      {/* SECTION 5 — SPEECH-TO-SPEECH (S2S) BRIDGE */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
              [ V2.05 // CONVERSATIONAL BRIDGE ]
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
              TALK. UNDERSTAND. RESPOND.
            </h2>
            <p className="text-sm md:text-base text-[#b4ad9f] leading-relaxed mb-4">
              Two individuals speaking completely different languages can converse naturally face-to-face through SpectraScan V2.
            </p>
            <p className="text-sm text-[#b4ad9f] leading-relaxed mb-6">
              Speak into the wand microphone in your native language. SpectraScan translates and speaks aloud in the second person's language, then reverses the flow when they answer.
            </p>

            <div className="p-4 rounded bg-[#0f0e0d] border border-[#2d2b27] font-mono text-xs text-[#f4be5c] space-y-1">
              <div>// DUAL NOISE-CANCELING MICROPHONES</div>
              <div>// BIDIRECTIONAL ACOUSTIC FEEDBACK</div>
              <div>// REAL-TIME PHONEME TRANSLATION MATRIX</div>
            </div>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#47433c] font-mono text-xs space-y-4">
            <div className="flex items-center gap-3 p-3 rounded bg-[#171614] border border-[#2d2b27]">
              <span className="text-xl">👤</span>
              <div>
                <span className="text-[#f4be5c] font-bold">PERSON A [SPEAKS HINDI]:</span>
                <p className="text-white mt-0.5">"कहाँ है सबसे नजदीकी अस्पताल?"</p>
              </div>
            </div>

            <div className="text-center text-[#ff6326] font-bold">
              ⇄ SPECTRASCAN REAL-TIME BRIDGE ⇄
            </div>

            <div className="flex items-center gap-3 p-3 rounded bg-[#171614] border border-[#ff6326]/50">
              <span className="text-xl">👤</span>
              <div>
                <span className="text-[#ff8246] font-bold">PERSON B [HEARS SPANISH]:</span>
                <p className="text-white mt-0.5">"¿Dónde está el hospital más cercano?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — LOCAL OFFLINE VS CONNECTED CLOUD */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V2.06 // DATA INDEPENDENCE ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            OFFLINE WHEN POSSIBLE. CONNECTED WHEN NEEDED.
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            SpectraScan V2 never leaves you stranded. Full autonomy is preserved without requiring constant Wi-Fi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
          <div className="p-6 rounded bg-[#0f0e0d] border border-[#dca33e] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#f4be5c] text-sm font-bold mb-3">
                <ShieldCheck className="w-5 h-5 text-[#f4be5c]" />
                <span>LOCAL MODE (100% OFFLINE)</span>
              </div>
              <p className="text-xs text-[#b4ad9f] leading-relaxed mb-4">
                Everything required for everyday reading and essential travel translation is pre-loaded on-device:
              </p>
              <ul className="text-xs text-[#ded7c9] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60]" />
                  <span>Optical camera scanning & character OCR</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60]" />
                  <span>Text-to-speech audio synthesis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60]" />
                  <span>Core 110+ language dictionary lookups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60]" />
                  <span>Complete privacy with zero data transmission</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-[#2d2b27] text-[10px] text-[#f4be5c]">
              AUTONOMOUS FIELD RELIABILITY
            </div>
          </div>

          <div className="p-6 rounded bg-[#0f0e0d] border border-[#ff6326] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#ff8246] text-sm font-bold mb-3">
                <Zap className="w-5 h-5 text-[#ff8246]" />
                <span>EXPANDED CLOUD MODE (OPTIONAL)</span>
              </div>
              <p className="text-xs text-[#b4ad9f] leading-relaxed mb-4">
                Connect via Wi-Fi or USB-C whenever you wish to synchronize new libraries or firmware upgrades:
              </p>
              <ul className="text-xs text-[#ded7c9] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6326]" />
                  <span>Over-the-air firmware optimizations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6326]" />
                  <span>Regional dialect expansion packs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6326]" />
                  <span>Personal cloud book library syncing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6326]" />
                  <span>Optional student telemetry logging</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-[#2d2b27] text-[10px] text-[#ff8246]">
              CONNECTED ONLY AT YOUR CHOICE
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — SUMMARY HERO */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="p-8 md:p-14 rounded bg-[#0f0e0d] border border-[#3d251a] shadow-2xl">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V2.07 // SUMMARY ]
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#f4be5c] uppercase mb-4 tracking-tight">
            UNDERSTAND BEYOND WORDS.
          </h2>
          <div className="flex justify-center gap-4 font-mono text-xs text-[#b4ad9f] mb-6">
            <span>READ</span> • <span>TRANSLATE</span> • <span>DEFINE</span> • <span>COMMUNICATE</span>
          </div>
          <p className="text-sm md:text-base text-[#ded7c9] max-w-xl mx-auto mb-8 leading-relaxed">
            The power of 110+ languages in your pocket. SpectraScan V2 transforms physical linguistic barriers into global connections.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => { playTactileClick(); onNavigate('v3'); }}
              className="px-6 py-3 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] font-mono text-xs font-bold transition-all shadow-[0_2px_12px_rgba(255,99,38,0.3)] flex items-center gap-2"
            >
              <span>SEE V3'S AI COGNITIVE REVOLUTION</span>
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
