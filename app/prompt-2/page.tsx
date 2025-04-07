import PromptFooter from "../components/promptFooter";

export default function PromptTwo() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <section className="border border-neutral-800 bg-neutral-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-2">Prompt 2</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            A customer has reached out: “Fluid compute?! What is this?! Is this another paradigm like JAMStack or serverless? I’d love a quick intro to the paradigm and how it’s evolved from serverless. Since the CTO is skeptical of the value that Vercel brings, I’d like to be able to bring back news of how this brings value to our usage of the platform. Any news on that front would be appreciated!”
            <br /><br />
            Your Enterprise customer is Trevor (they/them), a full-stack senior developer at a music streaming service using Next.js App Router. They have a milestone on their roadmap to add generative AI to their service so that users can create playlists suited to their tastes.
          </p>
        </section>

        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-4">Response</h2>
          <div className="text-sm leading-relaxed text-neutral-200 space-y-4">
            <p>Hi Trevor,</p>

            <p>
              Totally fair question—“Fluid Compute” does sound like another industry buzzword at first glance. But once you dig in, it’s actually one of the more meaningful shifts we’ve seen in modern compute.
            </p>

            <p>
              At a high level, Fluid is Vercel’s evolution of serverless. It’s regionless, auto-scaling compute that runs wherever your users are, without the typical tradeoffs—no cold start roulette, no manual region config, no infrastructure tuning. In short, it behaves the way serverless always should have.
            </p>

            <p className="font-semibold">How We Got Here</p>
            <ul className="list-disc list-inside space-y-1">
              <li>JAMstack gave us speed, but limited dynamic functionality</li>
              <li>Serverless added flexibility—but brought latency, regional complexity, and cold starts</li>
              <li>Fluid keeps the flexibility, but drops the friction—no predefining regions, no traffic routing, no warm-up penalties</li>
            </ul>

            <p className="font-semibold">Why This Matters for Your AI Milestone</p>
            <p>
              Features like personalized playlist generation depend on low-latency, high-responsiveness compute. Fluid Compute is a natural fit for this kind of work:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Runs AI endpoints at the edge or nearest region—automatically</li>
              <li>Scales instantly for traffic spikes, no config required</li>
              <li>Only bills for actual compute time—not idle “thinking” time—so you’re not paying for unused cycles</li>
              <li>Allows your team to stay focused on delivering product features—instead of spending time maintaining infrastructure.</li>
            </ul>

            <p className="font-semibold">What Your CTO Will Appreciate</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Fewer infrastructure decisions = faster iteration and less operational drag</li>
              <li>Predictable global performance = better end-user experience</li>
              <li>Regionless deploys = simplified architecture, fewer moving parts</li>
              <li>Smarter scaling and lower idle usage = potential cost savings</li>
            </ul>

            <p>Want to dig deeper?</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://vercel.com/blog/introducing-fluid-compute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Introducing Fluid Compute
                </a>{" "}
                – Quick primer on how it works
              </li>
              <li>
                <a
                  href="https://youtu.be/G-ngjNfMnvE?si=-oM1uzB4JncYbo_u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  How Fluid Compute Works (Video)
                </a>{" "}
                – Visual walkthrough in under 5 minutes
              </li>
            </ul>

            <p>
              If it’d be helpful to talk through how other teams are applying this to AI workflows—or how it might fit your own roadmap—feel free to{" "}
              <a
                href="https://calendly.com/djmartin2019/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                book time with me here.
              </a>
            </p>

            <p>
              Best,
              <br />
              David Martin
              <br />
              Customer Success Manager | Vercel
            </p>
          </div>
        </section>

        <PromptFooter
          prevHref="/prompt-1"
          prevLabel="← Prompt 1"
          nextHref="/prompt-3"
          nextLabel="Prompt 3 →"
        />
      </div>
    </main>
  );
}

