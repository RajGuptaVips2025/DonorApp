// api/donation/create/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { donorId, ...rest } = data;

    const donation = await prisma.donation.create({
      data: {
        ...rest,
        donor: {
          connect: { id: Number(donorId) },
        },
      },
    });

    return NextResponse.json(donation, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
