import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, Scissors, Truck, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-vegetables.jpg";
import cutVeggies from "@/assets/cut-veggies.jpg";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chopzy — Farm-fresh vegetables, meat & meal kits" },
      { name: "description", content: "Hand-picked vegetables, ready-to-cook cut veggies, fruit bowls, meal kits and meat — delivered fresh." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="container-px mx-auto max-w-7xl pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sprout className="h-3.5 w-3.5 text-primary" /> Hand-picked this morning
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              From the <em className="text-primary not-italic">farm</em>,<br />
              chopped for your <em className="text-accent not-italic">kitchen</em>.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Fresh vegetables, fruit bowls, meal kits and clean-cut meat — washed, cut and packed neatly. Ready to cook in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                Shop fresh <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
                Our story
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-xs text-muted-foreground">
              <div><Truck className="mb-1 h-4 w-4 text-primary" /> Same-day delivery</div>
              <div><Scissors className="mb-1 h-4 w-4 text-primary" /> Cut to order</div>
              <div><ShieldCheck className="mb-1 h-4 w-4 text-primary" /> Always fresh</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/10 grain" />
            <img
              src={hero}
              alt="Fresh vegetables flat lay"
              width={1600}
              height={1200}
              className="relative aspect-square w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-4 shadow-lg md:block">
              <p className="font-display text-2xl">120+</p>
              <p className="text-xs text-muted-foreground">local farm partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-px mx-auto mt-24 max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Shop by category</h2>
            <p className="mt-2 text-muted-foreground">Everything you need for a great meal.</p>
          </div>
          <Link to="/shop" className="hidden text-sm text-primary hover:underline md:inline">View all →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/shop"
              search={{ c: c.id } as any}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:bg-secondary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Sprout className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl">{c.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
                Browse <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-px mx-auto mt-24 max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-4xl md:text-5xl">This week's pick</h2>
          <Link to="/shop" className="text-sm text-primary hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* CUT & PACKED BANNER */}
      <section className="container-px mx-auto mt-24 max-w-7xl">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border bg-secondary/40 p-8 md:grid-cols-2 md:p-14">
          <img src={cutVeggies} alt="Cut vegetables neatly packed" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
              <Scissors className="h-3.5 w-3.5" /> Ready to cook
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Skip the prep.<br />Keep the freshness.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Add a vegetable to your basket and we'll suggest perfectly cut, washed and neatly packed companions —
              so your stir-fry, curry or salad is just minutes away.
            </p>
            <Link to="/shop" search={{ c: "cut-vegetables" } as any} className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90">
              Explore cut packs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
