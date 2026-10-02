import Image from "next/image";
import { ButtonLink } from "@/components/Buttons";
import { BusinessAreaCard, ConceptNote, PageIntro, SectionHeading } from "@/components/Content";
import { values, businessAreas, CTA_PATHS } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("About VIREN", "Learn about the purpose and principles behind the fictional VIREN Pharma website concept.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="ABOUT VIREN / 01" title="Science with purpose." description="A fictional pharmaceutical company concept shaped around scientific rigor, human perspective, and responsible progress." />
      <section className="section section--about-opening"><div className="container about-opening">
        <div className="about-opening__visual"><Image src="/images/about-vessel.svg" alt="Original vector illustration of glass vessels, a measured grid, and a soft circle of light." width={940} height={820} sizes="(max-width: 800px) 100vw, 48vw" /><span className="about-opening__visual-caption">A visual study / 001</span></div>
        <div className="about-opening__copy"><p className="eyebrow"><span className="eyebrow__line" />OUR POINT OF VIEW</p><h2>Progress means<br />knowing <em>what matters.</em></h2><p>VIREN Pharma imagines healthcare work that is clear in its intent, careful in its method, and grounded in an understanding of the people it serves.</p><p>That starts by connecting research, development, quality, and partnership around a shared purpose.</p><ButtonLink href={CTA_PATHS.science} variant="quiet">See how we think</ButtonLink></div>
      </div></section>
      <section className="section section--values"><div className="container"><SectionHeading eyebrow="OUR PRINCIPLES" title="A standard for how we work." body="These principles describe the intended character of the VIREN concept; they are not claims about an operating company." /><div className="principle-list">{values.map((item) => <article className="principle-row" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="section section--areas section--areas-about"><div className="container"><SectionHeading eyebrow="CONNECTED DISCIPLINES" title="Different work. Shared purpose." body="Four areas of focus form the structure of this fictional portfolio." /><div className="area-grid">{businessAreas.map((item) => <BusinessAreaCard item={item} key={item.number} />)}</div></div></section>
      <section className="section section--about-statement"><div className="container about-statement"><span className="about-statement__mark" aria-hidden="true">“</span><blockquote>Healthcare deserves progress that is precise, human, and responsible.</blockquote><p>VIREN Pharma · fictional brand statement</p></div></section>
      <section className="section section--concept" id="concept"><div className="container concept-section"><div><p className="eyebrow"><span className="eyebrow__line" />ABOUT THIS SITE</p><h2>A design demonstration,<br />clearly <em>marked.</em></h2></div><div><p>This website and every product, metric, article, facility narrative, and job listing in it are fictional. No products are available and no medical advice is provided.</p><p>VIREN Pharma is not a real company. The project shows a possible corporate information architecture and a transparent product-discovery experience.</p><ConceptNote>Before any real company use, replace concept content with verified facts and approved legal, medical, and regulatory information.</ConceptNote></div></div></section>
      <section className="home-contact-band"><div className="container home-contact-band__inner"><div><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />EXPLORE THE EXPERIENCE</p><h2>Find the path<br />that <em>fits your work.</em></h2></div><ButtonLink href={CTA_PATHS.products} variant="light">Explore products</ButtonLink></div></section>
    </>
  );
}
