"use client";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";
import CartContext from "../../context/CartContext";


export default function Cart() {
  const { cart ,removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-2">
        Shopping Cart
      </h1>

      <p className="text-gray-500 mb-8">
        تعداد محصولات: {cart.length}
      </p>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          سبد خرید خالی است
        </p>
      ) : (
        <>
          {/* Products */}
          <div className="space-y-4">
            {cart.map((product, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 flex items-center gap-5 hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative w-24 h-24 bg-gray-200 rounded-lg shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold">
                    {product.name}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    {product.price} $
                  </p>
                </div>

                {/* Remove */}
                <button
  onClick={() => removeFromCart(product.id)}
  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
>
  Remove
</button>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="mt-8 border rounded-xl p-6 max-w-md ml-auto">
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-semibold">
                مجموع:
              </span>

              <span className="text-2xl font-bold">
                {totalPrice} $
              </span>
            </div>

           <Link
  href="/checkout"
  className="block w-full bg-green-500 text-white py-3 rounded-xl font-bold text-center hover:bg-green-600 transition"
>
  تسویه حساب
</Link>
          </div>
        </>
      )}
    </main>
  );
}