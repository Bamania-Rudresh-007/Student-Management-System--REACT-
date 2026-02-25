import SignBtnHandler from "./Sign-btn-handler";
import LoginBtnHandler from "./Login-btn-handler";
import { useEffect, useState } from "react";
import FeaturesSection from "./FeaturesSection.jsx";
import AboutSection from "./AboutSection.jsx";
import ContactSection from "./ContactSection.jsx"

const floatingCards = [
  { icon: "👤", label: "Students", value: "2,400+", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  { icon: "📚", label: "Courses", value: "6", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  { icon: "✅", label: "Active", value: "98%", color: "bg-green-100 text-green-700 border-green-200" },
];

function Welcome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50 flex flex-col font-sans relative">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-100 opacity-40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-yellow-100 opacity-50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-50 opacity-30 blur-3xl" />
      </div>

      {/* Header / Navbar */}
      <header className="relative z-10 py-5 px-6 md:px-16 flex items-center justify-between border-b border-gray-200 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-indigo-700 tracking-tight">SMS Portal</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#features" className="hover:text-indigo-600 transition">Features</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <LoginBtnHandler />
          <SignBtnHandler />
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-16 py-16 md:py-24">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div
            className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse inline-block"></span>
              Student Management System
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Manage Students
              <span className="text-indigo-600 block">Smarter &</span>
              <span className="text-yellow-500">Faster.</span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
              A comprehensive platform to manage student records, track progress, and maintain academic data — all in one place.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 mb-10">
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-sm text-sm font-semibold ${card.color}`}
                >
                  <span className="text-xl">{card.icon}</span>
                  <div>
                    <div className="text-xs font-medium opacity-70">{card.label}</div>
                    <div className="text-base font-bold">{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Illustration + Decorative Cards */}
          <div
            className={`flex justify-center relative transition-all duration-700 delay-200 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Decorative circle behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-100 opacity-50" />
            </div>

            {/* Main illustration */}
            <img
              src="/home-logo.png"
              alt="Student Management Illustration"
              className="relative z-10 max-w-xs md:max-w-sm h-auto hover:scale-105 transition-transform duration-500 ease-in-out drop-shadow-2xl"
            />

            {/* Floating card - top right */}
            <div className="absolute top-4 right-0 md:right-4 z-20 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 animate-bounce-slow">
              <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-white font-bold text-lg shadow">📝</div>
              <div>
                <p className="text-xs text-gray-400 font-medium">New Record</p>
                <p className="text-sm font-bold text-gray-800">Added Today</p>
              </div>
            </div>

            {/* Floating card - bottom left */}
            <div className="absolute bottom-8 left-0 md:-left-4 z-20 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-lg shadow">🎓</div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Courses Available</p>
                <p className="text-sm font-bold text-gray-800">6 Diploma Programs</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Features Strip */}
      <section className="relative z-10 bg-white border-t border-gray-100 py-10 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🗂️", title: "Manage Records", desc: "Add, update, and delete student data with ease." },
            { icon: "🔍", title: "Quick Search", desc: "Find any student instantly by ID, name, or course." },
            { icon: "🌙", title: "Dark Mode", desc: "Comfortable viewing in any environment, day or night." },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-2xl shadow-sm">
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-base">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

        {/* New full features + how it works section */}
        <FeaturesSection />
        <AboutSection />
        <ContactSection />

      {/* Footer */}
      <footer className="relative z-10 py-5 text-center text-gray-400 text-sm border-t border-gray-100 bg-white">
        © {new Date().getFullYear()} Made with ❤️ by <span className="text-indigo-500 font-medium">Bamania Rudresh Vinay Chandra</span>
      </footer>

      {/* Custom animation */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
}

export default Welcome;