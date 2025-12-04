// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { signToken, createTokenCookie } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, phone, address, city, state, pin } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 });
    }

    const existing = await prisma.donor.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const fullAddress = [address, city, state, pin].filter(Boolean).join(", ");

    const donor = await prisma.donor.create({
      data: {
        name,
        email,
        password: hashed,
        phone,
        address: fullAddress || null,
      },
      select: { id: true, name: true, email: true, phone: true },
    });

    const token = signToken({ id: donor.id });

    const cookie = createTokenCookie(token);

    return NextResponse.json({ user: donor }, { status: 201, headers: { "Set-Cookie": cookie } });
  } catch (err: any) {
    console.error("SIGNUP ERROR", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
