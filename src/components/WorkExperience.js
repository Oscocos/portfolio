export default function WorkExperience({ jobs }) {
  return (
    <div className="flex flex-col gap-12 relative">

      {jobs.map((job, i) => (
        <div key={i} className="relative z-10">
          <p className="font-semibold text-purple-300 text-glow">
            {job.company} — {job.location}
          </p>
          <p className="italic text-sm text-[#EEF0F2] text-glow">{job.dates}</p>
          <p className="font-semibold mt-2 text-[#0AFFED] text-glow">{job.title}</p>
          <ul className="list-disc list-inside space-y-2 text-sm font-semibold leading-relaxed text-[#EEF0F2] mt-2 text-glow">
            {job.responsibilities.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
