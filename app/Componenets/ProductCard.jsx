
"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ShoppingCartPlus } from "lucide-react";

import CartContext from "../../context/CartContext";

export default function ProductCard({
  name,
  price,
  image,
  id,
}) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-blue-500/20
        bg-slate-950
        p-4
        shadow-lg
        shadow-black/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/60
        hover:shadow-blue-500/10
      "
    >

      {/* Product */}
      <Link href={`/Products/${id}`}>

        {/* Image */}
        <div
          className="
            relative
            h-52
            overflow-hidden
            rounded-xl
            border
            border-blue-500/40
            bg-slate-900
          "
        >
          <Image
            src={image}
            alt={name}
            fill
            className="
              object-contain
              p-4
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Info */}
        <div className="px-1 pt-4">

          <h2
            className="
              text-lg
              font-bold
              text-white
              line-clamp-1
              group-hover:text-blue-400
              transition-colors
            "
          >
            {name}
          </h2>

          <p className="mt-2 text-lg font-semibold text-blue-400">
            {price} $
          </p>

        </div>

      </Link>

      {/* Add To Cart */}
      <button
        onClick={() =>
          addToCart({
            id,
            name,
            price,
            image,
          })
        }
        className="
          mt-4
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-4
          py-3
          text-sm
          font-semibold
          text-white
          shadow-md
          shadow-blue-600/20
          transition-all
          duration-300
          hover:bg-blue-700
          hover:shadow-lg
          hover:shadow-blue-600/30
          active:scale-[0.98]
        "
      >
        <ShoppingCartPlus size={18} />
        Add to Cart
      </button>

    </div>
  );
}

