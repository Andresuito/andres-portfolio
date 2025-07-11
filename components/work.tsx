import { ArrowIcon } from "./arrow-icon";

export function Work() {
  return (
    <section className="container mx-auto work-section">
      <h2 className="font-semibold text-lg animate-item bg-black text-white w-fit p-1 px-3">
        Work Experience
      </h2>
      <div className="flex flex-col">
        <WorkItem
          company="Vidext"
          role="Full Stack Developer"
          period="2024 - Present"
          url="https://www.vidext.io/es"
        />
        <WorkItem
          company="Chekin"
          role="Front-end Developer"
          period="2023 - 2024"
          url="https://chekin.com/"
        />
      </div>
    </section>
  );
}

interface WorkItemProps {
  company: string;
  role: string;
  period: string;
  url: string;
}

function WorkItem({ company, role, period, url }: WorkItemProps) {
  return (
    <div className="flex mt-5 items-center animate-item">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <a
            className="flex items-center text-lg ml-1 group hover:translate-x-2 transition-transform duration-200"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-lg flex items-center">
              {role} in {company}
              <ArrowIcon />
            </p>
          </a>
        </div>
        <p className="hidden sm:block text-black">{period}</p>
      </div>
    </div>
  );
}
