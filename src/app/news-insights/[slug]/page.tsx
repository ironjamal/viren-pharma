import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/Buttons";
import { ArticleGrid, Breadcrumbs, ConceptNote, ReadingProgressLabel } from "@/components/Content";
import { articles, getArticle } from "@/data/articles";
import { CTA_PATHS } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return pageMetadata("Insight", "Fictional sample editorial content from VIREN Pharma.", `/news-insights/${slug}`);
  return pageMetadata(article.title, `${article.excerpt} Fictional sample content.`, `/news-insights/${article.slug}`);
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <Breadcrumbs items={[{ label: "News & insights", href: CTA_PATHS.insights }, { label: article.title }]} />
      <article className="article-page">
        <header className="article-page__header container"><p className="eyebrow"><span className="eyebrow__line" />{article.category.toUpperCase()} <span className="eyebrow__slash">/</span> FICTIONAL SAMPLE</p><h1>{article.title}</h1><p className="article-page__dek">{article.excerpt}</p><div className="article-page__meta"><time>{article.date}</time><span>{article.readTime}</span></div></header>
        <div className={`article-page__hero article-art article-art--${article.visual}`} aria-hidden="true"><span className="article-art__frame" /><span className="article-art__orb" /><span className="article-art__line" /><span className="article-art__index">V / {article.visual.toUpperCase()}</span></div>
        <div className="article-page__body"><ReadingProgressLabel>Fictional concept article · {article.readTime}</ReadingProgressLabel>{article.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<ConceptNote>This article is fictional example content. It does not report real VIREN activity or provide health advice.</ConceptNote><ArrowLink href={CTA_PATHS.insights}>Back to all insights</ArrowLink></div>
      </article>
      <section className="section section--related"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow__line" />CONTINUE READING</p><h2>More perspectives.</h2></div><div className="section-heading__aside"><ArrowLink href={CTA_PATHS.insights}>View all insights</ArrowLink></div></div><ArticleGrid items={related} /></div></section>
    </>
  );
}
