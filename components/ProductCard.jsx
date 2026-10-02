import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full aspect-3/4 bg-[#f5f5f5] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Wishlist */}
          <button
            type="button"
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm"
          >
            ♡
          </button>
        </div>
      </Link>

      {/* Product Information */}
      <div className="pt-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-medium text-black">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm mt-1">
          {product.category}
        </p>

        <div className="flex items-center justify-between mt-3">
          <p className="text-black font-semibold text-lg">
            ₮{product.price.toLocaleString()}
          </p>

          <button
            type="button"
            className="text-sm font-medium border-b border-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}