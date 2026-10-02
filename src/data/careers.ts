export type Role = {
  slug: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  profile: string[];
};

export const roles: Role[] = [
  {
    slug: "medical-representative",
    title: "Medical Representative",
    department: "Commercial",
    location: "Cairo, Egypt",
    experience: "Early career",
    summary: "A fictional role for sharing clear, approved product information with healthcare professionals.",
    responsibilities: ["Build respectful professional relationships.", "Share only current, approved product information.", "Bring questions and field insights to the appropriate internal team."],
    profile: ["Clear communication and careful listening.", "A responsible approach to healthcare information.", "Relevant experience to be confirmed by a real hiring team."],
  },
  {
    slug: "quality-assurance-specialist",
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Cairo, Egypt",
    experience: "Experienced",
    summary: "A fictional role focused on documentation, process review, and cross-team quality practices.",
    responsibilities: ["Review process documentation for clarity.", "Coordinate follow-up on recorded questions.", "Support consistent communication between project teams."],
    profile: ["Attention to detail and an organized working style.", "Experience requirements to be confirmed in a real posting.", "Comfort working with documented review processes."],
  },
  {
    slug: "research-and-development-scientist",
    title: "R&D Scientist",
    department: "Research & Development",
    location: "Cairo, Egypt",
    experience: "Experienced",
    summary: "A fictional role exploring product concepts and formulation questions with scientific care.",
    responsibilities: ["Frame research questions and document the approach.", "Work with colleagues to assess development concepts.", "Communicate limitations and findings clearly."],
    profile: ["Relevant scientific experience to be specified by a real employer.", "Curiosity, rigor, and clear written communication.", "A collaborative approach to review and problem solving."],
  },
  {
    slug: "regulatory-affairs-specialist",
    title: "Regulatory Affairs Specialist",
    department: "Regulatory Affairs",
    location: "Cairo, Egypt",
    experience: "Experienced",
    summary: "A fictional role supporting clear and responsible regulatory information flows.",
    responsibilities: ["Organize product and submission documentation.", "Coordinate reviews with relevant subject matter experts.", "Track open questions and document decisions."],
    profile: ["Care with terminology, version control, and records.", "Relevant qualifications to be confirmed for a real opening.", "A thoughtful approach to changing requirements."],
  },
  {
    slug: "digital-product-manager",
    title: "Digital Product Manager",
    department: "Digital",
    location: "Cairo, Egypt",
    experience: "Mid-level",
    summary: "A fictional role connecting digital experience decisions with real user needs.",
    responsibilities: ["Translate user needs into clear product priorities.", "Work with design, engineering, and content partners.", "Review outcomes and keep accessibility in view."],
    profile: ["Experience shaping digital products.", "Clear facilitation and prioritization skills.", "Specific requirements to be confirmed by a real hiring team."],
  },
];

export const departments = ["Commercial", "Quality", "Research & Development", "Regulatory Affairs", "Digital"];
export const locations = ["Cairo, Egypt"];
export const experienceLevels = ["Early career", "Mid-level", "Experienced"];

export function getRole(slug: string) {
  return roles.find((role) => role.slug === slug);
}
