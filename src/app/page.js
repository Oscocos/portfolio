import Image from "next/image";

import AnimatedSection from "../components/AnimatedSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#020712] text-slate-200 relative overflow-hidden">
      {/* Gradient Blur Background */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 opacity-40 blur-3xl w-[72rem] h-[72rem] pointer-events-none"
        style={{ filter: 'blur(120px)' }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-8 text-center z-10">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(167,139,250,0.4)]"
            style={{ color: '#c3c3c3' }}
        >             
          Ollantay Scocos
        </h1>
        <p className="text-xl max-w-xl mx-auto text-slate-300 drop-shadow-[0_0_6px_rgba(100,116,139,0.3)]">
          Software Engineer — University of Awesome — Building cool stuff with React.
        </p>
      </section>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto my-12 px-8 gap-8 relative z-10">
        {/* Sticky Info Box */}
        <aside className="w-1/3 sticky top-20 self-start bg-[#0f172a] p-6 rounded shadow-md border border-[#312e81]">
          <h2 className="text-2xl font-semibold mb-2">Ollantay Scocos</h2>
          <p className="mb-4">University of Awesome</p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-purple-300 hover:text-purple-400 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-purple-300 hover:text-purple-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </aside>

        {/* Sections */}
        <main className="w-2/3 space-y-16">
          <AnimatedSection title="Work Experience" />
          <AnimatedSection title="Projects" />
          <AnimatedSection title="Education" />
        </main>
      </div>
    </div>
  );
}