import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
    }

    const apiKey       = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      console.error("Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars");
      return NextResponse.json({ message: "Server configuration error." }, { status: 500 });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "fluxfut_website",
          utm_medium: "organic",
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Beehiiv error:", err);
      return NextResponse.json(
        { message: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Subscribed successfully." }, { status: 200 });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
}
