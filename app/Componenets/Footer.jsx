

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-blue-500/10">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              My Store
            </h2>

            <p className="text-gray-400 leading-7 max-w-sm">
              یک فروشگاه آنلاین مدرن برای خرید محصولات دیجیتال
              با تجربه‌ای ساده، سریع و لذت‌بخش.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                href="/"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                href="/Products"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p className="hover:text-blue-400 transition-colors">
                support@example.com
              </p>

              <p className="hover:text-blue-400 transition-colors">
                0912 123 4567
              </p>

              <p className="hover:text-blue-400 transition-colors">
                Tehran, Iran
              </p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 My Store. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

