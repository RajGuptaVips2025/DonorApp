// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { signToken, createTokenCookie } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    const user = await prisma.donor.findUnique({ where: { email } });
    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = signToken({ id: user.id });
    const cookie = createTokenCookie(token);

    const safeUser = { id: user.id, name: user.name, email: user.email, phone: user.phone };

    return NextResponse.json({ user: safeUser }, { status: 200, headers: { "Set-Cookie": cookie } });
  } catch (err) {
    console.error("LOGIN ERROR", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
