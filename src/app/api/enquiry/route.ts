import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Forward the data to Google Apps Script from the SERVER
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}
