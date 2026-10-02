import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowIcon } from "@/components/Icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return <Link className={`button button--${variant}${className ? ` ${className}` : ""}`} href={href}>{children}<ArrowIcon /></Link>;
}

type InlineLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode };

export function ArrowLink({ href, children, ...props }: InlineLinkProps) {
  return <Link className="arrow-link" href={href} {...props}>{children}<ArrowIcon /></Link>;
}
