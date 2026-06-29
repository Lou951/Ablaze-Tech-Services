import {
  LayoutTemplate,
  MonitorSmartphone,
  PenTool,
  Wrench,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Custom Websites",
    text: "Bespoke websites designed to represent your business clearly and convert visitors into enquiries.",
    icon: MonitorSmartphone,
    items: [
      "1–5 page business websites",
      "Mobile-first responsive design",
      "Clear calls to action",
      "Built around your goals",
    ],
  },
  {
    title: "Landing Pages",
    text: "Focused pages for launches, campaigns, services, books, events or offers that need a clear next step.",
    icon: LayoutTemplate,
    items: [
      "Single-page campaign structure",
      "Strong headline and offer",
      "Enquiry or booking route",
      "Fast turnaround",
    ],
  },
  {
    title: "Website Refresh",
    text: "A sharper, more modern version of an existing site that feels outdated, unclear or hard to use.",
    icon: PenTool,
    items: [
      "Improved layout and structure",
      "Cleaner visual design",
      "Better copy flow",
      "More professional first impression",
    ],
  },
  {
    title: "Website Care",
    text: "Practical support after launch so your site stays useful, current and easy to improve.",
    icon: Wrench,
    items: [
      "Content updates",
      "Small design improvements",
      "Basic SEO checks",
      "Ongoing advice",
    ],
  },
];

export function ServicesSection() {
  return (
    <SectionContainer id="services" className="bg-white">
      <SectionHeading
        label="What I do"
        title="Web solutions that move your business forward."
        text="From first websites to focused landing pages, the aim is simple: help your business look professional, load quickly and make it easy for customers to act."
        centered
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-500">
                <Icon size={24} strokeWidth={2.4} />
              </div>

              <h3 className="relative text-lg font-extrabold text-slate-950">
                {service.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-slate-600">
                {service.text}
              </p>

              <ul className="relative mt-6 space-y-3 text-sm text-slate-600">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="relative mt-6 inline-flex text-sm font-bold text-blue-600 transition hover:text-blue-800"
              >
                Learn more →
              </a>
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
