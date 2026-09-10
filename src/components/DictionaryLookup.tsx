import React, { useState } from 'react';
import { Volume2, BookOpen, Search } from 'lucide-react';
import { DICTIONARY_ENTRIES } from '../data/spectrascanData';
import { playTactileClick, playSoftTick } from '../utils/audio';

export const DictionaryLookup: React.FC = () => {
  const [activeWord, setActiveWord] = useState<string>('SPECTRUM');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const entry = DICTIONARY_ENTRIES[activeWord] || {
    word: searchQuery.toUpperCase() || 'TERM',
    phonetic: '/ˈtɜːrm/',
    partOfSpeech: 'NOUN',
    definition: 'Instant on-device definition lookup. SpectraScan V2 stores comprehensive offline lexical databases for sub-second vocabulary synthesis.',
    example: 'Students and travelers can highlight unfamiliar terms for instant clarity.',
  };

  const handleSelectWord = (word: string) => {
    playTactileClick();
    setActiveWord(word);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    playTactileClick();
    const upper = searchQuery.trim().toUpperCase();
    if (DICTIONARY_ENTRIES[upper]) {
      setActiveWord(upper);
    }
  };

  const handleSpeak = () => {
    playTactileClick();
    setIsPlayingAudio(true);
    setTimeout(() => {
      playSoftTick();
      setIsPlayingAudio(false);
    }, 1200);
  };

  return (
    <div className="bg-[#0f0e0d] border border-[#2d2b27] rounded-sm shadow-xl p-5 font-mono">
      {/* Search and preset chips */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#2d2b27]">
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[#7e786e]">PRESET TERMS:</span>
          {Object.keys(DICTIONARY_ENTRIES).map((word) => (
            <button
              key={word}
              onClick={() => handleSelectWord(word)}
              className={`px-2.5 py-1 rounded text-xs transition-all ${
                activeWord === word && !searchQuery
                  ? 'bg-[#ff6326] text-[#070706] font-bold shadow-[0_0_8px_#ff6326]'
                  : 'bg-[#171614] border border-[#47433c] text-[#ded7c9] hover:border-[#dca33e] hover:text-[#f4be5c]'
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        {/* Search input form */}
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-1.5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search lexicon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#171614] border border-[#47433c] focus:border-[#ff6326] text-xs text-white px-3 py-1.5 pl-8 rounded outline-none w-44 font-mono"
            />
            <Search className="w-3.5 h-3.5 text-[#7e786e] absolute left-2.5 top-2.5" />
          </div>
          <button
            type="submit"
            className="px-3 py-1.5 rounded bg-[#3d251a] hover:bg-[#ff6326] text-[#f4be5c] hover:text-[#070706] text-xs border border-[#dca33e] transition-colors"
          >
            LOOKUP
          </button>
        </form>
      </div>

      {/* Dictionary Card Display Screen */}
      <div className="mt-5 p-5 rounded bg-[#070706] border border-[#dca33e]/50 relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-[#f4be5c] tracking-wider">
                {entry.word}
              </h3>
              <span className="text-xs text-[#7e786e] border border-[#2d2b27] px-2 py-0.5 rounded">
                [{entry.partOfSpeech}]
              </span>
            </div>
            <div className="text-sm text-[#ff8246] mt-1 font-sans font-medium">
              {entry.phonetic}
            </div>
          </div>

          <button
            onClick={handleSpeak}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-bold transition-all ${
              isPlayingAudio
                ? 'bg-[#ff6326] text-[#070706] border-[#ff8246]'
                : 'bg-[#171614] text-[#f4be5c] border-[#dca33e] hover:bg-[#dca33e]/20'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{isPlayingAudio ? 'SYNTHESIZING...' : 'LISTEN'}</span>
          </button>
        </div>

        {/* Definition */}
        <p className="mt-4 text-sm text-[#f5f1e8] font-sans leading-relaxed">
          {entry.definition}
        </p>

        {/* Example in context */}
        <div className="mt-4 pt-3 border-t border-[#2d2b27] flex items-start gap-2 text-xs text-[#b4ad9f]">
          <BookOpen className="w-4 h-4 text-[#dca33e] shrink-0 mt-0.5" />
          <p className="italic">
            "{entry.example}"
          </p>
        </div>

        {/* Hardware Status */}
        <div className="mt-4 flex items-center justify-between text-[10px] text-[#7e786e] font-mono">
          <span>SOURCE: ON-BOARD LEXICON (OFFLINE COMPACT)</span>
          <span className="text-[#27ae60]">STATUS: INSTANT VERIFIED</span>
        </div>
      </div>
    </div>
  );
};
