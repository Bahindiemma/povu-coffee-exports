import { NextResponse } from 'next/server';
import { z } from 'zod';
import { generateOrderNumber } from '@/lib/utils/order';
import { sanitizeObject } from '@/lib/utils/sanitize';

const orderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  variant: z.string().optional(),
  priceUGX: z.number().min(0),
  priceUSD: z.number().min(0),
  quantity: z.number().int().min(1).max(100),
  type: z.enum(['single', 'bundle', 'subscription']),
});

const orderSchema = z.object({
  fullName: z.string().min(1).max(200),
  email: z.string().email(),
  phone: z.string().min(5).max(30),
  country: z.string().max(100).optional().default(''),
  address: z.string().min(1).max(500),
  deliveryMethod: z.enum(['kampala', 'international', 'pickup']),
  paymentMethod: z.enum(['mtn', 'airtel', 'bank', 'paypal']),
  notes: z.string().max(1000).optional().default(''),
  items: z.array(orderItemSchema).min(1).max(50),
  subtotal: z.number().min(0),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = orderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid order data', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { items, subtotal, ...customerData } = parsed.data;
    const sanitizedCustomer = sanitizeObject(customerData);
    const orderNumber = generateOrderNumber();

    const order = {
      orderNumber,
      customer: {
        fullName: sanitizedCustomer.fullName,
        email: sanitizedCustomer.email,
        phone: sanitizedCustomer.phone,
        country: sanitizedCustomer.country,
        address: sanitizedCustomer.address,
      },
      delivery: sanitizedCustomer.deliveryMethod,
      payment: sanitizedCustomer.paymentMethod,
      notes: sanitizedCustomer.notes,
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
