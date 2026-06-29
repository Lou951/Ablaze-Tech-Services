import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Custom websites",
  "Landing pages",
  "Website refreshes",
  "Website care",
];

const socialLinks = [
  // {
  //   label: "LinkedIn",
  //   href: "#",
  //   icon: FaLinkedinIn,
  // },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1FyuJRZQUy/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ablazetechservices?igsh=ZWtkMm1ydjVwcDVs",
    icon: FaInstagram,
  },
  // {
  //   label: "X",
  //   href: "#",
  //   icon: FaXTwitter,
  // },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b18] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(59,130,246,0.12),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/#home" className="inline-flex items-center">
              <Image
                src="/images/ablaze-mark-transparent.png"
                alt=""
                width={96}
                height={96}
                className="h-16 w-16 object-contain"
              />

              <div className="leading-none">
                <p className="text-xl font-black tracking-tight text-white">
                  Ablaze
                </p>
                <p className="mt-1 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-blue-100">
                  Tech Services
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Premium websites for small businesses, creators and local brands.
              Fast, modern and built to generate enquiries.
            </p>

            <a
              href="mailto:contact@ablazetechservices.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white"
            >
              <Mail size={17} />
              contact@ablazetechservices.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Services
            </h3>

            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm font-semibold text-slate-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Follow future projects, demos and website updates.
            </p>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-blue-300/40 hover:bg-blue-500/10 hover:text-blue-300"
                    target="_blank"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Ablaze Tech Services. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/privacy" className="transition hover:text-blue-300">
              Privacy Policy
            </a>
            <a href="#contact" className="transition hover:text-blue-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
