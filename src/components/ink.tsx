import type { ReactNode } from "react";

export function Ink({ children }: { children: ReactNode }) {
  return (
    <span className="ink">
      {children}
      <svg className="ink-lines" viewBox="0 0 100 12" fill="none" aria-hidden="true">
        <path d="M2 7C23 3 57 3 98 5" />
        <path d="M12 11C38 7 65 7 89 8" />
      </svg>
    </span>
  );
}
