import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import MonthlyExpensesChart from "./Monthly";
import SummaryCard from "./Summary";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch Transactions from API
  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/transctions");
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Delete Transaction & Fetch Latest Data
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/transctions?id=${id}`);
      fetchTransactions(); // ✅ Fetch latest transactions after delete
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  // Navigate to Edit Page
  const handleEdit = (id) => navigate(`/edit/${id}`);

  const categoryColors = {
    Food: "#FF4F4F",
    Transport: "#4F9BFF",
    Entertainment: "#FFB74F",
    Shopping: "#4FFF76",
    Others: "#AF4FFF",
  };

  // Prepare Data for Charts
  const expensesByCategory = transactions.reduce((acc, transaction) => {
    const category = transaction.category;
    const amount = parseFloat(transaction.amount);
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const chartData = Object.keys(expensesByCategory).map((category) => ({
    category,
    amount: expensesByCategory[category],
  }));

  return (
    <div className="max-w-5xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Transactions
      </h1>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-gray-100 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-xs md:text-sm">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Amount</th>
              <th colSpan={3} className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : transactions.length > 0 ? (
              transactions.map((transaction) => (
                <tr
                  key={transaction._id}
                  className="border-b border-gray-300 hover:bg-gray-200 transition-all"
                >
                  <td className="p-3 text-xs md:text-sm">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-xs md:text-sm">{transaction.category}</td>
                  <td className="p-3 text-xs md:text-sm">{transaction.description}</td>
                  <td className="p-3 font-semibold text-red-500 text-xs md:text-sm">
                    ₹{transaction.amount.toLocaleString()}
                  </td>
                  <td className="p-3">
                    <Button onClick={() => navigate("/dashboard")} variant="outline">
                      Add
                    </Button>
                  </td>
                  <td className="p-3">
                    <Button onClick={() => handleDelete(transaction._id)} variant="outline">
                      Delete
                    </Button>
                  </td>
                  <td className="p-3">
                    <Button onClick={() => handleEdit(transaction._id)} variant="outline">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No transactions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Expense Charts Section */}
      <h2 className="text-xl font-semibold text-gray-800 mt-6 text-center">
        Expenses Overview
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-4">
        {/* Bar Chart */}
        <div className="w-full lg:w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold text-gray-700 mb-2">Expenses by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4F9BFF">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={categoryColors[entry.category] || "#8884d8"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="w-full lg:w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold text-gray-700 mb-2">Category Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={categoryColors[entry.category] || "#8884d8"} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Expenses Chart & Summary */}
      <MonthlyExpensesChart />
      <SummaryCard />
    </div>
  );
}
