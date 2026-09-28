"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function ProductCard({ name, price, image, id }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-xl p-5">
      
      <Link href={`/Products/${id}`}>
        <div className="h-40 bg-gray-200 rounded-lg mb-4 relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-xl font-bold">
          {name}
        </h2>

        <p className="text-gray-600 mt-2">
          {price} $
        </p>
      </Link>

      <button
        onClick={() => addToCart({ id, name, price, image })}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Add to Cart
      </button>

    </div>
  );
}