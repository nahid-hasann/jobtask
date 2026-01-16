import Link from "next/link";

// নির্দিষ্ট প্রোডাক্টের ডাটা ফেচ করার ফাংশন
async function getItem(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/items/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    return null; // ডাটা না পেলে null ফেরত দিবে
  }

  return res.json();
}

export default async function ItemDetails({ params }) {
  // Next.js 15 এ params একটি Promise, তাই await করতে হবে
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Item Not Found!</h2>
        <Link href="/items" className="text-blue-600 hover:underline">
          Go back to list
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link href="/items" className="text-gray-600 hover:text-blue-600 mb-8 inline-block font-semibold">
          &larr; Back to Products
        </Link>

        {/* Product Details Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Image Section */}
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
            <img 
              src={item.image} 
              alt={item.name} 
              className="max-h-[400px] object-contain drop-shadow-lg hover:scale-105 transition duration-500"
            />
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{item.name}</h1>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              {item.description} This is a placeholder description to show how the text looks in detail. High quality product ensuring best performance.
            </p>
            
            <div className="flex items-center gap-6 mb-8">
              <span className="text-4xl font-extrabold text-blue-600">${item.price}</span>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">In Stock</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold hover:border-gray-800 hover:text-gray-800 transition">
                Add to Wishlist
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}