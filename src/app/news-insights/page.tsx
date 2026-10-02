import { ArticleGrid, ConceptNote, PageIntro } from "@/components/Content";
import { articles } from "@/data/articles";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("News & Insights", "Read fictional VIREN Pharma concept articles on research, quality, and regional healthcare conversations.", "/news-insights");

export default function NewsPage() {
  return (
    <>
      <PageIntro eyebrow="NEWS & INSIGHTS / 07" title="Ideas worth sharing." description="Editorial examples designed to show how future company updates can share useful context and clear sources." />
      <section className="section section--news"><div className="container"><ConceptNote>Every story below is fictional sample copy for this design project. No event, expansion, participant, partnership, research result, or company activity is being reported.</ConceptNote><div className="news-intro"><p className="eyebrow"><span className="eyebrow__line" />NOTES FROM VIREN</p><p>Science, quality, and healthcare are shaped by the questions people ask together. These concept stories explore possible editorial themes.</p></div><ArticleGrid items={articles} /></div></section>
    </>
  );
}
