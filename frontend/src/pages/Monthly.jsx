import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";

const MonthlyExpensesChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("https://personal-finances-two.vercel.app/api/monthly");
        console.log("API Response:", response.data); // Debugging log
        setData(response.data); // Directly use API data
      } catch (error) {
        console.error("Error fetching monthly expenses", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <Card className="p-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-center text-lg">Monthly Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : data.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4F46E5" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </CardContent>
    </Card>
  );
};

export default MonthlyExpensesChart;
