import "./globals.css";
import Header from "./Componenets/Header";
import { CartProvider } from "../context/CartContext";

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
      </body>
    </html>
  );
}