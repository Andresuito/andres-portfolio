/**
 * Sound synthesis library using Web Audio API
 * Generates sounds programmatically - no audio files needed!
 *
 * Based on best practices from:
 * - Web Audio API best practices for sound synthesis
 * - "Generating Sounds with AI" by Raphael Salaja
 */

let audioContext: AudioContext | null = null;

/**
 * Check if we're running in a browser environment
 */
function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof window.AudioContext !== "undefined";
}

/**
 * Get or create a shared AudioContext instance
 * Follows context-reuse-single rule: never create multiple contexts
 * Returns null on server (SSR-safe)
 */
export function getAudioContext(): AudioContext | null {
  if (!isBrowser()) return null;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

/**
 * Check if audio is enabled (user has interacted with page)
 * Browsers block audio until user interaction
 */
export function isAudioEnabled(): boolean {
  const ctx = getAudioContext();
  return ctx?.state === "running";
}

/**
 * Resume audio context (call after user interaction)
 * Follows context-resume-suspended rule
 */
export async function resumeAudio(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === "suspended") {
    await ctx.resume();
  }
}

/**
 * Base interface for sound options
 */
interface SoundOptions {
  volume?: number; // 0.0 to 1.0 (default: 0.3)
}

/**
 * Play a crisp click sound
 * Perfect for buttons, links, and UI interactions
 *
 * Sound Design:
 * - Uses filtered noise (not oscillators) for percussive quality
 * - 8ms duration (within 5-15ms range for clicks)
 * - Bandpass filter at 4000Hz with Q=3 for crisp character
 * - Exponential decay for natural fade
 */
export function playClickSound(options: SoundOptions = {}): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const { volume = 0.3 } = options;

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const t = ctx.currentTime;

  const duration = 0.008;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / 50);
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 4000;
  filter.Q.value = 3;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  source.start(t);
  source.onended = () => {
    source.disconnect();
    filter.disconnect();
    gain.disconnect();
  };
}

/**
 * Play a soft "aero" whoosh sound
 * Great for hover effects or transitions
 *
 * Sound Design:
 * - Uses filtered noise with lowpass filter
 * - Longer duration (100ms) for whoosh effect
 * - Swept filter frequency for movement
 */
export function playAeroSound(options: SoundOptions = {}): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const { volume = 0.2 } = options;

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const t = ctx.currentTime;

  const duration = 0.1;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(2000, t);
  filter.frequency.exponentialRampToValueAtTime(200, t + 0.1);
  filter.Q.value = 1;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(volume, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  source.start(t);
  source.onended = () => {
    source.disconnect();
    filter.disconnect();
    gain.disconnect();
  };
}

/**
 * Play a tonal "pop" confirmation sound
 * Good for success states or toggles
 *
 * Sound Design:
 * - Uses oscillator with pitch sweep
 * - Triangle wave for softer character
 * - Pitch rises then falls
 */
export function playPopSound(options: SoundOptions = {}): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const { volume = 0.25 } = options;

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const t = ctx.currentTime;

  const osc = ctx.createOscillator();
  osc.type = "triangle";

  osc.frequency.setValueAtTime(400, t);
  osc.frequency.exponentialRampToValueAtTime(600, t + 0.04);
  osc.frequency.exponentialRampToValueAtTime(300, t + 0.15);

  // Gain envelope
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(volume, t + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

  // Connect chain
  osc.connect(gain);
  gain.connect(ctx.destination);

  // Play and cleanup
  osc.start(t);
  osc.stop(t + 0.15);
  osc.onended = () => {
    osc.disconnect();
    gain.disconnect();
  };
}

/**
 * Play a subtle "tap" sound
 * Lighter than click, good for subtle interactions
 */
export function playTapSound(options: SoundOptions = {}): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const { volume = 0.2 } = options;

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const t = ctx.currentTime;

  const duration = 0.005;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / 30);
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 5000;
  filter.Q.value = 2;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  source.start(t);
  source.onended = () => {
    source.disconnect();
    filter.disconnect();
    gain.disconnect();
  };
}

/**
 * Play a deeper "thud" sound
 * Good for destructive actions or heavy buttons
 */
export function playThudSound(options: SoundOptions = {}): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const { volume = 0.3 } = options;

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const t = ctx.currentTime;

  const duration = 0.015;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / 80);
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 2500;
  filter.Q.value = 2;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  source.start(t);
  source.onended = () => {
    source.disconnect();
    filter.disconnect();
    gain.disconnect();
  };
}

/**
 * Preload the audio context (call on user interaction)
 * This prevents the first click from having a delay
 */
export function preloadSounds(): void {
  void resumeAudio();
}
