// api/admin/donors/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const donors = await prisma.donor.findMany({
      include: { donations: true },
    });

    const result = donors.map((d) => ({
      ...d,
      totalDonated: d.donations.reduce((sum, x) => sum + x.amount, 0),
    }));

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
