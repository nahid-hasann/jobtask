import Link from "next/link";

// ডাটা ফেচ করার ফাংশন
async function getItems() {
  // আমাদের ব্যাকএন্ড পোর্ট 5001 এ চলছে
  // আগের কোড: fetch('http://localhost:5001/api/items', ...)

  // নতুন কোড (Localhost এর জন্য):
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/items/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems(); // সার্ভার থেকে ডাটা আনা হচ্ছে

  return (
    <div className="container mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        All Products
      </h1>

      {/* গ্রিড লেআউট */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition bg-white">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">
                ${item.price}
              </span>
              <Link
                href={`/items/${item.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}