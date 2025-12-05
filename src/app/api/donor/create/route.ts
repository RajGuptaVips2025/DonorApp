// app/api/donor/create/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      id, 
      full_name,
      phone,
      address,
      state,
      city,
      pin,
    } = body;

    const supabase = await supabaseServer();
    const { data: { session } } = await supabase.auth.getSession();

    const insertId = id ?? session?.user?.id;
    if (!insertId) {
      return NextResponse.json({ error: "No user id available. Authenticate or provide id." }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("profiles")
      .upsert(
        {
          id: insertId,
          full_name,
          phone,
          address,
          state,
          city,
          pin,
        },
        { onConflict: "id" }
      )
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    return NextResponse.json({ profile: data }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || "Something went wrong" }, { status: 500 });
  }
}
