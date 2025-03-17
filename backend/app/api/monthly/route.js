import { NextResponse } from "next/server";
import dbConnect from "../../utiles/dbconnect";
import Transaction from "../../models/transctions"; // Make sure model name is correct

export async function GET() {
  try {
    await dbConnect(); // Connect to the database

    const monthlyExpenses = await Transaction.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$date" } }, // Group by Year-Month
          totalAmount: { $sum: "$amount" },
        },
      },
      { $sort: { _id: 1 } }, // Sort by month
    ]);

    // Convert _id to "Jan", "Feb", etc.
    const formattedData = monthlyExpenses.map((entry) => ({
      month: new Date(entry._id + "-01").toLocaleString("default", {
        month: "short",
        year: "numeric",
      }),
      amount: entry.totalAmount,
    }));

    return NextResponse.json(formattedData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching monthly expenses", error: error.message },
      { status: 500 }
    );
  }
}
