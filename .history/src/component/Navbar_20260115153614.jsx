import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    JobTask Store
                </Link>

                {/* Menu Items */}
                <div className="flex gap-6 items-center">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                        Home
                    </Link>
                    <Link href="/items" className="text-gray-700 hover:text-blue-600 font-medium">
                        Products
                    </Link>
                    <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}