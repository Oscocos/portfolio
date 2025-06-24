"use client";

import LinkedInIcon from '../components/icons/InBug-Black.svg';
import GitHubIcon from '../components/icons/github-mark.svg';
import AnimatedSection from "../components/AnimatedSection";
import WorkExperience from "../components/WorkExperience";
import GmailIcon from '../components/icons/gmail-icon.svg';
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020712] text-slate-200 font-masiva relative">
      {/* Gradient Blur Background */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-tr opacity-40 blur-xl pointer-events-none"
        style={{
          top: `${-100 + scrollY * 0.8}px`,
          filter: "blur(120px)",
          backgroundImage: "linear-gradient(to top right, #9333ea 30%, #0AFFED 70%)",
          transform: `rotate(${scrollY * 0.15}deg)`,
          width: "66vw",  // 60% of viewport width
          height: "66vw",
        }}
      />
    
      {/* Hero Section */}
      <section 
        className="relative min-h-[100vh] py-50 px-8 text-center z-10"
        style={{ color: "#BADEFC" }}
      >
        <h1 className="text-7xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(0,0,0,0.6)] font-masiva">
          Ollantay Z. Scocos
        </h1>
        <p className="text-xl max-w-xl mx-auto font-black italic drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] font-masiva" >
          Software Engineer
        </p>
        <a 
          href="mailto:olscocos@gmail.com" 
          className="text-l max-w-xl mx-auto font-black italic drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] font-masiva hover:opacity-90 hover:text-[#A1FFCE] transition"
        >
          olscocos@gmail.com
        </a>
      </section>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto my-12 px-4 sm:px-6 md:px-8 gap-8 font-masiva">
        {/* Sticky Info Box */}
        <aside 
          className="md:w-1/3 sticky top-20 self-start bg-[#0f172a] p-6 rounded shadow-md border border-[#312e81] font-masiva"
          style={{ color: "#BADEFC" }}
        >
          <h2 className="text-2xl font-black mb-2 font-masiva text-glow text-[#0AFFED]">Ollantay Z. Scocos</h2>
          <p className="mb-4 font-bold font-masiva text-glow text-[#EEF0F2]">University of Illinois at Urbana-Champaign</p>
          <div className="flex space-x-4 items-center justify-center">
            <a href="https://www.linkedin.com/in/ollantay-scocos/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition" aria-label="LinkedIn">
              <LinkedInIcon className="w-6 h-6 fill-[#0AFFED] hover:fill-purple-400 transition" />
            </a>
            <a href="https://github.com/Oscocos" target="_blank" rel="noreferrer" className="hover:opacity-80 transition" aria-label="GitHub">
              <GitHubIcon className="w-6 h-6 fill-[#0AFFED] hover:fill-purple-400 transition" />
            </a>
            <a href="mailto:olscocos@gmail.com" className="hover:opacity-80 transition" aria-label="Gmail" style={{ color: 'unset' }}>
              <GmailIcon className="w-9 h-9  hover:fill-purple-400 transition" />
            </a>
          </div>

        </aside>

        {/* Sections */}
        <main className="md:w-2/3 space-y-16 font-masiva text-glow">
          <AnimatedSection 
            title="Work Experience"
            titleStyle={{ color: "#0AFFED"}}
          >
            <div 
              className="bg-[#000000]/99 border rounded-md p-6 shadow-md max-w-3xl mx-auto text-slate-300"
              style={{borderColor: "#0AFFED", color: "#BADEFC"}}
            >
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
                  },
                ]}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection 
            title="Projects" 
            titleStyle={{ color: "#0AFFED"}}
          />

          <AnimatedSection 
            title="Education"
            titleStyle={{ color: "#0AFFED"}}
          >
            <div 
            className="bg-[#000000]/99  border rounded-md p-6 shadow-md max-w-3xl mx-auto text-slate-300"
            style={{color: "#BADEFC", borderColor: "#0AFFED"}}
            >
              <p className="font-semibold text-purple-300 mt-2 text-glow">
                University of Illinois at Urbana-Champaign
              </p>
              <p className="italic text-sm text-[#EEF0F2] text-glow mt-2 mb-2">
                B.S. in Computer Science + Astronomy &nbsp;&bull;&nbsp; August 2018 – December 2023
              </p>
              <p className="font-semibold mt-2 text-[#0AFFED] text-glow">Related Coursework:</p>
              <ul className="list-disc list-inside space-y-1 list-disc list-inside space-y-2 font-semibold leading-relaxed text-[#EEF0F2] text-glow mt-2">
                <li>Software Design Studio</li>
                <li>Data Structures and Algorithms</li>
                <li>System Programming</li>
                <li>Computer Architecture</li>
                <li>Artificial Intelligence</li>
                <li>Programming for Data Science</li>
                <li>Statistical Analysis</li>
                <li>Algorithms & Models of Computation</li>
              </ul>
            </div>
          </AnimatedSection>
        </main>
      </div>
    </div>
  );
}
