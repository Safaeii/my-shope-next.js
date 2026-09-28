"use client";

import { useState } from "react";
import ProductCard from "../Componenets/ProductCard";
import products from "../data/products"


export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-3 w-full max-w-md mb-8"
      />

      <div className="flex gap-3 flex-wrap mb-8">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Phone")}>Phone</button>
        <button onClick={() => setCategory("Laptop")}>Laptop</button>
        <button onClick={() => setCategory("Tablet")}>Tablet</button>
        <button onClick={() => setCategory("Audio")}>Audio</button>
        <button onClick={() => setCategory("Watch")}>Watch</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            id={product.id}
          />
        ))}
      </div>
    </main>
  );
}