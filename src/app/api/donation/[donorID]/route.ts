import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(req: Request, context: any) {
  try {
    const { donorID } = await context.params; // ← FIXED

    if (!donorID) {
      return NextResponse.json({ error: "Missing donorID" }, { status: 400 });
    }

    const supabase = await supabaseServer();

    const { data, error } = await supabase
      .from("donations")
      .select("*")
      .eq("donor_id", donorID)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ donations: data }, { status: 200 });

  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}





// import { NextResponse } from "next/server";
// import { supabaseServer } from "@/lib/supabase/server";

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ donorID: string }> }
// ) {
//   try {
//     const { donorID } = await context.params;

//     if (!donorID) {
//       return NextResponse.json({ error: "Missing donorID" }, { status: 400 });
//     }

//     const supabase = await supabaseServer();

//     const { data, error } = await supabase
//       .from("donations")
//       .select("*")
//       .eq("donor_id", donorID)
//       .order("created_at", { ascending: false });

//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 400 });
//     }

//     return NextResponse.json({ donations: data }, { status: 200 });

//   } catch (err: any) {
//     console.error(err);
//     return NextResponse.json(
//       { error: err.message || "Server error" },
//       { status: 500 }
//     );
//   }
// }

