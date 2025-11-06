import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * Get current session - untuk client-side
 * Middleware sudah handle refresh, jadi ini tinggal return session
 */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Validate token dengan backend
    const backendUrl = process.env.BACKEND_URL || "http://localhost:2000";
    const response = await fetch(`${backendUrl}/auth/session`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Session validation failed" }, { status: response.status });
    }

    const { data } = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Session API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
