import { NextResponse } from 'next/server';
import { items } from '../data'; 

export async function GET() {
    return NextResponse.json(items);
}


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