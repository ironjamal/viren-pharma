import Image from "next/image";
import { ButtonLink } from "@/components/Buttons";
import { ConceptNote, EditorialNote, PageIntro, SectionHeading, TextDisclosure } from "@/components/Content";
import { CTA_PATHS, qualityPrinciples } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Quality", "Explore the fictional VIREN Pharma quality framework concept. No real certifications or regulatory claims are made.", "/quality");

export default function QualityPage() {
  return (
    <>
      <PageIntro eyebrow="QUALITY / 05" title="Quality is built into every step." description="A fictional framework for showing how quality control, assurance, documentation, and responsible review can fit together." action={{ label: "Explore manufacturing", href: CTA_PATHS.manufacturing }} />
      <section className="section section--quality-opening"><div className="container quality-opening">
        <div><p className="eyebrow"><span className="eyebrow__line" />A CONTINUOUS PRACTICE</p><h2>Look closely.<br /><em>Record clearly.</em></h2><p>Quality is easier to understand when expectations, checks, and records are visible throughout a process—not saved for a final moment.</p><p>This page presents a concept model. It does not describe a real VIREN quality system or compliance status.</p><ConceptNote>No licenses, certifications, audits, or regulatory approvals have been supplied for this fictional company.</ConceptNote></div>
        <div className="quality-opening__visual"><Image src="/images/quality-grid.svg" alt="Original geometric illustration of a conceptual quality system with connected review points." width={880} height={760} sizes="(max-width: 800px) 100vw, 48vw" /><span className="image-panel__index">FIG. 05 / QUALITY MODEL</span></div>
      </div></section>
      <section className="section section--quality-principles"><div className="container"><SectionHeading eyebrow="FIVE LENSES ON QUALITY" title="Clear at each checkpoint." body="A practical structure for describing what is reviewed and how questions move forward." /><div className="editorial-list">{qualityPrinciples.map((item) => <EditorialNote key={item.number} number={item.number} title={item.title}><p>{item.text}</p></EditorialNote>)}<EditorialNote number="05" title="Continuous learning"><p>Use documented feedback to understand what should change in a future process cycle.</p></EditorialNote></div></div></section>
      <section className="section section--quality-detail"><div className="container quality-detail"><div><p className="eyebrow"><span className="eyebrow__line" />A TRANSPARENT STANDARD</p><h2>Show the work<br />behind the <em>assurance.</em></h2></div><div><TextDisclosure title="Quality control"><p>A real quality-control description would require confirmed methods, scope, and review responsibilities. This concept page makes no laboratory or testing claim.</p></TextDisclosure><TextDisclosure title="Quality assurance"><p>Specific procedures, personnel, and outcomes have not been supplied. The framework here is illustrative only.</p></TextDisclosure><TextDisclosure title="Regulatory compliance"><p>No jurisdictional approvals, certifications, or standards are claimed in this fictional project.</p></TextDisclosure><TextDisclosure title="Traceability"><p>A production-ready quality story should be linked to approved records and verified process documentation.</p></TextDisclosure></div></div></section>
      <section className="home-contact-band"><div className="container home-contact-band__inner"><div><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />PARTNERSHIP INQUIRY</p><h2>Build trust through<br /><em>clear information.</em></h2></div><ButtonLink href={CTA_PATHS.contact} variant="light">Contact VIREN</ButtonLink></div></section>
    </>
  );
}
