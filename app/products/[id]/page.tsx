import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import AddToCartButton from "../../../components/AddToCartButton";

const products = [
  {
    id: "1",
    name: "Ivory Blazer",
    category: "Women",
    price: 289000,
    image: "/images/product-1.png",
    description:
      "A timeless ivory blazer designed with a clean silhouette for an effortless everyday style.",
  },
  {
    id: "2",
    name: "Classic Black Bag",
    category: "Accessories",
    price: 249000,
    image: "/images/product-2.png",
    description:
      "A minimal structured bag designed to complement both casual and elegant outfits.",
  },
  {
    id: "3",
    name: "Minimal Dress",
    category: "Women",
    price: 199000,
    image: "/images/product-3.png",
    description:
      "A simple and elegant dress created for a modern minimalist wardrobe.",
  },
  {
    id: "4",
    name: "Classic Heels",
    category: "Shoes",
    price: 179000,
    image: "/images/product-4.png",
    description:
      "Classic heels with a refined silhouette for an elegant everyday look.",
  },
];

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="min-h-[500px] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5">
            Product not found
          </h1>

          <Link href="/products" className="underline">
            Back to Shop
          </Link>
        </div>
      </>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* PRODUCT IMAGE */}
          <div className="relative aspect-[4/5] bg-[#f5f5f5]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="flex flex-col justify-center">

            <p className="text-sm tracking-[0.25em] text-gray-500 uppercase mb-4">
              {product.category}
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-5">
              {product.name}
            </h1>

            <p className="text-2xl font-semibold text-black mb-8">
              ₮{product.price.toLocaleString()}
            </p>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              {product.description}
            </p>

            {/* SIZE */}
            <div className="mb-8">
              <p className="font-medium mb-4">
                Select Size
              </p>

              <div className="flex gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-gray-300 hover:border-black transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ADD TO CART */}
            <AddToCartButton product={product} />

            <Link
              href="/products"
              className="text-center text-sm text-gray-500 mt-6 hover:text-black"
            >
              ← Back to Shop
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}

