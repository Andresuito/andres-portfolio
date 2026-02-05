import { Moon, PaintBucket, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

function useSpainTime() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function ThemeFooter() {
  const { theme, setTheme } = useTheme();
  const time = useSpainTime();

  return (
    <div className="mt-auto flex items-center justify-between text-sm sm:text-base lg:text-xl">
      <div className="flex items-center gap-2 sm:hidden">
        <div className="size-3 animate-pulse rounded-full bg-[#77FFB8]" />
        <span className="text-xs">Available</span>
      </div>

      <div className="hidden items-center gap-4 bucket:text-[#FF9A9A] text-foreground sm:flex dark:text-foreground">
        <p>Based in Spain</p>
        <p className="text-foreground/60">{time}</p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`cursor-pointer bucket:text-[#FF9A9A] text-foreground transition-all duration-200 hover:scale-110 ${
            theme === "light" ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label="Light mode"
        >
          <Sun className="size-4 sm:size-5" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`cursor-pointer bucket:text-[#FF9A9A] text-foreground transition-all duration-200 hover:scale-110 ${
            theme === "dark" ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label="Dark mode"
        >
          <Moon className="size-4 sm:size-5" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("bucket")}
          className={`cursor-pointer bucket:text-[#FF9A9A] text-foreground transition-all duration-200 hover:scale-110 ${
            theme === "bucket" ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label="Bucket mode"
        >
          <PaintBucket className="size-4 sm:size-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:hidden">
        <p className="bucket:text-[#FF9A9A] text-foreground text-xs dark:text-foreground">Spain</p>
        <p className="text-foreground/60 text-xs">{time}</p>
      </div>

      <div className="hidden items-center gap-2 bucket:text-[#FF9A9A] text-foreground sm:flex dark:text-foreground">
        <div className="size-4 animate-pulse rounded-full bg-[#77FFB8]" />
        <span>Available for projects</span>
      </div>
    </div>
  );
}
