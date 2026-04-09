import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sanitizeObject } from '@/lib/utils/sanitize';

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  company: z.string().max(200).optional().default(''),
  country: z.string().max(100).optional().default(''),
  volume: z.string().max(50).optional().default(''),
  product: z.string().max(100).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  type: z.enum(['contact', 'export']).optional().default('contact'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = sanitizeObject(parsed.data);

    console.log('Contact/Export enquiry received:', JSON.stringify({
      ...data,
      receivedAt: new Date().toISOString(),
    }, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Enquiry received. We will respond within 48 hours.',
    });
  } catch {
    return NextResponse.json({ error: 'Failed to process enquiry' }, { status: 500 });
  }
}
