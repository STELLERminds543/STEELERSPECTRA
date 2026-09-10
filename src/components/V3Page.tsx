import React, { useState } from 'react';
import { AppPage } from '../types';
import { SPLINE_SCENES } from '../data/spectrascanData';
import { SplineHero } from './SplineHero';
import { playTactileClick } from '../utils/audio';
import { Sparkles, Brain, Cpu, MessageSquare, Calculator, Volume2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface V3PageProps {
  onNavigate: (page: AppPage) => void;
}

export const V3Page: React.FC<V3PageProps> = ({ onNavigate }) => {
  const [activePrompt, setActivePrompt] = useState<'simple' | 'summary' | 'quiz'>('simple');

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* V3 Spline 3D Hero */}
      <SplineHero
        scene={SPLINE_SCENES.v3}
        onNavigate={onNavigate}
        currentPage="v3"
        scrollToId="v3-overview"
      />

      {/* SECTION 1 — COGNITIVE FLAGSHIP OVERVIEW & HARDWARE SPECIFICATIONS */}
      <section id="v3-overview" className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-6">
            <div className="font-mono text-xs text-[#ff8246] tracking-widest uppercase mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ V3.01 // THE COGNITIVE FLAGSHIP ]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
              THE AI COGNITIVE REVOLUTION
            </h2>
            <p className="text-base md:text-lg text-[#ded7c9] leading-relaxed mb-6">
              <strong className="text-white font-semibold">SpectraScan V3</strong> elevates the platform from an optical reader into an autonomous companion for thinking with printed media, featuring neural comprehension, conversational document Q&A, and step-by-step mathematical reasoning.
            </p>

            <div className="flex flex-wrap gap-2 font-mono text-xs mb-6">
              <span className="px-3 py-1 bg-[#3d251a] border border-[#ff6326] text-[#ff8246] font-bold rounded shadow-[0_0_10px_rgba(255,99,38,0.2)]">
                AI UNDERSTANDING
              </span>
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] text-[#ded7c9] rounded">
                DOCUMENT Q&A
              </span>
              <span className="px-3 py-1 bg-[#2e1c14] border border-[#dca33e] text-[#f4be5c] font-bold rounded">
                STEP-BY-STEP MATH SOLVER
              </span>
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] text-[#ded7c9] rounded">
                7-INCH OLED TOUCH
              </span>
              <span className="px-3 py-1 bg-[#171614] border border-[#2d2b27] text-[#ded7c9] rounded">
                MULTIMODAL VOICE
              </span>
            </div>

            {/* Visual Hardware Callout Checklist */}
            <div className="bg-[#12110f] border border-[#2d2b27] rounded p-4 font-mono text-xs text-[#b4ad9f] space-y-2">
              <div className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dca33e]" />
                <span>PHYSICAL HARDWARE INVENTORY (V3 KIT)</span>
              </div>
              <ul className="space-y-1.5 pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#dca33e]">•</span>
                  <span><strong>Sculpted AI Scanning Wand:</strong> Aerodynamic matte black stylus with integrated spherical thumb trackball, tactile rocker trigger, and gold/silver guidance bevel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dca33e]">•</span>
                  <span><strong>High-Resolution Processing Deck:</strong> Ultra-thin pocket companion housing edge-to-edge touch display verifying real-time algebra derivation (<code>MATH SOLVED: 2x - 5 = 11 =&gt; x = 3</code>), central Power key, and USB-C ultra-fast bus.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* V3 Hardware Technical Schematic Blueprint */}
          <div className="lg:col-span-6">
            <div className="bg-[#0f0e0d] border border-[#382b13] rounded-lg p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#2d2b27] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#dca33e] animate-pulse" />
                  <span className="text-white font-bold tracking-wider">HARDWARE SPECIFICATIONS // V3 BLUEPRINT</span>
                </div>
                <span className="text-[#f4be5c] text-[10px] px-2 py-0.5 rounded bg-[#2e1c14] border border-[#dca33e]/40 font-bold">
                  REV 3.01 (AI EDGE)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#f4be5c] font-bold mb-1">COGNITIVE COMPUTE</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Core: Dual Neural Engine NPU</div>
                    <div>• Local LLM: Quantized Edge Reasoning</div>
                    <div>• Math: Step-by-Step Solver Engine</div>
                    <div>• Latency: Instant Conversational Q&A</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#f4be5c] font-bold mb-1">INTERACTION DECK</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Display: 7.0" Capacitive Touch OLED</div>
                    <div>• Resolution: 1080p High-Density</div>
                    <div>• Trackball: Micro Spherical Controller</div>
                    <div>• Voice: Conversational Multi-Mic AI</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#f4be5c] font-bold mb-1">OPTICS & GUIDANCE</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Sensor: Ultra-DPI Continuous Macro</div>
                    <div>• Glyph: Multi-line & Math Symbols</div>
                    <div>• Bevel: Precision Gold Angle Nose</div>
                    <div>• Haptics: LRA Multi-Frequency</div>
                  </div>
                </div>

                <div className="bg-[#171614] border border-[#2d2b27] p-3 rounded">
                  <div className="text-[#f4be5c] font-bold mb-1">POWER & TELEMETRY</div>
                  <div className="text-[#ded7c9] space-y-1 text-[11px]">
                    <div>• Battery: 4500mAh Smart Cell</div>
                    <div>• Charging: USB-C Fast-Charge 30W</div>
                    <div>• Storage: 128GB Onboard Neural DB</div>
                    <div>• Connectivity: Offline + Cloud Sync</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#12110f] border border-[#2d2b27] rounded text-[11px] text-[#7e786e] flex items-center justify-between">
                <span>STATUS: ADVANCED RESEARCH & COMMERCIAL FLAGSHIP</span>
                <span className="text-[#f4be5c] font-bold">FULL MULTIMODAL AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COGNITIVE PIPELINE LADDER */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V3.02 // COGNITIVE PIPELINE ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-2">
            FROM SCANNING TO THINKING
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Unlike traditional scanners that stop at character bytes, V3 constructs a neural knowledge graph of the document.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 font-mono">
          {[
            { num: '01', icon: '🖊️', title: 'SCAN', desc: 'Sculpted stylus sweeps multi-line text or algebra.' },
            { num: '02', icon: '🔤', title: 'OCR', desc: 'Sub-pixel character extraction and math glyph parsing.' },
            { num: '03', icon: '📄', title: 'TEXT BUFFER', desc: 'Structured digital tokens with punctuation trees.' },
            { num: '04', icon: '🧠', title: 'AI CONTEXT', desc: 'Contextual neural coprocessor interprets concepts.', highlight: 'gold' },
            { num: '05', icon: '💡', title: 'ASK / SOLVE', desc: 'Generates summaries, clarifies terms, proves equations.', highlight: 'orange' },
            { num: '06', icon: '🖥️', title: '7" OLED + VOICE', desc: 'Delivered in high contrast or spoken cadence.', highlight: 'white' },
          ].map((step, idx) => (
            <div
              key={idx}
              className={`p-4 rounded border flex flex-col justify-between ${
                step.highlight === 'orange'
                  ? 'bg-[#1e130d] border-[#ff6326] text-[#ff8246]'
                  : step.highlight === 'gold'
                  ? 'bg-[#1e130d]/50 border-[#dca33e] text-[#f4be5c]'
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

      {/* SECTION 3 — ASK YOUR TEXT (INTERACTIVE CHAT DEMO) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V3.03 // CONVERSATIONAL QUERY ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            ASK YOUR TEXT
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Select a question below to see how SpectraScan V3 converses directly with printed material:
          </p>
        </div>

        <div className="bg-[#0f0e0d] border border-[#ff6326]/50 rounded p-6 shadow-2xl font-mono">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#2d2b27] text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#f4be5c] font-bold">SCANNED DOCUMENT:</span>
              <span className="text-[#b4ad9f]">ASTROPHYSICS TEXTBOOK (P. 142)</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => { playTactileClick(); setActivePrompt('simple'); }}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  activePrompt === 'simple'
                    ? 'bg-[#ff6326] text-[#070706] font-bold'
                    : 'bg-[#171614] border border-[#2d2b27] text-[#ded7c9] hover:border-[#dca33e]'
                }`}
              >
                Explain in Simple Terms
              </button>
              <button
                onClick={() => { playTactileClick(); setActivePrompt('summary'); }}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  activePrompt === 'summary'
                    ? 'bg-[#ff6326] text-[#070706] font-bold'
                    : 'bg-[#171614] border border-[#2d2b27] text-[#ded7c9] hover:border-[#dca33e]'
                }`}
              >
                Executive Summary
              </button>
              <button
                onClick={() => { playTactileClick(); setActivePrompt('quiz'); }}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  activePrompt === 'quiz'
                    ? 'bg-[#ff6326] text-[#070706] font-bold'
                    : 'bg-[#171614] border border-[#2d2b27] text-[#ded7c9] hover:border-[#dca33e]'
                }`}
              >
                Generate Study Quiz
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {/* User Message */}
            <div className="p-3.5 rounded bg-[#171614] border border-[#2d2b27] max-w-xl ml-auto">
              <div className="text-[10px] text-[#7e786e] mb-1">USER QUERY [VOICE SPEECH]:</div>
              <div className="text-white text-xs md:text-sm">
                {activePrompt === 'simple' && '"What is this paragraph explaining in simple words?"'}
                {activePrompt === 'summary' && '"Give me the single most important takeaway from this page."'}
                {activePrompt === 'quiz' && '"Create two flashcard questions to test my comprehension."'}
              </div>
            </div>

            {/* AI Response */}
            <div className="p-4 rounded bg-[#1e130d]/80 border border-[#ff6326] max-w-2xl">
              <div className="flex items-center justify-between text-[10px] text-[#ff8246] mb-2">
                <span className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  SPECTRASCAN V3 AI AGENT
                </span>
                <span className="text-[#27ae60]">LATENCY: 0.28s</span>
              </div>
              <div className="text-xs md:text-sm text-[#f5f1e8] leading-relaxed font-sans">
                {activePrompt === 'simple' && (
                  <p>
                    "This paragraph explains how stars like our Sun produce energy. Even though atomic particles naturally push away from each other due to electromagnetic forces, quantum tunneling allows them to slip through this barrier and fuse together, releasing the sunlight that sustains life on Earth."
                  </p>
                )}
                {activePrompt === 'summary' && (
                  <p>
                    "Executive Takeaway: Nuclear fusion in stars is fundamentally enabled by quantum tunneling, which overcomes the electrostatic barrier that would otherwise prevent hydrogen nuclei from fusing."
                  </p>
                )}
                {activePrompt === 'quiz' && (
                  <div className="space-y-2">
                    <p><strong>Q1:</strong> What phenomenon allows hydrogen nuclei to overcome their natural electrostatic repulsion in stellar cores?</p>
                    <p className="text-[#f4be5c]"><strong>A1:</strong> Quantum tunneling.</p>
                    <p><strong>Q2:</strong> Why is this process necessary for solar light and heat?</p>
                    <p className="text-[#f4be5c]"><strong>A2:</strong> Without tunneling, core temperatures would not be high enough for fusion to sustain energy output.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AI-ASSISTED MATHEMATICS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
              [ V3.04 // STEM REASONING ]
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
              SEE THE PROBLEM. SOLVE IT.
            </h2>
            <p className="text-sm md:text-base text-[#b4ad9f] leading-relaxed mb-4">
              Scan printed equations, algebra, fractions, and calculus formulas to receive guided, step-by-step logic proofs.
            </p>
            <p className="text-sm text-[#b4ad9f] leading-relaxed mb-6">
              SpectraScan V3 delivers <strong className="text-white">AI-assisted mathematics</strong>. Rather than functioning as a black-box calculator, it teaches the student why each deductive step follows, reinforcing algebraic principles.
            </p>

            <div className="p-4 rounded bg-[#0f0e0d] border border-[#2d2b27] font-mono text-xs text-[#f4be5c] space-y-1">
              <div>// RECOGNIZES FRACTIONS, EXPONENTS & ROOTS</div>
              <div>// STEP-BY-STEP CONCEPTUAL DERIVATION</div>
              <div>// CHECKS STUDENT PENCIL WORK LIVE ON PAPER</div>
            </div>
          </div>

          {/* Math Solver Screen Mockup */}
          <div className="p-6 rounded bg-[#070706] border-2 border-[#ff6326] font-mono text-xs space-y-3 shadow-[0_0_30px_rgba(255,99,38,0.2)]">
            <div className="flex items-center justify-between text-[#7e786e] border-b border-[#2d2b27] pb-2">
              <span className="text-[#ff8246] font-bold flex items-center gap-1.5">
                <Calculator className="w-4 h-4" />
                MATH SOLVER CORE // STEP-BY-STEP
              </span>
              <span className="text-[#27ae60]">VERIFIED PROOF</span>
            </div>

            <div className="p-3 rounded bg-[#12100e] border border-[#2d2b27]">
              <span className="text-[10px] text-[#7e786e]">SCANNED INK FORMULA:</span>
              <div className="text-lg font-bold text-[#f4be5c] mt-0.5">2x + 5 = 11</div>
            </div>

            <div className="space-y-2 text-[#ded7c9] pl-2 border-l-2 border-[#dca33e]">
              <div>
                <span className="text-[#7e786e] block text-[10px]">STEP 01 // SUBTRACT 5 FROM BOTH SIDES:</span>
                <span className="text-white font-semibold">2x = 11 - 5 ➔ 2x = 6</span>
              </div>
              <div>
                <span className="text-[#7e786e] block text-[10px]">STEP 02 // DIVIDE BOTH SIDES BY 2:</span>
                <span className="text-white font-semibold">x = 6 / 2</span>
              </div>
            </div>

            <div className="p-3 rounded bg-[#1e130d] border border-[#ff6326] text-center">
              <span className="text-[10px] text-[#ff8246] uppercase block font-bold">SOLUTION RESULT</span>
              <div className="text-xl font-bold text-[#ff8246] mt-0.5">x = 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — 7-INCH OLED TOUCH EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs text-[#dca33e] tracking-widest uppercase mb-2">
            [ V3.05 // HARDWARE INTERFACE ]
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
            7 INCHES OF ACCESSIBLE REAL ESTATE
          </h2>
          <p className="text-sm md:text-base text-[#b4ad9f]">
            Why V3's expansive edge-to-edge capacitive OLED deck transforms reading accessibility:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <h4 className="font-bold text-white text-base mb-2">Full Paragraph Context</h4>
            <p className="text-xs text-[#b4ad9f] leading-relaxed">
              Read complete paragraphs without constant vertical scroll fatigue, keeping sentences in holistic context.
            </p>
          </div>

          <div className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <h4 className="font-bold text-white text-base mb-2">Motor-Tremor Friendly</h4>
            <p className="text-xs text-[#b4ad9f] leading-relaxed">
              Generous, oversized capacitive touch targets make navigation effortless for users with physical tremors.
            </p>
          </div>

          <div className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <h4 className="font-bold text-white text-base mb-2">Side-by-Side Reasoning</h4>
            <p className="text-xs text-[#b4ad9f] leading-relaxed">
              View original scanned text on the left while AI explanations, definitions, and math solutions appear on the right.
            </p>
          </div>

          <div className="p-5 rounded bg-[#0f0e0d] border border-[#2d2b27]">
            <h4 className="font-bold text-white text-base mb-2">Zero-Lux Black Levels</h4>
            <p className="text-xs text-[#b4ad9f] leading-relaxed">
              Pure OLED contrast eliminates backlight glare and eye strain for sensitive and low-vision readers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SUMMARY HERO */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="p-8 md:p-14 rounded bg-[#0f0e0d] border border-[#3d251a] shadow-2xl">
          <div className="font-mono text-xs text-[#ff8246] tracking-widest uppercase mb-2">
            [ V3.06 // SUMMARY ]
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#ff8246] uppercase mb-4 tracking-tight">
            MORE THAN A READER.
          </h2>
          <div className="flex justify-center gap-4 font-mono text-xs text-[#f4be5c] mb-6">
            <span>SCAN</span> • <span>UNDERSTAND</span> • <span>ASK</span> • <span>SOLVE</span> • <span>THINK</span>
          </div>
          <p className="text-sm md:text-base text-[#ded7c9] max-w-xl mx-auto mb-8 leading-relaxed">
            The convergence of optical physics and artificial intelligence. SpectraScan V3 is an autonomous copilot for human cognition.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => { playTactileClick(); onNavigate('differentiation'); }}
              className="px-6 py-3 rounded bg-[#ff6326] hover:bg-[#ff8246] text-[#070706] font-mono text-xs font-bold transition-all shadow-[0_2px_12px_rgba(255,99,38,0.3)] flex items-center gap-2"
            >
              <span>SEE DIFFERENTIATION MATRIX (V1 vs V2 vs V3)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { playTactileClick(); onNavigate('home'); }}
              className="px-6 py-3 rounded bg-[#171614] hover:bg-[#2d2b27] text-[#f4be5c] border border-[#dca33e] font-mono text-xs font-semibold transition-colors"
            >
              RETURN TO HOME
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
