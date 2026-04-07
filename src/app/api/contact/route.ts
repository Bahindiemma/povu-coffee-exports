import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, country, volume, product, message, type } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log('Contact/Export enquiry received:', JSON.stringify({
      type: type || 'contact',
      name,
      email,
      company,
      country,
      volume,
      product,
      message,
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
