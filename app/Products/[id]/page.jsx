import Image from "next/image";
import products from "../../data/products"

export default async function ProductDetails({ params,name }) {
  const { id } = await params;

const product = products.find(
  (product) => product.id === Number(id)

);
  if (!product) {
  return (
<h2> Not Found</h2>
  );
}
  return (
  <main className="min-h-screen bg-gray-50 p-10">
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="relative w-full h-96 bg-gray-100 rounded-3xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-gray-500 mb-3">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mb-5">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-3">
            Product ID: {id}
          </p>

          <p className="text-3xl font-bold text-green-600 mb-8">
            ${product.price}
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  </main>
  );
}

