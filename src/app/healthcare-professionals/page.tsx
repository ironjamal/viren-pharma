import { ArrowLink, ButtonLink } from "@/components/Buttons";
import { ConceptNote, ResourceCard, SectionHeading, TextDisclosure, PageIntro } from "@/components/Content";
import { ProductGrid } from "@/components/ProductCards";
import { products } from "@/data/products";
import { contactHref, CTA_PATHS } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("For Healthcare Professionals", "Find product concepts, a fictional portfolio note, and a contact path for healthcare professionals.", "/healthcare-professionals");

export default function ProfessionalsPage() {
  return (
    <>
      <PageIntro eyebrow="HEALTHCARE PROFESSIONALS / 06" title="For healthcare professionals." description="A dedicated path for doctors, pharmacists, and care teams to find product concepts and clear information." action={{ label: "Search the portfolio", href: CTA_PATHS.products }} />
      <section className="section section--professional-intro"><div className="container professional-intro"><div><p className="eyebrow"><span className="eyebrow__line" />A CLEAR PROFESSIONAL PATH</p><h2>Useful information<br /><em>starts with trust.</em></h2><p>Browse a fictional sample portfolio, view the example resource note, or use the local contact form to explore a future medical-affairs pathway.</p><ButtonLink href={CTA_PATHS.products} variant="secondary">Search product concepts</ButtonLink></div><div className="professional-intro__aside"><span className="professional-intro__index">HCP / 001</span><p>Designed for quick access to product information, scientific resources, and a clear contact path.</p><ArrowLink href={contactHref("Healthcare professional")}>Contact medical affairs</ArrowLink></div></div></section>
      <section className="section section--professional-products"><div className="container"><SectionHeading eyebrow="PRODUCT INFORMATION" title="Explore the concept portfolio." body="Every product is fictional; no approved labeling, ingredient, dosage, or safety guidance is available." action={{ label: "Open product explorer", href: CTA_PATHS.products }} /><ProductGrid items={products.slice(0, 3)} /><ConceptNote>Not intended for clinical or purchasing decisions. For real product information, consult approved labeling and qualified professional sources.</ConceptNote></div></section>
      <section className="section section--resource-center"><div className="container resource-center"><div><p className="eyebrow"><span className="eyebrow__line" />RESOURCE CENTER</p><h2>Download and<br /><em>keep exploring.</em></h2><p>One fictional portfolio note is available to demonstrate a downloadable resource pattern. Scientific publications and product documents were not supplied.</p></div><div className="resource-center__items"><ResourceCard title="Fictional portfolio note" description="One-page concept disclaimer · PDF" /><TextDisclosure title="Scientific publications"><p>No publications are supplied in this demonstration. A real resource should include its title, authors, publication source, date, and any usage permissions.</p></TextDisclosure><TextDisclosure title="Future professional portal"><p>A secure professional account is a possible future capability. This demo has no sign-in, authentication, or restricted content.</p></TextDisclosure></div></div></section>
      <section className="home-contact-band"><div className="container home-contact-band__inner"><div><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />PROFESSIONAL INQUIRY</p><h2>Ask for the right<br /><em>information.</em></h2></div><ButtonLink href={contactHref("Healthcare professional")} variant="light">Make an inquiry</ButtonLink></div></section>
    </>
  );
}
