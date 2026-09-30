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
    <div className="w-screen h-full bg-gray-500 flex justify-between items-center px-10 py-5">

      <div className="flex gap-8 text-sm">

        <Link href="/">
          Home
        </Link>

        <Link href="/Products">
          Products
        </Link>

        <Link href="/orders">
          Orders ({orders.length})
        </Link>

        <Link href="/about">
          About
        </Link>

        <Link href="/
Contact">
          Contact
        </Link>

      </div>

      <div className="flex gap-8">

        <Link
          href="/cart"
          className="flex bg-blue-500 px-4 py-1 rounded-sm text-sm gap-2 items-center"
        >
          <span>
            Shopping Cart ({cart.length})
          </span>

          <ShoppingCartPlus />
        </Link>

        <Link href="/login" className="bg-green-500 px-4 py-1 rounded-sm text-sm">
          Login
        </Link>

      </div>

    </div>
  );
}