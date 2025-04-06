import PromptFooter from "../components/promptFooter"

export default function PromptTwo() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <section className="border border-neutral-800 bg-neutral-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-2">Prompt 2</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            A customer has reached out: “Fluid compute?! What is this?! Is this another paradigm like JAMStack or serverless? I’d love a quick intro to the paradigm and how it’s evolved from serverless. Since the CTO is skeptical of the value that Vercel brings, I’d like to be able to bring back news of how this brings value to our usage of the platform. Any news on that front would be appreciated!” Please write a response to the customer.
            <br /><br />
            Your Enterprise customer is Trevor (they/them), a full-stack senior developer at a music streaming service using Next.js App Router. They have a milestone on their roadmap to add generative AI to their service so that users can create playlists suited to their tastes.
          </p>
        </section>

        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-4">Response</h2>
            <div className="text-sm leading-relaxed text-neutral-200 space-y-4">
              <p>Hi Trevor,</p>

              <p>
                Totally fair question—“Fluid Compute” sounds like another trend until you actually look at what’s under the hood.
              </p>

              <p>
                At a high level, Fluid Compute is Vercel’s next evolution of serverless: it’s regionless, auto-scaling compute that runs wherever your users are—without the usual cold starts or infrastructure juggling. Basically, it behaves the way everyone wished serverless did from the beginning.
              </p>

              <p className="font-semibold">How We Got Here</p>
              <ul className="list-disc list-inside space-y-1">
                <li>JAMstack was fast but struggled with dynamic content</li>
                <li>Serverless added flexibility but brought latency, regional complexity, and cold start headaches</li>
                <li>Fluid Compute keeps the flexibility, but removes the friction—no regions to predefine, no manual routing, no warm-up delays</li>
              </ul>

              <p className="font-semibold">Why This Matters for Your AI Use Case</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Runs AI endpoints at the edge or nearest region—automatically</li>
                <li>Scales instantly for spikes with zero configuration</li>
                <li>Lets your team focus on building features, not tuning infra</li>
              </ul>

              <p className="font-semibold">What Your CTO Will Appreciate</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Fewer infra decisions = faster iteration cycles</li>
                <li>Predictable global performance = better UX</li>
                <li>Regionless deploys = simpler operations, fewer moving parts</li>
              </ul>

              <p>Want to dive deeper?</p>
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
                  – A quick overview of what’s changed and why it matters.
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
                  – A short visual walkthrough of the model in action.
                </li>
              </ul>

              <p>
                If it’d be helpful to walk through how teams are using this for real-world AI features—or how it might fit into your roadmap—feel free to{" "}
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
      </div>
      <PromptFooter
          prevHref="/prompt-1"
          prevLabel="← Prompt 1"
          nextHref="/prompt-3"
          nextLabel="Prompt 3 →"
        />
    </main>

  );
}

