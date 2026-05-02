import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "User guide for Mac Frag — a native macOS playground for writing Metal Shading Language fragment shaders.",
  openGraph: {
    title: "Docs — Mac Frag",
    description:
      "User guide for Mac Frag — a native macOS playground for writing Metal fragment shaders.",
    url: "https://macfrag.app/docs",
  },
};

export default function DocsPage() {
  const filePath = path.join(process.cwd(), "USER_GUIDE.md");
  const raw = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16 pt-24">
        <div className="mb-16">
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-2">
            Documentation
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            User Guide
          </h1>
          <p className="text-zinc-400 leading-relaxed">
            Everything you need to know to get up and running with Mac Frag.
          </p>
        </div>

        <article className="space-y-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: () => null, // suppress the file-level # title; we render our own above
              h2: ({ children }) => (
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold text-white mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-zinc-400 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-outside pl-5 space-y-2 text-zinc-400 leading-relaxed marker:text-zinc-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside pl-5 space-y-2 text-zinc-400 leading-relaxed marker:text-zinc-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li>{children}</li>,
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-white underline underline-offset-2 hover:text-zinc-300 transition-colors"
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-white/[0.1] pl-4 text-zinc-500 italic">
                  {children}
                </blockquote>
              ),
              code: ({ className, children }) => {
                const isBlock = className?.includes("language-");
                if (isBlock) {
                  return (
                    <code className={`${className} text-sm`}>{children}</code>
                  );
                }
                return (
                  <code className="text-xs font-mono text-zinc-300 bg-white/[0.06] px-1.5 py-0.5 rounded">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 overflow-x-auto text-sm font-mono text-zinc-300 my-4">
                  {children}
                </pre>
              ),
              hr: () => <hr className="border-white/[0.06] my-12" />,
            }}
          >
            {raw}
          </ReactMarkdown>
        </article>
      </main>

      <Footer />
    </div>
  );
}
