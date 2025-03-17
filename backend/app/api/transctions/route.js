import dbConnect from "../../utiles/dbconnect";
import Transaction from "../../models/transctions";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const { amount, date, description, category } = await req.json();

    if (!amount || !description || !category) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    if (isNaN(new Date(date).getTime())) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    const newTransaction = await Transaction.create({
      amount,
      date: new Date(date),
      description,
      category,
    });
    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create transaction" },
      { status: 500 }
    );
  }
}

// ✅ Handle DELETE: Delete a transaction by ID
export async function DELETE(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id)
      return NextResponse.json(
        { error: "Transaction ID is required" },
        { status: 400 }
      );

    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    if (!deletedTransaction)
      return NextResponse.json(
        { error: "Transaction not found" },
        { status: 404 }
      );

    return NextResponse.json(
      { message: "Transaction deleted", id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete transaction" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch a single transaction by ID
      const transaction = await Transaction.findById(id);
      if (!transaction) {
        return NextResponse.json(
          { error: "Transaction not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(transaction, { status: 200 });
    } else {
      // Fetch all transactions if no ID is provided
      const transactions = await Transaction.find({});
      return NextResponse.json(transactions, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch transactions" },
      { status: 500 }
    );
  }
}
export async function PUT(req) {
  try {
    await dbConnect();
    const { id, amount, date, description, category } = await req.json();

    if (!id || !amount || !description || !category) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    if (isNaN(new Date(date).getTime())) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { amount, date: new Date(date), description, category },
      { new: true }
    );

    if (!updatedTransaction) {
      return NextResponse.json(
        { error: "Transaction not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedTransaction, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update transaction" },
      { status: 500 }
    );
  }
}
