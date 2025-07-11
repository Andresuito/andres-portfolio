export function Footer() {
  return (
    <footer className="flex mx-auto justify-between text-lg items-center">
      <div className="flex items-center">
        <a
          href="https://x.com/andresuiito"
          target="_blank"
          className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">X</span>
        </a>
        <span className="mx-2 animate-item">/</span>
        <a
          href="https://www.linkedin.com/in/andres-br"
          target="_blank"
          className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">LinkedIn</span>
        </a>
        <span className="mx-2 animate-item">/</span>
        <a
          href="https://github.com/Andresuito"
          target="_blank"
          className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">GitHub</span>
        </a>
        <span className="mx-2 animate-item">/</span>
        <a
          href="mailto:contact@andresbr.com"
          target="_blank"
          className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">Email</span>
        </a>
      </div>
    </footer>
  );
}
