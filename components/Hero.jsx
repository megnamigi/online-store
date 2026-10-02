import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-170 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-fashion.png')",
      }}
    >
      {/* Text */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 min-h-170 flex items-center">
        <div className="max-w-150">

          <p className="text-sm md:text-base font-semibold tracking-[0.3em] text-gray-500 mb-8">
            NEW COLLECTION 2026
          </p>

          <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-7">
            Find your
            <br />
            perfect style.
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-125 mb-10">
            Discover our latest collection and find products made for your
            everyday style.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-8 bg-black text-white px-9 py-4 rounded-full text-lg hover:bg-gray-800 transition"
          >
            Shoply Now
            <span className="text-xl">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}