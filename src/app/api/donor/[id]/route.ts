// app/api/donor/[id]/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const supabase = await supabaseServer();

    const { data: profile, error: pErr } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();

    if (pErr) return NextResponse.json({ error: pErr.message }, { status: 404 });

    const { data: donations, error: dErr } = await supabase
      .from("donations")
      .select("*")
      .eq("donor_id", id)
      .order("created_at", { ascending: false });

    if (dErr) return NextResponse.json({ error: dErr.message }, { status: 400 });

    return NextResponse.json({ profile, donations }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || "Something went wrong" }, { status: 500 });
  }
}
