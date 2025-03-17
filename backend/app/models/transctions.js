import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true, min: 1 },
    date: { type: Date, required: true, default: Date.now },
    description: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ["Food", "Transport", "Entertainment", "Shopping", "Others"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);
