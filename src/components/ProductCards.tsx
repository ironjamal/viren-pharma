"use client";

import Link from "next/link";
import { LazyMotion, MotionConfig } from "motion/react";
import * as m from "motion/react-m";
import type { Product } from "@/data/products";
import { ArrowIcon } from "@/components/Icons";

const loadMotionFeatures = () => import("./motion-features").then((module) => module.default);

export function ProductVisual({ product, large = false }: { product: Pick<Product, "name" | "form" | "color">; large?: boolean }) {
  return (
    <div className={`product-visual product-visual--${product.color}${large ? " product-visual--large" : ""}`} aria-hidden="true">
      <span className="product-visual__halo" />
      <span className="product-visual__shadow" />
      <span className={`product-pack${product.form === "Cream" ? " product-pack--tube" : product.form === "Syrup" ? " product-pack--bottle" : product.form === "Care kit" ? " product-pack--kit" : ""}`}>
        <span className="product-pack__cap" />
        <span className="product-pack__brand">VIREN</span>
        <span className="product-pack__name">{product.name}</span>
        <span className="product-pack__rule" />
        <span className="product-pack__category">{product.form} · concept</span>
        <span className="product-pack__seal">DEMO</span>
      </span>
      <span className="product-visual__index">CONCEPT / {product.form.toUpperCase()}</span>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <m.article className="product-card" whileHover={{ y: -3 }} transition={{ duration: 0.28 }}>
      <Link href={`/products/${product.slug}`} className="product-card__link">
        <ProductVisual product={product} />
        <div className="product-card__copy">
          <div className="product-card__meta"><span>{product.therapeuticArea}</span><span>{product.form}</span></div>
          <h3>{product.name}</h3>
          <p>{product.shortDescription}</p>
          <span className="product-card__arrow" aria-hidden="true"><ArrowIcon /></span>
        </div>
      </Link>
    </m.article>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadMotionFeatures} strict>
        <div className="product-grid">{items.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </LazyMotion>
    </MotionConfig>
  );
}
