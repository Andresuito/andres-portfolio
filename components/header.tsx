export function Header() {
  return (
    <header className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-b">
      <h1 className="font-mono text-lg font-semibold">ANDRES B.R</h1>
      <nav className="flex items-center gap-6">
        <a href="/sandbox" className="font-mono uppercase tracking-wider hover:opacity-70 transition-opacity">
          SANDBOX
        </a>
        <a href="/ABR - CV 2025Q3.pdf" target="_blank" className="font-mono uppercase tracking-wider hover:opacity-70 transition-opacity">
          RESUME
        </a>
      </nav>
    </header>
  );
}
