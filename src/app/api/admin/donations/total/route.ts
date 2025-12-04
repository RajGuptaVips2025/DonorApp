// api/admin/donations/total/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const total = await prisma.donation.aggregate({
      _sum: { amount: true },
    });

    return NextResponse.json({ total: total._sum.amount || 0 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
