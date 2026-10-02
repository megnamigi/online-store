import Link from "next/link";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Ivory Blazer",
    category: "Women",
    price: 289000,
    image: "/images/product-1.png",
  },
  {
    id: 2,
    name: "Classic Black Bag",
    category: "Accessories",
    price: 249000,
    image: "/images/product-2.png",
  },
  {
    id: 3,
    name: "Minimal Dress",
    category: "Women",
    price: 199000,
    image: "/images/product-3.png",
  },
  {
    id: 4,
    name: "Classic Heels",
    category: "Shoes",
    price: 179000,
    image: "/images/product-4.png",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-3">
              SHOP OUR FAVORITES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Featured Products
            </h2>
          </div>

          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1"
          >
            View All
            <span>→</span>
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}