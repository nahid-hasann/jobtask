import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* 1. Hero Section (Modern Gradient & Split Layout) */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <span className="bg-white/20 text-indigo-100 text-sm font-semibold px-4 py-1 rounded-full mb-4 inline-block">
              🔥 New Arrival
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Discover the <span className="text-yellow-300">Future</span> of Gadgets
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-lg mx-auto md:mx-0">
              Upgrade your lifestyle with our premium selection of tech, gear, and accessories.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link href="/items" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1">
                Shop Now
              </Link>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image (Placeholder) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img 
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop" 
                alt="Gadgets" 
                className="relative rounded-2xl shadow-2xl border-4 border-white/20 transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative Wave at bottom */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* 2. Features Section (Cards with Hover Effects) */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">We provide the best experience for our customers with top-notch services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Super Fast Delivery</h3>
            <p className="text-gray-600">Get your products delivered to your doorstep within 24 hours.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
             <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🛡️
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Secure Payment</h3>
            <p className="text-gray-600">100% secure payment gateways to ensure your safety.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
             <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🎧
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">24/7 Support</h3>
            <p className="text-gray-600">Our dedicated support team is here to help you anytime.</p>
          </div>
        </div>
      </section>

      {/* 4. Featured Categories (Visual Cards) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Browse Categories</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Electronics', 'Fashion', 'Home Decor', 'Accessories'].map((cat, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl cursor-pointer w-64 h-40 bg-gray-200 shadow-md">
                <div className={`absolute inset-0 bg-gradient-to-br ${idx % 2 === 0 ? 'from-blue-500 to-indigo-600' : 'from-pink-500 to-purple-600'} opacity-90 group-hover:scale-110 transition duration-500`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white tracking-wider">{cat}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section (Clean & Minimal) */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop" alt="Team" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are not just a store; we are a community of gadget lovers. Our mission is to bring the latest technology to your hands with the best possible price and service.
            </p>
            <button className="text-indigo-600 font-bold hover:underline">Read Our Story &rarr;</button>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section (Modern Cards) */}
      <section className="py-20 bg-white container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Trusted by Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm relative">
            <span className="text-4xl text-indigo-300 absolute top-4 left-4">“</span>
            <p className="text-gray-600 italic mb-4 relative z-10">"The delivery was incredibly fast, and the product quality exceeded my expectations. Will definitely shop again!"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
              <div>
                <h4 className="font-bold text-gray-800">Alex Johnson</h4>
                <p className="text-xs text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm relative">
            <span className="text-4xl text-indigo-300 absolute top-4 left-4">“</span>
            <p className="text-gray-600 italic mb-4 relative z-10">"Great customer support. I had an issue with my order, and they resolved it within minutes. Highly recommended."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
              <div>
                <h4 className="font-bold text-gray-800">Sarah Smith</h4>
                <p className="text-xs text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <details className="bg-indigo-800/50 p-4 rounded-lg cursor-pointer hover:bg-indigo-800 transition">
              <summary className="font-bold flex justify-between items-center">Do you ship internationally? <span>+</span></summary>
              <p className="mt-3 text-indigo-200">Yes, we ship all over the world with reliable courier partners.</p>
            </details>
            <details className="bg-indigo-800/50 p-4 rounded-lg cursor-pointer hover:bg-indigo-800 transition">
              <summary className="font-bold flex justify-between items-center">What is the return policy? <span>+</span></summary>
              <p className="mt-3 text-indigo-200">You can return any product within 30 days if it is unopened.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <section className="py-20 text-center container mx-auto px-6">
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl p-10 md:p-16 text-white shadow-2xl transform hover:scale-[1.01] transition duration-500">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay in the Loop</h2>
          <p className="mb-8 text-lg opacity-90">Subscribe to our newsletter for exclusive deals and updates.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-orange-300" />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
}