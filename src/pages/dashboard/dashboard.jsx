import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import styles from './styles.module.css';
import Transaction from '../../components/transaction';


export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [period, setPeriod] = useState('Month');
  const BASE_BALANCE = 5000;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('expenses') || '[]');
    setExpenses(saved);
  }, []);

  const getMonthlySpending = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const totals = Array(12).fill(0);

    expenses.forEach(exp => {
      const date = new Date(exp.date);
      const monthIndex = date.getMonth();
      totals[monthIndex] += parseFloat(exp.amount || 0);
    });

    return months.map((month, i) => ({
      name: month,
      amount: totals[i],
    }));
  };

  const chartData = getMonthlySpending();

  const topSpending = [...expenses]
    .filter(e => e.type === 'transaction' || e.type === 'bill')
    .sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount))
    .slice(0, 3);

  return (
    <div className={styles.container}>
      <header>
        <h2 className={styles.pageTitle}>Statistics</h2>
      </header>

      {/* Toggle Period Buttons */}
      <div className={styles.toggleGroup}>
        {['Day', 'Week', 'Month', 'Year'].map(p => (
          <button
            key={p}
            className={`${styles.toggleBtn} ${period === p ? styles.active : ''}`}
            onClick={() => setPeriod(p)}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Line Chart */}
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <Tooltip formatter={(value) => `$${parseFloat(value).toFixed(2)}`} />
            <Line type="monotone" dataKey="amount" stroke="#14b8a6" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Spending List */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Transactions</h3>
        <ul className={styles.transactionList}>
          {topSpending.map((txn, idx) => (
            <Transaction key={idx} data={txn} />
          ))}
        </ul>
      </div>
    </div>
  );
}
