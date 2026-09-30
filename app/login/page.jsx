// "use client";

// import { useState } from "react";
// import Link from "next/link";
// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const response = await fetch("/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(form),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     alert(data.message);
//     return;
//   }

//   alert("ورود موفق بود");

//   console.log(data);
// };
//   return (
//     <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
//       <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">
//         <h1 className="text-3xl font-bold mb-2">
//           Login
//         </h1>

//         <p className="text-gray-400 mb-8">
//           وارد حساب کاربری خود شوید
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block mb-2">
//               Email
//             </label>

//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="example@gmail.com"
//               className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block mb-2">
//               Password
//             </label>

//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="********"
//               className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-bold transition"
//           >
//             Login
//           </button>
//           <p className="text-center text-gray-400 mt-6">
//   حساب کاربری ندارید؟{" "}
//   <Link
//     href="/signup"
//     className="text-blue-500 hover:text-blue-400"
//   >
//     Sign Up
//   </Link>
// </p>
//         </form>
//       </div>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

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
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center justify-center px-6 py-12">

      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-blue-600/15 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
          >
            My<span className="text-blue-500">Store</span>
          </Link>

          <p className="text-gray-400 mt-3">
            Welcome back
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-blue-500/20 bg-slate-900/90 p-8 shadow-2xl shadow-black/30 backdrop-blur">

          <div className="mb-7">
            <h1 className="text-2xl font-bold">
              Login to your account
            </h1>

            <p className="text-sm text-gray-400 mt-2">
              وارد حساب کاربری خود شوید
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
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
              <div className="flex items-center justify-between mb-2">

                <label className="text-sm font-medium text-gray-300">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs text-blue-400 hover:text-blue-300 transition"
                >
                  Forgot password?
                </Link>

              </div>

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

            {/* Login Button */}
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
              Login

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </form>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-400 mt-7">

            حساب کاربری ندارید؟

            <Link
              href="/signup"
              className="ml-1 font-medium text-blue-400 hover:text-blue-300 transition"
            >
              Sign Up
            </Link>

          </p>

        </div>

        {/* Back Home */}
        <div className="text-center mt-6">

          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-blue-400 transition"
          >
            ← Back to Home
          </Link>

        </div>

      </div>
    </main>
  );
}

