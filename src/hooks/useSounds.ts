import { useCallback, useEffect, useRef } from "react";
import {
  isAudioEnabled,
  playAeroSound,
  playClickSound,
  playPopSound,
  playTapSound,
  playThudSound,
  preloadSounds,
  resumeAudio,
} from "@/lib/sounds";

/**
 * Sound preset types
 */
export type SoundPreset = "click" | "tap" | "pop" | "thud" | "aero";

/**
 * Options for useSounds hook
 */
interface UseSoundsOptions {
  /** Global volume multiplier (0.0 to 1.0) */
  volume?: number;
  /** Whether sounds are enabled */
  enabled?: boolean;
  /** Whether to auto-enable on first user interaction */
  autoEnable?: boolean;
}

/**
 * React hook for playing synthesized UI sounds
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { play, preload, isEnabled } = useSounds({ volume: 0.5 });
 *
 *   return (
 *     <button onClick={() => play('click')}>
 *       Click me!
 *     </button>
 *   );
 * }
 * ```
 */
export function useSounds(options: UseSoundsOptions = {}) {
  const { volume = 0.3, enabled = true, autoEnable = true } = options;

  const hasEnabledRef = useRef(false);

  /**
   * Play a sound by preset name
   */
  const play = useCallback(
    (preset: SoundPreset) => {
      if (!enabled) return;

      switch (preset) {
        case "click":
          playClickSound({ volume });
          break;
        case "tap":
          playTapSound({ volume });
          break;
        case "pop":
          playPopSound({ volume });
          break;
        case "thud":
          playThudSound({ volume });
          break;
        case "aero":
          playAeroSound({ volume });
          break;
      }
    },
    [enabled, volume],
  );

  /**
   * Preload audio context to prevent first-click delay
   */
  const preload = useCallback(() => {
    preloadSounds();
  }, []);

  /**
   * Manually enable audio (useful for a "Enable Sounds" button)
   */
  const enable = useCallback(async () => {
    await resumeAudio();
    hasEnabledRef.current = true;
  }, []);

  /**
   * Auto-enable on first user interaction
   */
  useEffect(() => {
    if (!autoEnable || hasEnabledRef.current) return;

    const handleInteraction = () => {
      if (!hasEnabledRef.current) {
        void enable();
        hasEnabledRef.current = true;
      }
    };

    // Listen for any user interaction
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });
    document.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [autoEnable, enable]);

  return {
    /** Play a sound preset */
    play,
    /** Preload audio context */
    preload,
    /** Manually enable audio */
    enable,
    /** Check if audio is currently enabled */
    isEnabled: isAudioEnabled(),
    /** Direct play functions for each sound type */
    sounds: {
      click: useCallback(() => playClickSound({ volume }), [volume]),
      tap: useCallback(() => playTapSound({ volume }), [volume]),
      pop: useCallback(() => playPopSound({ volume }), [volume]),
      thud: useCallback(() => playThudSound({ volume }), [volume]),
      aero: useCallback(() => playAeroSound({ volume }), [volume]),
    },
  };
}

/**
 * Hook that adds click sounds to all buttons and links automatically
 *
 * @example
 * ```tsx
 * // In your root layout or App component
 * function App() {
 *   useGlobalClickSounds({ preset: 'click', volume: 0.2 });
 *   return <Routes />;
 * }
 * ```
 */
export function useGlobalClickSounds(
  options: { preset?: SoundPreset; volume?: number; enabled?: boolean; selector?: string } = {},
) {
  const {
    preset = "click",
    volume = 0.3,
    enabled = true,
    selector = 'button, a, [role="button"], [data-sound="click"]',
  } = options;

  const { play, enable } = useSounds({ volume, enabled });

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(selector)) {
        // Ensure audio is enabled
        void enable();
        // Play sound
        play(preset);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [enabled, preset, play, selector, enable]);
}
