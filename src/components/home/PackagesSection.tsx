import { Check, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const packages = [
  {
    name: "Landing Page",
    price: "From £250",
    description:
      "A focused one-page site for a service, offer, event, campaign or simple online presence.",
    bestFor: "Best for quick launches",
    features: [
      "One-page responsive website",
      "Clear offer and call to action",
      "Contact/enquiry route",
      "Basic SEO setup",
    ],
  },
  {
    name: "Starter Website",
    price: "From £500",
    description:
      "A clean small business website with the essential pages needed to look professional online.",
    bestFor: "Best for first websites",
    featured: true,
    features: [
      "Up to 4 core pages",
      "Mobile-friendly design",
      "Contact form setup",
      "Basic SEO and launch support",
    ],
  },
  {
    name: "Business Website",
    price: "From £850",
    description:
      "A more complete website for businesses that need stronger content, structure and project depth.",
    bestFor: "Best for growing businesses",
    features: [
      "Up to 6 pages",
      "Stronger service structure",
      "Project/work showcase",
      "Search Console and deployment support",
    ],
  },
];

const processSteps = ["Plan", "Build", "Review", "Launch"];

export function PackagesSection() {
  return (
    <SectionContainer id="packages" className="bg-slate-50">
      <SectionHeading
        label="Packages"
        title="Simple starting points for your website project."
        text="Every project is different, but clear starting packages help you understand what is possible and where your website might fit."
        centered
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((item) => (
          <article
            key={item.name}
            className={`relative flex flex-col rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10 ${
              item.featured
                ? "border-blue-300 bg-white ring-4 ring-blue-100"
                : "border-slate-200 bg-white"
            }`}
          >
            {item.featured ? (
              <div className="absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-blue-600/20">
                <Sparkles size={14} />
                Popular start
              </div>
            ) : null}

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              {item.bestFor}
            </p>

            <h3 className="mt-4 text-2xl font-extrabold text-slate-950">
              {item.name}
            </h3>

            <p className="mt-3 text-3xl font-extrabold text-slate-950">
              {item.price}
            </p>

            <p className="mt-4 min-h-24 text-sm leading-7 text-slate-600">
              {item.description}
            </p>

            <ul className="mt-6 space-y-3">
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-8 inline-flex justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                item.featured
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
                  : "border border-slate-200 bg-white text-slate-950 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              Enquire about this
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="bg-[#06162d] p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              How it works
            </p>
            <p className="mt-3 text-lg font-semibold leading-8">
              A simple route from first idea to launched website.
            </p>
          </div>

          <div className="p-6">
            <div className="grid gap-4 sm:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white">
                      {index + 1}
                    </span>
                    <p className="font-extrabold text-slate-950">{step}</p>
                  </div>

                  {index < processSteps.length - 1 ? (
                    <div className="absolute left-4 top-12 hidden h-px w-full bg-blue-100 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              We agree the goal, build the site, review it together, then launch
              with basic SEO and deployment support. Add-ons such as payment
              links, booking links, extra pages or ongoing updates can be
              discussed depending on what you need.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
