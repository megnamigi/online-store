"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          SHOPly.mn
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>

          <Link href="/products" className="text-gray-700 hover:text-black">
            Shop
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-5">

          <button type="button" className="text-xl">
            ♡
          </button>

          <Link href="/cart" className="relative text-xl">
            🛒

            <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

        </div>
      </div>
    </header>
  );
}
