import AnimatedSection from "../components/AnimatedSection";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020712] text-slate-200 font-masiva relative overflow-hidden">
      {/* Gradient Blur Background */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 opacity-40 blur-3xl w-[72rem] h-[72rem] pointer-events-none"
        style={{ filter: "blur(120px)" }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-8 text-center z-10">
        <h1
          className="text-5xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(167,139,250,0.4)] font-masiva"
          style={{ color: "#c3c3c3" }}
        >
          Ollantay Scocos yourself
        </h1>
        <p className="text-xl max-w-xl mx-auto text-slate-300 font-black italic drop-shadow-[0_0_6px_rgba(100,116,139,0.3)] font-masiva">
          Software Engineer — University of Awesome — Building cool stuff with React.
        </p>
      </section>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto my-12 px-8 gap-8 relative z-10 font-masiva">
        {/* Sticky Info Box */}
        <aside className="w-1/3 sticky top-20 self-start bg-[#0f172a] p-6 rounded shadow-md border border-[#312e81] font-masiva">
          <h2 className="text-2xl font-black mb-2 font-masiva">Ollantay Scocos</h2>
          <p className="mb-4 font-bold font-masiva">University of Awesome</p>
          <div className="flex space-x-4 font-bold font-masiva">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-purple-300 hover:text-purple-400 hover:underline font-masiva"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-purple-300 hover:text-purple-400 hover:underline font-masiva"
            >
              GitHub
            </a>
          </div>
        </aside>

        {/* Sections */}
        <main className="w-2/3 space-y-16 font-masiva">
          <AnimatedSection title="Work Experience">
            <WorkExperience
              jobs={[
                {
                  company: 'DataAnnotation',
                  location: 'Peoria, IL',
                  dates: 'February 2024 – Present',
                  title: 'Software Engineer',
                  responsibilities: [
                    'Designed and implemented 40+ algorithmic challenges daily in Python, C, and C++ to evaluate and train large language models, refining model accuracy, safety, and user experience.',
                    'Authored and refined 200+ benchmark solutions by debugging and optimizing AI-generated code in Python and C++, including database interactions, to improve model reasoning and output fidelity.',
                    'Deployed and managed 100+ isolated test environments to validate AI code, directly improving model performance across correctness, truthfulness, helpfulness, and safety metrics.',
                    'Analyzed 1,000+ lines of code against project-specific rubrics focused on correctness, truthfulness, safety, and helpfulness to ensure high-quality model outputs.',
                    'Streamlined AI model selection processes, resulting in a 20% reduction in manual QA efforts; authored 100+ comprehensive justifications to support model choices and enhance decision-making efficiency.',
                  ],
                }, // Note to self: here you can add more
              ]}
            />
          </AnimatedSection>
          <AnimatedSection title="Projects" />
          <AnimatedSection title="Education" />
        </main>
      </div>
    </div>
  );
}
