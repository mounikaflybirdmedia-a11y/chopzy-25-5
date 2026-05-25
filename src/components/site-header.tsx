import { Link } from "@tanstack/react-router";
import { ShoppingBag, Leaf } from "lucide-react";
import { useCart } from "@/context/cart";

export function SiteHeader() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">chopzy</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link to="/" activeOptions={{ exact: true }} className="hover:text-primary [&.active]:text-primary">Home</Link>
          <Link to="/shop" className="hover:text-primary [&.active]:text-primary">Shop</Link>
          <Link to="/about" className="hover:text-primary [&.active]:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary [&.active]:text-primary">Contact</Link>
        </nav>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open cart"
          className="relative inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Basket</span>
          {count > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-semibold text-accent-foreground">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
