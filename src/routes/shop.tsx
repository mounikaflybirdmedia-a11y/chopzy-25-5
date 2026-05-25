import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { categories, products, type Category } from "@/data/products";
import { ProductCard } from "@/components/product-card";

const search = z.object({
  c: z.enum(["vegetables", "cut-vegetables", "fruits", "meal-kits", "meat"]).optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Shop fresh — Chopzy" },
      { name: "description", content: "Browse vegetables, cut packs, fruit bowls, meal kits and fresh meat." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { c } = Route.useSearch();
  const filtered = c ? products.filter((p) => p.category === c) : products;
  const active: Category | undefined = c;

  return (
    <section className="container-px mx-auto max-w-7xl pt-10 md:pt-14">
      <div className="max-w-2xl">
        <h1 className="font-display text-5xl md:text-6xl">Shop fresh</h1>
        <p className="mt-3 text-muted-foreground">
          Hand-picked, washed and packed today. Add what you need — we'll suggest perfect pairings.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          to="/shop"
          className={`rounded-full border px-4 py-1.5 text-sm transition ${
            !active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to="/shop"
            search={{ c: cat.id }}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active === cat.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-muted"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
