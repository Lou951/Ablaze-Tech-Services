import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Plan",
    text: "We agree the goal, pages, content, style direction and the action you want visitors to take.",
  },
  {
    number: "02",
    title: "Build",
    text: "I design and build the site with clean structure, responsive layouts and clear content flow.",
  },
  {
    number: "03",
    title: "Review",
    text: "You test the site, check the wording and request sensible refinements before launch.",
  },
  {
    number: "04",
    title: "Launch",
    text: "The site goes live with deployment support, basic SEO foundations and guidance for next steps.",
  },
];

export function ProcessSection() {
  return (
    <SectionContainer id="process" className="bg-slate-50">
      <SectionHeading
        label="Process"
        title="A clear route from idea to launch."
        text="A good website project should feel organised. The process is designed to keep things simple, practical and focused on getting the site live."
        centered
      />

      <div className="relative mt-14 grid gap-6 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent md:block" />

        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20">
              {step.number}
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-slate-950">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
