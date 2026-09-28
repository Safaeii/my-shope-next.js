import Link from "next/link";
import { ShoppingCartPlus } from "lucide-react";
export default function Header() {
  return (
    <div className="w-screen h-full bg-gray-500 flex justify-between items-center px-10 py-5">
        <div className=" flex gap-8 text-sm ">
<Link href="/">Home</Link>
      <Link href="/Products">Products</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
        </div>
      
<div className=" flex gap-8">
  
   <Link
  href="/cart"
  className="flex bg-blue-500 px-4 py-1 rounded-sm text-sm gap-2 items-center"
>
  <span>Shopping Cart</span>
  <ShoppingCartPlus />
</Link>
       <button className="bg-green-500 px-4 py-1 rounded-sm text-sm "> Login</button>
</div>
   
    </div>
  );
}