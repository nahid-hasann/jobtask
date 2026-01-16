import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left space-y-8">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
              🚀 The Future of Tech is Here
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Digital Lifestyle
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Experience the cutting edge of technology with our curated collection of premium gadgets and accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/items" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50">
                Start Shopping
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
            <div className="relative w-full max-w-lg aspect-square">
              {/* FIXED HERO IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop"
                alt="VR Headset"
                className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition duration-700 ease-out z-10 relative border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Logos */}
      <section className="py-10 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Trusted by tech giants</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition duration-500">
            <h3 className="text-2xl font-bold text-gray-600">SONY</h3>
            <h3 className="text-2xl font-bold text-gray-600">SAMSUNG</h3>
            <h3 className="text-2xl font-bold text-gray-600">APPLE</h3>
            <h3 className="text-2xl font-bold text-gray-600">LG</h3>
            <h3 className="text-2xl font-bold text-gray-600">ASUS</h3>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-24 bg-white container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why We Stand Out</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Ultra-Fast Delivery", icon: "🚀", desc: "Get your gadgets within 24 hours anywhere in the city." },
            { title: "Official Warranty", icon: "🛡️", desc: "100% authentic products with manufacturer warranty." },
            { title: "24/7 Expert Support", icon: "👨‍💻", desc: "Talk to real tech experts anytime you need help." }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Trending Categories (FIXED IMAGES) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Explore Categories</h2>
              <p className="text-gray-500 mt-2">Browse through our wide range of collections.</p>
            </div>
            <Link href="/items" className="hidden md:block text-blue-600 font-bold hover:underline">View All &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Laptops */}
            <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop"
                alt="Laptops"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Laptops</h3>
              </div>
            </div>

            {/* Smartphones */}
            <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop"
                alt="Smartphones"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Smartphones</h3>
              </div>
            </div>

            {/* Accessories */}
            <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1572569028738-411a508d4a1b?q=80&w=400&auto=format&fit=crop"
                alt="Accessories"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Accessories</h3>
              </div>
            </div>

            {/* Gaming */}
            <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop"
                alt="Gaming"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Gaming</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. About Section (FIXED IMAGE) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Team"
                className="relative rounded-3xl shadow-2xl z-10"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">We Bring the Future to Your Doorstep</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2024, JobTask Store started with a simple mission: to make premium technology accessible to everyone. We believe in quality, transparency, and exceptional customer service.
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">Read Our Story</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Newsletter */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Tech Revolution</h2>
              <p className="text-blue-100 text-lg mb-10">Subscribe to our newsletter and get <span className="font-bold text-white">10% OFF</span> on your first order.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-4 rounded-full text-gray-800 focus:outline-none w-full sm:w-auto"
                />
                <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-black transition shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              "How long does shipping take?",
              "Can I return a product if I don't like it?",
              "Do you offer international shipping?",
              "Is my payment information secure?"
            ].map((question, idx) => (
              <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer">
                <summary className="flex justify-between items-center font-semibold p-6 text-gray-800 group-hover:text-blue-600 transition">
                  {question}
                  <span className="transform group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                  We aim to process all orders within 24 hours. Standard shipping takes 2-3 business days within the country.
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}