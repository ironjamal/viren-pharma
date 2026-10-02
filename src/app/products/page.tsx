import { ConceptNote, PageIntro } from "@/components/Content";
import { ProductExplorer } from "@/components/ProductExplorer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Products", "Search the fictional VIREN Pharma concept portfolio by category, area, form, and audience. Not medical guidance.", "/products");

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  return (
    <>
      <PageIntro eyebrow="THE PORTFOLIO / 02" title="A clearer way to explore." description="Browse an illustrative product portfolio by category, therapeutic area, form, and audience. Names and all product information are fictional." />
      <section className="section section--catalogue"><div className="container"><ConceptNote>Fictional project content. Product names, categories, formats, and audience filters are illustrative only. This catalogue is not for medical or purchasing decisions.</ConceptNote><ProductExplorer initialCategory={params.category} /></div></section>
    </>
  );
}
