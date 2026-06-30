import { Code2, MessageCircle, Rocket, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Built properly",
    text: "Your site is built with modern tools, clean structure and performance in mind — not thrown together from a messy template.",
    icon: Code2,
  },
  {
    title: "Clear communication",
    text: "You will know what is happening, what we need from you, and what the next step is throughout the project.",
    icon: MessageCircle,
  },
  {
    title: "Focused on launch",
    text: "The aim is not to overcomplicate the project. It is to get you a professional site that works and can go live.",
    icon: Rocket,
  },
  {
    title: "Practical support",
    text: "We can help with structure, wording, basic SEO, deployment and the practical details that make a website usable.",
    icon: ShieldCheck,
  },
];

export function WhyWorkWithMeSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            label="Why work with me?"
            title="A personal web developer without agency complexity."
            text="Ablaze Tech Services is designed for small businesses and creators who want a professional website without feeling lost in technical jargon or agency processes."
          />

          <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Simple promise
            </p>
            <p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
              We will help you turn your idea, service or business into a clear,
              modern website that people can understand, trust and act on.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06162d] text-blue-300 shadow-lg shadow-blue-950/20 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={24} strokeWidth={2.4} />
                </div>

                <h3 className="text-xl font-extrabold text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
