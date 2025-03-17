import { NextResponse } from "next/server";

import dbConnect from "../../utiles/dbconnect";

export async function GET() {
  await dbConnect();
  return NextResponse.json({ message: "✅ Database connection successful!" });
}
