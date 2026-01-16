'use client';

import { useState } from "react";
import useAuth from "@/hooks/useAuth"; // আপনার হুক ইম্পোর্ট
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
    const { createUser } = useAuth(); // Context থেকে createUser ফাংশন আনা হলো
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // পাসওয়ার্ড ভ্যালিডেশন (Firebase অন্তত ৬ ক্যারেক্টার চায়)
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);
        setError("");

        try {
            // ১. ইউজার তৈরি করা
            await createUser(email, password);

            // ২. সফল হলে Items পেজে পাঠিয়ে দিবে (Firebase অটোমেটিক লগিন করে দেয়)
            router.push('/items');
        } catch (err) {
            // এরর হ্যান্ডেলিং
            if (err.message.includes("email-already-in-use")) {
                setError("This email is already registered.");
            } else {
                setError(err.message);
            }
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Create Account</h2>
                <p className="text-center text-gray-500 mb-8">Join us to get started</p>

                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>
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
                            placeholder="****** (Min 6 chars)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg disabled:opacity-50"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Already have an account? <Link href="/login" className="text-blue-600 font-bold hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
}