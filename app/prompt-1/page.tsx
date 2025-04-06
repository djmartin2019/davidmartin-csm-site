import PromptFooter from "../components/promptFooter";

export default function PromptOne() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <section className="border border-neutral-800 bg-neutral-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-2">Prompt 1</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            An Enterprise customer has come to you to ask about the difference between React and Next.js and what the benefits are of using Next.js for her team. Please write a response to the customer.
            <br /><br />
            Your customer is Christy (she/her), a project manager for the marketing department of a wearable tech company – in charge of making sure the marketing pages meet their core web vitals, SEO best practices, and conversion rate goals.
          </p>
        </section>

        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-4">Response</h2>
          <div className="text-sm leading-relaxed text-neutral-200 space-y-4">
            <p>Hi Christy,</p>

            <p>
              Thanks for reaching out! I understand you're focused on improving SEO, Core Web Vitals, and conversion rates for your marketing pages—Next.js is built to help teams do exactly that.
            </p>

            <p>
              React is a powerful UI library for building components, but it doesn’t offer built-in solutions for performance or SEO. That’s where Next.js comes in. Built on top of React, it gives your developers the tools to create fast, search-optimized, high-converting websites without reinventing the wheel.
            </p>

            <p className="font-semibold">SEO Best Practices</p>
            <p>
              Next.js supports Server-Side Rendering (SSR), which means your pages are fully rendered before they reach the browser. This makes it easier for search engines to "crawl" your site—that is, scan and index your content—so it shows up higher in search results. In contrast, React-only apps load content in the browser, which can make it harder for search engines to access everything on the page.
            </p>

            <p className="font-semibold">Core Web Vitals</p>
            <p>
              To improve search rankings and deliver a better user experience, Google focuses on three key performance metrics that directly impact how users perceive your site:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Largest Contentful Paint:</strong> Next.js helps your most important content load faster—things like hero images or big headlines—making the site feel fast and polished.
              </li>
              <li>
                <strong>Cumulative Layout Shift:</strong> Next.js includes built-in image and font optimization tools that help maintain layout stability as your page loads. That means no jumping buttons, no disappearing text—just a smoother, more predictable experience for your users.
              </li>
              <li>
                <strong>Interaction to Next Paint:</strong> This metric looks at how quickly your site responds when someone clicks or taps. Vercel and Next.js optimize performance behind the scenes—so whether users are on a fast connection or a crowded mobile network, interactions still feel quick and responsive.
              </li>
            </ul>

            <p className="font-semibold">Conversion Rates</p>
            <p>
              Pages built with Next.js—and deployed on Vercel—load faster and run more smoothly. That translates directly into better user experience, reduced bounce rates, and more completed conversions.
            </p>

            <p>
              To explore this further, I’ve included two resources tailored to your team’s goals:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  href="https://vercel.com/blog/nextjs-seo-playbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  The Next.js SEO Playbook
                </a>{" "}
                – a clear and user-friendly guide to improving rankings and visibility with Next.js.
              </li>
              <li>
                <a
                  href="https://vercel.com/guides/optimizing-core-web-vitals-in-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Optimizing Core Web Vitals in 2024
                </a>{" "}
                – a technical deep dive your engineering team can use to take direct action.
              </li>
            </ul>

            <p>
              If you’d like to go deeper or walk through how this fits with your current setup, feel free to{" "}
              <a
                href="https://calendly.com/djmartin2019/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                grab time with me here.
              </a>
            </p>

            <p>
              Best,<br />
              David Martin<br />
              Customer Success Manager | Vercel
            </p>
          </div>
        </section>
      </div>
      <PromptFooter
        prevHref="/"
        prevLabel="← Home"
        nextHref="/prompt-2"
        nextLabel="Prompt 2 →"
      />
    </main>
  );
}

