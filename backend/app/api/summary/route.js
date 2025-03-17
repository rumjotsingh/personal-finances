import dbConnect from "../../utiles/dbconnect";
import Transaction from "../../models/transctions";
import { NextResponse } from "next/server";
export async function GET() {
  await dbConnect();

  try {
    const totalAmount = await Transaction.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalTransactions = await Transaction.countDocuments();

    return NextResponse.json(
      {
        totalAmount: totalAmount.length ? totalAmount[0].total : 0,
        totalTransactions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching summary:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
