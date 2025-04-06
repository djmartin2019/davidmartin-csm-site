import PromptFooter from "../components/promptFooter";

export default function PromptFour() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <section className="border border-neutral-800 bg-neutral-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-2">Prompt 4</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            For this prompt, I created a short video presentation covering:
            <br /><br />
            • What Core Web Vitals are and why they matter<br />
            • How Under Armour's site is currently performing across LCP, CLS, and INP<br />
            • What Vercel can do to help improve those metrics with tools like ISR, Middleware, and built-in analytics<br /><br />
            I also walk through a live Lighthouse report and use real mobile screenshots from UnderArmour.com to highlight layout shifts and animation delays affecting user experience.
          </p>
        </section>

        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-4">Video</h2>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/9T8sQRwPN44"
              title="Core Web Vitals & Vercel – David Martin"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      <PromptFooter
        prevHref="/prompt-3"
        prevLabel="← Prompt 3"
        nextHref="/prompt-5"
        nextLabel="Prompt 5 →"
      />
    </main>
  );
}

