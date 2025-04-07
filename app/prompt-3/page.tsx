import PromptFooter from "../components/promptFooter"

export default function PromptThree() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <section className="border border-neutral-800 bg-neutral-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-2">Prompt 3</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Through use of a monitoring dashboard, you notice that an Enterprise customer has reduced the number of builds and their usage has gone down by about 50% quarter over quarter. Please write an email to the champion and executive sponsor of the account to re-engage and start to perform some discovery.
            <br /><br />
            Your customer is an SMB with yearly revenue about $5.5 million, 20 employees total with one developer. They have a $22K ARR Vercel subscription. The executive sponsor is the VP of marketing and Vercel hosts their marketing pages. They have a reverse proxy in front of Vercel (Cloudflare) and history shows some errors in their builds. The manager’s name is Alex (she/her), Engineering Manager. The champion, Tanner – the lead on the project – it is found out, has left the company.
          </p>
        </section>

        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-4">Response</h2>
          <div className="text-sm leading-relaxed text-neutral-200 space-y-4">
            <p>Hi Alex,</p>

            <p>
              I hope you're doing well. I wanted to check in after noticing a significant dip in activity across your Vercel projects—specifically a ~50% drop in builds quarter over quarter.
            </p>

            <p>
              I also understand that Tanner has recently transitioned out of the company. I know how impactful that can be, and I want to make sure you feel supported as things shift internally.
            </p>

            <p>
              In reviewing recent usage patterns, I did notice some intermittent build errors, particularly related to your Cloudflare reverse proxy setup. It might be a good opportunity for us to reconnect and take a look at how things are working today, and how we can help optimize your current configuration going forward.
            </p>

            <p>
              Whether your team is reassessing priorities, pausing projects, or just navigating resourcing challenges, I’d love to learn more about what’s changed—and where Vercel might still be able to support your goals (especially around marketing performance, Core Web Vitals, and SEO).
            </p>

            <p>
              If it’d be helpful, you can{" "}
              <a
                href="https://calendly.com/djmartin2019/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                book a quick 30-minute chat with me here
              </a>
              .
            </p>

            <p>
              No pressure at all—happy to work around your schedule or send over async recommendations too.
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
          prevHref="/prompt-2"
          prevLabel="← Prompt 2"
          nextHref="/prompt-4"
          nextLabel="Prompt 4 →"
        />
      </div>
    </main>
  );
}

