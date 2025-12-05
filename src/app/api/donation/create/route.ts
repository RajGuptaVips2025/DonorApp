import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, frequency, on_behalf, message, upi_id } = body;

  
    if (!amount || !frequency || !on_behalf || !message || !upi_id) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    const supabase = await supabaseServer();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "You must be logged in to donate." },
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from("donations")
      .insert({
        donor_id: user.id,
        amount,
        frequency,
        upi_id,
        on_behalf,
        message,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { success: true, donation: data },
      { status: 201 }
    );

  } catch (err: any) {
    console.error("Donation API Error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
