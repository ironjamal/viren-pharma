import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLink, ButtonLink } from "@/components/Buttons";
import { Breadcrumbs, ConceptNote, SectionHeading, TextDisclosure } from "@/components/Content";
import { ProductGrid } from "@/components/ProductCards";
import { ProductVisual } from "@/components/ProductCards";
import { products, getProduct } from "@/data/products";
import { contactHref, CTA_PATHS } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return pageMetadata("Product concept", "Fictional product information from the VIREN Pharma concept portfolio.", `/products/${slug}`);
  return pageMetadata(`${product.name} product concept`, `${product.shortDescription} Fictional information only; not medical guidance.`, `/products/${product.slug}`);
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: "Products", href: CTA_PATHS.products }, { label: product.name }]} />
      <section className="section product-detail"><div className="container">
        <div className="product-detail__grid">
          <div className="product-detail__visual"><ProductVisual product={product} large /><span className="product-detail__image-label">ILLUSTRATIVE CONCEPT PACKAGING · NOT A REAL PRODUCT</span></div>
          <div className="product-detail__copy"><p className="eyebrow"><span className="eyebrow__line" />{product.category.toUpperCase()} / PRODUCT CONCEPT</p><h1>{product.name}</h1><p className="product-detail__area">{product.therapeuticArea}</p><p className="product-detail__summary">{product.shortDescription}</p><ButtonLink href={contactHref("Healthcare professional", product.name)}>Request product information</ButtonLink><p className="product-detail__contact-note">Opens a local demo inquiry form. Nothing is sent or stored.</p></div>
        </div>
        <div className="product-info-grid"><div><p className="eyebrow"><span className="eyebrow__line" />OVERVIEW</p><h2>Information,<br /><em>in context.</em></h2><p>{product.overview}</p></div><dl className="product-facts"><div><dt>Category</dt><dd>{product.category}</dd></div><div><dt>Therapeutic area</dt><dd>{product.therapeuticArea}</dd></div><div><dt>Product form</dt><dd>{product.form}</dd></div><div><dt>Audience tag</dt><dd>{product.audiences.join(", ")}</dd></div><div><dt>Active ingredient</dt><dd>{product.profile}</dd></div><div><dt>Pack size</dt><dd>{product.packFormat}</dd></div></dl></div>
        <div className="product-detail__disclosures"><TextDisclosure title="Safety information"><p>No safety information is supplied for this fictional product concept. Do not use this page to make care decisions.</p></TextDisclosure><TextDisclosure title="Medical information"><p>This page contains no dosage, treatment, efficacy, interaction, or other medical guidance. A qualified professional and approved labeling are required for real product information.</p></TextDisclosure><TextDisclosure title="Documents"><p>Download a one-page portfolio note explaining the fictional nature of this example.</p><a className="download-link" href="/resources/viren-fictional-portfolio.pdf" download>Download fictional portfolio note (PDF) <span aria-hidden="true">↓</span></a></TextDisclosure></div>
        <ConceptNote>Fictional portfolio example. Product names, labels, formulation profiles, package formats, and audience tags are not real. Not for sale or medical use.</ConceptNote>
      </div></section>
      {related.length ? <section className="section section--related"><div className="container"><SectionHeading eyebrow="MORE CONCEPTS" title="Continue exploring." action={{ label: "View all products", href: CTA_PATHS.products }} /><ProductGrid items={related} /></div></section> : null}
      <section className="home-contact-band"><div className="container home-contact-band__inner"><div><p className="eyebrow eyebrow--light"><span className="eyebrow__line" />PRODUCT INFORMATION</p><h2>Have a question<br />about <em>this concept?</em></h2></div><ArrowLink href={contactHref("Healthcare professional", product.name)} className="arrow-link arrow-link--light">Request product information</ArrowLink></div></section>
    </>
  );
}
