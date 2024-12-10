import { NextResponse } from "next/server";
import supabaseIntializer from "../supabaseClient/client";

export async function GET() {
  try {
    const supabase = supabaseIntializer();

    const { data: events_final, error } = await supabase
      .from("events_final")
      .select("*");

    if (error) throw error;

    return NextResponse.json({
      success: true,
      events: events_final,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
