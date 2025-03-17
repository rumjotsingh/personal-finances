import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select";

// Define Zod Schema for validation
const transactionSchema = z.object({
  amount: z.coerce.number().positive("Amount must be a positive number"),
  date: z.string().min(1, "Date is required"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  category: z.enum(["Food", "Transport", "Entertainment", "Shopping", "Others"], {
    errorMap: () => ({ message: "Invalid category selected" }),
  }),
});

export default function TransactionForm() {
  const {
    register,
    handleSubmit,
    setValue,
    
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(transactionSchema),
  });

  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://personal-finances-two.vercel.app/api/transctions", data);
      console.log("Transaction added:", response.data);
      setMessage({ type: "success", text: "Transaction added successfully!" });
      reset(); // Clear form after success
    } catch (error) {
      setMessage({ type: "error", text: "Failed to add transaction. Try again!" });
      console.log(error);
    }
  };

  return (
    <Card className="max-w-lg mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-semibold text-gray-800">Add Transaction</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Success/Error Message */}
        {message && (
          <p
            className={`text-center py-2 text-sm rounded ${
              message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Amount Input */}
          <div>
            <Input
              type="number"
              placeholder="Enter amount"
              {...register("amount", { valueAsNumber: true })}
              className="w-full"
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
          </div>

          {/* Date Input */}
          <div>
            <Input type="date" {...register("date")} className="w-full" />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
          </div>

          {/* Description Input */}
          <div>
            <Input type="text" placeholder="Enter description" {...register("description")} className="w-full" />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          {/* Category Select (Fixed Issue) */}
          <div>
            <Select onValueChange={(value) => setValue("category", value, { shouldValidate: true })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Transport">Transport</SelectItem>
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Shopping">Shopping</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>

          {/* Submit Button */}
          <Button variant="outline" type="submit" className="w-full">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
