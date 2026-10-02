import Navbar from "../../components/Navbar";
import ProductGrid from "../../components/ProductGrid";

export default function ProductsPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#f7f7f5] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">
            SHOPLY COLLECTION
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Shop
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            Explore our latest collection and find your perfect style.
          </p>
        </div>
      </section>

      <ProductGrid />
    </main>
  );
}
