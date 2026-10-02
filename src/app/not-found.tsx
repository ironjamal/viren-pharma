import Link from "next/link";
import { ButtonLink } from "@/components/Buttons";

export default function NotFound() {
  return <section className="not-found container"><p className="eyebrow"><span className="eyebrow__line" />404 / NOT FOUND</p><h1>This page isn’t in the portfolio.</h1><p>The link may be out of date or the fictional entry may have been removed.</p><div className="not-found__actions"><ButtonLink href="/products">Explore products</ButtonLink><Link className="text-link" href="/">Return home</Link></div></section>;
}
