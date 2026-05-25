import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/cart";

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link to="/product/$id" params={{ id: p.id }} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link to="/product/$id" params={{ id: p.id }}>
          <h3 className="font-display text-lg leading-tight">{p.name}</h3>
        </Link>
        <p className="mt-1 text-xs text-muted-foreground">{p.short} · {p.unit}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-xl">₹{p.price}</span>
          <button
            onClick={() =>
              add({ id: p.id, name: p.name, price: p.price, unit: p.unit, image: p.image, variant: "whole" })
            }
            aria-label={`Add ${p.name}`}
            className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
