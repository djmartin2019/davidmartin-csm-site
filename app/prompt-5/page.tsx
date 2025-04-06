import PromptFooter from "../components/promptFooter"

export default function PromptFive() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Prompt Section */}
        <section className="border border-neutral-800 bg-neutral-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-2">Prompt 5</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Prompt 5: How could we improve or alter this familiarization exercise?
          </p>
        </section>

        {/* Response Section */}
        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-300 mb-4">Response</h2>
          <div className="text-sm leading-relaxed text-neutral-200 space-y-4">
            <p>
              Over the course of this project, I got a much clearer picture of what being a CSM at Vercel actually looks like—and I genuinely enjoyed working through the customer scenarios.
            </p>

            <p>
              Writing the email responses felt like the most natural part of the process for me. It gave me the opportunity to dive into Vercel’s products, interpret technical concerns through a customer-first lens, and communicate with clarity and empathy.
            </p>

            <p>
              That said, producing the video ended up being the most time-consuming part—not because of the content, but due to the technical lift around recording, editing, and screen sharing in a way that felt polished. That effort alone pushed me closer to the higher end of the time guidance. Still, it was a valuable experience that made me better appreciate the importance of communicating performance concepts in a way that’s approachable, even when the topic is deeply technical.
            </p>

            <p>
              Overall, I really appreciated the range of this assignment—it gave me a better understanding of the CSM role at Vercel, and a renewed interest in the blend of communication, problem solving, and customer strategy that the job entails.
            </p>
          </div>
        </section>
      </div>
      <PromptFooter
          prevHref="/prompt-4"
          prevLabel="← Prompt 4"
          nextHref="/"
          nextLabel="Home →"
        />
    </main>
  );
}

