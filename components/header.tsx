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
      <nav className="flex items-center">
        <a
          href="https://x.com/andresuiito"
          target="_blank"
          className="font-mono tracking-[-0.02rem] hover:opacity-70 transition-opacity uppercase"
        >
          X
        </a>
        <span className="mx-2 font-mono tracking-[-0.02rem] opacity-40">/</span>
        <a
          href="mailto:contact@andresbr.com"
          target="_blank"
          className="font-mono tracking-[-0.02rem] hover:opacity-70 transition-opacity uppercase"
        >
          Email
        </a>
        <span className="mx-2 font-mono tracking-[-0.02rem] opacity-40">/</span>
        <a
          href="https://github.com/Andresuito"
          target="_blank"
          className="font-mono tracking-[-0.02rem] hover:opacity-70 transition-opacity uppercase"
        >
          GitHub
        </a>
        <span className="mx-2 font-mono tracking-[-0.02rem] opacity-40">/</span>
        <a
          href="https://www.linkedin.com/in/andres-br"
          target="_blank"
          className="font-mono tracking-[-0.02rem] hover:opacity-70 transition-opacity uppercase"
        >
          LinkedIn
        </a>
        <span className="mx-2 font-mono tracking-[-0.02rem] opacity-40">/</span>
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
