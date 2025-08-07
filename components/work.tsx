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
    <div className="flex flex-col sm:flex-row mt-5 sm:items-center animate-item group">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
        <div className="flex items-center">
          <a
            className="flex items-center text-base sm:text-lg ml-1 relative overflow-hidden"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              <span className="block text-base sm:text-lg group-hover:-translate-y-full transition-transform duration-500 ease-out delay-200">
                {role} in {company}
              </span>
              <span className="absolute top-0 left-0 text-base sm:text-lg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-200">
                Visit {company} website
              </span>
            </div>
          </a>
        </div>
        <p className="text-sm sm:text-base text-black mt-1 sm:mt-0 ml-1 sm:ml-0">
          {period}
        </p>
      </div>
    </div>
  );
}
