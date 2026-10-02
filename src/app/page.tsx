import Image from "next/image";
import Link from "next/link";
import { ArticleGrid, BusinessAreaCard, HeroImage, SectionHeading, StatStrip } from "@/components/Content";
import { ButtonLink } from "@/components/Buttons";
import { ProductGrid } from "@/components/ProductCards";
import { articles } from "@/data/articles";
import { businessAreas, CTA_PATHS, manufacturingSteps, PRIMARY_CTA } from "@/data/site";
import { products } from "@/data/products";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Advancing Better Health",
  "Meet VIREN Pharma, a fictional science-led healthcare company concept. Explore an illustrative portfolio and approach to quality.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow"><span className="eyebrow__line" />VIREN PHARMA <span className="eyebrow__slash">/</span> SCIENCE WITH PURPOSE</p>
            <h1>Advancing<br /><em>better health.</em></h1>
            <p className="home-hero__lede">Science-driven healthcare solutions, considered from the first question to the people and communities they are meant to serve.</p>
            <div className="home-hero__actions"><ButtonLink href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</ButtonLink><ButtonLink href={CTA_PATHS.about} variant="secondary">About VIREN</ButtonLink></div>
            <div className="home-hero__meta"><span>01 / 04</span><span>Pharma · Research · Care</span></div>
          </div>
          <HeroImage />
        </div>
        <div className="container home-hero__bottom"><span>CAIRO, EGYPT</span><span>ILLUSTRATIVE CORPORATE EXPERIENCE</span><Link href={CTA_PATHS.professionals}>For healthcare professionals <span aria-hidden="true">↗</span></Link></div>
      </section>
      <StatStrip />
      <section className="section section--story">
        <div className="container story-grid">
          <div className="story-grid__visual">
            <div className="story-grid__visual-note"><span>FIG. 02</span><span>SCIENCE WITH PURPOSE</span></div>
            <Image src="/images/about-vessel.svg" alt="Original vector illustration of scientific glass vessels and measured lines." width={940} height={820} sizes="(max-width: 800px) 100vw, 46vw" />
            <p className="image-caption">Concept imagery · created for this fictional project</p>
          </div>
          <div className="story-grid__copy">
            <p className="eyebrow"><span className="eyebrow__line" />WHO WE ARE</p>
            <h2>Science with<br /><em>purpose.</em></h2>
            <p className="story-grid__lead">Healthcare asks for both precision and perspective.</p>
            <p className="body-copy">VIREN Pharma is a fictional company concept combining scientific expertise, responsible manufacturing, and a considered understanding of healthcare needs.</p>
            <p className="body-copy">The experience is built to help patients, professionals, partners, and future colleagues find a clear next step.</p>
            <ButtonLink href={CTA_PATHS.about} variant="quiet">Discover VIREN</ButtonLink>
            <span className="story-grid__index">01 <span>—</span> A clearer way forward</span>
          </div>
        </div>
      </section>
      <section className="section section--areas"><div className="container"><SectionHeading eyebrow="OUR FOCUS" title="Four connected fields." body="A shared commitment to clarity, scientific care, and the people around every healthcare decision." /><div className="area-grid">{businessAreas.map((item) => <BusinessAreaCard item={item} key={item.number} />)}</div></div></section>
      <section className="section section--products"><div className="container"><SectionHeading eyebrow="THE PORTFOLIO" title="Ideas, made tangible." body="A sample of fictional product concepts. Every name and package is illustrative, with no medical use information." action={{ label: "View the full portfolio", href: CTA_PATHS.products }} /><ProductGrid items={products.filter((product) => product.featured).slice(0, 3)} /><div className="section__footnote">Fictional names and package forms · Not for sale or medical use</div></div></section>
      <section className="section section--science"><div className="container science-feature"><div className="science-feature__visual"><Image src="/images/science-drawing.svg" alt="Abstract original diagram with concentric circles and measured development lines." width={900} height={680} sizes="(max-width: 800px) 100vw, 52vw" /><span className="science-feature__stamp">RESEARCH<br />/ 02</span></div><div className="science-feature__copy"><p className="eyebrow"><span className="eyebrow__line" />SCIENCE & INNOVATION</p><h2>Where science<br />meets <em>possibility.</em></h2><p className="body-copy">A thoughtful path from research and formulation to product development and responsible review begins with asking better questions.</p><div className="science-feature__index"><span>01</span><span>RESEARCH</span><i /><span>05</span><span>INNOVATION</span></div><ButtonLink href={CTA_PATHS.science} variant="secondary">Explore our approach</ButtonLink></div></div></section>
      <section className="section section--process"><div className="container process-preview"><div className="process-preview__intro"><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />A CONSIDERED PROCESS</p><h2>Quality is built<br />into <em>every step.</em></h2><p>From a product concept to the final hand-off, each stage has a question to answer and a record to keep.</p><ButtonLink href={CTA_PATHS.manufacturing} variant="light">Explore the process</ButtonLink></div><ol className="process-preview__list">{manufacturingSteps.map((step) => <li key={step.number}><span>{step.number}</span><strong>{step.title}</strong><i aria-hidden="true" /></li>)}</ol></div></section>
      <section className="section section--insights"><div className="container"><SectionHeading eyebrow="NOTES & PERSPECTIVES" title="Ideas worth sharing." body="Fictional editorial examples designed to show how future company news could be presented with context." action={{ label: "See all insights", href: CTA_PATHS.insights }} /><ArticleGrid items={articles.slice(0, 3)} /></div></section>
      <section className="careers-callout"><div className="container careers-callout__inner"><div><p className="eyebrow"><span className="eyebrow__line" />CAREERS AT VIREN</p><h2>Bring your curiosity.<br /><em>Build what matters.</em></h2></div><div><p>Explore illustrative roles across science, quality, regulatory affairs, and digital product.</p><ButtonLink href={CTA_PATHS.careers} variant="secondary">Explore careers</ButtonLink></div></div></section>
      <section className="home-contact-band"><div className="container home-contact-band__inner"><div><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />START A CONVERSATION</p><h2>Better work begins<br />with a <em>good question.</em></h2></div><ButtonLink href={CTA_PATHS.contact} variant="light">Contact VIREN</ButtonLink></div></section>
    </>
  );
}
