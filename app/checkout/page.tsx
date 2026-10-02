"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
const { cart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  khoroo: "",
  address: "",
  note: "",
});

const [error, setError] = useState("");
const [orderSuccess, setOrderSuccess] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleOrder = () => {
  if (
    !formData.firstName.trim() ||
    !formData.lastName.trim() ||
    !formData.email.trim() ||
    !formData.phone.trim() ||
    !formData.city.trim() ||
    !formData.khoroo.trim() ||
    !formData.address.trim()
  ) {
    setError("Please fill in all required fields.");
    return;
  }

  if (cart.length === 0) {
    setError("Your cart is empty.");
    return;
  }

  setError("");

  // Эхлээд success дэлгэц рүү шилжүүлнэ
  setOrderSuccess(true);

  // Дараа нь cart цэвэрлэнэ
  clearCart();
};

if (orderSuccess) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">

          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-black text-white flex items-center justify-center text-4xl">
            ✓
          </div>

          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">
            ORDER CONFIRMED
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Thank you!
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Your order has been placed successfully.
            We will contact you shortly to confirm your delivery.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>

        </div>
      </section>
    </main>
  );
}

return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-3">
            SHOPLY CHECKOUT
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Checkout
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-16">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="border border-gray-300 px-4 py-4 outline-none focus:border-black"
            />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="border border-gray-300 px-4 py-4 outline-none focus:border-black"
            />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="md:col-span-2 border border-gray-300 px-4 py-4 outline-none focus:border-black"
            />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="md:col-span-2 border border-gray-300 px-4 py-4 outline-none focus:border-black"
            />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6">
              Shipping Address
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City / District"
                className="border border-gray-300 px-4 py-4 outline-none focus:border-black"
            />

              <input
            type="text"
            name="khoroo"
            value={formData.khoroo}
            onChange={handleChange}
            placeholder="Khoroo"
            className="border border-gray-300 px-4 py-4 outline-none focus:border-black"
            />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street / Apartment"
                className="md:col-span-2 border border-gray-300 px-4 py-4 outline-none focus:border-black"
            />

              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Additional delivery information"
                rows={4}
                className="md:col-span-2 border border-gray-300 px-4 py-4 outline-none focus:border-black resize-none"
            />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="bg-[#f7f7f5] p-8">
              <h2 className="text-2xl font-semibold mb-7">
                Your Order
              </h2>

              <div className="space-y-5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-5"
                  >
                    <div>
                      <p className="font-medium">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-medium">
                      ₮{(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 mt-7 pt-6">
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Subtotal</span>
                  <span>₮{cartTotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-gray-600 mb-6">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between text-xl font-bold border-t border-gray-300 pt-5">
                  <span>Total</span>
                  <span>₮{cartTotal.toLocaleString()}</span>
                </div>
              </div>

            {error && (
                <p className="mt-6 text-sm text-red-600 text-center">
                    {error}
                </p>
            )}

            <button
                type="button"
                onClick={handleOrder}
                className="w-full bg-black text-white py-4 rounded-full mt-8 text-lg hover:bg-gray-800 transition"
            >
                Place Order
            </button>
        
              <Link
                href="/cart"
                className="block text-center text-sm text-gray-500 mt-5 hover:text-black"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

