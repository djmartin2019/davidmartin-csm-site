import PromptFooter from "../components/promptFooter"

export default function PromptFour() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Prompt Section */}
        <section className="border border-neutral-800 bg-neutral-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-2">Prompt 4</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Create and embed a 3–7 minute video on why Core Web Vitals are important to an Enterprise customer at Vercel.
            <br /><br />
            Use this link to interpret the Core Web Vitals of <a href="https://underarmour.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">https://underarmour.com</a> and give a high-level overview of specific items to concentrate on to improve their overall Lighthouse score.
            <br /><br />
            You're encouraged to share your screen during the video, demonstrate key points, and include a high-level explanation of Vercel Speed Insights.
          </p>
          <p className="text-sm text-neutral-400 mt-6">
            <strong>Summary:</strong> In this video, I walk through what Core Web Vitals are, analyze Under Armour’s current performance using PageSpeed Insights, and break down what their scores reveal about real-world user experience. I also highlight how Vercel’s platform—through features like Edge Functions, Incremental Static Regeneration, and Speed Insights—helps teams directly improve these metrics to drive SEO, engagement, and conversion outcomes.
          </p>
        </section>

        {/* Video Embed Placeholder */}
        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-4">Video Response</h2>
          <div className="aspect-video bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-500">
            {/* Replace this div with your actual video embed once it's ready */}
            <p>Video will be embedded here.</p>
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

