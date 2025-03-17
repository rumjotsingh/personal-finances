import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";

export default function SummaryCard() {
  const [summary, setSummary] = useState({ totalAmount: 0, totalTransactions: 0 });
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total expenses summary
        const summaryRes = await axios.get("http://localhost:3000/api/summary");
        setSummary(summaryRes.data);

        // Fetch recent transactions
        const recentRes = await axios.get("http://localhost:3000/api/recent");
        setRecentTransactions(recentRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total Expenses Card */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-gray-500 text-center">Loading...</p>
          ) : (
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500">₹{summary.totalAmount}</p>
              <p className="text-sm text-gray-600">{summary.totalTransactions} transactions</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Transactions Card */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-gray-500 text-center">Loading...</p>
          ) : recentTransactions.length > 0 ? (
            <ul className="space-y-2">
              {recentTransactions.map((txn) => (
                <li
                  key={txn._id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span className="text-sm text-gray-600">{txn.description}</span>
                  <span className="text-sm font-semibold text-red-500">- ₹{txn.amount}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No recent transactions</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
