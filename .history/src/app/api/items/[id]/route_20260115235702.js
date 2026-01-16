import { NextResponse } from 'next/server';
import { items } from '../../data';

export async function GET(request, { params }) {
    // Next.js 15 এ params একটি Promise, তাই await করতে হবে
    const { id } = await params;

    const item = items.find((i) => i.id === parseInt(id));

    if (!item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(item);
}