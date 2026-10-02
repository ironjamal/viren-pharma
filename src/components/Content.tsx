import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, ChevronIcon } from "@/components/Icons";
import { ButtonLink } from "@/components/Buttons";
import type { Article } from "@/data/articles";
import { companyStats, PRIMARY_CTA } from "@/data/site";

type Breadcrumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} aria-current={!item.href ? "page" : undefined}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  action,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  action?: { label: string; href: string };
  compact?: boolean;
}) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <section className={`page-intro${compact ? " page-intro--compact" : ""}`}>
        <div className="container page-intro__grid">
          <div>
            <p className="eyebrow"><span className="eyebrow__line" />{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <div className="page-intro__aside">
            <p className="page-intro__description">{description}</p>
            {action ? <ButtonLink href={action.href} variant="quiet">{action.label}</ButtonLink> : null}
          </div>
        </div>
      </section>
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  action,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  action?: { label: string; href: string };
  light?: boolean;
}) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <div>
        {eyebrow ? <p className="eyebrow"><span className="eyebrow__line" />{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      <div className="section-heading__aside">
        {body ? <p>{body}</p> : null}
        {action ? <Link className="arrow-link" href={action.href}>{action.label}<ArrowIcon /></Link> : null}
      </div>
    </div>
  );
}

export function StatStrip() {
  return (
    <section className="stats-band" aria-labelledby="stats-title">
      <div className="container">
        <div className="stats-band__heading">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__line" />A fictional snapshot</p>
          <h2 id="stats-title">A vision with<br />room to grow.</h2>
        </div>
        <div className="stats-grid">
          {companyStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <p className="stat__value">{stat.value}</p>
              <p className="stat__label">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="stats-band__note">Illustrative figures from the project brief. They are not real company metrics.</p>
      </div>
    </section>
  );
}

export function ConceptNote({ children, tone = "soft" }: { children: ReactNode; tone?: "soft" | "line" }) {
  return <aside className={`concept-note concept-note--${tone}`} role="note"><span className="concept-note__marker" aria-hidden="true">i</span><p>{children}</p></aside>;
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link className="article-card" href={`/news-insights/${article.slug}`}>
      <div className={`article-art article-art--${article.visual}`} aria-hidden="true">
        <span className="article-art__frame" /><span className="article-art__orb" /><span className="article-art__line" />
        <span className="article-art__index">V / {article.visual.slice(0, 2).toUpperCase()}</span>
      </div>
      <div className="article-card__meta"><span>{article.category}</span><span>{article.readTime}</span></div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <span className="article-card__bottom"><time>{article.date}</time><ArrowIcon aria-hidden="true" /></span>
    </Link>
  );
}

export function ArticleGrid({ items }: { items: Article[] }) {
  return <div className="article-grid">{items.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>;
}

export function BusinessAreaCard({ item }: { item: { number: string; title: string; description: string; href: string; accent: string } }) {
  return (
    <Link className={`area-card area-card--${item.accent}`} href={item.href}>
      <span className="area-card__number">{item.number} <span>— VIREN</span></span>
      <span className="area-card__glyph" aria-hidden="true"><i /><i /><i /></span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span className="area-card__arrow" aria-hidden="true"><ArrowIcon /></span>
    </Link>
  );
}

export function ResourceCard({ title, description, href = "/resources/viren-fictional-portfolio.pdf" }: { title: string; description: string; href?: string }) {
  return (
    <a className="resource-card" href={href} download>
      <span className="resource-card__icon" aria-hidden="true">PDF</span>
      <span className="resource-card__copy"><strong>{title}</strong><span>{description}</span></span>
      <span className="resource-card__arrow" aria-hidden="true"><ArrowIcon /></span>
    </a>
  );
}

export function ProcessSteps({ steps }: { steps: { number: string; title: string; detail: string }[] }) {
  return (
    <ol className="process-list">
      {steps.map((step, index) => (
        <li className="process-step" key={step.number}>
          <span className="process-step__number">{step.number}</span>
          <span className="process-step__track" aria-hidden="true"><i style={{ width: `${((index + 1) / steps.length) * 100}%` }} /></span>
          <div><h3>{step.title}</h3><p>{step.detail}</p></div>
        </li>
      ))}
    </ol>
  );
}

export function TextDisclosure({ title, children }: { title: string; children: ReactNode }) {
  return <details className="text-disclosure"><summary>{title}<ChevronIcon /></summary><div className="text-disclosure__body">{children}</div></details>;
}

export function ImagePanel({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="image-panel">
      <Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
      <figcaption><span>{label}</span><span>VIREN / CONCEPT STUDY</span></figcaption>
    </figure>
  );
}

export function EditorialNote({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <div className="editorial-note"><span className="editorial-note__number">{number}</span><div><h3>{title}</h3>{children}</div></div>;
}

export function ReadingProgressLabel({ children }: { children: ReactNode }) {
  return <p className="reading-label"><span className="reading-label__dot" />{children}</p>;
}

export function HeroImage() {
  return (
    <div className="hero-artwork">
      <Image
        src="/images/hero-glass-vessels.svg"
        alt="An original illustration of laboratory glass vessels arranged against a precise scientific grid."
        fill
        fetchPriority="high"
        sizes="(max-width: 800px) 100vw, 48vw"
      />
      <div className="hero-artwork__label"><span>FIG. 01</span><span>SCIENCE / WITH PURPOSE</span></div>
      <div className="hero-artwork__seal"><span>V</span><small>FORM<br />FOLLOWS<br />EVIDENCE</small></div>
    </div>
  );
}

export function HeroAction({ label = PRIMARY_CTA.label, href = PRIMARY_CTA.href }: { label?: string; href?: string }) {
  return <ButtonLink href={href}>{label}</ButtonLink>;
}
