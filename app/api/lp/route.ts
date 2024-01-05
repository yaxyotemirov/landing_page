import { NextResponse } from "next/server";

const API_URL = "https://api.telegram.org/bot6795213963:AAEy8Rt4jiaLfZJZ6I6Kwg-lzKG1p-Ll11I";

const CHAT_ID = 772597254;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const message = searchParams.get("message");

  const res = await fetch(
    `${API_URL}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${message}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
