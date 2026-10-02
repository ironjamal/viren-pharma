import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Buttons";
import { Breadcrumbs, ConceptNote, EditorialNote } from "@/components/Content";
import { getRole, roles } from "@/data/careers";
import { contactHref, CTA_PATHS } from "@/data/site";
import { pageMetadata } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return roles.map((role) => ({ slug: role.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return pageMetadata("Careers role", "Fictional example role from the VIREN Pharma careers concept.", `/careers/${slug}`);
  return pageMetadata(`${role.title} | Careers`, `${role.summary} Fictional example listing; not an open vacancy.`, `/careers/${role.slug}`);
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Careers", href: CTA_PATHS.careers }, { label: role.title }]} />
      <section className="section role-detail"><div className="container">
        <div className="role-detail__header"><div><p className="eyebrow"><span className="eyebrow__line" />FICTIONAL ROLE / {role.department.toUpperCase()}</p><h1>{role.title}</h1><p className="role-detail__summary">{role.summary}</p></div><aside className="role-detail__meta"><span>{role.location}</span><span>{role.department}</span><span>{role.experience}</span><span>Example only · not an open vacancy</span></aside></div>
        <ConceptNote>This is a fictional job-detail example. It is not an active opening and does not represent a real employer, work location, salary, benefits, or employment offer.</ConceptNote>
        <div className="role-detail__content"><div><p className="eyebrow"><span className="eyebrow__line" />THE ROLE</p><h2>Work with care<br /><em>and clarity.</em></h2><p>This sample role shows how responsibilities and experience notes could be presented. Actual hiring requirements would need review by a real team.</p></div><div className="role-detail__lists"><EditorialNote number="01" title="What the role could involve"><ul>{role.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></EditorialNote><EditorialNote number="02" title="What the team might value"><ul>{role.profile.map((item) => <li key={item}>{item}</li>)}</ul></EditorialNote></div></div>
        <div className="role-detail__action"><div><p className="eyebrow"><span className="eyebrow__line" />EXAMPLE APPLICATION PATH</p><p>Use the careers inquiry form to view the local demo confirmation state. It does not accept or send an application.</p></div><ButtonLink href={contactHref("Careers", role.title)}>Open careers inquiry</ButtonLink></div>
      </div></section>
    </>
  );
}
