"use client";

export function Header() {
  return (
    <header className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-b border-opacity-40">
      <h1 className="font-mono tracking-[-0.02rem] hover:opacity-70 transition-opacity uppercase">
        ANDRÉS B.R
      </h1>
      <p className="font-mono tracking-[-0.02rem] hover:opacity-70 transition-opacity uppercase">
        WEB DEVELOPER
      </p>
      <nav className="flex items-center gap-6">
        <a
          href="/ABR - CV 2025Q3.pdf"
          target="_blank"
          className="font-mono tracking-[-0.02rem] hover:opacity-70 transition-opacity uppercase"
        >
          CV
        </a>
      </nav>
    </header>
  );
}
