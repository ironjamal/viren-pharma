export type Article = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  visual: "research" | "quality" | "regional" | "people";
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "building-capability-with-purpose",
    category: "Company concept",
    date: "September 18, 2026",
    title: "Building capability with purpose",
    excerpt: "A fictional editorial look at how development, production, and quality can be considered together.",
    readTime: "4 min read",
    visual: "research",
    body: [
      "This sample article is part of a fictional corporate website exercise. It describes a principle, not a real expansion, investment, or operating facility.",
      "A thoughtful capability plan begins with the question a product is meant to answer. Development, manufacturing, and quality teams can then define the information and review points needed to move a concept forward.",
      "For VIREN Pharma, this page demonstrates how a future news story could explain a verified company update with context and clear sourcing. No operational claim is made here.",
    ],
  },
  {
    slug: "quality-through-every-stage",
    category: "Quality",
    date: "August 27, 2026",
    title: "A considered approach to quality",
    excerpt: "How a clear process map can help teams see where review and traceability belong.",
    readTime: "5 min read",
    visual: "quality",
    body: [
      "This fictional sample article introduces a process-design idea. It is not evidence of a certified quality system or a regulatory approval.",
      "A well-structured map makes responsibilities visible. It can show who reviews a record, what information is required, and how an unresolved question moves to the right person.",
      "Any real statement about standards, certifications, audits, or regulatory status must be confirmed and approved before publication.",
    ],
  },
  {
    slug: "responsible-innovation-in-healthcare",
    category: "Science & innovation",
    date: "July 09, 2026",
    title: "Responsible innovation starts with a better question",
    excerpt: "A fictional perspective on curiosity, evidence, and the people behind health decisions.",
    readTime: "3 min read",
    visual: "people",
    body: [
      "This concept article explores a point of view, not a research result. Its content is fictional and is not a medical recommendation.",
      "The work of innovation starts by listening carefully to a real need. A team can then decide what evidence would be needed, what expertise is missing, and how to make progress responsibly.",
      "For a real publication, VIREN would need a verified author, approved sources, and an appropriate scientific and legal review.",
    ],
  },
  {
    slug: "regional-healthcare-conversations",
    category: "Partnerships",
    date: "June 16, 2026",
    title: "Making room for regional healthcare conversations",
    excerpt: "A fictional event story template for sharing partnership news with clear context.",
    readTime: "4 min read",
    visual: "regional",
    body: [
      "This is an illustrative article template. It does not report a real event, attendance, partnership, or endorsement.",
      "Strong event coverage records the purpose of the conversation, the people who took part with their permission, and the questions that matter to the audience. It should avoid overstating what a discussion can prove.",
      "Before a real article is published, confirm the event details, approved participant names, image rights, and any statements attributed to speakers.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
