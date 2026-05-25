import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export interface CartLine {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  variant?: "whole" | "cut";
  qty: number;
}

interface CartCtx {
  lines: CartLine[];
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  remove: (id: string, variant?: CartLine["variant"]) => void;
  setQty: (id: string, variant: CartLine["variant"] | undefined, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const Ctx = createContext<CartCtx | null>(null);
const key = (id: string, v?: string) => `${id}::${v ?? "whole"}`;

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("chopzy-cart");
      if (raw) setLines(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem("chopzy-cart", JSON.stringify(lines));
  }, [lines]);

  const add: CartCtx["add"] = (line, qty = 1) => {
    setLines((prev) => {
      const k = key(line.id, line.variant);
      const i = prev.findIndex((l) => key(l.id, l.variant) === k);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { ...line, qty }];
    });
    setOpen(true);
  };

  const remove: CartCtx["remove"] = (id, variant) =>
    setLines((p) => p.filter((l) => key(l.id, l.variant) !== key(id, variant)));

  const setQty: CartCtx["setQty"] = (id, variant, qty) =>
    setLines((p) =>
      p
        .map((l) => (key(l.id, l.variant) === key(id, variant) ? { ...l, qty } : l))
        .filter((l) => l.qty > 0)
    );

  const clear = () => setLines([]);

  const value = useMemo<CartCtx>(
    () => ({
      lines,
      add,
      remove,
      setQty,
      clear,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: lines.reduce((s, l) => s + l.qty * l.price, 0),
      open,
      setOpen,
    }),
    [lines, open]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
};
