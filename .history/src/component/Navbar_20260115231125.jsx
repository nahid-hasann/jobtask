'use client';

import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
    const { user, logOut } = useAuth();

    const handleLogout = async () => {
        try {
            await logOut();
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    return (
        <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
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

                    {/* লগিন থাকলে Logout দেখাবে, না থাকলে Login */}
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-gray-600 hidden md:block">
                                {user.email}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-5 py-2 rounded-full font-bold hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}