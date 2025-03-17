import dbConnect from "../../utiles/dbconnect";
import Transaction from "../../models/transctions";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const recentTransactions = await Transaction.find()
      .sort({ date: -1 }) // Sort by latest date
      .limit(5); // Get last 5 transactions

    return NextResponse.json(recentTransactions, { status: 200 });
  } catch (error) {
    console.error("Error fetching recent transactions:", error);
    return NextResponse.json(
      { error: "Failed to fetch recent transactions" },
      { status: 500 }
    );
  }
}
