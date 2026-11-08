import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body || {};

    // Validasi sederhana email
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is required.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Simulasi penyimpanan berhasil di backend
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to Notion updates!",
        data: {
          email: email.trim().toLowerCase(),
          subscribedAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request payload. Please send valid JSON.",
      },
      { status: 400 }
    );
  }
}

