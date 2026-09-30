export default function About() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold mb-6">
            About Us
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            ما یک فروشگاه آنلاین هستیم که تلاش می‌کنیم
            تجربه‌ای ساده، سریع و راحت برای خرید محصولات دیجیتال
            فراهم کنیم.
          </p>
        </section>

        {/* About */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              کیفیت
            </h2>

            <p className="text-gray-400 leading-7">
              تلاش می‌کنیم محصولات با کیفیت و مناسب را
              در اختیار کاربران قرار دهیم.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              سرعت
            </h2>

            <p className="text-gray-400 leading-7">
              هدف ما ارائه یک تجربه سریع و ساده در تمام
              مراحل خرید است.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              پشتیبانی
            </h2>

            <p className="text-gray-400 leading-7">
              رضایت کاربران برای ما مهم است و تلاش می‌کنیم
              تجربه خوبی برای مشتری ایجاد کنیم.
            </p>
          </div>

        </section>

        {/* Mission */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-5">
            Our Mission
          </h2>

          <p className="text-gray-400 leading-8 max-w-3xl mx-auto">
            هدف ما ساخت یک فروشگاه مدرن با رابط کاربری ساده،
            طراحی واکنش‌گرا و تجربه کاربری مناسب است.
          </p>
        </section>

      </div>
    </main>
  );
}