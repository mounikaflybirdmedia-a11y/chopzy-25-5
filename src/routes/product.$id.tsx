import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Scissors, Leaf, Plus, Minus } from "lucide-react";
import { getProduct, getRelated } from "@/data/products";
import { useCart } from "@/context/cart";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Chopzy` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Chopzy` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-3xl py-20 text-center">
      <h1 className="font-display text-4xl">Product not found</h1>
      <Link to="/shop" className="mt-6 inline-block text-primary hover:underline">Back to shop →</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = getRelated(product);
  const { add } = useCart();
  const [variant, setVariant] = useState<"whole" | "cut">("whole");
  const [qty, setQty] = useState(1);

  const price = variant === "cut" && product.cutPrice ? product.cutPrice : product.price;

  return (
    <section className="container-px mx-auto max-w-7xl pt-8">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border bg-muted">
          <img src={product.image} alt={product.name} width={1024} height={1024} className="aspect-square w-full object-cover" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{product.category.replace("-", " ")}</span>
          <h1 className="mt-2 font-display text-5xl md:text-6xl">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-4xl">₹{price}</span>
            <span className="text-sm text-muted-foreground">/ {product.unit}</span>
          </div>

          {product.cutAvailable && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">How should we prep it?</p>
              <div className="inline-flex rounded-full border border-border bg-card p-1">
                <button
                  onClick={() => setVariant("whole")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition ${
                    variant === "whole" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <Leaf className="h-3.5 w-3.5" /> Whole
                </button>
                <button
                  onClick={() => setVariant("cut")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition ${
                    variant === "cut" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <Scissors className="h-3.5 w-3.5" /> Cut & packed
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:bg-muted"><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-2 hover:bg-muted"><Plus className="h-4 w-4" /></button>
            </div>
            <button
              onClick={() =>
                add({ id: product.id, name: product.name, price, unit: product.unit, image: product.image, variant }, qty)
              }
              className="flex-1 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Add to basket — ₹{price * qty}
            </button>
          </div>

          <ul className="mt-8 grid gap-2 text-sm text-muted-foreground">
            <li>· Hand-picked & quality checked</li>
            <li>· Washed and packed in eco-friendly containers</li>
            <li>· Delivered chilled within hours</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <div className="mb-2 flex items-center gap-2">
            <Scissors className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium uppercase tracking-widest text-accent">Pairs perfectly with</span>
          </div>
          <h2 className="font-display text-4xl">Add the right companions</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            These go beautifully with your {product.name.toLowerCase()} — available whole or cut & neatly packed.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {related.map((r) => <ProductCard key={r.id} p={r} />)}
          </div>
        </div>
      )}
    </section>
  );
}
