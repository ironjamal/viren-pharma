import Link from "next/link";

export function ConceptNotice() {
  return (
    <div className="concept-notice" role="note">
      <span className="concept-notice__dot" aria-hidden="true" />
      <p>Fictional project <span aria-hidden="true">·</span> Portfolio concepts only <span aria-hidden="true">·</span> Not medical guidance</p>
      <Link href="/about#concept">About this demonstration<span className="sr-only"> (opens the concept information section)</span></Link>
    </div>
  );
}
