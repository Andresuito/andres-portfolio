import { ArrowIcon } from "./arrow-icon";

export function Projects() {
  return (
    <section className="projects-section">
      <header>
        <h2 className="font-semibold text-lg animate-item bg-black text-white w-fit p-1 px-3">
          Projects
        </h2>
      </header>

      <ProjectItem
        title="Palette"
        description="An infinite canvas to play with colors"
        type="Canva"
        url="https://palette.andresbr.com"
      />
    </section>
  );
}

interface ProjectItemProps {
  title: string;
  description: string;
  type: string;
  url: string;
}

function ProjectItem({ title, description, type, url }: ProjectItemProps) {
  return (
    <article className="flex flex-col sm:flex-row mt-5 sm:justify-between sm:items-center animate-item">
      <a
        className="group flex items-center transition duration-150"
        target="_blank"
        href={url}
      >
        <p className="text-base sm:text-lg">{title}</p>
        <ArrowIcon />
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 hidden sm:inline">
          {description}
        </span>
      </a>
      <div className="flex items-center mt-1 sm:mt-0">
        <div className="relative group inline-block text-sm sm:text-base text-black">
          {type}
        </div>
      </div>
      <div className="sm:hidden mt-1 text-sm text-gray-600">{description}</div>
    </article>
  );
}
