"use client";

import { useMemo, useState } from "react";
import { products, productAudiences, productCategories, productTypes, therapeuticAreas, type ProductCategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductCards";

const allCategories = ["All products", ...productCategories] as const;

export function ProductExplorer({ initialCategory }: { initialCategory?: string }) {
  const validCategory = productCategories.includes(initialCategory as ProductCategory) ? initialCategory as ProductCategory : "All products";
  const [category, setCategory] = useState<string>(validCategory);
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All areas");
  const [form, setForm] = useState("All types");
  const [audience, setAudience] = useState("All audiences");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "All products" || product.category === category;
      const matchesQuery = !normalizedQuery || [product.name, product.therapeuticArea, product.category, product.shortDescription].some((value) => value.toLocaleLowerCase().includes(normalizedQuery));
      const matchesArea = area === "All areas" || product.therapeuticArea === area;
      const matchesForm = form === "All types" || product.form === form;
      const matchesAudience = audience === "All audiences" || product.audiences.includes(audience as (typeof productAudiences)[number]);
      return matchesCategory && matchesQuery && matchesArea && matchesForm && matchesAudience;
    });
  }, [category, query, area, form, audience]);

  const isFiltered = Boolean(query.trim()) || category !== "All products" || area !== "All areas" || form !== "All types" || audience !== "All audiences";
  function resetFilters() {
    setCategory("All products"); setQuery(""); setArea("All areas"); setForm("All types"); setAudience("All audiences");
  }

  return (
    <section className="explorer" aria-labelledby="explorer-title">
      <div className="explorer__toolbar">
        <div className="explorer__search-wrap">
          <label htmlFor="product-search">Search products</label>
          <input id="product-search" className="field field--search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products..." />
        </div>
        <div className="explorer__selects">
          <div className="field-wrap"><label htmlFor="product-area">Therapeutic area</label><select id="product-area" className="field" value={area} onChange={(event) => setArea(event.target.value)}><option>All areas</option>{therapeuticAreas.map((item) => <option key={item}>{item}</option>)}</select></div>
          <div className="field-wrap"><label htmlFor="product-form">Product type</label><select id="product-form" className="field" value={form} onChange={(event) => setForm(event.target.value)}><option>All types</option>{productTypes.map((item) => <option key={item}>{item}</option>)}</select></div>
          <div className="field-wrap"><label htmlFor="product-audience">Audience</label><select id="product-audience" className="field" value={audience} onChange={(event) => setAudience(event.target.value)}><option>All audiences</option>{productAudiences.map((item) => <option key={item}>{item === "Adult" ? "Adult" : item === "Pediatric" ? "Pediatric" : item}</option>)}</select></div>
        </div>
      </div>
      <div className="explorer__categories" role="group" aria-label="Product categories">
        {allCategories.map((item) => <button type="button" key={item} aria-pressed={category === item} className={`filter-chip${category === item ? " is-active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="explorer__results-head" aria-live="polite" aria-atomic="true">
        <h2 id="explorer-title">The portfolio <span>({filtered.length})</span></h2>
        {isFiltered ? <button type="button" className="text-button" onClick={resetFilters}>Clear filters</button> : <p>Fictional product concepts for this demonstration.</p>}
      </div>
      {filtered.length > 0 ? <ProductGrid items={filtered} /> : (
        <div className="empty-state" role="status"><span className="empty-state__mark" aria-hidden="true">0</span><h3>No concepts match those filters.</h3><p>Try a different term or clear the filters to see the full fictional portfolio.</p><button className="button button--secondary" type="button" onClick={resetFilters}>Clear filters</button></div>
      )}
      <p className="explorer__disclaimer">Names, categories, audience labels, and package forms are fictional examples. This catalogue is not a medical reference.</p>
    </section>
  );
}
