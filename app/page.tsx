import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-3xl w-full text-center flex flex-col items-center">
          <Image
            src="/hero-logo.png"
            alt="Mac Frag"
            width={1024}
            height={1024}
            priority
            sizes="(max-width: 640px) 144px, 192px"
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-[22.37%] mb-8 shadow-2xl shadow-white/[0.04]"
          />
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-4">
            macOS · Metal · Live preview
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-6">
            Mac Frag
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            A native macOS playground for writing Metal Shading Language
            fragment shaders. Edit on the left, see it render at 60 FPS on the
            right.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors"
            >
              Read the docs
            </Link>
            <Link
              href="/changelog"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/[0.1] text-white rounded-full font-semibold text-sm hover:bg-white/[0.04] transition-colors"
            >
              Changelog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
