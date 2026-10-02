import Link from "next/link";
import { CTA_PATHS, PRIMARY_CTA } from "@/data/site";
import { ArrowIcon, VirenMark } from "@/components/Icons";

const footerGroups = [
  { label: "Company", links: [{ label: "About", href: CTA_PATHS.about }, { label: "Science & innovation", href: CTA_PATHS.science }, { label: "Manufacturing", href: CTA_PATHS.manufacturing }, { label: "Quality", href: CTA_PATHS.quality }] },
  { label: "Explore", links: [{ label: "Products", href: CTA_PATHS.products }, { label: "For professionals", href: CTA_PATHS.professionals }, { label: "News & insights", href: CTA_PATHS.insights }] },
  { label: "Connect", links: [{ label: "Careers", href: CTA_PATHS.careers }, { label: "Contact", href: CTA_PATHS.contact }] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <Link className="brand brand--footer" href="/">
              <VirenMark className="brand__mark" />
              <span className="brand__name">VIREN<span>PHARMA</span></span>
            </Link>
            <p>Advancing Better Health.</p>
            <span className="site-footer__location">Cairo, Egypt · Fictional project</span>
          </div>
          {footerGroups.map((group) => (
            <div className="site-footer__group" key={group.label}>
              <h2>{group.label}</h2>
              {group.links.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </div>
          ))}
          <Link className="site-footer__cta" href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}<ArrowIcon /></Link>
        </div>
        <div className="site-footer__bottom">
          <p>Concept portfolio only. Products, statistics, roles, and articles are fictional. Not medical guidance.</p>
          <span>© {new Date().getFullYear()} VIREN Pharma · Design demonstration</span>
        </div>
      </div>
    </footer>
  );
}
