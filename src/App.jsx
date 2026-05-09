import React, { useEffect, useState } from "react";
const [brightness, setBrightness] = useState(75);
const [mouse, setMouse] = useState({ x: 48, y: 66 });
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleMouseMove = (e) => {
    setMouse({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const walkerX = Math.min(78, Math.max(18, mouse.x));
const walkerY = Math.min(78, Math.max(48, mouse.y + scrollY * 0.015));
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

const skills = ["React", "Python", "Java", "C++", "SQL", "AI", "Data", "Robotics", "Creative Tech", "Fashion Tech"];

export default function StudioAudreyPortfolio() {
  const [lightColor, setLightColor] = useState("#ff8a1c");
  const [brightness, setBrightness] = useState(75);

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">
      <section className="relative min-h-screen overflow-hidden bg-black text-white px-6 py-8 md:px-14 flex flex-col justify-between">
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at 36% 54%, ${lightColor} ${brightness * 0.45}px, transparent ${brightness * 3.8}px), radial-gradient(circle at 50% 50%, ${lightColor}55 0px, transparent 520px), linear-gradient(135deg, #050505 0%, #160500 45%, #000000 100%)`,
            filter: `brightness(${0.75 + brightness / 100})`,
          }}
        />

        <div
          className="absolute left-[20%] top-[24%] h-[26rem] w-[26rem] rounded-full blur-[80px] transition-all duration-300"
          style={{
            backgroundColor: lightColor,
            opacity: brightness / 120,
          }}
        />
        
          <div
  className="absolute z-10 transition-all duration-500 ease-out"
  style={{
    left: `${walkerX}%`,
    top: `${walkerY}%`,
    transform: "translate(-50%, -100%)",
  }}
>
  <div className="relative h-24 w-10 opacity-90">
    <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-black shadow-[0_0_18px_rgba(0,0,0,0.8)]" />

    <div className="absolute left-1/2 top-5 h-10 w-4 -translate-x-1/2 rounded-full bg-black" />

    <div className="absolute left-[0.7rem] top-9 h-9 w-1.5 origin-top rotate-[18deg] rounded-full bg-black" />

    <div className="absolute right-[0.7rem] top-9 h-9 w-1.5 origin-top -rotate-[18deg] rounded-full bg-black" />

    <div className="absolute left-[0.95rem] top-[3.2rem] h-12 w-1.5 origin-top rotate-[14deg] rounded-full bg-black" />

    <div className="absolute right-[0.95rem] top-[3.2rem] h-12 w-1.5 origin-top -rotate-[14deg] rounded-full bg-black" />

    <div className="absolute left-1/2 top-[5.7rem] h-12 w-24 -translate-x-1/2 rounded-full bg-black/35 blur-xl" />
  </div>
</div>

<div className="absolute right-[14%] top-[18%] hidden h-[34rem] w-[18rem] rounded-[3rem] border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-sm md:block"></div>
        <div className="absolute right-[14%] top-[18%] hidden h-[34rem] w-[18rem] rounded-[3rem] border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-sm md:block">
          <div className="flex gap-2 mb-20">
            <div className="h-1 w-20 rounded-full bg-white" />
            <div className="h-1 w-20 rounded-full bg-white/25" />
            <div className="h-1 w-20 rounded-full bg-white/25" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">Studio Interface</p>
          <h2 className="text-4xl leading-tight font-serif mb-4">Adjust the atmosphere.</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-10">A portfolio landing page that behaves like a visual system, not a static resume.</p>
          <a href="#work" className="block rounded-full bg-white px-5 py-3 text-center text-sm text-black hover:bg-white/80 transition">Enter Portfolio</a>
        </div>

        <nav className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4 text-sm uppercase tracking-[0.25em]">
          <p>Studio Audrey</p>
          <div className="hidden md:flex gap-8">
            <a href="#work" className="hover:opacity-60">Work</a>
            <a href="#lab" className="hover:opacity-60">Lab</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-end py-20">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/60">Software · Design · Creative Systems</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight font-serif">
              Audrey Lee
            </h1>
            <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-white/75">
              I build software with a creative eye, blending engineering, data, AI, and human-centered design.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:mr-[22rem]">
            <p className="text-sm uppercase tracking-[0.25em] mb-6 text-white/60">Light Controls</p>
            <label className="block mb-6">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/60">Color</span>
              <input
                type="color"
                value={lightColor}
                onChange={(e) => setLightColor(e.target.value)}
                className="h-12 w-full cursor-pointer rounded-xl border border-white/20 bg-transparent"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/60">Brightness: {brightness}%</span>
              <input
                type="range"
                min="20"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full accent-white"
              />
            </label>
          </div>
        </div>

        <div className="relative z-10 overflow-hidden border-y border-white/15 py-4">
          <div className="flex gap-8 whitespace-nowrap text-sm uppercase tracking-[0.25em] animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 md:px-14 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-black/50 mb-3">Selected Work</p>
            <h2 className="text-5xl md:text-7xl font-serif">Project Lookbook</h2>
          </div>
          <p className="max-w-md text-black/65">
            A mix of full-stack engineering, data visualization, AI workflows, and systems thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <article key={project.title} className="group min-h-[430px] rounded-3xl border border-black/20 bg-white/50 p-6 flex flex-col justify-between hover:bg-[#171717] hover:text-[#f7f3ee] transition-all duration-300">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] opacity-60 mb-6">Look 0{index + 1}</p>
                <h3 className="text-3xl font-serif leading-tight mb-3">{project.title}</h3>
                <p className="text-sm uppercase tracking-[0.18em] opacity-70 mb-6">{project.type}</p>
                <p className="leading-relaxed opacity-80">{project.desc}</p>
              </div>
              <p className="mt-10 text-sm uppercase tracking-[0.18em] opacity-70">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="lab" className="px-6 md:px-14 py-24 bg-[#171717] text-[#f7f3ee]">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3">The Lab</p>
            <h2 className="text-5xl md:text-7xl font-serif leading-none">Ideas I Want to Build</h2>
          </div>
          <div className="space-y-4 text-xl md:text-2xl font-serif">
            <p className="border-b border-white/20 pb-4">AI outfit recommender</p>
            <p className="border-b border-white/20 pb-4">Virtual closet app</p>
            <p className="border-b border-white/20 pb-4">Fashion trend visualization dashboard</p>
            <p className="border-b border-white/20 pb-4">Creator storefront analytics tool</p>
            <p className="border-b border-white/20 pb-4">Creative robotics and hardware experiments</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-14 py-24">
        <div className="rounded-[2rem] border border-black/20 bg-white/40 p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <h2 className="text-5xl md:text-7xl font-serif leading-none">Engineer Mode × Creative Mode</h2>
          <p className="text-xl leading-relaxed text-black/70">
            My goal is to bring technical depth into creative industries. I’m interested in building products that are useful, visually strong, and shaped around how people actually behave.
          </p>
        </div>
      </section>

      <footer id="contact" className="px-6 md:px-14 py-12 border-t border-black/20">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-3xl font-serif">Let’s build something.</p>
            <p className="text-black/60 mt-2">Software engineering · creative tech · fashion tech</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition" href="mailto:beauhlee@gmail.com">Email</a>
            <a className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition" href="https://github.com/beauhyunlee" target="_blank">GitHub</a>
            <a className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition" href="https://www.linkedin.com/beau-lee" target="_blank">LinkedIn</a>
            <a className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition" href="#">Resume</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </main>
  );
}
