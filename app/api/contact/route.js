import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    // In production, hook this up to an email provider or third-party (SendGrid, Formspree)
    // For now, we accept the payload and return success for testing and deployment.
    console.log('Contact form submission:', data);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
