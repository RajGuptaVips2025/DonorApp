// api/donor/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const donor = await prisma.donor.findUnique({
      where: { id: Number(id) },
      include: { donations: true },
    });

    if (!donor)
      return NextResponse.json({ message: "Donor not found" }, { status: 404 });

    return NextResponse.json(donor);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}