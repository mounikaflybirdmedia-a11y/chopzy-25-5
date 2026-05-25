import tomato from "@/assets/p-tomato.jpg";
import carrot from "@/assets/p-carrot.jpg";
import spinach from "@/assets/p-spinach.jpg";
import onion from "@/assets/p-onion.jpg";
import pepper from "@/assets/p-pepper.jpg";
import garlic from "@/assets/p-garlic.jpg";
import potato from "@/assets/p-potato.jpg";
import cauliflower from "@/assets/p-cauliflower.jpg";
import brinjal from "@/assets/p-brinjal.jpg";
import okra from "@/assets/p-okra.jpg";
import cucumber from "@/assets/p-cucumber.jpg";
import fruitBowl from "@/assets/fruit-bowl.jpg";
import mealKit from "@/assets/meal-kit.jpg";
import meat from "@/assets/meat.jpg";
import mutton from "@/assets/p-mutton.jpg";
import prawns from "@/assets/p-prawns.jpg";
import fish from "@/assets/p-fish.jpg";
import cutVeggies from "@/assets/cut-veggies.jpg";

export type Category =
  | "vegetables"
  | "cut-vegetables"
  | "fruits"
  | "meal-kits"
  | "meat";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;     // INR per unit
  unit: string;      // "500 g", "1 kg", "pack"
  image: string;
  short: string;
  description: string;
  related?: string[]; // ids
  cutAvailable?: boolean;
  cutPrice?: number;
}

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: "vegetables", label: "Fresh Vegetables", blurb: "Hand-picked from local farms" },
  { id: "cut-vegetables", label: "Ready-to-Cook", blurb: "Washed, cut & neatly packed" },
  { id: "fruits", label: "Fruit Bowls", blurb: "Seasonal & ready to eat" },
  { id: "meal-kits", label: "Meal Kits", blurb: "Everything you need to cook" },
  { id: "meat", label: "Fresh Meat", blurb: "Cleaned, cut, vacuum sealed" },
];

export const products: Product[] = [
  {
    id: "tomato",
    name: "Vine Tomatoes",
    category: "vegetables",
    price: 40, unit: "500 g",
    image: tomato,
    short: "Sun-ripened, juicy",
    description: "Hand-picked vine tomatoes, sweet and firm — perfect for curries, salads and sauces.",
    related: ["onion", "garlic", "pepper"],
    cutAvailable: true, cutPrice: 55,
  },
  {
    id: "carrot",
    name: "Farm Carrots",
    category: "vegetables",
    price: 35, unit: "500 g",
    image: carrot,
    short: "Crisp & sweet",
    description: "Crisp orange carrots with their leafy tops — great raw, juiced or roasted.",
    related: ["spinach", "onion", "garlic"],
    cutAvailable: true, cutPrice: 50,
  },
  {
    id: "spinach",
    name: "Baby Spinach",
    category: "vegetables",
    price: 30, unit: "1 bunch",
    image: spinach,
    short: "Tender & nutrient-rich",
    description: "Tender baby spinach leaves, washed and ready to wilt into your favourite dishes.",
    related: ["garlic", "onion", "tomato"],
  },
  {
    id: "onion",
    name: "Red Onions",
    category: "vegetables",
    price: 28, unit: "1 kg",
    image: onion,
    short: "Sharp & aromatic",
    description: "Classic red onions, the backbone of every Indian kitchen.",
    related: ["tomato", "garlic", "pepper"],
    cutAvailable: true, cutPrice: 42,
  },
  {
    id: "pepper",
    name: "Bell Peppers",
    category: "vegetables",
    price: 60, unit: "500 g",
    image: pepper,
    short: "Crunchy & colourful",
    description: "Mixed red and green bell peppers — sweet, crunchy, and stir-fry ready.",
    related: ["onion", "tomato", "garlic"],
    cutAvailable: true, cutPrice: 75,
  },
  {
    id: "garlic",
    name: "Garlic & Ginger",
    category: "vegetables",
    price: 55, unit: "250 g",
    image: garlic,
    short: "Fragrant essentials",
    description: "Whole garlic bulbs and fresh ginger root — the aromatic base of countless meals.",
    related: ["onion", "tomato", "spinach"],
  },
  {
    id: "berry-bowl",
    name: "Berry Sunshine Bowl",
    category: "fruits",
    price: 220, unit: "350 g",
    image: fruitBowl,
    short: "Mixed berries & mango",
    description: "Mango, kiwi, blueberries, raspberries and pomegranate — peeled, cut, ready to enjoy.",
    related: ["tomato", "spinach"],
  },
  {
    id: "stirfry-kit",
    name: "Garden Stir-Fry Kit",
    category: "meal-kits",
    price: 320, unit: "serves 2",
    image: mealKit,
    short: "All-in-one cook box",
    description: "Pre-portioned veggies, sauces and recipe card. Cook a restaurant-style stir-fry in 15 minutes.",
    related: ["pepper", "onion", "garlic"],
  },
  {
    id: "chicken",
    name: "Country Chicken Cuts",
    category: "meat",
    price: 280, unit: "500 g",
    image: meat,
    short: "Cleaned & cut fresh",
    description: "Tender country chicken, hand-cleaned and cut to order. Delivered chilled and vacuum sealed.",
    related: ["onion", "garlic", "pepper"],
  },
  {
    id: "mirepoix",
    name: "Mirepoix Mix",
    category: "cut-vegetables",
    price: 90, unit: "300 g",
    image: cutVeggies,
    short: "Onion · carrot · celery",
    description: "Pre-diced onion, carrot and celery — the perfect base for soups, stocks and stews.",
    related: ["garlic", "tomato"],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getRelated = (p: Product) =>
  (p.related ?? []).map(getProduct).filter(Boolean) as Product[];
