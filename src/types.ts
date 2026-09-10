export type AppPage = 'home' | 'v1' | 'v2' | 'v3' | 'differentiation';

export interface SplineSceneConfig {
  id: string;
  title: string;
  badge: string;
  splineUrl: string;
  description: string;
  tagline: string;
}

export interface SimDocument {
  title: string;
  category: string;
  content: string;
  payload: string;
  tokens: string[];
}

export interface DictEntry {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  example: string;
}

export interface TeamMember {
  role: string;
  title: string;
  icon: string;
  color: 'gold' | 'orange';
  contribution: string;
}

export interface ComparisonRow {
  feature: string;
  v1: string;
  v2: string;
  v3: string;
  isV3Special?: boolean;
}
