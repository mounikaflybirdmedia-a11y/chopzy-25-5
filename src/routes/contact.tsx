import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, User } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Chopzy" },
      { name: "description", content: "Get in touch with the Chopzy team — call, email or send us a message." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="container-px mx-auto max-w-6xl pt-14">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Let's talk.</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Questions about an order, want to wholesale with us, or just say hi? We're listening.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          {[
            { icon: User, label: "Owner", value: "Bablu" },
            { icon: Phone, label: "Phone", value: "+91 91103 33759", href: "tel:+919110333759" },
            { icon: Mail, label: "Email", value: "hello@chopzy.in", href: "mailto:hello@chopzy.in" },
            { icon: MapPin, label: "Service area", value: "India" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="mt-1 block font-display text-2xl hover:text-primary">{c.value}</a>
                ) : (
                  <p className="mt-1 font-display text-2xl">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you soon."); }}
          className="rounded-3xl border border-border bg-secondary/40 p-8"
        >
          <h2 className="font-display text-2xl">Send a message</h2>
          <div className="mt-6 grid gap-4">
            <input required placeholder="Your name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input placeholder="Phone (optional)" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <textarea required rows={5} placeholder="How can we help?" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <button className="rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
