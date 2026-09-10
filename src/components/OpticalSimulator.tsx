import React, { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw, Cpu, CheckCircle2 } from 'lucide-react';
import { SIM_DOCUMENTS } from '../data/spectrascanData';
import { playTactileClick, playSoftTick, playSuccessChime } from '../utils/audio';

export const OpticalSimulator: React.FC = () => {
  const [docKey, setDocKey] = useState<'text' | 'math' | 'code'>('text');
  const [isScanning, setIsScanning] = useState(false);
  const [scanX, setScanX] = useState(40);
  const [speed, setSpeed] = useState(3);
  const [packets, setPackets] = useState(0);
  const [latency, setLatency] = useState(0);
  const [confidence, setConfidence] = useState('99.8%');
  const [streamLines, setStreamLines] = useState<string[]>([
    '> INIT SPECTRASCAN CORE...',
    '> CALIBRATING OPTICAL WAVELENGTHS (650nm / IR 880nm)...',
    '> READY. Click "TRIGGER SCAN SWEEP" or drag the optical sensor tip.'
  ]);
  const [decodedOutput, setDecodedOutput] = useState<string>('Awaiting optical sweep acquisition...');

  const surfaceRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);

  const activeDoc = SIM_DOCUMENTS[docKey];

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handleSelectDoc = (key: 'text' | 'math' | 'code') => {
    playTactileClick();
    setDocKey(key);
    handleReset(false);
  };

  const handleReset = (playSound = true) => {
    if (playSound) playTactileClick();
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    setIsScanning(false);
    setScanX(40);
    setPackets(0);
    setLatency(0);
    setConfidence('99.8%');
    setDecodedOutput('Awaiting optical sweep acquisition...');
    setStreamLines([
      '> BUFFER RESET.',
      '> CALIBRATING OPTICAL WAVELENGTHS (650nm)...',
      '> READY. Click "TRIGGER SCAN SWEEP" to begin line extraction.'
    ]);
  };

  const startSweep = () => {
    if (isScanning || !surfaceRef.current) return;
    playTactileClick();
    setIsScanning(true);

    const surfaceWidth = surfaceRef.current.clientWidth;
    let currentX = 20;
    const step = speed * 4.5;
    const startTime = performance.now();
    let packetCount = 0;
    let tokenIndex = 0;

    setStreamLines([
      '> OPTICAL SWEEP TRIGGERED...',
      `> SPECIMEN: ${activeDoc.category.toUpperCase()}`,
      '> EMITTER: 650nm + TACTILE SENSOR ACTIVE'
    ]);

    const animate = () => {
      currentX += step;
      packetCount += 4;
      setPackets(packetCount);

      if (currentX >= surfaceWidth - 25) {
        currentX = surfaceWidth - 25;
        setScanX(currentX);
        completeSweep(performance.now() - startTime);
        return;
      }

      setScanX(currentX);

      // Stochastic token emission
      if (Math.random() > 0.62 && tokenIndex < activeDoc.tokens.length) {
        const token = activeDoc.tokens[tokenIndex++];
        playSoftTick();
        setStreamLines((prev) => [
          ...prev.slice(-7),
          `> TOKEN: "${token}" [CONF: 99.${Math.floor(Math.random() * 8) + 1}%]`
        ]);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
  };

  const completeSweep = (elapsedMs: number) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsScanning(false);
    const ms = Math.round(elapsedMs);
    setLatency(ms);
    setConfidence('99.94%');
    setStreamLines((prev) => [
      ...prev.slice(-6),
      `> CHECKSUM VERIFIED (CRC-32 MATCH)`,
      `> PARSING COMPLETE IN ${ms}ms. PAYLOAD STORED.`
    ]);
    setDecodedOutput(activeDoc.payload);
    playSuccessChime();
  };

  const handleSurfaceMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isScanning || !surfaceRef.current) return;
    const rect = surfaceRef.current.getBoundingClientRect();
    const x = Math.max(15, Math.min(rect.width - 20, e.clientX - rect.left));
    setScanX(x);
  };

  return (
    <div className="bg-[#0f0e0d] border-2 border-[#3d251a] rounded-sm shadow-2xl overflow-hidden">
      {/* Top Screws Chassis Header */}
      <div className="bg-[#1e130d] border-b border-[#3d251a] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#786f67] border border-[#1a1815] relative">
            <div className="absolute top-1 left-0.5 right-0.5 h-0.5 bg-[#0c0b09]" />
          </div>
          <span className="font-mono text-xs font-bold text-[#f4be5c] tracking-wider">
            INTERACTIVE SCANNER SIMULATOR // HARDWARE PIPELINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff6326] animate-pulse" />
          <span className="font-mono text-[10px] text-[#ff8246]">OPTICAL SENSOR READY</span>
        </div>
      </div>

      {/* Grid: Print Target Stage vs Terminal Output */}
      <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Document Stage */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="font-mono text-xs text-[#7e786e] uppercase">
                STAGE: PHYSICAL PRINT SURFACE
              </span>
              <div className="flex gap-1.5 font-mono text-[11px]">
                <button
                  id="sim-pill-text"
                  onClick={() => handleSelectDoc('text')}
                  className={`px-2.5 py-1 rounded border transition-all ${
                    docKey === 'text'
                      ? 'bg-[#3d251a] border-[#dca33e] text-[#f4be5c] font-bold'
                      : 'bg-[#171614] border-[#2d2b27] text-[#b4ad9f] hover:border-[#47433c]'
                  }`}
                >
                  01. Standard Text
                </button>
                <button
                  id="sim-pill-math"
                  onClick={() => handleSelectDoc('math')}
                  className={`px-2.5 py-1 rounded border transition-all ${
                    docKey === 'math'
                      ? 'bg-[#3d251a] border-[#ff6326] text-[#ff8246] font-bold'
                      : 'bg-[#171614] border-[#2d2b27] text-[#b4ad9f] hover:border-[#47433c]'
                  }`}
                >
                  02. Math Equation
                </button>
                <button
                  id="sim-pill-code"
                  onClick={() => handleSelectDoc('code')}
                  className={`px-2.5 py-1 rounded border transition-all ${
                    docKey === 'code'
                      ? 'bg-[#3d251a] border-[#dca33e] text-[#f4be5c] font-bold'
                      : 'bg-[#171614] border-[#2d2b27] text-[#b4ad9f] hover:border-[#47433c]'
                  }`}
                >
                  03. Assembly / ROM
                </button>
              </div>
            </div>

            {/* Target Paper Surface */}
            <div
              ref={surfaceRef}
              onMouseDown={handleSurfaceMouseDown}
              className="relative bg-[#f6f3eb] text-[#1a1714] p-5 rounded border border-[#cfc7ba] min-h-[220px] shadow-inner select-none cursor-crosshair overflow-hidden"
              style={{
                backgroundImage: 'radial-gradient(#dcd4c7 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            >
              {/* Paper Content */}
              <div className="font-mono text-xs md:text-sm leading-relaxed relative z-0">
                <div className="font-bold text-sm text-[#0d0c0a] border-b border-[#d4ccbd] pb-1.5 mb-2.5 flex items-center justify-between">
                  <span>{activeDoc.title}</span>
                  <span className="text-[10px] text-[#784c36]">[600 DPI PRINT]</span>
                </div>
                <div className="whitespace-pre-wrap font-sans text-xs md:text-sm text-[#241f1a]">
                  {activeDoc.content}
                </div>
              </div>

              {/* Interactive Optical Scanning Wand Line */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-[#ff6326] shadow-[0_0_12px_#ff6326] z-10 transition-all duration-75 pointer-events-none"
                style={{ left: `${scanX}px` }}
              >
                {/* Glow Beam */}
                <div className="absolute -left-6 -right-6 top-0 bottom-0 bg-gradient-to-r from-transparent via-[#ff6326]/30 to-transparent pointer-events-none" />
                {/* Sensor Tip Emitter */}
                <div className="absolute top-2 -left-2 flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#ff6326] border-2 border-white shadow-[0_0_8px_#ff6326] animate-pulse" />
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#0e0c0a] text-[#ff8246] border border-[#ff6326] whitespace-nowrap">
                    OPTICAL SENSOR TIP
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <div className="flex items-center gap-2">
              <button
                id="sim-trigger-scan-btn"
                onClick={startSweep}
                disabled={isScanning}
                className="flex items-center gap-2 px-4 py-2 rounded bg-[#ff6326] hover:bg-[#ff8246] disabled:opacity-50 text-[#070706] font-mono text-xs font-bold transition-all shadow-[0_2px_10px_rgba(255,99,38,0.3)]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isScanning ? 'SWEEPING PAPER...' : 'TRIGGER SCAN SWEEP'}</span>
              </button>

              <button
                id="sim-reset-btn"
                onClick={() => handleReset(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded bg-[#2e1c14] hover:bg-[#3d251a] text-[#ded7c9] border border-[#573727] font-mono text-xs transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>

            {/* Sweep rate slider */}
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <label htmlFor="sim-sweep-rate" className="text-[#7e786e]">
                SWEEP_RATE:
              </label>
              <input
                id="sim-sweep-rate"
                type="range"
                min="1"
                max="5"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-20 accent-[#dca33e] cursor-pointer"
              />
              <span className="text-[#f4be5c] font-bold w-4">{speed}x</span>
            </div>
          </div>
        </div>

        {/* Right: CRT Terminal Column */}
        <div className="bg-[#050505] border border-[#47433c] rounded flex flex-col justify-between overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="bg-[#100f0d] border-b border-[#2d2b27] px-3.5 py-2 flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff6326] shadow-[0_0_4px_#ff6326]" />
              <span className="w-2 h-2 rounded-full bg-[#dca33e]" />
              <span className="w-2 h-2 rounded-full bg-[#27ae60]" />
              <span className="text-[#f4be5c] font-semibold ml-2">
                SPECTRASCAN TERMINAL
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#7e786e]">
              <Cpu className="w-3 h-3 text-[#dca33e]" />
              <span>DSP_CORE_ACTIVE</span>
            </div>
          </div>

          {/* CRT Stream */}
          <div className="p-4 font-mono text-xs flex-1 flex flex-col justify-between min-h-[220px] bg-[#070706] relative">
            <div className="space-y-1 text-[#ded7c9] leading-relaxed">
              {streamLines.map((line, idx) => (
                <div key={idx} className="flex items-start gap-1">
                  <span className="text-[#dca33e] font-bold">&gt;</span>
                  <span className={idx === streamLines.length - 1 ? 'text-[#ff8246]' : ''}>
                    {line.replace(/^>\s*/, '')}
                  </span>
                </div>
              ))}
            </div>

            {/* Decoded Output Box */}
            <div className="mt-4 p-3 rounded bg-[#12100e] border border-[#dca33e]/40">
              <div className="flex items-center justify-between text-[10px] text-[#7e786e] border-b border-[#2d2b27] pb-1 mb-1.5">
                <span className="text-[#f4be5c] font-bold">DECODED OCR PAYLOAD:</span>
                <span className="text-[#27ae60] flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  {confidence}
                </span>
              </div>
              <div className="text-xs text-[#f5f1e8] whitespace-pre-wrap font-mono leading-relaxed">
                {decodedOutput}
              </div>
            </div>
          </div>

          {/* Terminal Bottom Telemetry */}
          <div className="bg-[#100f0d] border-t border-[#2d2b27] px-3 py-1.5 flex items-center justify-between font-mono text-[10px] text-[#7e786e]">
            <div>
              PACKETS: <span className="text-[#f4be5c] font-bold">{packets}</span>
            </div>
            <div>
              BUFFER: <span className="text-[#ff8246] font-bold">256 KB SRAM</span>
            </div>
            <div>
              LATENCY: <span className="text-[#f4be5c] font-bold">{latency}ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
