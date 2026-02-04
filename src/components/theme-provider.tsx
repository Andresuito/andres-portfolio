import { useRouter } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useState } from "react";
import { setThemeServerFn, type Theme } from "@/lib/theme";

type ThemeProviderProps = {
  children: React.ReactNode;
  serverTheme: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children, serverTheme }: ThemeProviderProps) {
  const router = useRouter();
  const [theme, setThemeState] = useState<Theme>(serverTheme);

  useEffect(() => {
    setThemeState(serverTheme);
  }, [serverTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark", "bucket");
    root.classList.add(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    const url = new URL(setThemeServerFn.url, window.location.origin);
    url.searchParams.set("theme", newTheme);
    fetch(url.toString()).then(() => {
      setThemeState(newTheme);
      router.invalidate();
    });
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
