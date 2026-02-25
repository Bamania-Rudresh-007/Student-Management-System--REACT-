// ContactSection.jsx
// Drop this inside Welcome.jsx just above the <footer>, after <AboutSection />

const socials = [
  {
    name: "Email",
    handle: "bamaniarudresh2008@gmail.com",
    href: "mailto:bamaniarudresh2008@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bg: "bg-indigo-600",
    hover: "hover:bg-indigo-700",
    light: "bg-indigo-50 border-indigo-200 text-indigo-700",
    dot: "bg-indigo-400",
  },
  {
    name: "GitHub",
    handle: "@Bamania-Rudresh-007",
    href: "https://github.com/Bamania-Rudresh-007",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    bg: "bg-gray-900",
    hover: "hover:bg-gray-700",
    light: "bg-gray-50 border-gray-200 text-gray-700",
    dot: "bg-gray-500",
  },
  {
    name: "LinkedIn",
    handle: "Rudresh Bamania",
    href: "https://www.linkedin.com/in/rudresh-bamania-969939362/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
    light: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    name: "Instagram",
    handle: "@bamania_rudresh_",
    href: "https://www.instagram.com/bamania_rudresh_",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    bg: "bg-gradient-to-br from-pink-500 via-rose-500 to-yellow-500",
    hover: "hover:opacity-90",
    light: "bg-pink-50 border-pink-200 text-pink-700",
    dot: "bg-pink-400",
  },
];

function ContactSection() {
  return (
    <section id="contact" className="relative z-10 w-full">
      <div className="relative bg-gray-50 py-20 px-6 md:px-16 border-t border-gray-100 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-yellow-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-block bg-yellow-50 border border-yellow-300 text-yellow-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Let's <span className="text-yellow-500">Connect</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-md mx-auto">
              Have a question, suggestion, or just want to say hi? Reach out through any of the links below.
            </p>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${s.light}`}
              >
                {/* Icon circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${s.bg} ${s.hover}`}>
                  {s.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
                    <span className="font-extrabold text-gray-900 text-base">{s.name}</span>
                  </div>
                  <p className="text-sm opacity-75 font-medium truncate">{s.handle}</p>
                </div>

                {/* Arrow */}
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Bottom availability badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-gray-600 text-sm font-medium">
                Open to collaborations, feedback & new connections!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;