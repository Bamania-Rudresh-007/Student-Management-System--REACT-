const features = [
  {
    icon: "🗂️",
    title: "Student Records",
    desc: "Add, view, update, and delete student profiles with all details — name, roll number, course, address, and more.",
    accent: "indigo",
  },
  {
    icon: "🔍",
    title: "Instant Search",
    desc: "Quickly find any student by name, ID, roll number, or course. No delays, no clutter.",
    accent: "yellow",
  },
  {
    icon: "✏️",
    title: "Field-Level Editing",
    desc: "Edit a specific field directly from the student's detail view — no need to fill the whole form again.",
    accent: "indigo",
  },
  {
    icon: "🗑️",
    title: "Safe Deletion",
    desc: "Delete students with a confirmation step so no record is removed accidentally.",
    accent: "yellow",
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    desc: "Switch between light and dark themes for a comfortable experience at any time of day.",
    accent: "indigo",
  },
  {
    icon: "📋",
    title: "Course Filtering",
    desc: "Filter students by diploma course to quickly manage specific batches or departments.",
    accent: "yellow",
  },
];

const steps = [
  {
    number: "01",
    title: "Create an Account",
    desc: "Sign up with your details to get access to the Student Management Portal.",
    icon: "👤",
  },
  {
    number: "02",
    title: "Add Students",
    desc: "Fill in student information — name, roll number, course, contact, and address.",
    icon: "➕",
  },
  {
    number: "03",
    title: "Manage & Update",
    desc: "View all records, edit specific fields, search by any detail, or filter by course.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Stay Organized",
    desc: "Keep your academic data clean, structured, and always up to date.",
    icon: "✅",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 w-full">

      {/* ── FEATURES ── */}
      <div className="bg-white py-20 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-14">
            <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Everything You Need
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Packed with <span className="text-indigo-600">Powerful</span> Features
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
              Built specifically for diploma institutes to manage students efficiently without complexity.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default
                  ${f.accent === "indigo"
                    ? "border-indigo-100 bg-indigo-50 hover:border-indigo-300"
                    : "border-yellow-100 bg-yellow-50 hover:border-yellow-300"
                  }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 group-hover:left-4 group-hover:right-4
                  ${f.accent === "indigo" ? "bg-indigo-400" : "bg-yellow-400"}`}
                />

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm
                  ${f.accent === "indigo" ? "bg-indigo-100" : "bg-yellow-100"}`}>
                  {f.icon}
                </div>

                <h3 className="text-gray-900 font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="relative bg-gray-50 py-20 px-6 md:px-16 border-t border-gray-100 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-50 border border-yellow-300 text-yellow-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Simple to Use
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              How It <span className="text-yellow-500">Works</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
              Get started in minutes. No training required.
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-indigo-200 via-yellow-300 to-indigo-200 z-0" />

            {steps.map((step, i) => (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">

                {/* Step circle */}
                <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-5 shadow-lg border-2 transition-all duration-300 group-hover:scale-110
                  ${i % 2 === 0
                    ? "bg-indigo-600 border-indigo-700 text-white"
                    : "bg-yellow-400 border-yellow-500 text-gray-900"
                  }`}>
                  <span className="text-2xl leading-none">{step.icon}</span>
                  <span className={`text-xs font-bold mt-1 ${i % 2 === 0 ? "text-indigo-200" : "text-yellow-800"}`}>
                    {step.number}
                  </span>
                </div>

                <h3 className="font-extrabold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA at bottom */}
          <div className="text-center mt-16">
            <p className="text-gray-500 mb-5 text-base">Ready to get started?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/login"
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-md hover:shadow-indigo-200 hover:shadow-lg"
              >
                Login Now
              </a>
              <a
                href="/signup"
                className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-500 transition shadow-md hover:shadow-yellow-200 hover:shadow-lg"
              >
                Create Account
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default FeaturesSection;