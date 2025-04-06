import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-12 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col items-center text-center gap-6">
        <h1 className="text-3xl font-bold">David Martin&apos;s CSM Project</h1>
        <p className="text-neutral-400 mb-6">
          A familiarization project for the Vercel Customer Success Team
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Prompt 1 – SEO & Next.js", href: "/prompt-1" },
            { label: "Prompt 2 – Fluid Compute", href: "/prompt-2" },
            { label: "Prompt 3 – Re-engagement Email", href: "/prompt-3" },
            { label: "Prompt 4 – Core Web Vitals Video", href: "/prompt-4" },
            { label: "Prompt 5 – Feedback & Reflection", href: "/prompt-5" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium px-6 py-3 rounded-md w-72 text-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-sm text-neutral-500">
        Built with Next.js + Vercel
      </footer>
    </div>
  );
}

