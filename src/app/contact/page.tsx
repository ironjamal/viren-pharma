import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ConceptNote, PageIntro } from "@/components/Content";
import { contactHref } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Contact", "Choose a general, partnership, healthcare professional, or careers inquiry path in the local VIREN Pharma site demo.", "/contact");

const inquiryPaths = [
  { title: "General inquiry", text: "A question about the fictional company concept.", type: "General inquiry", number: "01" },
  { title: "Business partnership", text: "A concept path for distributors and healthcare organizations.", type: "Business partnership", number: "02" },
  { title: "Healthcare professionals", text: "A product-information or professional resource question.", type: "Healthcare professional", number: "03" },
  { title: "Careers", text: "A question about illustrative roles or a future hiring flow.", type: "Careers", number: "04" },
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ type?: string; product?: string }> }) {
  const params = await searchParams;
  return (
    <>
      <PageIntro eyebrow="CONTACT / 09" title="Start a conversation." description="Choose a path that fits your question, then complete the local demo form. There are no live company contact details or submission service." />
      <section className="section section--contact-paths"><div className="container"><ConceptNote>This contact experience is a prototype. Form entries are not sent, stored, or read by a company. Do not enter sensitive or personal health information.</ConceptNote><div className="contact-path-grid">{inquiryPaths.map((path) => <Link className="contact-path" href={`${contactHref(path.type)}#contact-form`} key={path.type}><span className="contact-path__number">{path.number} / INQUIRY</span><strong>{path.title}</strong><p>{path.text}</p><span className="contact-path__arrow" aria-hidden="true">↗</span></Link>)}</div></div></section>
      <section className="section section--contact-form" id="contact-form"><div className="container contact-layout"><div className="contact-layout__aside"><p className="eyebrow"><span className="eyebrow__line" />CONTACT VIREN</p><h2>Tell us what<br /><em>you have in mind.</em></h2><p>Pick an inquiry type and use the form to explore the interaction. This is not a monitored inbox.</p><div className="contact-detail"><span>Location</span><strong>Cairo, Egypt</strong><small>Fictional company detail from the project brief.</small></div><div className="contact-detail"><span>Direct channels</span><strong>Not supplied</strong><small>No real phone number or email is published.</small></div></div><ContactForm initialType={params.type} initialProduct={params.product} /></div></section>
      <section className="contact-alternative"><div className="container"><p>Looking for product concepts or professional resources?</p><Link href="/products">Explore the portfolio <span aria-hidden="true">→</span></Link></div></section>
    </>
  );
}
