"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* TITLE */}
        <div className="mb-12">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-3">
            SHOPLY BAG
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Shopping Cart
          </h1>
        </div>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="py-24 text-center border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mb-8">
              Looks like you haven't added anything yet.
            </p>

            <Link
              href="/products"
              className="inline-flex bg-black text-white px-8 py-4 rounded-full"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-14">

            {/* LEFT - PRODUCTS */}
            <div className="space-y-8">

              {cart.map((item: {
                id: string | number;
                image: string;
                name: string;
                category: string;
                price: number;
                quantity: number;
              }) => (
                <div
                  key={item.id}
                  className="flex gap-6 border-b border-gray-200 pb-8"
                >

                  {/* IMAGE */}
                  <div className="relative w-36 h-44 shrink-0 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* INFORMATION */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>
                      <p className="text-sm text-gray-500 mb-2">
                        {item.category}
                      </p>

                      <h2 className="text-xl font-semibold text-black">
                        {item.name}
                      </h2>

                      <p className="mt-3 font-medium text-black">
                        ₮{item.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-end justify-between">

                      {/* QUANTITY */}
                      <div className="flex items-center border border-gray-300 text-black">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-10 h-10 text-xl"
                        >
                          −
                        </button>

                        <span className="w-10 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-10 h-10 text-xl"
                        >
                          +
                        </button>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-gray-500 underline hover:text-black"
                      >
                        Remove
                      </button>

                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* RIGHT - ORDER SUMMARY */}
            <div>
              <div className="bg-[#f7f7f5] p-8 sticky top-8">

                <h2 className="text-2xl font-semibold mb-8 text-black">
                  Order Summary
                </h2>

                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Subtotal</span>

                  <span>
                    ₮{cartTotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600 pb-6 border-b border-gray-300">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="flex justify-between text-xl font-semibold py-6">
                  <span>Total</span>

                  <span>
                    ₮{cartTotal.toLocaleString()}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="flex justify-center items-center w-full bg-black text-white py-4 rounded-full text-lg hover:bg-gray-800 transition"
                >
                  Checkout
                </Link>

                <Link
                  href="/products"
                  className="block text-center text-sm text-gray-500 mt-5 hover:text-black"
                >
                  ← Continue Shopping
                </Link>

              </div>
            </div>

          </div>
        )}
      </section>
    </main>
  );
}


