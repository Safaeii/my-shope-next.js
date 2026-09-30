"use client";

import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("ORDER:", form);

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);

    alert("سفارش با موفقیت ثبت شد!");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Checkout
        </h1>

        <p className="text-gray-400 mb-8">
          اطلاعات خود را برای ثبت سفارش وارد کنید
        </p>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block mb-2 text-gray-300">
                نام و نام خانوادگی
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="نام خود را وارد کنید"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                شماره موبایل
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="09123456789"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                آدرس
              </label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="آدرس کامل خود را وارد کنید"
                rows="4"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition resize-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                کد پستی
              </label>

              <input
                type="text"
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                placeholder="کد پستی"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition"
            >
              ثبت سفارش
            </button>

          </form>

        </div>
      </div>
    </main>
  );
}