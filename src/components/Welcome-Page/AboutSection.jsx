// AboutSection.jsx
// Drop this inside Welcome.jsx just above the <footer>, after <FeaturesSection />

const techStack = [
  {
    name: "React",
    icon: "⚛️",
    desc: "UI library for building the entire frontend — components, routing, state management.",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-400",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    desc: "Utility-first CSS for all styling, responsive design, and dark mode support.",
    color: "bg-cyan-50 border-cyan-200 text-cyan-700",
    dot: "bg-cyan-400",
  },
  {
    name: "Vite",
    icon: "⚡",
    desc: "Lightning-fast development server and optimized production build tool.",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
    dot: "bg-yellow-400",
  },
];

const journey = [
  { label: "Started With", value: "Learning React basics" },
  { label: "Built", value: "Full CRUD operations" },
  { label: "Currently", value: "2nd Year, 4th Sem — Diploma CE" },
  { label: "Next Goal", value: "Backend development 🚀" },
];

function AboutSection() {
  return (
    <section id="about" className="relative z-10 w-full">
      <div className="relative bg-white py-20 px-6 md:px-16 border-t border-gray-100 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              The Project &amp; <span className="text-indigo-600">The Developer</span>
            </h2>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT — Mission + Developer */}
            <div className="flex flex-col gap-8">

              {/* Mission card */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-yellow-400 rounded-t-2xl" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-lg shadow">
                    🎯
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-xl">Why This Project?</h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Built as a hands-on exercise to master{" "}
                  <span className="font-semibold text-indigo-600">CRUD operations</span> — Create, Read, Update, and Delete — the foundation of almost every real-world application. Before diving into backend, building a complete working frontend was the goal: to understand state management, routing, component design, and data flow properly.
                </p>
              </div>

              {/* Developer card */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-indigo-400 rounded-t-2xl" />

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg select-none">
                    R
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg leading-tight">Bamania Rudresh</h3>
                    <p className="text-indigo-500 text-sm font-semibold">Frontend Developer · Age 17</p>
                  </div>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  A curious 17-year-old in the{" "}
                  <span className="font-semibold text-gray-800">2nd year, 4th semester</span> of Diploma in Computer Engineering. Passionate about full-stack web development and always pushing to build real things — this project is a stepping stone toward complete, production-ready applications.
                </p>

                {/* Journey */}
                <div className="flex flex-col gap-3">
                  {journey.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                      <span className="text-gray-400 text-sm font-medium w-28 flex-shrink-0">{item.label}</span>
                      <span className="text-gray-800 text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Tech Stack */}
            <div className="flex flex-col gap-5">

              <div>
                <h3 className="font-extrabold text-gray-900 text-2xl mb-2">Tech Stack</h3>
                <p className="text-gray-500 text-base mb-4">
                  Every tool was chosen deliberately — keeping things simple, fast, and modern.
                </p>
              </div>

              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className={`group flex items-start gap-5 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${tech.color}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${tech.dot}`} />
                      <h4 className="font-extrabold text-lg">{tech.name}</h4>
                    </div>
                    <p className="text-sm opacity-80 leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              ))}

              {/* What's next */}
              <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-2xl shadow flex-shrink-0">
                  🚀
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base mb-1">What's Next?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Backend development — connecting this frontend to a real server, database, and REST API. The full-stack journey starts right after this project.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;