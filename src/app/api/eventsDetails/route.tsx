import { NextRequest, NextResponse } from "next/server";
import supabaseIntializer from "../supabaseClient/client";

export async function GET(request: NextRequest) {
  try {
    const supabase = supabaseIntializer();
    const { id } = await request.json();

    const { data: events_description, error } = await supabase
      .from("events_description")
      .select(id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      event: events_description,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
