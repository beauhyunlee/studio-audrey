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
// text-[#c99102]/70
export default function StudioAudreyPortfolio() {
  function Home() {
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

    // for intro section
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setExpanded(true);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    const { scrollYProgress } = useScroll();

    const pageBackground = useTransform(
      scrollYProgress,
      [0, 0.25],
      ["#000000", "#000000"],
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
        {/* LANDING PAGE */}
        <section className="relative min-h-screen overflow-hidden bg-black px-6 py-8 text-white md:px-14">
          <div />

          {/* glass half panel */}
          <div className="absolute left-0 top-0 z-10 h-full w-1/2  bg-[blue]/20" />

          {/* soft blurry edge */}
          <div className="absolute left-[48%] top-0 z-20 h-full w-40" />

          {/* nav */}
          <nav className="absolute left-0 top-0 z-50 w-full px-6 py-8 md:px-14">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
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

              <div className="flex items-center gap-8">
                {[
                  { label: "Resume", path: "/resume" },
                  { label: "Projects", path: "/projects" },
                  { label: "Experience", path: "/experience" },
                  { label: "Contact", path: "/contact" },
                ].map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className="bebas-neue-regular group relative flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.38em] text-[blue]/90 transition-all duration-300 hover:text-white hover:tracking-[0.45em]"
                  >
                    <span className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      ▶
                    </span>
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          {/* main content */}
          <div className="relative z-40 grid min-h-screen grid-cols-1 md:grid-cols-2">
            {/* left side */}
            <div className="flex items-center justify-center px-6 pt-32 pb-20 md:px-14">
              <h1 className=" text-left text-5xl leading-[0.88] font-bold  text-white md:text-5xl lg:text-6xl">
                BEAU HYUN LEE
              </h1>
            </div>

            {/* right side */}
            <div className="flex items-center justify-center px-6 pt-32 pb-20 md:px-14">
              <h2 className="text-center font-serif text-xl font-light uppercase tracking-[0.25em] text-white/70 md:text-2xl">
                portfolio
              </h2>
            </div>
          </div>
        </section>
        {/* Spacing */}
        <div className="h-16" />
        {/* 2. INTRODUCTION SECTION */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 md:px-20">
          <p className="absolute top-10 right-10 text-7xl font-bold text-[blue]/30">
            01
          </p>

          <div className="flex w-full max-w-7xl items-center justify-between gap-20">
            <div
              className={`
    flex w-full max-w-7xl items-center justify-center
    transition-all duration-[2000ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${expanded ? "gap-20 md:gap-40" : "gap-0"}
  `}
            >
              {/* LEFT TEXT */}
              <div
                className={`
      relative z-40 text-left
      transition-all duration-[2000ms]
      ${expanded ? "-translate-x-0 opacity-100" : "translate-x-10"}
    `}
              >
                <p
                  className="font-bold text-8xl uppercase text-white/90"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  hello
                </p>
              </div>

              {/* RIGHT INFO */}
              <div
                className={`
      space-y-5
      transition-all duration-[2000ms]
      ${expanded ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"}
    `}
              >
                <div className="space-y-12">
                  {/* MAIN */}
                  <div className="space-y-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/70">
                      Beau Hyun Lee
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                      Based in New York Metropolitan
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                      Software Engineer
                    </p>
                  </div>

                  {/* EDUCATION */}
                  <div className="space-y-3">
                    <p className="text-[9px] uppercase tracking-[0.5em] text-white/25">
                      Education
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                      Rutgers University 2023-2026
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                      B.S. Computer Science
                    </p>
                  </div>

                  {/* TECHNICAL */}
                  <div className="space-y-3">
                    <p className="text-[9px] uppercase tracking-[0.5em] text-white/25">
                      Technical
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                      Python, C++, Typescript, Javascript, Node.js, React.js
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                      Figma, Unity, Blender, Git, Adobe Suite, Microsoft Suite
                    </p>
                  </div>

                  {/* STATUS */}
                  <div className="space-y-3">
                    <p className="text-[9px] uppercase tracking-[0.5em] text-white/25">
                      Status
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                      Seeking 2026 SWE opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT IMAGE */}

            <div className="overflow-hidden border border-white/40 relative z-40 flex items-center justify-center">
              <img
                src="./profile-sticker.png"
                alt="Audrey Lee"
                className="h-[400px] w-[320px] object-cover object-top grayscale"
              />
            </div>
          </div>
        </section>
        {/* Spacing */}
        <div className="h-16" />
        {/* 3. PROJECT GALLERY */}={/* 3. PROJECT GALLERY */}
        <section
          id="showcase"
          className="bg-black px-6 py-24 text-white md:px-14"
        >
          <section id="projects" className="min-h-screen">
            <div className="mx-auto max-w-7xl">
              {/* HEADER */}
              <div className="mb-16 flex items-end justify-between">
                <div>

                  <h2 className="text-5xl uppercase font-bold tracking-[-0.06em] md:text-7xl">
                    Projects
                  </h2>
                </div>
              </div>

              {/* GALLERY */}
              <div className="flex flex-col gap-4 md:flex-row">
                {[
                  {
                    title: "Personal Website",
                    desc: "Interactive portfolio experience built with React, Vite, and Tailwind CSS featuring cinematic transitions, dynamic lighting systems, and immersive UI interactions.",
                    img: "/website.jpg",
                  },
                  {
                    title: "Fluid Simulation",
                    desc: "Real-time particle-based fluid simulation developed in Unity using physics systems, collision handling, and custom shader rendering.",
                    img: "/fluid.jpg",
                  },
                  {
                    title: "CompBot",
                    desc: "Modular robotics simulation system in C++ featuring real-time movement, multithreaded update loops, and physics-based interactions.",
                    img: "/robotics.jpg",
                  },
                  {
                    title: "Railway Reservation System",
                    desc: "Full-stack reservation platform with secure authentication, relational database management, and multi-role booking workflows.",
                    img: "/train.jpg",
                  },
                  {
                    title: "Earthquake Visualization",
                    desc: "Data visualization platform integrating the USGS API with Kibana dashboards for real-time seismic activity exploration.",
                    img: "/earthquake.jpg",
                  },
                ].map((project, index) => (
                  <article
                    key={index}
                    className="
  group/card relative h-[480px] flex-1 overflow-hidden 
  border 
  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
  md:hover:flex-[2]
"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className={`
  group/card relative h-[480px] overflow-hidden rounded-[2rem]
  border border-white/10 bg-white/[0.03]
  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
  ${index === 3 ? "md:hover:scale-[1.03]" : "md:hover:col-span-2"}
`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-between p-7">
                      <p className="text-[10px] uppercase tracking-[0.45em] text-white/40">
                        0{index + 1}
                      </p>

                      <div>
                        <h3 className="text-3xl font-light tracking-[-0.05em] md:text-4xl">
                          {project.title}
                        </h3>

                        <div
                          className="
                    mt-0 max-h-0 overflow-hidden opacity-0
                    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover/card:mt-5 group-hover/card:max-h-48 group-hover/card:opacity-100
                  "
                        >
                          <p className="max-w-md text-sm leading-6 text-white/65">
                            {project.desc}
                          </p>

                          <button className="mt-6  px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-white/70 transition hover:bg-white hover:text-black">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. VERTICAL DATE RAIL*/}
          <div className="fixed right-6 top-1/2 -translate-y-1/2 z-10000 hidden md:flex flex-col items-center gap-6">
            {/* vertical line */}
            <div className="h-40 w-px bg-white/20" />

            {/* vertical date */}
            <p
              className="font-bold text-[11px] tracking-[0.45em]  text-[blue]/90 uppercase"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              Beau Hyun Lee
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


@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.bebas-neue-regular {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
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
