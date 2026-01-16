// src/app/api/items/route.js
import { NextResponse } from 'next/server';
import { items } from '../data'; // ডাটা ইম্পোর্ট করছি

export async function GET() {
    return NextResponse.json(items);
}

// আপনি চাইলে POST মেথডও এখানে রাখতে পারেন (যদিও আমরা ফন্টএন্ডে ব্যবহার করছি না)
export async function POST(request) {
    const data = await request.json();
    const newItem = {
        id: items.length + 1,
        ...data,
        image: data.image || "https://via.placeholder.com/150"
    };
    items.push(newItem);
    return NextResponse.json(newItem, { status: 201 });
}