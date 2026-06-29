"use client";

import { useState } from "react";
import { Mail, MessageSquare, Timer, UserRound } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("submitting");
    setStatusMessage("");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      business: String(formData.get("business") || ""),
      projectType: String(formData.get("projectType") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(
          data.error || "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        data.message || "Thanks — your enquiry has been sent successfully.",
      );

      form.reset();
    } catch (error) {
      console.error("Contact form frontend error:", error);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <SectionContainer id="contact" className="bg-white">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#06162d] px-6 py-14 text-white shadow-2xl shadow-blue-950/20 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.25),transparent_30%),radial-gradient(circle_at_85%_60%,rgba(59,130,246,0.18),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
              Ready to get started?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Let’s build something exceptional.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell me what you do, what kind of website you need and what you
              want visitors to do next.
            </p>

            <div className="mt-10 space-y-5">
              <ContactDetail
                icon={Mail}
                label="Email"
                value="contact@ablazetechservices.com"
              />
              <ContactDetail
                icon={Timer}
                label="Response time"
                value="Within 24–48 hours"
              />
              <ContactDetail
                icon={MessageSquare}
                label="Best for"
                value="Small business websites, landing pages and website refreshes"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl shadow-blue-950/30"
          >
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Project enquiry
              </p>
              <h3 className="mt-2 text-2xl font-extrabold">
                Tell me about your website
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share the basics and I’ll come back to you with the best next
                step.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                label="Your name"
                name="name"
                placeholder="Your name"
                required
              />
              <FormField
                label="Email address"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <FormField
                label="Business / project name"
                name="business"
                placeholder="Business name"
              />

              <div>
                <label
                  htmlFor="projectType"
                  className="text-sm font-bold text-slate-800"
                >
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option>New website</option>
                  <option>Website refresh</option>
                  <option>Landing page</option>
                  <option>Simple payments / booking links</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="budget"
                className="text-sm font-bold text-slate-800"
              >
                Approximate budget
              </label>
              <select
                id="budget"
                name="budget"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option>Not sure yet</option>
                <option>Under £500</option>
                <option>£500–£1,000</option>
                <option>£1,000–£2,000</option>
                <option>£2,000+</option>
              </select>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="text-sm font-bold text-slate-800"
              >
                What do you need?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me what you do, what kind of website you need, and any examples you like."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {statusMessage ? (
              <div
                className={`mt-5 rounded-xl px-4 py-3 text-sm font-semibold ${
                  status === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {statusMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <UserRound size={18} />
              {status === "submitting" ? "Sending..." : "Send enquiry"}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              You can also email directly at{" "}
              <a
                href="mailto:contact@ablazetechservices.com"
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                contact@ablazetechservices.com
              </a>
              . By sending an enquiry, you agree that your details will be used
              to respond to your message. Read the{" "}
              <a
                href="/privacy"
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-slate-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-blue-300">
        <Icon size={21} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
          {label}
        </p>
        <p className="mt-1 font-semibold leading-6 text-white">{value}</p>
      </div>
    </div>
  );
}
