import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">{children}</div>
    </section>
  );
}
