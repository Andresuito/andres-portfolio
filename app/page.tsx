import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto px-2 md:px-8 my-8 lg:my-10">
      <header>
        <h1 className="text-4xl leading-snug text-black reveal-text">
          <span className="fade-in font-semibold">I'm Andrés</span>
          <span className="fade-in">, a web developer.</span>
        </h1>
      </header>
      <hr className="my-5 sm:my-10 opacity-0" />
      <section className="container mx-auto work-section">
        <h2 className="font-semibold text-lg animate-item">Work Experience</h2>

        <div className="flex flex-col">
          <div className="flex mt-5 items-center animate-item">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <a
                  className="flex items-center text-lg ml-1 group hover:translate-x-2 transition-transform duration-200"
                  href="https://www.vidext.io/es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-lg flex items-center">
                    Full Stack Developer in Vidext
                    <svg
                      className="ml-1 rotate-0 group-hover:rotate-45 transition duration-150"
                      width="12"
                      height="12"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </a>
              </div>
              <p className="hidden sm:block text-black">2024 - Present</p>
            </div>
          </div>

          <div className="flex mt-5 items-center animate-item">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <a
                  className="flex items-center text-lg ml-1 group hover:translate-x-2 transition-transform duration-200"
                  href="https://chekin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-lg flex items-center">
                    Front-end Developer in Chekin
                    <svg
                      className="ml-1 rotate-0 group-hover:rotate-45 transition duration-150"
                      width="12"
                      height="12"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </a>
              </div>
              <p className="hidden sm:block text-black">2023 - 2024</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-5 sm:my-10 opacity-0" />
      <section className="projects-section">
        <header>
          <h2 className="font-semibold text-lg animate-item">Projects</h2>
        </header>

        <article className="flex mt-5 justify-between items-center animate-item">
          <a
            className="group flex items-center hover:translate-x-3 transition duration-150"
            target="_blank"
            href="https://www.ggsalt.work"
          >
            <p className="text-lg">ggsalt</p>
            <svg
              className="ml-1 rotate-0 group-hover:rotate-45 transition duration-150"
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              Desing portfolio website
            </span>
          </a>
          <div className="flex items-center">
            <div className="relative group inline-block text-base text-black">
              Portfolio
            </div>
          </div>
        </article>
        <article className="flex mt-5 justify-between items-center animate-item">
          <a
            className="group flex items-center hover:translate-x-3 transition duration-150"
            target="_blank"
            href="https://www.kristinesalting.com"
          >
            <p className="text-lg">KGLS</p>
            <svg
              className="ml-1 rotate-0 group-hover:rotate-45 transition duration-150"
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              Architecture portfolio website
            </span>
          </a>
          <div className="flex items-center">
            <div className="relative group inline-block text-base text-black">
              Portfolio
            </div>
          </div>
        </article>
      </section>
      <hr className="my-5 sm:my-10 opacity-0" />
      <section className="projects-section">
        <header>
          <h2 className="font-semibold text-lg animate-item">Sandbox</h2>
        </header>

        <article className="flex mt-5 justify-between items-center animate-item">
          <Link
            className="group flex items-center hover:translate-x-3 transition duration-150"
            href="/scroll-carousel"
            prefetch
          >
            <p className="text-lg">Scroll carousel</p>
            <svg
              className="ml-1 rotate-0 group-hover:rotate-45 transition duration-150"
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <div className="flex items-center">
            <div className="relative group inline-block text-base text-black">
              GSAP 01
            </div>
          </div>
        </article>
      </section>
      <hr className="my-5 sm:my-10 opacity-0" />
      <footer className="flex mx-auto justify-between text-lg items-center">
        <div className="flex items-center">
          <a href="https://x.com/andresuiito" target="_blank">
            X
          </a>
          <span className="mx-2 animate-item">/</span>
          <a href="https://www.linkedin.com/in/andrés-br" target="_blank">
            LinkedIn
          </a>
          <span className="mx-2 animate-item">/</span>
          <a href="https://github.com/Andresuito" target="_blank">
            GitHub
          </a>
          <span className="mx-2 animate-item">/</span>
          <a href="mailto:contact@andresbr.com" target="_blank">
            Email
          </a>
        </div>
      </footer>
    </section>
  );
}
