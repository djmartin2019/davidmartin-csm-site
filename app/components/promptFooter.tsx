import Link from "next/link";

export default function PromptFooter({
  prevHref = "/",
  prevLabel = "← Home",
  nextHref,
  nextLabel,
}: {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}) {
  return (
    <footer className="w-full pt-12 flex justify-between text-sm text-neutral-400">
      <Link href={prevHref}>
        <span className="hover:text-white transition">{prevLabel}</span>
      </Link>
      {nextHref && nextLabel ? (
        <Link href={nextHref}>
          <span className="hover:text-white transition">{nextLabel}</span>
        </Link>
      ) : (
        <div /> // empty spacer if there's no next
      )}
    </footer>
  );
}

