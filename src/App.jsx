import React from "react";

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
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">
      <section className="min-h-screen px-6 py-8 md:px-14 flex flex-col justify-between">
        <nav className="flex items-center justify-between border-b border-black/20 pb-4 text-sm uppercase tracking-[0.25em]">
          <p>Studio Audrey</p>
          <div className="hidden md:flex gap-8">
            <a href="#work" className="hover:opacity-60">Work</a>
            <a href="#lab" className="hover:opacity-60">Lab</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </div>
        </nav>

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-end py-20">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-black/60">Software · Design · Creative Systems</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight font-serif">
              Audrey Lee
            </h1>
            <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-black/75">
              I build software with a creative eye, blending engineering, data, AI, and human-centered design.
            </p>
          </div>

          <div className="border border-black/20 rounded-3xl p-6 bg-white/40 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] mb-6">Currently Exploring</p>
            <p className="text-2xl font-serif leading-snug">
              Fashion tech, AI tools, robotics, digital products, and aesthetic user experiences.
            </p>
          </div>
        </div>

        <div className="overflow-hidden border-y border-black/20 py-4">
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
            <a className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition" href="mailto:audreylee5376@gmail.com">Email</a>
            <a className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition" href="https://github.com/" target="_blank">GitHub</a>
            <a className="rounded-full border border-black/20 px-5 py-3 hover:bg-black hover:text-white transition" href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
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
