import { Link } from "@tanstack/react-router";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl">chopzy</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Farm-fresh vegetables, fruit bowls, meal kits and meat — washed, cut and packed with care.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/shop" search={{ c: "vegetables" } as any} className="hover:text-primary">Vegetables</Link></li>
            <li><Link to="/shop" search={{ c: "cut-vegetables" } as any} className="hover:text-primary">Ready-to-Cook</Link></li>
            <li><Link to="/shop" search={{ c: "fruits" } as any} className="hover:text-primary">Fruit Bowls</Link></li>
            <li><Link to="/shop" search={{ c: "meal-kits" } as any} className="hover:text-primary">Meal Kits</Link></li>
            <li><Link to="/shop" search={{ c: "meat" } as any} className="hover:text-primary">Meat</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">Our story</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 91103 33759</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@chopzy.in</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Chopzy · Founded by Bablu · All rights reserved.
      </div>
    </footer>
  );
}
