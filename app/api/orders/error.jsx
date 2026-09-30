"use client";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Something went wrong!
        </h2>

        <p className="text-gray-400 mb-6">
          خطایی در بارگذاری سفارش‌ها رخ داده است.
        </p>

        <button
          onClick={() => reset()}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl"
        >
          دوباره تلاش کن
        </button>
      </div>
    </main>
  );
}