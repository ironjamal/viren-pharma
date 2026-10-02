import Image from "next/image";
import { ButtonLink } from "@/components/Buttons";
import { ConceptNote, PageIntro, ProcessSteps, SectionHeading } from "@/components/Content";
import { CTA_PATHS, manufacturingSteps } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Manufacturing", "See a fictional six-stage manufacturing process model for the VIREN Pharma corporate website concept.", "/manufacturing");

export default function ManufacturingPage() {
  return (
    <>
      <PageIntro eyebrow="MANUFACTURING / 04" title="Consider every hand-off." description="A six-stage conceptual model shows how process clarity can connect materials, development, review, packaging, and distribution." action={{ label: "Explore quality", href: CTA_PATHS.quality }} />
      <section className="section section--manufacturing-opening"><div className="container manufacturing-opening">
        <div className="manufacturing-opening__visual"><Image src="/images/manufacturing-map.svg" alt="Original abstract process diagram showing six connected stages; it is not a real facility plan." width={1000} height={620} sizes="(max-width: 800px) 100vw, 65vw" /><span className="image-panel__index">FIG. 04 / PROCESS MODEL</span></div>
        <div className="manufacturing-opening__copy"><p className="eyebrow"><span className="eyebrow__line" />A CLEAR SEQUENCE</p><h2>Six stages.<br /><em>One considered flow.</em></h2><p>A product journey depends on consistent information between stages. This illustration describes a conceptual sequence only; it does not depict an operating VIREN facility.</p></div>
      </div></section>
      <section className="section section--process-steps"><div className="container process-detail"><div><SectionHeading eyebrow="THE PROCESS MODEL" title="Built around clear checkpoints." body="Use the sequence to see where questions are asked and where one team hands work to the next." /><ConceptNote>Illustrative process map only. No facility, capacity, equipment, or certification claim is made.</ConceptNote></div><ProcessSteps steps={manufacturingSteps} /></div></section>
      <section className="manufacturing-band"><div className="container manufacturing-band__inner"><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />PROCESS / QUALITY / PEOPLE</p><h2>Clear work starts<br />with <em>clear responsibility.</em></h2><p>A real operating model would need verified process documents, validated facilities, and approved regulatory claims before publication.</p><ButtonLink href={CTA_PATHS.contact} variant="light">Start a partnership inquiry</ButtonLink></div></section>
    </>
  );
}
