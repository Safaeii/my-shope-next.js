import "./globals.css";
import Header from "./Componenets/Header";
import { CartProvider } from "../context/CartContext";
import Footer from "./Componenets/Footer";
export const metadata = {
  title: "My Website",
  description: "My Next.js Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}