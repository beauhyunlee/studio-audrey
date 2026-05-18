import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NavLink, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";

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

export default function StudioAudreyPortfolio() {
  function Home() {
    const lightColor = "#c99102";
    const [brightness, setBrightness] = useState(80);

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
          <div className="hero-glow" />
          
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

          <nav className="relative z-40 flex items-center justify-between border-b border-white/15 pb-4">
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
          </nav>

          {/* b. LANDING PAGE TEXT */}

          <div className="relative z-10 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-end py-20">
            <div>
              <h1 className="gefika text-red-900 text-[20vw] leading-[0.9]">
                Beau Hyun Lee
              </h1>
            </div>
          </div>
          <nav className="absolute left-0 top-0 z-50 w-full px-14 py-8">
            <div className="flex items-center justify-end gap-10">
              {[
                { label: "Resume", path: "/resume" },
                { label: "Projects", path: "/projects" },
                { label: "Experience", path: "/experience" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="
          group relative flex items-center gap-2
          text-[10px] font-bold uppercase tracking-[0.38em]
          text-[#c99102]
          drop-shadow-[0_0_14px_rgba(246,211,101,0.75)]
          transition-all duration-300
          hover:text-white/85
          hover:tracking-[0.45em]
        "
                >
                  <span
                    className="
            opacity-0 -translate-x-2
            transition-all duration-300
            group-hover:opacity-100
            group-hover:translate-x-0
          "
                  >
                    ▶
                  </span>

                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Spacing */}
          <div className="h-16" />
        </section>
        
        
      
        {/* 2. INTRODUCTION SECTION */}
        <section className="relative flex min-h-screen flex-col md:flex-row items-center justify-center gap-16 md:gap-28 overflow-hidden px-8 md:px-20">
          {/* subtle vignette */}
          <div className="absolute inset-0 " />
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-20">
            {/* a. TEXT CONTENT */}
            <div className="relative z-40 text-left">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-left"
              >
                {/* typing hello */}
                <h1 className="ui-text leading-loose typing-text mb-6 text-5xl md:text-8xl font-light tracking-tight text-[#7a0000]">
                  hello.
                </h1>

                {/* typing subtitle */}
                <p className="ui-text typing-sub leading-loose text-lg md:text-2xl tracking-[0.18em] text-red-200/60">
                  My name is Audrey Lee.
                </p>
                <div className="h-5" />
                <p className="ui-text typing-sub leading-loose text-lg md:text-2xl tracking-[0.18em] text-red-200/60">
                  Bachelor of Science, Computer Science
                </p>
                <p className="ui-text typing-sub leading-loose text-lg md:text-2xl tracking-[0.18em] text-red-200/60">
                  Rutgers University, The State University of New Jersey
                </p>
                <p className="ui-text typing-sub leading-loose text-lg md:text-2xl tracking-[0.18em] text-red-200/60">
                  Based: New York Metropolitan Area
                </p>
                <p className="ui-text typing-sub leading-loose text-lg md:text-2xl tracking-[0.18em] text-red-200/60">
                  Software Engineer
                </p>

                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="ui-text view-projects-link"
                >
                  <p className="ui-text typing-sub leading-loose text-lg md:text-2xl tracking-[0.18em] text-">
                    [View Work]
                  </p>
                </button>
              </motion.div>
            </div>

            {/* b. EYES FOLLOW MOUSE */}
            {/* RIGHT EYES */}
            <div className="relative z-40 flex gap-[clamp(1rem,3vw,2rem)] shrink-0">
              {[0, 1].map((eye) => {
                const pupilX = (lightX - 50) / 8;
                const pupilY = (lightY - 50) / 8;

                return (
                  <div
                    key={eye}
                    className="
          relative rounded-full
          bg-white/90
          border border-white/40
        "
                    style={{
                      width: "clamp(4.5rem, 12vw, 9rem)",
                      height: "clamp(4.5rem, 12vw, 9rem)",
                    }}
                  >
                    <div
                      className="
            absolute left-1/2 top-1/2 rounded-full
            bg-black
            transition-transform duration-100
          "
                      style={{
                        width: "clamp(2.4rem, 6vw, 5rem)",
                        height: "clamp(2.4rem, 6vw, 5rem)",
                        transform: `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
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

        {/* 4. PROJECT LOOKBOOK */}
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

          {/* 5. VERTICAL DATE RAIL*/}
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

        <footer
          id="contact"
          className="relative overflow-hidden bg-black px-6 py-24 md:px-14"
        >
          {/* subtle texture */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
          </div>

          <div className="relative z-10 grid gap-20 md:grid-cols-[1.4fr_0.6fr]">
            {/* LEFT SIDE */}
            <div className="flex flex-col">
              <a href="#showcase" className="footer-nav group">
                <span className="footer-index">01</span>
                <h2 className="footer-word text-white">projects</h2>
              </a>

              <a href="#lab" className="footer-nav group">
                <span className="footer-index">02</span>
                <h2 className="footer-word opacity-20 group-hover:opacity-100">
                  lab
                </h2>
              </a>

              <a href="#about" className="footer-nav group">
                <span className="footer-index">03</span>
                <h2 className="footer-word opacity-20 group-hover:opacity-100">
                  about
                </h2>
              </a>

              <a href="#gallery" className="footer-nav group">
                <span className="footer-index">04</span>
                <h2 className="footer-word opacity-20 group-hover:opacity-100">
                  gallery
                </h2>
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-between text-white/85">
              <div className="space-y-10 text-sm leading-relaxed tracking-[0.04em]">
                <div>
                  <p>New York Metropolitan Area</p>
                  <p>Creative Engineering Portfolio</p>
                </div>

                <div>
                  <p>+1 (201) 421-1549</p>
                  <p>beauhlee@gmail.com</p>
                  <a
                    href="https://github.com/beauhyunlee"
                    target="_blank"
                    className="group inline-block"
                  >
                    <p>github.com/beauhyunlee</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/beau-lee/"
                    target="_blank"
                    className="group inline-block"
                  >
                    <p>linkedin.com/beau-lee</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* style block */}
        <style>{`


/* =============
Gloal Font
===========*/

:root {
  --text-soft: rgba(255,255,255,0.78);
  --text-bright: rgba(255,255,255,0.96);

  --tracking-wide: 0.45em;

  --transition-smooth:
    color 400ms ease,
    opacity 400ms ease,
    text-shadow 400ms ease;
}

/* base aesthetic text */
.ui-text {
  position: relative;

  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  line-height: 1.8;

  color: var(--text-soft);

  transition: var(--transition-smooth);

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* hover / active glow */
.ui-text:hover {
  color: var(--text-bright);

  text-shadow:
    0 0 8px rgba(255,255,255,0.18),
    0 0 18px rgba(255,255,255,0.08);
}

/* slightly dimmed */
.ui-text-muted {
  opacity: 0.55;
}

/* intro page stronger version */
.ui-text-hero {
  font-size: 14px;
  letter-spacing: 0.55em;

  color: rgba(255,255,255,0.88);

  text-shadow:
    0 0 14px rgba(255,255,255,0.05);
}

/* navigation items */
.ui-nav-item {
  cursor: pointer;
  width: fit-content;
}

.ui-nav-item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;

  width: 0%;
  height: 1px;

  background: rgba(255,255,255,0.7);

  transition: width 400ms ease;
}

.ui-nav-item:hover::after {
  width: 100%;
}
  /* =========================
     NAV + UI TEXT
  ========================= */

  .nav-link {
    position: relative;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.45em;
    line-height: 1.8;
    color: rgba(255,255,255,0.78);
    transition: color 400ms ease, opacity 400ms ease, text-shadow 400ms ease;
  }

  .nav-link:hover {
    color: white;
    text-shadow: 0 0 10px rgba(255,255,255,0.25);
  }

  .nav-active {
    color: #7a0000;
    text-shadow: 0 0 14px rgba(120,0,0,0.85);
  }

  /* =========================
     GRAIN / LANDING OVERLAY
  ========================= */
          /* glow container */
.hero-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* existing light */
.hero-glow::before {
  content: "";
  position: absolute;
  inset: 0;

  background:
    radial-gradient(circle at center,
      rgba(120, 0, 0, 0.45) 0%,
      rgba(120, 0, 0, 0.18) 30%,
      transparent 70%);

  filter: blur(80px);
}

/* grain overlay */
.hero-glow::after {
  content: "";
  position: absolute;
  inset: -50%;

  opacity: 0.12;
  mix-blend-mode: soft-light;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");

  animation: grainMove 8s steps(10) infinite;
}

@keyframes grainMove {
  0%   { transform: translate(0,0); }
  25%  { transform: translate(-5%, 3%); }
  50%  { transform: translate(4%, -4%); }
  75%  { transform: translate(-3%, 5%); }
  100% { transform: translate(0,0); }
}
  
  /* =========================
     NAME FLIP ANIMATION
  ========================= */

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
/* =========================
   INTRO TYPEWRITER
========================= */

.typing-text {
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 6ch;
  animation: typingHello 1.8s steps(6, end) both;
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
    cursorToArrow 1.2s ease 4.8s both;
}

.typing-sub {
  overflow: hidden;
  white-space: nowrap;
  opacity: 1;
  width: 25ch;
  animation:
    showSub 0s linear 1.9s both,
    typingSub 2.4s steps(25, end) 1.9s both;
}


@keyframes typingHello {
  from {
    width: 0;
  }

  to {
    width: 10ch;
  }
}

@keyframes typingSub {
  from {
    width: 0;
  }

  to {
    width: 60ch;
  }
}

@keyframes showSub {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes blinkCursor {
  0%, 50% {
    opacity: 1;
  }

  51%, 100% {
    opacity: 0;
  }
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

@keyframes showArrowHead {
  to {
    opacity: 1;
  }
}

  /* =========================
     FOOTER NAVIGATION
  ========================= */

  .footer-nav {
    position: relative;
    width: fit-content;
  }

  .footer-word {
    font-size: clamp(5rem, 12vw, 11rem);
    line-height: 0.9;
    font-weight: 700;
    letter-spacing: -0.07em;
    color: white;
    transition: opacity 500ms ease;
  }

  .footer-index {
    position: absolute;
    right: -3rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.7rem;
    letter-spacing: 0.35em;
    color: rgba(255,255,255,0.35);
  }

  /* =========================
     OPTIONAL ANIMATIONS
  ========================= */

  .animate-marquee {
    animation: marquee 24s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  .swinging-light {
    transform-origin: top center;
    animation: swingLight 7s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
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
`}</style>
      </motion.main>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
