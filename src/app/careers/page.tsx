import { ButtonLink } from "@/components/Buttons";
import { CareersExplorer } from "@/components/CareersExplorer";
import { ConceptNote, EditorialNote, PageIntro, SectionHeading } from "@/components/Content";
import { contactHref, CTA_PATHS, values } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Careers", "Explore fictional example roles and a considered working culture for the VIREN Pharma site concept.", "/careers");

export default function CareersPage() {
  return (
    <>
      <PageIntro eyebrow="CAREERS / 08" title="Build the future of healthcare with us." description="A fictional careers experience for people drawn to science, quality, regulatory affairs, commercial work, and digital products." />
      <section className="section section--careers-intro"><div className="container careers-intro"><div><p className="eyebrow"><span className="eyebrow__line" />A PLACE FOR DIFFERENT PERSPECTIVES</p><h2>Good work is<br /><em>shared work.</em></h2></div><div><p>Healthcare work brings together many kinds of expertise. A thoughtful culture makes space for careful questions, clear communication, and learning across disciplines.</p><p>The principles here describe an intended fictional brand character. They are not a description of a real employer or benefits package.</p><ButtonLink href={contactHref("Careers")} variant="quiet">Make a careers inquiry</ButtonLink></div></div></section>
      <section className="section section--roles"><div className="container"><ConceptNote>All roles are illustrative examples and are not open vacancies. The listings and filters are included to demonstrate a careers experience.</ConceptNote><CareersExplorer /></div></section>
      <section className="section section--culture"><div className="container"><SectionHeading eyebrow="HOW WE AIM TO WORK" title="A culture, in principles." body="A real culture story should reflect the actual team and must be approved by the company." /><div className="editorial-list">{values.map((value) => <EditorialNote key={value.number} number={value.number} title={value.title}><p>{value.text}</p></EditorialNote>)}</div></div></section>
      <section className="home-contact-band"><div className="container home-contact-band__inner"><div><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />CAREERS INQUIRY</p><h2>Start with a<br /><em>good conversation.</em></h2></div><ButtonLink href={CTA_PATHS.contact} variant="light">Contact VIREN</ButtonLink></div></section>
    </>
  );
}
