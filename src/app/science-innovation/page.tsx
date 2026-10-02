import Image from "next/image";
import { ButtonLink } from "@/components/Buttons";
import { ConceptNote, EditorialNote, PageIntro, SectionHeading } from "@/components/Content";
import { CTA_PATHS } from "@/data/site";
import { pageMetadata } from "@/lib/site";

const capabilities = [
  { number: "01", title: "Research", text: "Explore a question, understand its context, and identify what evidence would be needed next." },
  { number: "02", title: "Formulation", text: "Organize a concept into a clear development brief with the right technical questions." },
  { number: "03", title: "Product development", text: "Move a concept through documented review and make assumptions visible." },
  { number: "04", title: "Regulatory affairs", text: "Treat product documentation and regional requirements as work for qualified specialists." },
  { number: "05", title: "Innovation", text: "Look for useful progress by staying curious, responsible, and close to human needs." },
];

export const metadata = pageMetadata("Science & Innovation", "Explore a fictional approach to research, formulation, product development, and responsible innovation.", "/science-innovation");

export default function SciencePage() {
  return (
    <>
      <PageIntro eyebrow="SCIENCE & INNOVATION / 03" title="Where science meets possibility." description="Curiosity becomes useful when it is paired with evidence, clear review, and an understanding of who a product concept is meant to serve." action={{ label: "Explore products", href: CTA_PATHS.products }} />
      <section className="section section--science-intro"><div className="container science-page-intro">
        <div className="science-page-intro__visual"><Image src="/images/science-drawing.svg" alt="Original schematic diagram showing intersecting measurement paths and research loops." width={900} height={680} sizes="(max-width: 800px) 100vw, 54vw" /><span className="image-panel__index">FIG. 03 / RESEARCH MODEL</span></div>
        <div><p className="eyebrow"><span className="eyebrow__line" />A DISCIPLINED CURIOSITY</p><h2>Ask better questions.<br /><em>Make room for evidence.</em></h2><p>Science and innovation are connected by a series of decisions: what to explore, what to measure, what still needs review, and how to communicate the result with care.</p><ConceptNote>The capabilities described here are an illustrative framework. They do not verify real VIREN facilities, research programs, products, or regulatory expertise.</ConceptNote></div>
      </div></section>
      <section className="section section--capabilities"><div className="container"><SectionHeading eyebrow="FROM QUESTION TO CONCEPT" title="A thoughtful development path." body="Each step gives a team a clearer view of what is known, what needs attention, and who should review the work." /><div className="editorial-list">{capabilities.map((item) => <EditorialNote key={item.number} number={item.number} title={item.title}><p>{item.text}</p></EditorialNote>)}</div></div></section>
      <section className="science-principles"><div className="container science-principles__grid"><div><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />A RESPONSIBLE POINT OF VIEW</p><h2>Progress needs<br /><em>both ambition and care.</em></h2></div><ul><li><span>01</span>Start with a real human or professional need.</li><li><span>02</span>Be precise about what the available evidence can show.</li><li><span>03</span>Invite qualified review before sharing a health-related claim.</li></ul></div></section>
      <section className="section section--bottom-cta"><div className="container bottom-cta"><p className="eyebrow"><span className="eyebrow__line" />CONTINUE EXPLORING</p><h2>Science connects<br />to <em>quality and process.</em></h2><div className="bottom-cta__actions"><ButtonLink href={CTA_PATHS.manufacturing} variant="secondary">See the process</ButtonLink><ButtonLink href={CTA_PATHS.quality} variant="quiet">Explore quality</ButtonLink></div></div></section>
    </>
  );
}
