import { Moon, PaintBucket, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeFooter() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mt-auto flex items-center justify-between px-8 py-8 text-xl">
      <div className="flex items-center gap-4 bucket:text-[#FF9A9A] text-foreground dark:text-foreground">
        <p>Based in Spain</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`cursor-pointer bucket:text-[#FF9A9A] text-foreground transition-opacity duration-200 dark:text-foreground ${
            theme === "light" ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label="Light mode"
        >
          <Sun className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`cursor-pointer bucket:text-[#FF9A9A] text-foreground transition-opacity duration-200 dark:text-foreground ${
            theme === "dark" ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label="Dark mode"
        >
          <Moon className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("bucket")}
          className={`cursor-pointer bucket:text-[#FF9A9A] text-foreground transition-opacity duration-200 dark:text-foreground ${
            theme === "bucket" ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label="Bucket mode"
        >
          <PaintBucket className="size-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 bucket:text-[#FF9A9A] text-foreground dark:text-foreground">
        <div className="size-4 animate-pulse rounded-full bg-[#77FFB8]" />
        <span>Available for projects</span>
      </div>
    </div>
  );
}
