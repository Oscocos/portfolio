export default function Projects({ projects }) {
  return (
    <div className="flex flex-col gap-12 relative">
      {projects.map((project, i) => (
        <div key={i} className="relative z-10">
          <p className="font-semibold text-[#0AFFED] text-glow">{project.title}</p>
          <p className="italic text-sm text-[#EEF0F2] text-glow mb-1">{project.stack}</p>
          <ul className="list-disc list-inside space-y-2 text-sm font-semibold leading-relaxed text-[#EEF0F2] mt-2 text-glow">
            {project.description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BADEFC] underline mt-2 inline-block text-sm hover:text-[#0AFFED] transition"
            >
              GitHub Repo
            </a>
          )}
        </div>
      ))}
    </div>
  );
}