import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-6 left-10 z-50">
      <div className="flex  backdrop-blur-sm border border-neutral-100 rounded-full px-4 py-2 shadow-sm">
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}
