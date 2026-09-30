

"use client";

import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { ShoppingCartPlus } from "lucide-react";

import CartContext from "../../context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
      });
  }, []);

  return (
    <header className="w-full bg-slate-950 text-white border-b border-blue-500/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          My<span className="text-blue-500">Store</span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">

          <Link
            href="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/Products"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Products
          </Link>

          <Link
            href="/orders"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Orders
            <span className="ml-1 text-blue-400">
              ({orders.length})
            </span>
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            About
          </Link>

          <Link
            href="/Contact"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Contact
          </Link>

        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <Link
            href="/cart"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              bg-blue-600
              text-white
              text-sm
              font-medium
              hover:bg-blue-700
              transition-all
              duration-200
              shadow-lg
              shadow-blue-600/20
            "
          >
            <ShoppingCartPlus size={18} />

            <span>
              Cart ({cart.length})
            </span>
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className="
              px-4
              py-2
              rounded-xl
              border
              border-blue-500/30
              text-blue-400
              text-sm
              font-medium
              hover:bg-blue-500/10
              transition-all
              duration-200
            "
          >
            Login
          </Link>

        </div>

      </div>

    </header>
  );
}

