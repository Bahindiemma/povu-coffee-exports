import { NextResponse } from 'next/server';
import { generateOrderNumber } from '@/lib/utils/order';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, country, address, deliveryMethod, paymentMethod, notes, items, subtotal } = body;

    if (!fullName || !email || !phone || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const orderNumber = generateOrderNumber();

    const order = {
      orderNumber,
      customer: { fullName, email, phone, country, address },
      delivery: deliveryMethod,
      payment: paymentMethod,
      notes: notes || '',
      items,
      subtotal,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    console.log('New order received:', JSON.stringify(order, null, 2));

    return NextResponse.json({
      success: true,
      orderNumber,
      message: `Order ${orderNumber} confirmed. Payment details will be sent within 2 hours.`,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to process order' }, { status: 500 });
  }
}
