"use client";

import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  href: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
};

const projects: Project[] = [
  {
    title: "Any Fantasy World",
    category: "Live project",
    href: "https://anyfantasyworld.com",
    shortDescription:
      "A custom author platform for books, lore, updates and newsletter signups.",
    description:
      "A live author website built with a modern frontend, newsletter signup, content sections, lore and worldbuilding pages, SEO foundations and deployment through Vercel. The project is being developed as a real publishing platform rather than a simple static portfolio piece.",
    tags: ["Live website", "Author platform", "Newsletter", "SEO"],
    image: "/images/projects/any-fantasy-world-card.png",
    imageAlt: "Any Fantasy World author website showcase preview",
  },
  {
    title: "Crest Property Care",
    category: "Demo project",
    href: "https://crest-property-care.vercel.app/",
    shortDescription:
      "A premium one-page website concept for a local property care business.",
    description:
      "A fictional local service business website designed to show how Ablaze Tech Services can help trades, landscapers and property maintenance businesses look professional online. The site uses a mobile-first layout, clear trust signals, project examples, quote-focused calls to action and a polished contact section to encourage customer enquiries.",
    tags: [
      "Local business",
      "Mobile-first",
      "Lead generation",
      "Responsive design",
      "Demo website",
    ],
    image: "/images/projects/crest-property-care-card.png",
    imageAlt: "Crest Property Care local service business website preview",
  },
  {
    title: "E-commerce Demo",
    category: "Demo project",
    href: "#",
    shortDescription:
      "A clean online shop concept with products, basket and checkout flow.",
    description:
      "A planned showcase project for a small online shop, demonstrating product listings, product detail pages, basket functionality and a simple checkout journey. This will be useful for clients who want something more flexible than a basic brochure site.",
    tags: ["Products", "Basket", "Checkout", "Stripe-ready"],
  },
];

export function FeaturedWorkSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    if (showDetails) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveProjectIndex((currentIndex) =>
        currentIndex === projects.length - 1 ? 0 : currentIndex + 1,
      );
    }, 7000);

    return () => window.clearInterval(interval);
  }, [showDetails]);

  function goToPreviousProject() {
    setShowDetails(false);
    setActiveProjectIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1,
    );
  }

  function goToNextProject() {
    setShowDetails(false);
    setActiveProjectIndex((currentIndex) =>
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1,
    );
  }

  function selectProject(index: number) {
    setShowDetails(false);
    setActiveProjectIndex(index);
  }

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050b18] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.16),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
              Featured Work
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Real projects and focused demo builds.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A small but focused portfolio showing the type of websites Ablaze
              Tech Services can build for creators, local businesses and small
              online shops.
            </p>

            <div className="mt-8 hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={goToPreviousProject}
                aria-label="Previous project"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-blue-300/40 hover:bg-blue-500/10"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                type="button"
                onClick={goToNextProject}
                aria-label="Next project"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-blue-300/40 hover:bg-blue-500/10"
              >
                <ArrowRight size={20} />
              </button>

              <div className="ml-2 flex items-center gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => selectProject(index)}
                    aria-label={`Show ${project.title}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeProjectIndex
                        ? "w-8 bg-blue-400"
                        : "w-2.5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-blue-950/40 backdrop-blur">
            <div className="min-h-[720px] rounded-[1.5rem] border border-white/10 bg-[#071225] p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                    {activeProject.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                    {activeProject.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                    {activeProject.shortDescription}
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-300/20 bg-blue-500/10 px-4 py-3 text-sm font-bold text-blue-200">
                  {String(activeProjectIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </div>
              </div>

              <div className="mt-8 h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#020817] shadow-2xl shadow-blue-950/40">
                {activeProject.image ? (
                  <Image
                    src={activeProject.image}
                    alt={activeProject.imageAlt || activeProject.title}
                    width={1200}
                    height={800}
                    className="h-full w-full object-contain md:object-cover"
                  />
                ) : (
                  <div className="relative h-full overflow-hidden bg-gradient-to-br from-blue-500/20 via-slate-900 to-[#030712] p-6">
                    <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />

                    <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#020817]/80 p-6">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                          {activeProject.category}
                        </p>

                        <h4 className="mt-4 max-w-lg text-3xl font-extrabold tracking-tight text-white">
                          {activeProject.title}
                        </h4>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                          Preview image coming soon. This demo will be built as
                          a showcase project for future clients.
                        </p>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {activeProject.tags.slice(0, 3).map((tag) => (
                          <div
                            key={tag}
                            className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"
                          >
                            <p className="text-sm font-bold leading-5 text-blue-300">
                              {tag}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-slate-400">
                              Planned feature
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {showDetails && (
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm leading-7 text-slate-300">
                    {activeProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {activeProject.href === "#" ? (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-400"
                  >
                    Coming soon
                  </button>
                ) : (
                  <a
                    href={activeProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                  >
                    Visit site
                    <ExternalLink size={16} />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setShowDetails((current) => !current)}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-blue-300/40 hover:bg-blue-500/10"
                >
                  {showDetails ? "Close info" : "More info"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
