import { NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Valid email address required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Valid email required' },
        { status: 400 }
      );
    }

    console.log('Newsletter subscription:', parsed.data.email);

    return NextResponse.json({
      success: true,
      message: 'Subscribed successfully',
    });
  } catch {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
