export type ProductCategory = "Pharmaceuticals" | "Consumer Health" | "Medical Products";
export type ProductType = "Tablet" | "Capsule" | "Syrup" | "Cream" | "Care kit";
export type ProductAudience = "Adult" | "Pediatric" | "Healthcare professionals";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  therapeuticArea: string;
  form: ProductType;
  audiences: ProductAudience[];
  shortDescription: string;
  overview: string;
  profile: string;
  packFormat: string;
  color: "blue" | "sage" | "sand" | "coral";
  featured?: boolean;
};

export const productCategories: ProductCategory[] = ["Pharmaceuticals", "Consumer Health", "Medical Products"];
export const therapeuticAreas = ["Pain Management", "Respiratory", "Gastrointestinal", "Dermatology", "Vitamins", "Care Environments"];
export const productTypes: ProductType[] = ["Tablet", "Capsule", "Syrup", "Cream", "Care kit"];
export const productAudiences: ProductAudience[] = ["Adult", "Pediatric", "Healthcare professionals"];

export const products: Product[] = [
  {
    slug: "virenex",
    name: "VIRENEX",
    category: "Pharmaceuticals",
    therapeuticArea: "Pain Management",
    form: "Tablet",
    audiences: ["Adult"],
    shortDescription: "A fictional concept from the pain and inflammation portfolio.",
    overview: "VIRENEX is a design-study product name supplied for this fictional portfolio. This page presents a product-information structure only; it does not describe a real medicine or an indication for use.",
    profile: "Fictional profile not specified",
    packFormat: "Illustrative carton concept; no real pack size",
    color: "blue",
    featured: true,
  },
  {
    slug: "respira",
    name: "RESPIRA",
    category: "Pharmaceuticals",
    therapeuticArea: "Respiratory",
    form: "Capsule",
    audiences: ["Adult"],
    shortDescription: "A fictional portfolio concept for respiratory care.",
    overview: "RESPIRA is a fictional product concept included to demonstrate clear professional product navigation. It has no active ingredient, use, or clinical profile.",
    profile: "Fictional profile not specified",
    packFormat: "Illustrative carton concept; no real pack size",
    color: "sage",
    featured: true,
  },
  {
    slug: "gastrovia",
    name: "GASTROVIA",
    category: "Pharmaceuticals",
    therapeuticArea: "Gastrointestinal",
    form: "Tablet",
    audiences: ["Adult"],
    shortDescription: "A fictional concept in the digestive-health portfolio.",
    overview: "GASTROVIA is a fictional product name supplied in the brief. The concept page intentionally contains no ingredient, dosage, treatment direction, or safety claim.",
    profile: "Fictional profile not specified",
    packFormat: "Illustrative carton concept; no real pack size",
    color: "sand",
    featured: true,
  },
  {
    slug: "dermaven",
    name: "DERMAVEN",
    category: "Consumer Health",
    therapeuticArea: "Dermatology",
    form: "Cream",
    audiences: ["Adult"],
    shortDescription: "A fictional topical-care concept for portfolio exploration.",
    overview: "DERMAVEN is an illustrative product name from the fictional sample portfolio. No real formulation, use, or product safety information is represented.",
    profile: "Fictional profile not specified",
    packFormat: "Illustrative tube concept; no real pack size",
    color: "coral",
    featured: true,
  },
  {
    slug: "immunova",
    name: "IMMUNOVA",
    category: "Consumer Health",
    therapeuticArea: "Vitamins",
    form: "Capsule",
    audiences: ["Adult"],
    shortDescription: "A fictional vitamins and immune-support concept.",
    overview: "IMMUNOVA is included as a fictional category example. This design demonstration makes no health, efficacy, or safety claims.",
    profile: "Fictional profile not specified",
    packFormat: "Illustrative carton concept; no real pack size",
    color: "blue",
    featured: true,
  },
  {
    slug: "nouriva",
    name: "NOURIVA",
    category: "Consumer Health",
    therapeuticArea: "Vitamins",
    form: "Syrup",
    audiences: ["Pediatric"],
    shortDescription: "A fictional sample entry used to demonstrate the syrup filter.",
    overview: "NOURIVA is a fictional filter example. Its audience tag is illustrative only and must not be used to make care or product decisions.",
    profile: "Fictional profile not specified",
    packFormat: "Illustrative bottle concept; no real pack size",
    color: "sage",
  },
  {
    slug: "careline-kit",
    name: "CARELINE KIT",
    category: "Medical Products",
    therapeuticArea: "Care Environments",
    form: "Care kit",
    audiences: ["Healthcare professionals"],
    shortDescription: "A fictional concept for products that support care environments.",
    overview: "CARELINE KIT is a design-study name for the Medical Products category. It is not an available device or validated clinical product.",
    profile: "Concept specification not supplied",
    packFormat: "Illustrative kit format; contents not specified",
    color: "sand",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
