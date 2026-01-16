'use client';

import { useState } from "react";
// আপনার useAuth হুক ইম্পোর্ট করা হচ্ছে (পাথ ঠিক না থাকলে এরর দিতে পারে)
// import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function LoginPage() {
    const { signInUser } = useAuth(); // Context থেকে লগিন ফাংশন আনা হলো
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoading(true);
        setError("");

        try {
            await signInUser(email, password);
            // সফল হলে Items পেজে পাঠিয়ে দিবে
            router.push('/items');
        } catch (err) {
            setError("Invalid email or password");
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Welcome Back</h2>
                <p className="text-center text-gray-500 mb-8">Please login to your account</p>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="admin@example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="******"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account? <Link href="/register" className="text-blue-600 font-bold hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}