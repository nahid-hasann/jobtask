// src/app/api/items/[id]/route.js
import { NextResponse } from 'next/server';
import { items } from '../../data';

export async function GET(request, { params }) {
    const { id } = params; // URL থেকে ID নেওয়া
    const item = items.find((i) => i.id === parseInt(id));

    if (!item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(item);
}