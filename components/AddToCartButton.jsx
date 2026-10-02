"use client";

import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full bg-black text-white py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  );
}