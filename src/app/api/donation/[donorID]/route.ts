// api/donation/[donorID]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  context: { params: Promise<{ donorID: string }> }
) {
  try {
    const { donorID } = await context.params;

    const donations = await prisma.donation.findMany({
      where: { donorId: Number(donorID) },
    });

    return NextResponse.json(donations);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
