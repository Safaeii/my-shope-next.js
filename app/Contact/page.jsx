"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("CONTACT:", form);

    alert("پیام شما با موفقیت ارسال شد");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">

        <section className="text-center py-12">
          <h1 className="text-5xl font-bold mb-5">
            Contact Us
          </h1>

          <p className="text-gray-400 text-lg">
            اگر سوال یا پیشنهادی دارید، با ما در ارتباط باشید.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              اطلاعات تماس
            </h2>

            <div className="space-y-5 text-gray-400">
              <div>
                <p className="text-white font-semibold">
                  Email
                </p>
                <p>support@example.com</p>
              </div>

              <div>
                <p className="text-white font-semibold">
                  Phone
                </p>
                <p>0912 123 4567</p>
              </div>

              <div>
                <p className="text-white font-semibold">
                  Address
                </p>
                <p>Tehran, Iran</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="نام شما"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

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
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="پیام خود را بنویسید..."
                  rows="5"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-bold transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}