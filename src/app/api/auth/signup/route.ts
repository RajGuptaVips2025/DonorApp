// api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password, name, phone, address, state, city, pin } = body;

  const supabase = await supabaseServer();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name, phone }
    }
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  if (data.user?.id) {
    await supabase.from("profiles").insert({
      id: data.user.id,
      full_name: name,
      phone,
      address,
      state,
      city,
      pin
    });
  }

  return NextResponse.json({ user: data.user }, { status: 200 });
}
