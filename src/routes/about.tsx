import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Heart, Truck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our story — Chopzy" },
      { name: "description", content: "Chopzy was founded by Bablu to bring farm-fresh produce, meal kits and meat straight to your kitchen." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="container-px mx-auto max-w-4xl pt-14">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">Our story</span>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">A kinder kitchen,<br />from the ground up.</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Chopzy was founded by <strong className="text-foreground">Bablu</strong> with one simple idea:
        good food shouldn't be a hassle. We partner with local farmers, hand-pick produce every morning,
        and deliver it washed, cut and packed neatly — so cooking at home feels effortless again.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: Leaf, title: "Local & seasonal", text: "Sourced daily from farms in our region — never sitting in cold storage for weeks." },
          { icon: Heart, title: "Made with care", text: "Every order is hand-prepped — washed, cut and packed by our in-house team." },
          { icon: Truck, title: "Fast & chilled", text: "From our kitchen to yours, delivered same-day in temperature-controlled bags." },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
