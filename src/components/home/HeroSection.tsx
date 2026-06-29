import { HeroTypingText } from "./HeroTypingText";

const heroFeatures = [
  {
    title: "Fast & optimised",
    text: "Built with performance and clean structure in mind.",
  },
  {
    title: "Modern design",
    text: "Sharp, responsive layouts that make your business look credible.",
  },
  {
    title: "Built to convert",
    text: "Clear messaging and calls to action that guide visitors.",
  },
];

const heroStats = [
  {
    value: "Fast",
    label: "Loading sites",
  },
  {
    value: "SEO",
    label: "Foundations included",
  },
  {
    value: "Mobile",
    label: "Responsive design",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050b18] text-white"
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.28),transparent_32%),radial-gradient(circle_at_80%_45%,rgba(59,130,246,0.22),transparent_30%),linear-gradient(135deg,#050b18_0%,#081326_45%,#020617_100%)]" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 top-36 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Blue wave/glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        <div className="absolute bottom-[-5rem] left-1/2 h-40 w-[75rem] -translate-x-1/2 rounded-[100%] border-t border-blue-400/40 bg-blue-500/10 blur-sm" />
        <div className="absolute bottom-[-6rem] left-1/2 h-44 w-[58rem] -translate-x-1/2 rounded-[100%] border-t border-cyan-300/30 blur-md" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 shadow-lg shadow-blue-950/30">
            Premium web solutions for small businesses and creators
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            High-performance websites. Built for{" "}
            <span className="text-blue-400">growth.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Custom websites that combine strong design, fast loading, clear
            messaging and practical routes for customers to get in touch.
          </p>

          <HeroTypingText />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-500"
            >
              Start your project
            </a>
            <a
              href="#work"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-center font-bold text-white transition hover:border-blue-300/60 hover:bg-blue-500/10"
            >
              View my work
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {heroFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/60" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {feature.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Main laptop/browser visual */}
          <div className="relative rounded-[2rem] border border-blue-300/15 bg-white/10 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#07111f] p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="hidden gap-5 text-[0.65rem] font-medium text-slate-400 sm:flex">
                  <span>Home</span>
                  <span>Services</span>
                  <span>Projects</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-2xl border border-blue-300/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-32 w-full bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.35),transparent_55%)]" />

                <div className="relative max-w-xs">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                    Your business online
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
                    Built to look sharp and load fast.
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    A clean website structure with clear services, calls to
                    action and mobile-first layouts.
                  </p>
                  <div className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                    Get started
                  </div>
                </div>

                <div className="relative mt-8 grid grid-cols-3 gap-3">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                    >
                      <p className="text-lg font-extrabold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[0.68rem] leading-4 text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          {/* <div className="absolute -left-4 top-10 hidden rounded-2xl border border-blue-300/20 bg-slate-950/90 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Speed
            </p>
            <div className="mt-3 flex items-end gap-2">
              <p className="text-3xl font-extrabold text-white">98</p>
              <p className="pb-1 text-xs text-slate-400">score</p>
            </div>
          </div> */}

          {/* <div className="absolute -right-3 bottom-14 hidden max-w-48 rounded-2xl border border-blue-300/20 bg-slate-950/90 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Focus
            </p>
            <p className="mt-3 text-sm font-semibold text-white">
              Design, performance and clear customer journeys.
            </p>
          </div> */}

          {/* <div className="absolute -bottom-7 left-10 hidden rounded-2xl border border-orange-300/20 bg-slate-950/90 p-4 shadow-2xl shadow-orange-950/30 backdrop-blur md:block">
            <p className="text-sm font-bold text-white">Launch ready</p>
            <p className="mt-1 text-xs text-slate-400">
              Website, SEO basics and deployment support.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
