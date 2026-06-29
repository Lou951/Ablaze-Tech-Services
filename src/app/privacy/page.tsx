import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Ablaze Tech Services, explaining how contact form enquiries and personal information are handled.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#050b18] px-6 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_32%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            How Ablaze Tech Services handles your information.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            This page explains what personal information is collected through
            this website and how it is used.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-10 text-slate-700">
            <PolicySection title="Who we are">
              <p>
                Ablaze Tech Services provides freelance website design and
                development services for small businesses, creators and local
                brands.
              </p>
              <p>
                You can contact Ablaze Tech Services by email at{" "}
                <a
                  href="mailto:contact@ablazetechservices.com"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  contact@ablazetechservices.com
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection title="What information we collect">
              <p>
                If you use the contact form on this website, we may collect the
                information you choose to provide, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>your name;</li>
                <li>your email address;</li>
                <li>your business or project name;</li>
                <li>the type of website project you are interested in;</li>
                <li>your approximate budget range;</li>
                <li>your message and any project details you provide.</li>
              </ul>
            </PolicySection>

            <PolicySection title="How we use your information">
              <p>We use this information to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>respond to your enquiry;</li>
                <li>understand your website project or business needs;</li>
                <li>provide relevant information about possible services;</li>
                <li>keep a record of communication about your enquiry.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Lawful basis for using your information">
              <p>
                We use the information you send through the contact form because
                it is necessary to respond to your enquiry and discuss services
                you may be interested in. This is generally handled on the basis
                of legitimate interests or steps taken before entering into a
                contract.
              </p>
            </PolicySection>

            <PolicySection title="How your information is stored and shared">
              <p>
                Contact form submissions are sent by email using Resend and are
                received at the Ablaze Tech Services email address. Email
                services are provided through Hostinger and messages may be
                forwarded to a Gmail inbox used to manage enquiries.
              </p>
              <p>
                We do not sell your personal information. We only share
                information with service providers where needed to operate the
                website, email service or enquiry process.
              </p>
            </PolicySection>

            <PolicySection title="How long we keep your information">
              <p>
                Enquiry emails may be kept for as long as needed to respond to
                your enquiry, manage any resulting project, and keep reasonable
                business records. If your enquiry does not lead to a project, we
                will not keep your information for longer than necessary.
              </p>
            </PolicySection>

            <PolicySection title="Marketing">
              <p>
                Submitting the contact form does not add you to a marketing
                list. If marketing emails are added in the future, you will only
                be added where there is a clear lawful basis to do so and you
                will be given a way to unsubscribe.
              </p>
            </PolicySection>

            <PolicySection title="Cookies and analytics">
              <p>
                This website does not currently use non-essential analytics or
                advertising cookies. If analytics or tracking tools are added in
                the future, this policy will be updated and any required cookie
                information or consent controls will be added.
              </p>
            </PolicySection>

            <PolicySection title="Your data protection rights">
              <p>
                Depending on the circumstances, you may have rights to access,
                correct, delete, restrict or object to the use of your personal
                information. You can contact us at{" "}
                <a
                  href="mailto:contact@ablazetechservices.com"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  contact@ablazetechservices.com
                </a>{" "}
                if you want to make a request about your information.
              </p>
            </PolicySection>

            <PolicySection title="Complaints">
              <p>
                If you have concerns about how your personal information is
                being used, please contact us first so we can try to resolve the
                issue. You also have the right to complain to the Information
                Commissioner’s Office, the UK data protection regulator.
              </p>
            </PolicySection>

            <PolicySection title="Changes to this policy">
              <p>
                This privacy policy may be updated from time to time. The latest
                version will be shown on this page.
              </p>
            </PolicySection>

            <p className="border-t border-slate-200 pt-8 text-sm text-slate-500">
              <strong>Last updated:</strong> 28 June 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}
