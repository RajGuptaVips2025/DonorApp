// app/api/admin/donors/route.ts
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const { data: profiles, error: pErr } = await supabaseAdmin
      .from("profiles")
      .select("*");

    if (pErr) return NextResponse.json({ error: pErr.message }, { status: 500 });

    const { data: donations, error: dErr } = await supabaseAdmin
      .from("donations")
      .select("*");

    if (dErr) return NextResponse.json({ error: dErr.message }, { status: 500 });

    const donationsByDonor: Record<string, any[]> = {};
    donations.forEach((don: any) => {
      if (!donationsByDonor[don.donor_id]) donationsByDonor[don.donor_id] = [];
      donationsByDonor[don.donor_id].push(don);
    });

    const result = profiles.map((p: any) => {
      const list = donationsByDonor[p.id] ?? [];
      const total = list.reduce((acc: number, cur: any) => acc + parseFloat(cur.amount), 0);
      return { ...p, donations: list, total_donated: total };
    });

    return NextResponse.json({ donors: result }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || "Something went wrong" }, { status: 500 });
  }
}
