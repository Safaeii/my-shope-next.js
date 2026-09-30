"use client";

import { useState } from "react";
import Link from "next/link";
export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.message);
    return;
  }

  alert("ورود موفق بود");

  console.log(data);
};
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          Login
        </h1>

        <p className="text-gray-400 mb-8">
          وارد حساب کاربری خود شوید
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-bold transition"
          >
            Login
          </button>
          <p className="text-center text-gray-400 mt-6">
  حساب کاربری ندارید؟{" "}
  <Link
    href="/signup"
    className="text-blue-500 hover:text-blue-400"
  >
    Sign Up
  </Link>
</p>
        </form>
      </div>
    </main>
  );
}