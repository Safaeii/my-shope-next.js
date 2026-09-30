export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>

        <p className="text-gray-400">
          در حال بارگذاری سفارش‌ها...
        </p>
      </div>
    </main>
  );
}