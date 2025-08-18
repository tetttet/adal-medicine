import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { messages, system } = body;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=AIzaSyCMLPgILjs-Md1rZY4pfMsZbtK7enLBGdc`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user", // Gemini не имеет явной роли system, но можно дать первую инструкцию как "user"
            parts: [{ text: system }],
          },
          ...messages.map((msg: { role: string; content: string }) => ({
            role: msg.role,
            parts: [{ text: msg.content }],
          })),
        ],
      }),
    }
  );

  const data = await response.json();
  const botText =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

  return NextResponse.json({ response: botText });
}
