// app/api/admin/donations/total/route.ts
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("donations")
      .select("amount");

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    const total = (data || []).reduce((acc: number, row: any) => acc + parseFloat(row.amount), 0);

    return NextResponse.json({ total }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || "Something went wrong" }, { status: 500 });
  }
}
