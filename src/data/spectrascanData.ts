import { ComparisonRow, DictEntry, SimDocument, SplineSceneConfig, TeamMember } from '../types';

export const SPLINE_SCENES: Record<string, SplineSceneConfig> = {
  differentiation: {
    id: 'differentiation',
    title: 'THE TRIAD DIFFERENTIATION',
    badge: '3D DISTORTING TYPOGRAPHY // INTERACTIVE MATRIX',
    splineUrl: 'https://my.spline.design/distortingtypography-YSYkqGCLBIpLGqfCEO6022CW/',
    description: 'Explore the full dimensional shift across SpectraScan generations from optical reading to cognitive AI.',
    tagline: 'DISCOVER · COMPARE · EVOLVE',
  },
  v3: {
    id: 'v3',
    title: 'SPECTRASCAN V3 // COGNITIVE FLAGSHIP',
    badge: '3D DISCOVERY EXPLORER // AI SPATIAL CANVAS',
    splineUrl: 'https://my.spline.design/discover-eZq4XN0sTx7qWzUpU8VGWSOK/',
    description: 'Multimodal AI context parsing, step-by-step mathematical reasoning, and 7-inch capacitive OLED interaction.',
    tagline: 'I CAN THINK WITH IT',
  },
  v2: {
    id: 'v2',
    title: 'SPECTRASCAN V2 // MULTILINGUAL LEAP',
    badge: '3D ROTATING INTERACTIVE HERO // FIELD ERGONOMIC',
    splineUrl: 'https://my.spline.design/rotatinginteractiveherosection-Ig8FOQOeFuBjfFHGkCO4xMKA/',
    description: '110+ global languages, offline dictionary lookups, and bidirectional speech-to-speech dialogue bridge.',
    tagline: 'I CAN UNDERSTAND IT',
  },
  v1: {
    id: 'v1',
    title: 'SPECTRASCAN V1 // ACCESSIBILITY BASELINE',
    badge: '3D AI WEB ANIMATION // RUGGED INDUSTRIAL CORE',
    splineUrl: 'https://my.spline.design/ailandingpagewebdesign3danimation-w4OaPs65OSLDMYNqYjAVwzit/',
    description: 'Foundational tactile optical reader converting printed ink into instant text-to-speech with guided haptic vibration.',
    tagline: 'I CAN READ IT',
  },
};

export const COMPARISON_MATRIX: ComparisonRow[] = [
  { feature: 'Camera Scanning', v1: '✓ Dedicated Tip', v2: '✓ Ergonomic Wand', v3: '✓ Ultra-Precision Stylus', isV3Special: true },
  { feature: 'OCR Engine', v1: '✓ Local Sub-pixel', v2: '✓ Improved Contrast', v3: '★ Neural Multi-Pass Context', isV3Special: true },
  { feature: 'Text-to-Speech', v1: '✓ 1.2W Speaker + 3.5mm', v2: '✓ Natural Tone Curvature', v3: '★ Multimodal Conversational Audio', isV3Special: true },
  { feature: 'Language Support', v1: '2–3 Core Languages', v2: '110+ Global Languages', v3: '★ Advanced Multilingual + Reasoning', isV3Special: true },
  { feature: 'Translation', v1: 'Basic / Limited', v2: '✓ Fast Offline Cross-Talk', v3: '✓ Contextual Semantic Translation', isV3Special: true },
  { feature: 'Dictionary', v1: '—', v2: '✓ Offline Lexicon Lookup', v3: '✓ Context-Aware Lexicon + Thesaurus', isV3Special: true },
  { feature: 'Speech-to-Speech', v1: '—', v2: '✓ Two-Way Live Bridge', v3: '✓ Multilingual Voice Agent', isV3Special: true },
  { feature: 'AI Understanding', v1: '—', v2: '—', v3: '★ Neural Context & Concept Parsing', isV3Special: true },
  { feature: 'Ask Questions (Q&A)', v1: '—', v2: '—', v3: '★ Conversational Document Q&A', isV3Special: true },
  { feature: 'Document Summaries', v1: '—', v2: '—', v3: '★ Executive & Bullet Summaries', isV3Special: true },
  { feature: 'AI Mathematics Solver', v1: '—', v2: '—', v3: '★ Step-by-Step Proofs & Algebra', isV3Special: true },
  { feature: 'Voice Interaction', v1: 'Audio Playback Only', v2: 'Natural Spoken Voice', v3: '★ Full Multimodal Voice Agent', isV3Special: true },
  { feature: 'Display', v1: 'Transflective STN LCD', v2: '4–5" Dot Matrix LCD', v3: '★ 7" Edge-to-Edge OLED Touch', isV3Special: true },
  { feature: 'Storage Support', v1: 'MicroSD (Up to 32GB)', v2: 'MicroSD High-Speed', v3: '★ High-Speed Flash + Cloud Sync', isV3Special: true },
  { feature: 'Haptic Guidance', v1: '✓ Tactile Pulses', v2: '✓ Directional Haptics', v3: '★ Advanced Multi-Zone Linear Actuators', isV3Special: true },
  { feature: 'Standalone Operation', v1: '✓ 100% Offline', v2: '✓ 100% Offline Primary', v3: '✓ Offline Core + Optional Cloud Sync', isV3Special: true },
  { feature: 'Custom Hardware PCB', v1: '✓ Stellar Minds PCB v1', v2: '✓ Stellar Minds PCB v2', v3: '✓ Stellar Minds AI DSP v3', isV3Special: true },
];

export const SIM_DOCUMENTS: Record<string, SimDocument> = {
  text: {
    category: 'Standard Print',
    title: 'DOC // PRINT SPECIMEN 01: STANDARD TEXT',
    content: 'The quick brown fox jumps over the lazy dog. SpectraScan optical array delivers continuous sub-pixel character extraction across reflective, degraded, or low-contrast paper surfaces without cloud reliance.',
    payload: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. SPECTRA SCAN RECOGNITION 100% OK. LATENCY: 21ms.',
    tokens: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.', 'SpectraScan', 'OCR: Validated'],
  },
  math: {
    category: 'STEM Equation',
    title: 'DOC // EQUATION SHEET 04: ALGEBRAIC DERIVATION',
    content: 'Solve for x in the linear equation:\n2x + 5 = 11\nSubtract 5 from both sides:\n2x = 6\nDivide by 2:\nx = 3',
    payload: 'AI MATH REASONING:\nEQUATION: 2x + 5 = 11\n=> 2x = 11 - 5 = 6\n=> x = 6 / 2 = 3\nSTATUS: STEP-BY-STEP PROOF VERIFIED.',
    tokens: ['2x', '+', '5', '=', '11', '=>', '2x=6', '=>', 'x=3', 'PROOF_VERIFIED'],
  },
  code: {
    category: 'Firmware & Logic',
    title: 'DOC // FIRMWARE ROM DISASSEMBLY: SM-770',
    content: '; SPECTRA SCAN EMBEDDED DSP DRIVER\nMOV AX, 0x7701\nOUT 0x3F8, AX\nIN DX, OPTICAL_BUS\nXOR CX, CX\nLOOP_DECODE:\n  LODSB\n  CMP AL, 0x00\n  JNZ DECODE_STREAM',
    payload: 'DISASSEMBLY STREAM PARSED:\nREG AX: 0x7701\nBUS: OPTICAL_BUS SYNCED\nCHECKSUM: CRC-32 MATCH 0x9B41F2.',
    tokens: ['MOV', 'AX,0x7701', 'OUT', 'IN', 'DX,OPTICAL', 'LOOP_DECODE', 'CRC_OK'],
  },
};

export const DICTIONARY_ENTRIES: Record<string, DictEntry> = {
  SPECTRUM: {
    word: 'SPECTRUM',
    phonetic: '/ˈspɛktrəm/',
    partOfSpeech: 'NOUN',
    definition: 'A band of colors or electromagnetic frequencies produced by separation of the components of light. In accessibility: a continuous range of diverse human sensory abilities.',
    example: 'SpectraScan accommodates the full spectrum of visual and reading requirements.',
  },
  ACCESSIBILITY: {
    word: 'ACCESSIBILITY',
    phonetic: '/əkˌsɛsɪˈbɪlɪti/',
    partOfSpeech: 'NOUN',
    definition: 'The quality of being easily reached, entered, or used by everyone, including people with sensory, motor, or cognitive impairments.',
    example: 'Purpose-built hardware turns printed documents into universal accessibility.',
  },
  OPTICAL: {
    word: 'OPTICAL',
    phonetic: '/ˈɒptɪkəl/',
    partOfSpeech: 'ADJECTIVE',
    definition: 'Relating to sight, especially in relation to the action of light or the design of instruments that assist vision.',
    example: 'The calibrated macro optical sensor glides with uniform illumination across paper lines.',
  },
  COGNITIVE: {
    word: 'COGNITIVE',
    phonetic: '/ˈkɒɡnɪtɪv/',
    partOfSpeech: 'ADJECTIVE',
    definition: 'Connected with thinking, knowing, understanding, and processing information within human mental faculties or synthetic neural models.',
    example: 'SpectraScan V3 bridges sensory reading into deep cognitive comprehension.',
  },
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    role: 'Chief Executive',
    title: 'CEO',
    icon: '👑',
    color: 'gold',
    contribution: 'Directs the organizational vision, capital strategy, and universal accessibility mission for Stellar Minds.',
  },
  {
    role: 'Engineering Lead',
    title: 'Tech Manager',
    icon: '⚡',
    color: 'orange',
    contribution: 'Architects embedded DSP firmware, custom PCB layout, and low-latency local OCR pipelines.',
  },
  {
    role: 'Operations Lead',
    title: 'Organizer',
    icon: '📋',
    color: 'gold',
    contribution: 'Coordinates hardware prototyping milestones, laboratory supply chains, and testing logistics.',
  },
  {
    role: 'Outreach Lead',
    title: 'Growth Manager',
    icon: '📈',
    color: 'orange',
    contribution: 'Expands partnerships with schools, disability NGOs, and institutional accessibility programs.',
  },
  {
    role: 'Design & AI Lead',
    title: 'Product & Innovation Manager',
    icon: '💡',
    color: 'gold',
    contribution: 'Shapes industrial ergonomics, multi-sensory haptics, and conversational AI feature sets.',
  },
];

export const SMARTPHONE_VS_SPECTRASCAN = [
  {
    phone: 'General-purpose device filled with distracting apps and notifications',
    spectrascan: 'Purpose-built accessibility instrument with zero distractions or social media alerts',
  },
  {
    phone: 'Complex settings, permissions, accounts, logins, and nested menus',
    spectrascan: 'Instant single-purpose physical interaction: pick up and glide',
  },
  {
    phone: 'Touchscreen-focused (challenging for blind and visually impaired users)',
    spectrascan: 'Harmonized physical buttons + tactile guided vibration + clear speech output',
  },
  {
    phone: 'Requires holding camera at awkward heights and framing angles over paper',
    spectrascan: 'Ergonomic optical pen tip rolls smoothly directly against paper sentences',
  },
  {
    phone: 'Frequent cloud uploads, subscription fees, and internet reliance',
    spectrascan: 'Sub-second offline reading and translation with data privacy maintained',
  },
  {
    phone: 'Accessibility is an afterthought buried under accessibility sub-menus',
    spectrascan: 'Accessibility is the foundational reason for the device’s physical existence',
  },
];

export const INSTAGRAM_HANDLE = '@steller_minds11';
export const INSTAGRAM_ACCOUNT_NAME = 'steller_minds11';
export const INSTAGRAM_URL = 'https://www.instagram.com/steller_minds11?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==';
