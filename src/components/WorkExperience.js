export default function WorkExperience({ jobs }) {
  return (
    <div className="relative max-w-3xl mx-auto flex flex-col gap-12">
      {/* Vertical line in center */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-600"
        style={{ transform: 'translateX(-50%)' }}
      />

      {jobs.map((job, i) => (
        <div
          key={i}
          className="bg-[#0f172a] border border-purple-600 rounded-md p-6 shadow-md max-w-lg mx-auto"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <p className="font-semibold text-purple-300">
            {job.company} — {job.location}
          </p>
          <p className="italic text-sm text-slate-400">{job.dates}</p>
          <p className="font-semibold mt-2 text-slate-200">{job.title}</p>
          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-slate-300 mt-2">
            {job.responsibilities.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}