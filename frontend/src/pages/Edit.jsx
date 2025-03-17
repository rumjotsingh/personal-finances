import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// Validation Schema
const transactionSchema = z.object({
  id: z.string().min(1, "Transaction ID is required"),
  amount: z.coerce.number().positive("Amount must be a positive number"),
  date: z.string().min(1, "Date is required"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  category: z.enum(["Food", "Transport", "Entertainment", "Shopping", "Others"], {
    errorMap: () => ({ message: "Invalid category selected" }),
  }),
});

export default function Edit() {
  const { id } = useParams(); // Get transaction ID from URL
  const navigate = useNavigate(); // Redirect after update

  const {
    register,
    handleSubmit,
 
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(transactionSchema),
  });

  const [message, setMessage] = useState(null);

  // Fetch transaction details
  useEffect(() => {
    if (!id) return;

    const fetchTransaction = async () => {
      try {
        const response = await axios.get(`https://personal-finances-two.vercel.app/api/transctions?id=${id}`);
        const transaction = response.data;

        // Prefill form fields
        setValue("id", transaction._id);
        setValue("amount", transaction.amount);
        setValue("date", transaction.date.split("T")[0]);
        setValue("description", transaction.description);
        setValue("category", transaction.category);
      } catch (error) {
        console.error("Error fetching transaction:", error);
        setMessage({ type: "error", text: "Failed to fetch transaction details." });
      }
    };

    fetchTransaction();
  }, [id, setValue]);

  // Submit updated transaction
  const onSubmit = async (data) => {
    try {
      await axios.put("https://personal-finances-two.vercel.app/api/transctions", data);
      setMessage({ type: "success", text: "Transaction updated successfully!" });
      setTimeout(() => navigate("/transactions"), 2000); // Redirect after success
    } catch (error) {
      setMessage({ type: "error", text: "Failed to update transaction. Try again!" });
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Edit Transaction
      </h2>

      {/* Success/Error Message */}
      {message && (
        <p className={`text-center py-2 text-sm rounded ${
          message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}>
          {message.text}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Hidden ID Field */}
        <input type="hidden" {...register("id")} />

        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-medium">Amount</label>
          <input
            type="number"
            {...register("amount")}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400"
            placeholder="Enter amount"
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium">Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <input
            type="text"
            {...register("description")}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400"
            placeholder="Enter description"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium">Category</label>
          <select
            {...register("category")}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          {isSubmitting ? "Updating..." : "Update Transaction"}
        </button>
      </form>
    </div>
  );
}
