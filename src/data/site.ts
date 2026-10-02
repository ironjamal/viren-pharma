export const SITE_NAME = "VIREN Pharma";
export const TAGLINE = "Advancing Better Health.";

export const CTA_PATHS = {
  products: "/products",
  about: "/about",
  science: "/science-innovation",
  manufacturing: "/manufacturing",
  quality: "/quality",
  professionals: "/healthcare-professionals",
  insights: "/news-insights",
  careers: "/careers",
  contact: "/contact",
} as const;

export const PRIMARY_CTA = {
  label: "Explore our products",
  href: CTA_PATHS.products,
};

export const navigation = [
  { label: "About", href: CTA_PATHS.about },
  { label: "Products", href: CTA_PATHS.products },
  { label: "Science", href: CTA_PATHS.science },
  { label: "Manufacturing", href: CTA_PATHS.manufacturing },
  { label: "Quality", href: CTA_PATHS.quality },
  { label: "For professionals", href: CTA_PATHS.professionals },
  { label: "Insights", href: CTA_PATHS.insights },
  { label: "Careers", href: CTA_PATHS.careers },
  { label: "Contact", href: CTA_PATHS.contact },
] as const;

export const companyStats = [
  { value: "18+", label: "years of experience" },
  { value: "42+", label: "portfolio products" },
  { value: "06", label: "regional markets" },
  { value: "03", label: "facilities" },
];

export const businessAreas = [
  {
    number: "01",
    title: "Pharmaceuticals",
    description: "Prescription-focused concepts shaped around careful science and clear information.",
    href: "/products?category=Pharmaceuticals",
    accent: "blue",
  },
  {
    number: "02",
    title: "Consumer health",
    description: "Everyday healthcare ideas presented with practical, human-centered clarity.",
    href: "/products?category=Consumer%20Health",
    accent: "sage",
  },
  {
    number: "03",
    title: "Medical products",
    description: "Concept products imagined for the people and environments around care.",
    href: "/products?category=Medical%20Products",
    accent: "sand",
  },
  {
    number: "04",
    title: "Research & development",
    description: "Exploration, formulation, and product development in service of future needs.",
    href: CTA_PATHS.science,
    accent: "ink",
  },
];

export const manufacturingSteps = [
  { number: "01", title: "Raw materials", detail: "A concept begins with a clear record of what enters a product workflow." },
  { number: "02", title: "Formulation", detail: "Ideas are organized into a repeatable development brief." },
  { number: "03", title: "Production", detail: "A controlled sequence turns a reviewed formula into a finished concept." },
  { number: "04", title: "Quality control", detail: "Defined checks create a record at each stage of the process." },
  { number: "05", title: "Packaging", detail: "Information and presentation are prepared together for a clear hand-off." },
  { number: "06", title: "Distribution", detail: "A documented route connects finished products with the people they serve." },
];

export const qualityPrinciples = [
  { number: "01", title: "Designed into the process", text: "Quality is considered from the first development brief through each hand-off." },
  { number: "02", title: "Clear records", text: "A traceable record makes responsibilities and review points easier to understand." },
  { number: "03", title: "Measured checks", text: "Defined checks help teams assess work consistently at important stages." },
  { number: "04", title: "Responsible review", text: "Product information should be reviewed by qualified people before it is shared." },
];

export const values = [
  { number: "01", title: "Scientific rigor", text: "Ask clear questions, document the method, and treat evidence with care." },
  { number: "02", title: "Human perspective", text: "Remember the people, professionals, and communities behind every decision." },
  { number: "03", title: "Responsible progress", text: "Move forward with purpose, transparency, and respect for the evidence." },
];

export function contactHref(type: string, product?: string) {
  const query = new URLSearchParams({ type });
  if (product) query.set("product", product);
  return `${CTA_PATHS.contact}?${query.toString()}`;
}
