"use client";

import LinkedInIcon from '../components/icons/InBug-Black.svg';
import GitHubIcon from '../components/icons/github-mark.svg';
import AnimatedSection from "../components/AnimatedSection";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/ProjectsSection"
import GmailIcon from '../components/icons/gmail-icon.svg';
import SkillsSection from '../components/SkillsSection';
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

        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 mt-4 bg-[#0AFFED] text-black font-semibold rounded shadow hover:bg-[#09d8c9] transition"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto my-12 px-4 sm:px-6 md:px-8 gap-8 font-masiva">
        {/* Sticky Info Box */}
        <aside
          className="
            w-full 
            md:w-auto md:min-w-[260px] md:max-w-[300px]
            md:sticky md:top-20 
            self-start 
            bg-[#0f172a] 
            p-6 
            rounded 
            shadow-md 
            border 
            border-[#312e81] 
            z-10
          "
          style={{ color: "#BADEFC" }}
        >

          <h2 className="text-2xl font-black mb-2 font-masiva text-glow text-[#0AFFED]">Ollantay Z. Scocos</h2>
          <p className="mb-4 font-bold font-masiva text-glow text-[#EEF0F2] text-center">University of <span className="font-bold font-masiva text-glow text-[#FF552E]">I</span>llinois at Urbana-Champaign</p>
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
            <a
              href="/resume.pdf"
              download
              className="text-[#0AFFED] hover:text-purple-400 underline font-semibold text-sm"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </div>

        </aside>

        {/* Sections */}
        <main className="md:w-2/3 space-y-16 font-masiva text-glow">
          <AnimatedSection
            title="Work Experience"
            titleStyle={{ color: "#0AFFED" }}
          >
            <div
              className="bg-[#000000]/99 border rounded-md p-6 shadow-md max-w-3xl mx-auto text-slate-300"
              style={{ borderColor: "#0AFFED", color: "#BADEFC" }}
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
            titleStyle={{ color: "#0AFFED" }}
          >
            <div
              className="bg-[#000000] border rounded-md p-6 shadow-md max-w-3xl mx-auto"
              style={{ borderColor: "#0AFFED" }}
            >
              <Projects
                projects={[
                  {
                    title: 'Wrapped Now (JavaScript, HTML, CSS)',
                    stack: 'JavaScript, HTML, CSS, Spotify API, OAuth 2.0',
                    description: [
                      'Engineered and deployed an interactive web application using the Spotify API.',
                      'Enabled secure user login via OAuth 2.0.',
                      'Displayed top artists and songs across 1, 6, and 12-month timeframes.',
                    ],
                    github: 'https://github.com/Oscocos/WrappedNow',
                  },
                  {
                    title: 'TV Time (Java, C++)',
                    stack: 'Java, C++, Gson API',
                    description: [
                      'Parsed and converted JSON using Gson API, reducing data fetching time by 35%.',
                      'Built an Object-Oriented structure to manage TV data efficiently.',
                      'Added features to retrieve episodes by various parameters.',
                    ],
                    youtube: 'https://www.youtube.com/watch?v=ZsWN6sNzOAA&t=129s'
                  },
                  {
                    title: 'QuickEats (Java)',
                    stack: 'Java, Android, Google Places API',
                    description: [
                      'Developed an Android app for restaurant recommendations.',
                      'Integrated location services and Places API to suggest 300+ nearby options.',
                      'Designed UI for flexible filtering by food type and distance.',
                    ],
                    github: 'https://github.com/Oscocos/RestaurantPicker',
                  },
                ]}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection title="Technical Proficiencies" titleStyle={{ color: "#0AFFED" }}>
            <SkillsSection
              skills={[
                {
                  category: 'Programming Languages',
                  items: [
                    ['Python', 0.95],
                    ['C', 0.9],
                    ['HTML', 0.9],
                    ['CSS', 0.9],
                    ['C++', 0.9],
                    ['JavaScript', 0.8],
                    ['Java', 0.75],
                    ['R', 0.7],
                    ['SQL', 0.7],
                    ['Haskell', 0.6],
                    ['MatLab', 0.5],
                  ],
                },
                {
                  category: 'Frameworks / Tools',
                  items: [
                    ['Git', 0.90],
                    ['GitHub', 0.90],
                    ['Linux (Ubuntu)', 0.9],
                    ['Pandas', 0.85],
                    ['Numpy', 0.85],
                    ['Jupyter Notebooks', 0.85],
                    ['React', 0.80],
                    ['Visual Studio', 0.8],
                    ['IntelliJ', 0.75],
                    ['RESTful API', 0.75],
                    ['TCP/IP', 0.7],
                    ['Android Studio', 0.7],
                    ['PyTorch', 0.65],
                    ['AWS', 0.6],
                    ['Excel', 0.9],
                    ['Word', 0.9],
                  ],
                },
              ]}
            />

          </AnimatedSection>

          <AnimatedSection title="Education" titleStyle={{ color: "#0AFFED" }}>
            <div
              className="relative bg-[#000000]/40 border rounded-md p-6 shadow-md max-w-3xl mx-auto"
              style={{ borderColor: "#0AFFED", color: "#BADEFC" }}
            >
              <div className="absolute inset-0 bg-[#050505] rounded-md -z-10" />
              <p className="font-semibold text-purple-300 mt-2 text-glow">
                University of Illinois at Urbana-Champaign
              </p>
              <p className="italic text-sm text-[#BADEFC] text-glow mt-2 mb-2">
                B.S. in Computer Science + Astronomy &nbsp;&bull;&nbsp; August 2018 – December 2023
              </p>
              <p className="font-semibold mt-2 text-[#0AFFED] text-glow">
                Related Coursework:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold leading-relaxed text-[#EEF0F2] mt-2 text-glow">
                {[
                  "Artificial Intelligence",
                  "Data Structures and Algorithms",
                  "Programming for Data Science",
                  "Intro to Algorithms & Models of Computation",
                  "Programming Languages & Compilers",
                  "Computer Architecture",
                  "System Programming",
                  "Statistical Analysis",
                  "Microcomputer Applications",
                  "Computing in Astronomy",
                  "Software Design Studio",
                  "Discrete Structures",
                  "Calculus 1–3",
                  "Linear Algebra"
                ].map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </main>
      </div>
    </div>
  );
}
