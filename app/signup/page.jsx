

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  UserPlus,
  ArrowRight,
} from "lucide-react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("رمز عبور و تکرار آن یکسان نیست");
      return;
    }

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      alert(data.message || "ثبت نام انجام نشد");
      return;
    }

    alert("ثبت نام با موفقیت انجام شد");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-12 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
          >
            My<span className="text-blue-500">Store</span>
          </Link>

          <p className="mt-3 text-gray-400">
            Create your account
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-blue-500/20 bg-slate-900/90 p-8 shadow-2xl shadow-black/30 backdrop-blur">

          {/* Header */}
          <div className="mb-7">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <UserPlus size={24} />
            </div>

            <h1 className="text-2xl font-bold">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              برای ادامه یک حساب کاربری بسازید
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-700
                    bg-slate-950
                    py-3.5
                    pl-11
                    pr-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                  "
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-700
                    bg-slate-950
                    py-3.5
                    pl-11
                    pr-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                  "
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-700
                    bg-slate-950
                    py-3.5
                    pl-11
                    pr-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                  "
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-700
                    bg-slate-950
                    py-3.5
                    pl-11
                    pr-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                  "
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                py-3.5
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:bg-blue-700
                hover:shadow-blue-600/30
                active:scale-[0.98]
              "
            >
              Create Account

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-7 text-center text-sm text-gray-400">
            قبلاً حساب ساخته‌اید؟

            <Link
              href="/login"
              className="ml-1 font-medium text-blue-400 transition hover:text-blue-300"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Back Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 transition hover:text-blue-400"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}