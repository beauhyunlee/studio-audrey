import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Railway Reservation System",
    type: "Full-Stack Web App",
    stack: "Java · JSP · JDBC · MySQL · HTML/CSS",
    desc: "Built a role-based train reservation platform with customer, representative, and admin workflows. Designed the database schema, connected frontend forms to backend logic, and implemented CRUD features for reservations and schedules.",
  },
  {
    title: "Earthquake Data Visualization",
    type: "Data + Dashboard",
    stack: "Python · USGS API · Kibana · Data Visualization",
    desc: "Created a platform to collect and visualize real-time earthquake data, helping users filter seismic activity and identify geographic patterns through interactive dashboards.",
  },
  {
    title: "AI + Data Pipeline Work",
    type: "Software Engineering Internship",
    stack: "Python · MySQL · Data Pipelines · Product Prototyping",
    desc: "Built and optimized data workflows supporting machine learning product functionality while collaborating with product and design teams on user-centered AI features.",
  },
];

const skills = [
  "React",
  "Python",
  "Java",
  "C++",
  "SQL",
  "AI",
  "Data",
  "Robotics",
  "Creative Tech",
  "Fashion Tech",
];

export default function StudioAudreyPortfolio() {
  const [showHidden, setShowHidden] = useState(false);
  const lightColor = "#c99102";
  const [brightness, setBrightness] = useState(55);
  const [controlsOpen, setControlsOpen] = useState(false);
  // move light
  const [lightX, setLightX] = useState(36);
  const [lightY, setLightY] = useState(54);
  // name changing
  const names = ["BEAU HYUN LEE", "AUDREY", "이보현"];
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % names.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  // Guided Tour
  const startGuidedTour = () => {
    const sections = ["showcase", "lab", "contact"];
    let index = 0;

    const scrollNext = () => {
      const section = document.getElementById(sections[index]);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      index++;

      if (index < sections.length) {
        setTimeout(scrollNext, 5200);
      }
    };

    scrollNext();
  };

  const { scrollYProgress } = useScroll();

  const pageBackground = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["#000000", "#3b0000"],
  );
  return (
    <motion.main
      style={{ backgroundColor: pageBackground }}
      className="min-h-screen text-[#171717]"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        setLightX(x);
        setLightY(y);
      }}
    >
      {/* 1. LANDING PAGE */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white px-6 py-8 md:px-14 flex flex-col justify-between">
        <div className="absolute inset-0 bg-black" />
        {/* grain */}
        <div className="grain-overlay pointer-events-none absolute inset-0 z-30" />

        <div
          className="absolute h-[34rem] w-[34rem] rounded-full blur-[100px] mix-blend-screen transition-all duration-[1400ms] ease-out"
          style={{
            left: `${lightX}%`,
            top: `${lightY}%`,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle at 50% 50%, ${lightColor}22, transparent 20%)`,
            opacity: brightness / 120,
          }}
        />

        <div
          className="absolute h-[26rem] w-[26rem] rounded-full blur-[100px] mix-blend-screen transition-all duration-[1400ms] ease-out"
          style={{
            left: `${lightX * 0.8 - 10}%`,
            top: `${lightY * 0.85 + 10}%`,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${lightColor}66, transparent 70%)`,
            opacity: brightness / 200,
          }}
        />
        {/* a. NAV BAR */}
        <nav className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4 text-sm uppercase tracking-[0.25em]">
          <p className="flip-name">
            {names[nameIndex].split("").map((char, index) => (
              <span
                key={`${char}-${index}-${nameIndex}`}
                className="flip-char"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
          <div className="hidden md:flex gap-8 text-white ">
            <a
              href="#showcase"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              Showcase
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              Contact
            </a>
          </div>
        </nav>
        {/* b. LANDING PAGE TEXT */}
        <div className="relative z-10 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-end py-20">
          <div>
            <p className="mb-3 absolute font-light leading-loose left-14 text-sm uppercase tracking-[0.35em] text-[#c99102]">
              Portfolio
            </p>

            <h1 className="fatwandals text-red-900 text-8xl md:text-10xl lg:text-11xl leading-[0.9] tracking-tight">
              Beau Hyun Lee
            </h1>
          </div>
        </div>
        <div className="z-40 relative left-14 top-[70%]">
          <p className="max-w-xl text-[11px] font-bold uppercase tracking-[0.45em] leading-loose text-[#c99102] drop-shadow-[0_0_14px_rgba(246,211,101,0.9)]">
            Full Stack Engineer
          </p>
        </div>

        {/* Spacing */}
        <div className="h-16" />


        {/* 2. INTRODUCTION SECTION */}
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
          {/* soft red atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,0.12),transparent_70%)]" />

          {/* subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

          {/* a. TEXT CONTENT */}
          <div className="relative z-40 text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-left"
            >
              <p className="mb-6 text-[11px] uppercase tracking-[0.7em] text-white/25">
                Introduction
              </p>

              {/* typing hello */}
              <h1 className="leading-loose typing-text mb-6 text-5xl md:text-8xl font-light tracking-tight text-white/92">
                Hello.
              </h1>
              <div className="typing-arrow-head" />

              {/* typing subtitle */}
              <p className="typing-sub text-lg md:text-2xl tracking-[0.18em] text-red-200/60">
                My name is Audrey Lee.
              </p>
            </motion.div>
          </div>
        </section>
      </section>

      
      {/* 3. ENTERING ARCHIVE SPACING   */}
      <section className="relative flex h-[120vh] items-center justify-center overflow-hidden">
        {/* ambient red glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,0.25),transparent_65%)]" />

        {/* center line */}
        <div className="absolute h-[300px] w-px bg-gradient-to-b from-transparent via-red-900/60 to-transparent" />

        {/* text */}
        <div className="relative z-10 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.6em] text-white/30">
            Entering Archive
          </p>

          <h2 className="fatwandals text-6xl md:text-8xl text-red-900/70">
            Selected Work
          </h2>
        </div>

        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#220000]" />
      </section>

      <section id="showcase" className="px-6 md:px-14 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-black/50 mb-3">
              Selected Work
            </p>
            <h2 className="text-5xl md:text-7xl font-light">
              Project Lookbook
            </h2>
          </div>
          <p className="max-w-md text-black/65">
            A mix of full-stack engineering, data visualization, AI workflows,
            and systems thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group min-h-[430px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between  hover:bg-[#3b0000]/60 hover:border-red-900/40 hover:text-white hover:shadow-[0_0_40px_rgba(120,0,0,0.35)] transition-all duration-[1400ms] ease-out"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
                  Look 0{index + 1}
                </p>
                <h3 className="text-3xl font-serif leading-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-[0.18em] opacity-70 mb-6">
                  {project.type}
                </p>
                <p className="leading-relaxed opacity-80">{project.desc}</p>
              </div>
              <p className="mt-10 text-sm uppercase tracking-[0.18em] opacity-70">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
        {/* vertical date rail */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[10000] hidden md:flex flex-col items-center gap-6">
          {/* vertical line */}
          <div className="h-40 w-px bg-white/20" />

          {/* vertical date */}
          <p
            className="text-[11px] tracking-[0.45em] text-[#c99102]/70 uppercase"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          {/* scroll text */}
          <p
            className="text-[10px] tracking-[0.4em] text-white/25 uppercase animate-pulse"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </p>

          {/* bottom line */}
          <div className="h-40 w-px bg-white/20" />
        </div>
      </section>

      <section
        id="lab"
        className="px-6 md:px-14 py-24 bg-[#171717] text-[#f7f3ee]"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3">
              The Lab
            </p>
            <h2 className="text-5xl md:text-7xl font-serif leading-none">
              Ideas I Want to Build
            </h2>
          </div>
          <div className="space-y-4 text-xl md:text-2xl font-serif">
            <p className="border-b border-white/20 pb-4">
              AI outfit recommender
            </p>
            <p className="border-b border-white/20 pb-4">Virtual closet app</p>
            <p className="border-b border-white/20 pb-4">
              Fashion trend visualization dashboard
            </p>
            <p className="border-b border-white/20 pb-4">
              Creator storefront analytics tool
            </p>
            <p className="border-b border-white/20 pb-4">
              Creative robotics and hardware experiments
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-14 py-24">
        <div className="rounded-[2rem] border border-black/20 bg-white/40 p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <h2 className="text-5xl md:text-7xl font-serif leading-none">
            Engineer Mode × Creative Mode
          </h2>
          <p className="text-xl leading-relaxed text-black/70">
            My goal is to bring technical depth into creative industries. I’m
            interested in building products that are useful, visually strong,
            and shaped around how people actually behave.
          </p>
        </div>
      </section>

      <footer
        id="contact"
        className="px-6 md:px-14 py-12 border-t border-black/20"
      >
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-3xl font-serif">Let’s build something.</p>
            <p className="text-black/60 mt-2">
              Software engineering · creative tech · fashion tech
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition"
              href="mailto:beauhlee@gmail.com"
            >
              Email
            </a>
            <a
              className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition"
              href="https://github.com/beauhyunlee"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition"
              href="https://www.linkedin.com/beau-lee"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition"
              href="#"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>

      {/* style block */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
          @keyframes swingLight {
  0% {
    transform: translateX(-50%) rotate(-6deg);
  }

  50% {
    transform: translateX(-50%) rotate(6deg);
  }

  100% {
    transform: translateX(-50%) rotate(-6deg);
  }
}
  .typing-text {
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typingHello 1.8s steps(6, end) forwards;
}
.typing-arrow-head {
  opacity: 0;
  margin: 5.7rem auto 0;
  width: 18px;
  height: 18px;
  border-right: 3px solid rgba(150,0,0,0.95);
  border-bottom: 3px solid rgba(150,0,0,0.95);
  transform: rotate(45deg);
  filter: drop-shadow(0 0 8px rgba(150,0,0,0.75));
  animation: showArrowHead 0.5s ease 5.7s forwards;
}

@keyframes showArrowHead {
  to {
    opacity: 1;
  }
}
.typing-text::after {
  content: "";
  position: absolute;
  right: -14px;
  top: 50%;
  width: 2px;
  height: 1em;
  background: rgba(255,255,255,0.8);
  transform: translateY(-50%);
  animation:
    blinkCursor 0.8s 6,
    cursorToArrow 1.2s ease 4.8s forwards;
}

@keyframes cursorToArrow {
  0% {
    top: 50%;
    height: 1em;
    width: 2px;
    background: rgba(255,255,255,0.8);
    transform: translateY(-50%);
    box-shadow: none;
  }

  100% {
    top: 160%;
    height: 90px;
    width: 3px;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(150,0,0,0.95),
      rgba(255,170,120,0.85),
      rgba(90,0,0,0.95)
    );
    transform: translateY(0);
    box-shadow:
      0 0 12px rgba(150,0,0,0.8),
      inset 0 0 4px rgba(255,255,255,0.35);
  }
}

@keyframes typingHello {
  from {
    width: 0;
  }
  to {
    width: 6ch;
  }
}

@keyframes typingSub {
  from {
    width: 0;
  }
  to {
    width: 25ch;
  }
}

@keyframes showSub {
  to {
    opacity: 1;
  }
}

@keyframes blinkCursor {
  0%, 50% {
    border-color: rgba(255,255,255,0.8);
  }

  51%, 100% {
    border-color: transparent;
  }
}
       
.grain-overlay {
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.05),
      rgba(255,255,255,0.015),
      rgba(0,0,0,0.18)
    );

  border: 1px solid rgba(255,255,255,0.08);

  opacity: 0.75;
}
  .flip-name {
  display: flex;
  gap: 0.08em;
  font-size: 0.85rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  perspective: 800px;
}

.flip-char {
  display: inline-block;
  animation: airportFlip 650ms ease both;
  transform-origin: center;
}
  

@keyframes airportFlip {
  0% {
    opacity: 0;
    transform: rotateX(90deg) translateY(-8px);
    filter: blur(4px);
  }
  50% {
    opacity: 0.7;
    transform: rotateX(-20deg) translateY(2px);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0);
    filter: blur(0);
  }
}

      `}</style>
    </motion.main>
  );
}
