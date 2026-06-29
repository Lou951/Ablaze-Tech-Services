type SectionHeadingProps = {
  label: string;
  title: string;
  text: string;
  centered?: boolean;
  theme?: "light" | "dark";
};

export function SectionHeading({
  label,
  title,
  text,
  centered = false,
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={
          isDark
            ? "text-sm font-bold uppercase tracking-[0.22em] text-blue-300"
            : "text-sm font-bold uppercase tracking-[0.22em] text-blue-600"
        }
      >
        {label}
      </p>
      <h2
        className={
          isDark
            ? "mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl"
            : "mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl"
        }
      >
        {title}
      </h2>
      <p
        className={
          isDark
            ? "mt-5 text-lg leading-8 text-slate-300"
            : "mt-5 text-lg leading-8 text-slate-600"
        }
      >
        {text}
      </p>
    </div>
  );
}
