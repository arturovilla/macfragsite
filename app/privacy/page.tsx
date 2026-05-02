import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Mac Frag — a local-only macOS app with no analytics or data collection.",
  openGraph: {
    title: "Privacy Policy — Mac Frag",
    description:
      "Privacy policy for Mac Frag — local-only, no analytics, no data collection.",
    url: "https://macfrag.app/privacy",
  },
};

function SectionHeading({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-2">
        {tag}
      </p>
      <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
      {children && (
        <p className="text-zinc-400 mt-3 leading-relaxed">{children}</p>
      )}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16 pt-24">
        <div className="mb-16">
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-2">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 leading-relaxed">
            Effective {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <SectionHeading tag="Overview" title="The Short Version">
              Mac Frag is a local-only application. It does not collect, store,
              or transmit any personal data to remote servers. There are no
              analytics, no telemetry, and no user accounts.
            </SectionHeading>
          </section>

          <section>
            <SectionHeading tag="Data" title="What We Don't Collect" />
            <ul className="space-y-2.5 text-sm text-zinc-400 leading-relaxed list-disc list-outside pl-5 marker:text-zinc-700">
              <li>No personal information (name, email, account, identifier).</li>
              <li>No usage analytics or crash telemetry.</li>
              <li>No shader source code, file contents, or editor activity.</li>
              <li>No device, hardware, or operating system fingerprints.</li>
            </ul>
          </section>

          <section>
            <SectionHeading tag="Local Files" title="Files You Open or Save" />
            <p className="text-sm text-zinc-400 leading-relaxed">
              Mac Frag reads and writes shader source files on your local file
              system only when you explicitly open or save them. These files
              never leave your device.
            </p>
          </section>

          <section>
            <SectionHeading tag="Website" title="This Marketing Site" />
            <p className="text-sm text-zinc-400 leading-relaxed">
              The Mac Frag marketing site (macfrag.app) is hosted on Vercel.
              Vercel may collect standard server logs (IP address, user agent,
              referrer) for security and operations purposes. No tracking
              cookies are set by this site.
            </p>
          </section>

          <section>
            <SectionHeading tag="Contact" title="Questions" />
            <p className="text-sm text-zinc-400 leading-relaxed">
              For privacy questions, reach out via the channels listed on the
              Mac Frag homepage.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
