import PromptFooter from "../components/promptFooter"

export default function PromptOne() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <section className="border border-neutral-800 bg-neutral-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-2">Prompt 1</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            An Enterprise customer has come to you to ask about the difference between React and Next.js
            and what the benefits are of using Next.js for her team. Please write a response to the customer.
            <br /><br />
            Your customer is Christy (she/her), a project manager for the marketing department of a wearable tech company—
            in charge of making sure the marketing pages meet their Core Web Vitals, SEO best practices, and conversion rate goals.
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

              <p>Here’s how it supports your goals:</p>

              <p className="font-semibold">SEO Best Practices</p>
              <p>
                Next.js supports Server-Side Rendering (SSR), which means your pages are fully rendered before they reach the browser. This makes it easier for search engines to "crawl" your site—that is, scan and index your content—so it shows up higher in search results. In contrast, React-only apps load content in the browser, which can make it harder for search engines to access everything on the page.
              </p>

              <p className="font-semibold">Core Web Vitals</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Largest Contentful Paint:</strong> Next.js helps your most important content load faster—things like hero images or big headlines—making the site feel fast and polished.
                </li>
                <li>
                  <strong>Cumulative Layout Shift:</strong> Built-in tools keep your layout stable as the page loads, so content doesn’t jump around and frustrate users.
                </li>
                <li>
                  <strong>Interaction to Next Paint:</strong> Measures how responsive the site feels when users click or tap. With Vercel and Next.js, interactions feel smooth—even under load.
                </li>
              </ul>

              <p className="font-semibold">Conversion Rates</p>
              <p>
                Pages built with Next.js—and deployed on Vercel—load faster and run more smoothly. That translates directly into better user experience, reduced bounce rates, and more completed conversions.
              </p>

              <p className="font-semibold">Want to go deeper?</p>
              <p>
                •{" "}
                <a
                  href="https://vercel.com/blog/nextjs-seo-playbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  The Next.js SEO Playbook
                </a>{" "}
                walks through practical strategies for better rankings and visibility—with a clear, user-friendly approach your team can actually use.
              </p>

              <p>
                •{" "}
                <a
                  href="https://vercel.com/guides/optimizing-core-web-vitals-in-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Optimizing Core Web Vitals in 2024
                </a>{" "}
                is a technical deep dive that outlines specific strategies your engineering team can implement to improve performance.
              </p>

              <p>
                If you’d like to walk through how this fits with your current setup, feel free to{" "}
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
                Best regards,
                <br />
                David Martin
                <br />
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

